import {Avatar, Button, Container, Grid, Group, rem, Space, Stack, Tabs, Text, Title} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {PostCard} from "../../component/Community/PostCard/PostCard";
import Link from "next/link";
import OotdCard from "../../component/Community/OotdCard/OotdCard";
import {IconAward, IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";
import {PostWithRelations} from "../../entities/Types";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]";

interface ProfileProps {
    userPosts : PostWithRelations[],
    likedPosts : PostWithRelations[],
    userSession: Session,
    test: any
}

export default function Profile(props: ProfileProps) {
    const ootds = [];
    const [error, setError] = useState('');

    useEffect(() => {
        console.log(props)
    }, []);

    for (let i = 0; i < 20; i++) {
        ootds.push(
            <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
                <OotdCard />
            </Grid.Col>
        );
    }

    return (
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }}>
                <Grid>
                    <Grid.Col span={8}>
                        <Group>
                            <div style={{ padding: '4rem', paddingRight: '6rem' }}>
                                <Avatar
                                    src={props.userSession.user.image}
                                    alt={'username'}
                                    radius={200}
                                    size={'9rem'}
                                    style={{ border: '5px solid' }}
                                />
                            </div>
                            <Stack gap={5}>
                                <Group>
                                    <Title>
                                        {props.userSession.user.username}
                                    </Title>
                                    <IconAward size={'1.7rem'} color={'#00abfb'} />
                                </Group>

                                <Title size={'1rem'} fw={'100'} c={'gray'}>
                                    this is a description about myself, asdmflaksmdflamsdflkadm
                                </Title>
                                <Title size={'0.9rem'} fw={'100'} c={'gray'}>
                                    EST. 2024.05
                                </Title>
                                <Space h={'xs'} />
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
                        <Tabs.Tab value="liked" leftSection={<IconSettings style={{ width: rem(12), height: rem(12) }} />}>
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
                            {props.userPosts.map((post) => (
                                <PostCard post={post} likedPosts={props.likedPosts} key={post.id} session={props.userSession}/>
                            ))}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="settings">
                        Settings tab content
                    </Tabs.Panel>

                    <Tabs.Panel value="liked">
                        <Grid mt={'2rem'} gutter={15}>
                            {props.likedPosts.map((post) => (
                                <PostCard likedPosts={props.likedPosts} post={post} key={post.id} session={props.userSession}/>
                            ))}
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const session = await getServerSession(context.req, context.res, authOptions);

        if (!session) {
            return {
                redirect: {
                    destination: '/api/auth/signin',
                    permanent: false,
                },
            };
        }

        const [userPostsRes, likedPostsRes] = await Promise.all([
            fetch(`${process.env.API_URL}/api/posts/user/${session.user.id}`),
            fetch(`${process.env.API_URL}/api/posts/user/${session.user.id}/liked`)
        ]);

        if (!userPostsRes.ok || !likedPostsRes.ok) {
            throw new Error('Failed to fetch posts');
        }

        const [userPosts, likedPosts] = await Promise.all([
            userPostsRes.json(),
            likedPostsRes.json()
        ]);

        return {
            props: {
                userPosts,
                likedPosts,
                userSession: session,
            },
        };
    } catch (error) {
        return {
            props: {
                userPosts: [],
                likedPosts: [],
                error: error instanceof Error ? error.message : '',
            },
        };
    }
}
