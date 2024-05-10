import {Center, Container, Grid, Title} from "@mantine/core";
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

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: session, status} = useSession()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const ootds = [];

    for (let i = 0; i < 6; i++) {
        ootds.push(
            <Carousel.Slide>
                <OotdCard/>
            </Carousel.Slide>
        );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (status === "unauthenticated") {
            try {
                router.push('auth/signin')
            } catch (error) {
                console.log(error)
            }
        }
    }, []);

    return (
        // (status === "unauthenticated") ? (
        //     <Container>
        //         <Center h={600}>
        //             <Title> PLEASE LOGIN TO ACCESS </Title>
        //         </Center>
        //     </Container>
        // ) : (
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2} style={{position: 'fixed'}}>
                        <ProfileNavBar/>
                    </Grid.Col>
                    <Grid.Col span={2.2}/>
                    <Grid.Col span={9.8}>
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
        // )
    );
}