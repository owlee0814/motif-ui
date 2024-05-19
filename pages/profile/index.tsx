import {Button, Center, Container, Grid, Group, Title} from "@mantine/core";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {Carousel} from "@mantine/carousel";
import OotdCard from "../community/outfits/OotdCard";
import {samplePosts} from "../../entities/Post";
import {PostCard} from "../../component/PostCard/PostCard";
import {ProductListing3} from "../../component/ProductListing3";
import {Sen} from "next/font/google";
import {ProfileNavBar} from "../../component/ProfileNavBar/ProfileNavBar";

const sen = Sen({weight: "700", subsets: ['latin']})

export default function Profile() {
    const { status} = useSession()
    const router = useRouter()

    const ootds = [];

    // useEffect(() => {
    //     if (status !== "authenticated") {
    //         try {
    //             router.push('api/auth/signin')
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }, []);

    for (let i = 0; i < 6; i++) {
        ootds.push(
            <Carousel.Slide>
                <OotdCard/>
            </Carousel.Slide>
        );
    }

    return (
        (status !== "authenticated") ? (
            <Container>
                <Center h={600}>
                    <Title> PLEASE LOGIN TO ACCESS </Title>
                </Center>
            </Container>
        ) : (
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2} style={{position: 'fixed'}}>
                        <ProfileNavBar/>
                    </Grid.Col>
                    <Grid.Col span={2.1}/>
                    <Grid.Col span={9.9}>
                        <Group justify={'space-between'}>
                            <Title
                                size={'1.5rem'}
                                fw={800}
                                style={{
                                    'padding-bottom': '1rem',
                                    'padding-top': '1rem'
                                }}
                            >
                                My Posts
                            </Title>
                            <Button mt={'0.2rem'} variant="filled" size="sm" radius="xl" bg={'black'}>Create a Post</Button>
                        </Group>
                        <Grid mt={'md'}>
                            {samplePosts.slice(0, 4).map((post, i) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </Grid>
                        <Title
                            size={'1.5rem'}
                            fw={800}
                            mt={'lg'}
                            mb={'xl'}
                        >
                            Recent Orders
                        </Title>
                        <Grid>
                            <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                            </Carousel>
                        </Grid>
                        <Title
                            size={'1.5rem'}
                            fw={800}
                            mt={'xl'}
                            mb={'xl'}
                        >
                            Favorites
                        </Title>
                        <Grid mt={'md'}>
                            <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <ProductListing3/>
                                </Carousel.Slide>
                            </Carousel>
                        </Grid>
                        <Title
                            size={'1.5rem'}
                            fw={800}
                            mt={'xl'}
                            mb={'xl'}
                        >
                            Latest OOTDs
                        </Title>
                        <Grid mt={'md'}>
                            <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop>
                                {ootds}
                            </Carousel>
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        )
    );
}