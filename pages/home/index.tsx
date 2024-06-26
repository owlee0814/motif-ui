import React, {useEffect, useRef, useState} from "react";
import {Container, Grid, Image, Space, Title} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
import {HomeCarousel} from "../../component/HomeCarousel/HomeCarousel";
import {PostCard2} from "../../component/Community/PostCard2/PostCard2";
import {ProductListing2} from "../../component/Shop/ProductListing2";
import {sampleProducts} from "../../entities/Product";
import Autoplay from "embla-carousel-autoplay";
import {PostWithRelations} from "../../entities/Types";

export default function Home() {
    const topProducts = [];
    const autoplay = useRef(Autoplay({ stopOnMouseEnter: true, delay: 6000 }));
    const [posts, setPosts] = useState<PostWithRelations[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGet = async () => {
            try {
                const response = await fetch('/api/posts', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const res = await response.json();
                setPosts(res);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchGet();
    }, []);


    for (let i = 1; i <= 5; i++) {
        topProducts.push(
            <ProductListing2 product={sampleProducts[i - 1]} rank={i}/>
        );
    }

    return (
        <Container size={'95%'}>
            <Grid>
                <Grid.Col span={8.5}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Space h={'lg'}/>
                        </Grid.Col>
                    </Grid>

                    <Space h='xl'/>

                    <Carousel
                        withIndicators
                        loop
                        // plugins={[autoplay.current]}
                    >
                        <HomeCarousel imgUrl={'https://images-ext-1.discordapp.net/external/BXmVkke4F2N2siX-OtlIUGYwyJxdr2u6ep4R7ituDKU/%3Fq%3D80%26w%3D3387%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D/https/images.unsplash.com/photo-1559697242-a465f2578a95?format=webp&width=934&height=1402'} title={'SS24 Release'} href={'/products'}/>
                        <HomeCarousel imgUrl={'https://images.unsplash.com/photo-1555729810-e2313c01ef5a?q=80&w=2627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'BRIGADE'} href={'/home'}/>
                        <HomeCarousel imgUrl={'https://images.unsplash.com/photo-1583407733101-223204b57928?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={'WHO WE ARE'} href={'/about'}/>
                    </Carousel>

                    <Space h='lg'/>
                    <Title>
                        FEATURED MOTIFS
                    </Title>
                    <Space h={'0.3%'}/>
                    <Space h='lg'/>
                    <Carousel draggable={false} height={700} align="start" slideGap="md" slideSize="33.33%" loop >
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/DSCF0133.jpg.webp'}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/DSCF0140.jpg.webp'}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/Screenshot_2024-04-30_at_11.17.26_AM.png.webp'}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={'https://motif-mvp-bucket.s3.amazonaws.com/ootds/Screenshot_2024-04-30_at_11.18.26_AM.png.webp'}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={''}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                src={''}
                                h={700}
                                radius={'0'}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Carousel.Slide>
                    </Carousel>
                </Grid.Col>

                <Grid.Col span={3.5}>
                    <Title size={'1.5rem'}>TRENDING</Title>
                    <Space h={'0.7%'}/>
                    {posts.map((post) => (
                        <PostCard2 post={post} key={post.id}/>
                    ))}
                    {/*<Space h={'lg'}/>*/}
                    {/*<Title size={'1.5rem'}>TOP SELLING</Title>*/}
                    {/*<Space h={'0.5%'}/>*/}
                    {/*{topProducts}*/}
                </Grid.Col>
            </Grid>
        </Container>
    )
}