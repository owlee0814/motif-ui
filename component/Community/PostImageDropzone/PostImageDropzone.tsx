import React, { useRef, useState } from 'react';
import { Dropzone } from '@mantine/dropzone';
import { ActionIcon, AspectRatio, Center, Group, Image, Overlay, Text } from '@mantine/core';
import { IconPhoto, IconTrash, IconUpload, IconX } from '@tabler/icons-react';
import classes from "./PostImageDropzone.module.css";
import { Carousel } from "@mantine/carousel";

type FileWithPreview = {
    file: File;
    preview: string;
};

interface PostImageDropZoneProps {
    onFilesSelected: (files: File[]) => void;
}

export default function PostImageDropZone({ onFilesSelected }: PostImageDropZoneProps) {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [dropzoneHeight, setDropzoneHeight] = useState(200);
    const [error, setError] = useState<string | null>(null);
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const handleDrop = (acceptedFiles: File[]) => {
        if (files.length + acceptedFiles.length > 5) {
            setError('You can only upload up to 5 images.');
            return;
        }

        const newFiles = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setDropzoneHeight(500);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
        onFilesSelected([...files.map(f => f.file), ...acceptedFiles]); // Pass all selected files to the parent
        setError(null);
    };

    const handleRemove = (index: number) => {
        setError(null);
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        setDropzoneHeight(newFiles.length === 0 ? 200 : 500);
        onFilesSelected(newFiles.map(f => f.file));
    };

    const previews = files.map((file, index) => (
        <Carousel.Slide key={index}>
            <Center>
                <AspectRatio w={'100%'} h={'100%'}>
                    <Image
                        src={file.preview}
                        alt={`preview ${index}`}
                        width={dropzoneHeight}
                        height={dropzoneHeight}
                    />
                </AspectRatio>
                <Overlay color="#000" backgroundOpacity={0.6} blur={15} className={classes.overlay}>
                    <Center className={classes.overlayContent}>
                        <Image
                            src={file.preview}
                            alt={`preview ${index}`}
                            style={{ width: '100%', height: '500px', maxHeight: '500px' }}
                        />
                        <ActionIcon
                            variant="filled"
                            color="black"
                            radius="xl"
                            size="lg"
                            onClick={(event) => {
                                event.stopPropagation();
                                handleRemove(index);
                            }}
                            className={classes.actionIcon}
                        >
                            <IconTrash size="60%" stroke={1.5} />
                        </ActionIcon>
                    </Center>
                </Overlay>
            </Center>
        </Carousel.Slide>
    ));

    return (
        <>
            <div style={{ width: '100%', height: dropzoneHeight }}>
                <Dropzone
                    ref={dropzoneRef}
                    onDrop={handleDrop}
                    onReject={(files) => console.log('rejected files', files)}
                    accept={[
                        'image/png',
                        'image/jpeg',
                        'image/webp'
                    ]}
                    className={classes.dropzone}
                    maxFiles={5}
                    maxSize={5 * 1024 ** 2}
                >
                    <div className={classes.previewsContainer}>
                        <Carousel
                            draggable={false}
                            withControls={files.length > 1}
                            withIndicators={files.length > 1}
                            height={'500px'}
                            onClick={(event) => {
                                // @ts-ignore
                                if(event.target.localName !== 'div')
                                    event.stopPropagation()
                            }}
                        >
                            {previews}
                        </Carousel>
                    </div>
                    <Group className={classes.group}>
                        <Dropzone.Accept>
                            <IconUpload size={40} stroke={1.5} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={40} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size={40} stroke={1.5} />
                        </Dropzone.Idle>
                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={'sm'}>
                                You can upload up to 5 images, each file should not exceed 5mb
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={5}>
                                Accepted image formats: .png .jpeg .webp
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
            </div>
            {error && <Text c="red" mt={'xs'}>{error}</Text>}
        </>
    );
}