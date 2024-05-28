import React, { useRef, useState } from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { ActionIcon, AspectRatio, Center, Group, Image, Overlay, Title } from '@mantine/core';
import { IconPhoto, IconTrash, IconUpload, IconX } from '@tabler/icons-react';
import styles from './PostImageDropZone.module.css';

type FileWithPreview = {
    file: File;
    preview: string;
};

export default function PostImageDropZone() {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [dropzoneHeight, setDropzoneHeight] = useState(200);
    const [dropzoneWidth, setDropzoneWidth] = useState('100%');
    const imageRef = useRef<HTMLImageElement>(null);
    const dropzoneRef = useRef<HTMLDivElement>(null);
    const [isDropzoneActive, setIsDropzoneActive] = useState(true);

    const handleDrop = (acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setFiles(newFiles);
        setIsDropzoneActive(false);
    };

    const handleImageLoad = () => {
        if (imageRef.current) {
            const { naturalHeight, naturalWidth } = imageRef.current;
            const aspectRatio = naturalWidth / naturalHeight;
            const maxDropzoneHeight = 500;

            let newHeight = naturalHeight;
            let newWidth = naturalWidth;

            if (naturalHeight > maxDropzoneHeight) {
                newHeight = maxDropzoneHeight;
                newWidth = maxDropzoneHeight * aspectRatio;
            }

            setDropzoneHeight(newHeight);
            setDropzoneWidth(`${newWidth}px`);
        }
    };

    const handleRemove = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
        setIsDropzoneActive(true);
        setDropzoneHeight(200);
    };

    const previews = files.map((file, index) => (
        <Center key={index}>
            <AspectRatio w={'100%'} h={'100%'}>
                <Image
                    ref={index === 0 ? imageRef : null}
                    src={file.preview}
                    alt={`preview ${index}`}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                        handleImageLoad();
                    }}
                    width={dropzoneWidth}
                    height={dropzoneHeight}
                />
            </AspectRatio>
            <Overlay color="#000" backgroundOpacity={0.6} blur={15} className={styles.overlay}>
                <Center className={styles.overlayContent}>
                    <Image
                        src={file.preview}
                        alt={`preview ${index}`}
                        style={{ width: dropzoneWidth, height: dropzoneHeight, maxHeight: '500px' }}
                    />
                    <ActionIcon
                        variant="filled"
                        color="black"
                        radius="xl"
                        size="lg"
                        onClick={() => handleRemove(index)}
                        className={styles.actionIcon}
                    >
                        <IconTrash size="60%" stroke={1.5} />
                    </ActionIcon>
                </Center>
            </Overlay>
        </Center>
    ));

    return (
        <div style={{ width: '100%', height: dropzoneHeight }}>
            <Dropzone
                ref={dropzoneRef}
                onDrop={handleDrop}
                onReject={(files) => console.log('rejected files', files)}
                accept={IMAGE_MIME_TYPE}
                disabled={!isDropzoneActive}
                className={styles.dropzone}
            >
                {previews.length > 0 && (
                    <div className={styles.previewsContainer}>
                        {previews}
                    </div>
                )}
                <Group className={styles.group}>
                    <Dropzone.Accept>
                        <IconUpload size={30} stroke={1.5} />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX size={30} stroke={1.5} />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconPhoto size={30} stroke={1.5} />
                    </Dropzone.Idle>
                    <Title size="1.25rem">Drag images here or click to select files</Title>
                </Group>
            </Dropzone>
        </div>
    );
}
