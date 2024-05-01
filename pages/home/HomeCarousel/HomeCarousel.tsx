import React from "react";
import {Grid, GridCol, Image, Title, Text} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
import Link from "next/link";

interface HomeCarouselProps {
    url: String
    title: String
}

export function HomeCarousel({url, title}: HomeCarouselProps) {
    return (
        <Carousel.Slide>
            <div style={{'position': 'relative'}}>
                <Link href={'/home'}>
                <Image
                    src={url}
                    h={450}
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
                    {title}
                </Title>
                </Link>
            </div>
        </Carousel.Slide>
    );
}