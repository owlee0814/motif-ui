import {
    Avatar,
    Button,
    Center,
    Container,
    Divider,
    Grid,
    Group,
    rem,
    Space,
    Stack,
    Tabs,
    Text,
    Title
} from "@mantine/core";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import React from "react";
import {Carousel} from "@mantine/carousel";
import {samplePosts} from "../../entities/Post";
import {PostCard} from "../../component/PostCard/PostCard";
import Link from "next/link";
import OotdCard from "../../component/OotdCard/OotdCard";
import {IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";

export default function Profile() {
    const { status, data} = useSession()

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

    for (let i = 0; i < 20; i++) {
        ootds.push(
            <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
                <OotdCard/>
            </Grid.Col>
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
            <Container size="90%" maw={{base: '1550px', md: '1050px', lg: '1550px'}}>
                <Grid>
                    <Grid.Col span={8}>
                        <Group>
                            <div style={{padding: '4rem', paddingRight: '6rem'}}>
                                <Avatar
                                    src={data?.user.image}
                                    alt={'username'}
                                    radius={200}
                                    size={'9rem'}
                                    style={{border: '5px solid'}}
                                />
                            </div>
                            <Stack gap={5}>
                                <Title>
                                    {data?.user?.username}
                                </Title>
                                <Title size={'1rem'} fw={'100'} c={'gray'}>
                                    this is a description about myself, asdmflaksmdflamsdflkadm
                                </Title>
                                <Title size={'0.9rem'} fw={'100'} c={'gray'}>
                                    EST. 2024.05
                                </Title>
                                <Space h={'xs'}/>
                                <Group gap={'xl'}>
                                    <Stack gap={10} align={'center'}>
                                        <Text mb={'.1rem'} size={'md'} fw={'bold'}>21 </Text>
                                        <Text mb={'.1rem'} size={'sm'}>Followers</Text>
                                    </Stack>
                                    <Stack gap={10} align={'center'}>
                                        <Text mb={'.1rem'} size={'md'} fw={'bold'}>28 </Text>
                                        <Text mb={'.1rem'} size={'sm'}>Following</Text>
                                    </Stack>
                                    <Stack gap={10} align={'center'}>
                                        <Text mb={'.1rem'} size={'md'} fw={'bold'}>101</Text>
                                        <Text mb={'.1rem'} size={'sm'}>Likes</Text>
                                    </Stack>
                                </Group>
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Group justify={'flex-end'} pt={'3.8rem'}>
                            <Button variant="filled" size="sm" radius="0" bg={'black'} component={Link}
                                    href="community/post/create">
                                Upload
                            </Button>
                        </Group>
                    </Grid.Col>
                </Grid>

                <Tabs defaultValue="gallery" color="gray">
                    <Tabs.List>
                        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={{ width: rem(12), height: rem(12) }} />}>
                            Gallery
                        </Tabs.Tab>
                        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={{ width: rem(12), height: rem(12) }} />}>
                            Posts
                        </Tabs.Tab>
                        <Tabs.Tab value="saved" leftSection={<IconSettings style={{ width: rem(12), height: rem(12) }} />}>
                            Saved
                        </Tabs.Tab>
                        <Tabs.Tab value="liked" leftSection={<IconSettings style={{ width: rem(12), height: rem(12), fontSize: '1.2rem'}} />}>
                            Liked
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="gallery">
                        <Grid mt={'2rem'}>
                            {ootds}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="messages">
                        <Grid mt={'2rem'} gutter={15}>
                            {samplePosts.slice(0, 4).map((post, i) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="settings">
                        Settings tab content
                    </Tabs.Panel>

                    <Tabs.Panel value="liked">
                        Settings tab content
                    </Tabs.Panel>
                </Tabs>


                {/*<Title*/}
                {/*    size={'1.5rem'}*/}
                {/*    fw={800}*/}
                {/*    mt={'lg'}*/}
                {/*    mb={'xl'}*/}
                {/*>*/}
                {/*    Recent Orders*/}
                {/*</Title>*/}
                {/*<Grid>*/}
                {/*    <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*    </Carousel>*/}
                {/*</Grid>*/}
                {/*<Title*/}
                {/*    size={'1.5rem'}*/}
                {/*    fw={800}*/}
                {/*    mt={'xl'}*/}
                {/*    mb={'xl'}*/}
                {/*>*/}
                {/*    Favorites*/}
                {/*</Title>*/}
                {/*<Grid mt={'md'}>*/}
                {/*    <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*        <Carousel.Slide>*/}
                {/*            <ProductListing3/>*/}
                {/*        </Carousel.Slide>*/}
                {/*    </Carousel>*/}
                {/*</Grid>*/}
            </Container>
        )
    );
}