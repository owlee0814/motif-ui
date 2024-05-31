import {AspectRatio, Center, Image, Overlay} from "@mantine/core";
import React from "react";
import {Carousel} from "@mantine/carousel";

interface ImageOverlayInterface {
    imgUrl: string
}

export default function ImageOverlay(props: ImageOverlayInterface) {
    return (
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
    )
}