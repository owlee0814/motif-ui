import React, { useRef, useState, useEffect } from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { ActionIcon, AspectRatio, Center, Group, Image, Overlay, Title, Text } from '@mantine/core';
import { IconPhoto, IconTrash, IconUpload, IconX } from '@tabler/icons-react';
import classes from "./PostImageDropzone.module.css";
import { Carousel } from "@mantine/carousel";

type FileWithPreview = {
    file: File;
    preview: string;
};

interface PostImageDropZoneProps {
    onFileSelected: (file: File | null) => void;
}

export default function PostImageDropZone({ onFileSelected }: PostImageDropZoneProps) {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [dropzoneHeight, setDropzoneHeight] = useState(200);
    const [error, setError] = useState<string | null>(null);
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const handleDrop = (acceptedFiles: File[]) => {
        if (files.length + acceptedFiles.length > 5) {
            console.log('asdf')
            setError('You can only upload up to 5 images.');
            return;
        }

        const newFiles = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setDropzoneHeight(500);
        files.length === 0 ? setFiles(newFiles) : setFiles(files => [...files, ...newFiles]);
        onFileSelected(acceptedFiles[0]); // Pass the first selected file to the parent
        setError(null);
    };

    const handleRemove = (index: number) => {
        setError(null);
        setFiles(files.filter((_, i) => i !== index));
        files.length === 1 ? setDropzoneHeight(200) : setDropzoneHeight(500);
        onFileSelected(null);
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
                    accept={IMAGE_MIME_TYPE}
                    className={classes.dropzone}
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
                            <IconUpload size={30} stroke={1.5} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={30} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size={30} stroke={1.5} />
                        </Dropzone.Idle>
                        <Title size="1.25rem">Drag images here or click to select files (up to 5) </Title>
                    </Group>
                </Dropzone>
            </div>
            {error && <Text c="red" mt={'xs'}>{error}</Text>}
        </>
    );
}