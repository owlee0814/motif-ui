import {ActionIcon, Avatar, Card, Center, Container, Grid, Group, NavLink, Space, Text, Title} from "@mantine/core";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {Carousel} from "@mantine/carousel";
import OotdCard from "../community/outfits/OotdCard";
import {samplePosts} from "../../entities/Post";
import {PostCard} from "../../component/PostCard/PostCard";
import {ProductListing3} from "../../component/ProductListing3";
import {
    IconAward,
    IconBuildingCommunity,
    IconMessageDots,
    IconShirt,
    IconShoppingBag,
    IconSunglasses
} from "@tabler/icons-react";


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
        (status === "unauthenticated") ? (
            <Container>
                <Center h={600}>
                    <Title> PLEASE LOGIN TO ACCESS </Title>
                </Center>
            </Container>
        ) : (
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2}>
                        <Group mr={'xl'}>
                            <Title
                                size={'1.5rem'}
                                fw={800}
                                style={{
                                    'padding-bottom': '1rem',
                                    'padding-top': '1rem'
                                }}
                            >
                                Overview
                            </Title>
                            <Card w='100%' padding="md" radius={'xl'} withBorder >
                                <div style={{textAlign: 'center'}}>
                                    <Center>
                                        <Avatar
                                            src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'}
                                            alt={'username'}
                                            radius={200}
                                            size={'7rem'}
                                            style={{border: '5px solid'}}
                                        />
                                    </Center>

                                    <Title size={'1.25rem'} mt={'md'} mb={0}>
                                        username123
                                    </Title>
                                    <Title size={'0.7rem'} fw={'100'} c={'gray'} mt={0}>
                                        EST. 2024.05
                                    </Title>
                                    <Space h={'sm'}/>
                                    <hr/>
                                </div>
                                <Space h={'sm'}/>
                                <Grid w={'50%'} ml={'2rem'}>
                                    <Grid.Col span={6}>
                                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>21 </Text>
                                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>28 </Text>
                                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>101</Text>
                                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>1,100</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text mb={'.1rem'} size={'sm'}>Followers</Text>
                                        <Text mb={'.1rem'} size={'sm'}>Following</Text>
                                        <Text mb={'.1rem'} size={'sm'}>Likes</Text>
                                        <Text mb={'.1rem'} size={'sm'}> Miles</Text>
                                    </Grid.Col>
                                </Grid>
                                <Space h={'sm'}/>
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <hr/>
                                    <Group mt={'xs'} ml={'xl'}>
                                        <ActionIcon variant='transparent' radius="0">
                                            <IconAward style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                        </ActionIcon>
                                        <Title size={'0.9rem'}>Beta Tester</Title>
                                    </Group>
                                    <Group mt={'xs'} ml={'xl'}>
                                        <ActionIcon variant='transparent' color='red' radius="0">
                                            <IconSunglasses style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                        </ActionIcon>
                                        <Title size={'0.9rem'}>Stylish</Title>
                                    </Group>
                                    <Group mt={'xs'} ml={'xl'}>
                                        <ActionIcon variant='transparent' color='red' radius="0">
                                            <IconBuildingCommunity style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                        </ActionIcon>
                                        <Title size={'0.9rem'}>Moderator</Title>
                                    </Group>
                                </div>
                            </Card>

                            <Card padding="lg" radius={'xl'} mt={'md'} withBorder>
                                <Group gap={5}>
                                    <NavLink
                                        fw={'600'}
                                        label={'Overview'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'Posts'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'Orders'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'Favorites'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'OOTDs'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'Setting'}
                                    />
                                    <NavLink
                                        fw={'600'}
                                        label={'Logout'}
                                    />
                                </Group>
                            </Card>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={9.5}>
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
        )
    );
}