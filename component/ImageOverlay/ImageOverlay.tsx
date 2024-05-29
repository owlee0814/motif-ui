import classes from "./ImageOverlay.module.css";
import {ActionIcon, AspectRatio, Center, Group, Image, Overlay} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";
import React from "react";
import {Carousel} from "@mantine/carousel";

interface ImageOverlayInterface {
    imgUrl: string
}

export default function ImageOverlay(props: ImageOverlayInterface) {
    return (
        <Carousel>
            <Carousel.Slide>
                <AspectRatio maw={'100%'} pos="relative">
                    <Image
                        h={'600'}
                        w={'100%'}
                        src={props.imgUrl}
                    />
                    <Overlay color="#000" h={'600'} backgroundOpacity={0.75} blur={15} >
                        <AspectRatio>
                            <Center h={600}>
                                <Image
                                    h={'100%'}
                                    w="auto"
                                    fit="contain"
                                    src={props.imgUrl}
                                />
                            </Center>
                        </AspectRatio>
                    </Overlay>
                </AspectRatio>
            </Carousel.Slide>
            <Carousel.Slide>
                <AspectRatio maw={'100%'} pos="relative">
                    <Image
                        h={'600'}
                        w={'100%'}
                        src={props.imgUrl}
                    />
                    <Overlay color="#000" h={'600'} backgroundOpacity={0.75} blur={15} >
                        <AspectRatio>
                            <Center h={600}>
                                <Image
                                    h={'100%'}
                                    w="auto"
                                    fit="contain"
                                    src={props.imgUrl}
                                />
                            </Center>
                        </AspectRatio>
                    </Overlay>
                </AspectRatio>
            </Carousel.Slide>
        </Carousel>


    )
}