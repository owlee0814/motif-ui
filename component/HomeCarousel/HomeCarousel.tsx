import React from "react";
import {Grid, GridCol, Image, Title, Text} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
import Link from "next/link";

interface HomeCarouselProps {
    imgUrl: string
    href: string
    title: string
}

export function HomeCarousel(props: HomeCarouselProps) {
    return (
        <Carousel.Slide>
            <div style={{'position': 'relative'}}>
                <Link href={props.href}>
                <Image
                    src={props.imgUrl}
                    h={600}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
                <Title
                    c={'white'}
                    size={'4rem'}
                    style={{
                        'position': 'absolute',
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)'
                    }}
                >
                    {props.title}
                </Title>
                </Link>
            </div>
        </Carousel.Slide>
    );
}