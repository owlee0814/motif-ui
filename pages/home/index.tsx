import React from "react";
import {Grid, Group, Image, Space, Title, Text, Container} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {HomeCarousel} from "./HomeCarousel/HomeCarousel";
import {ProductListing} from "../products/ProductListing";
import {Post, PostCard} from "../community/PostCard";
import { PostCard2 } from "../community/PostCard2";
import {CartItemCart} from "../../component/CartItemCard/CartItemCart";
import {ProductListing2} from "../products/ProductListing2";
import Link from "next/link";
import {sampleProducts} from "../../entities/Product";
import {samplePosts} from "../../entities/Post";

export default function Home() {
    const topProducts = [];

    for (let i = 1; i <= 5; i++) {
        topProducts.push(
            <ProductListing2 product={sampleProducts[i - 1]} rank={i}/>
        );
    }

    return (
        <Container size={'95%'}>
            <Grid>
                <Grid.Col span={8}>
                    <Grid>
                        <Grid.Col span={8}>
                            <hr/>
                        </Grid.Col>
                    </Grid>

                    <Space h='xl'/>

                    <Carousel withIndicators loop>
                        <HomeCarousel url={'https://images-ext-1.discordapp.net/external/BXmVkke4F2N2siX-OtlIUGYwyJxdr2u6ep4R7ituDKU/%3Fq%3D80%26w%3D3387%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1559697242-a465f2578a95?format=webp&width=934&height=1402'} title={'SS24 Release'}/>
                        <HomeCarousel url={'https://images.unsplash.com/photo-1555729810-e2313c01ef5a?q=80&w=2627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'BRIGADE'}/>
                        <HomeCarousel url={'https://images.unsplash.com/photo-1583407733101-223204b57928?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'WHO WE ARE'}/>
                    </Carousel>

                    <Space h='xl'/>
                    <Title>
                        FEATURED MOTIFS
                    </Title>
                    <Grid>
                        <Grid.Col span={7}>
                            <hr/>
                        </Grid.Col>
                    </Grid>
                    <Space h='sm'/>
                    <Carousel draggable={false} height={550} align="start" slideGap="md" slideSize="33.33%" loop >
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/DSCF0133.jpg.webp'}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/DSCF0140.jpg.webp'}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/Screenshot_2024-04-30_at_11.17.26_AM.png.webp'}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/Screenshot_2024-04-30_at_11.18.26_AM.png.webp'}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={''}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={''}
                                h={550}
                                radius={"0"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title size={'1.5rem'}>TRENDING</Title>
                    <Space h={'0.5%'}/>
                    {samplePosts.slice(0,5).map((post) => (
                        <PostCard2 post={post}/>
                    ))}
                    <Space h={'lg'}/>
                    <Title size={'1.5rem'}>TOP SELLING</Title>
                    <Space h={'0.5%'}/>
                    {topProducts}
                </Grid.Col>
            </Grid>
        </Container>
    )
}