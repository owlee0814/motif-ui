import React, {useRef, useState} from 'react';
import {Dropzone} from '@mantine/dropzone';
import {
    ActionIcon,
    AspectRatio,
    Button,
    Card,
    Center,
    Group,
    Image,
    Modal,
    Overlay,
    Slider,
    Stack,
    Text
} from '@mantine/core';
import {IconPhoto, IconTrash, IconUpload, IconX} from '@tabler/icons-react';
import classes from "./PostInspoDropzone.module.css";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../../util/cropImage";
import {FileWithPreview, PixelCrop} from "../../../entities/Types";

interface PostImageDropZoneProps {
    onFileSelected: (file: FileWithPreview | null) => void;
}

export default function PostInspoDropzone({ onFileSelected }: PostImageDropZoneProps) {
    const [file, setFile] = useState<FileWithPreview | null>(null);
    const [dropzoneHeight, setDropzoneHeight] = useState(795);
    const [error, setError] = useState<string | null>(null);
    const dropzoneRef = useRef<HTMLDivElement>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<PixelCrop>({x: 0, y: 0, height: 0,width: 0})
    const [croppedImage, setCroppedImage] = useState<FileWithPreview | null>(null)

    const onCropComplete = (croppedArea: PixelCrop, croppedAreaPixels: PixelCrop) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const showCroppedImage = async () => {
        try {
            if(file) {
                const croppedImage = await getCroppedImg(
                    file.preview,
                    croppedAreaPixels
                )

                setCroppedImage(croppedImage)
                onFileSelected(croppedImage)
                setOpenModal(false)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleDrop = (acceptedFiles: File[]) => {
        setOpenModal(true)
        const newFile = {
            file: acceptedFiles[0],
            preview: URL.createObjectURL(acceptedFiles[0]),
        };
        setDropzoneHeight(800);
        setFile(newFile);
        onFileSelected(newFile); // Pass all selected files to the parent
        setError(null);
    };

    const handleRemove = (index: number) => {
        setError(null);
        setFile(null);
        setDropzoneHeight(795);
    };

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
                    maxFiles={1}
                    maxSize={5 * 1024 ** 2}
                    disabled={openModal}
                >
                    <div className={classes.previewsContainer}>
                        {
                            file &&
                        <Modal
                            opened={openModal}
                            onClose={() => {
                                setOpenModal(false)
                                handleRemove(0);
                            }}
                            size={'50%'}
                            title={'Adjust Image'}
                            centered
                        >
                            <Stack>
                                <Card h={'500'}>
                                    <Cropper
                                        image={file.preview}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={7 / 10}
                                        onCropChange={setCrop}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                    />
                                </Card>

                                <Group m="md" justify={'center'}>
                                    <div style={{width: '80%'}}>
                                        <Slider
                                            value={zoom}
                                            min={1}
                                            max={3}
                                            step={0.1}
                                            color={'white'}
                                            onChange={setZoom}
                                            className="zoom-range"
                                        />
                                    </div>
                                    <Button variant="filled" ml='lg' radius="0" bg={'black'}
                                            onClick={showCroppedImage}
                                    >Confirm</Button>
                                </Group>
                            </Stack>
                        </Modal>
                        }
                    </div>
                    {
                        file && !openModal &&
                    <div className={classes.previewsContainer}>
                        <Center>
                            <AspectRatio w={'100%'} h={'100%'}>
                                <Image
                                    src={croppedImage?.preview}
                                    alt={`cropped image`}
                                    width={dropzoneHeight}
                                    height={dropzoneHeight}
                                />
                            </AspectRatio>
                            <Overlay color="#000" backgroundOpacity={0.6} blur={15} className={classes.overlay}>
                                <Center className={classes.overlayContent}>
                                    <Image
                                        src={croppedImage?.preview}
                                        alt={`cropped image`}
                                        style={{ width: '100%', height: '795px', maxHeight: '795px' }}
                                    />
                                    <ActionIcon
                                        variant="filled"
                                        color="black"
                                        radius="xl"
                                        size="lg"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleRemove(0);
                                        }}
                                        className={classes.actionIcon}
                                    >
                                        <IconTrash size="60%" stroke={1.5} />
                                    </ActionIcon>
                                </Center>
                            </Overlay>
                        </Center>
                    </div>
                    }
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
                                Drag an image or click to select a file
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={'sm'}>
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