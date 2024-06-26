import {Avatar, Button, Container, Grid, Group, rem, Space, Stack, Tabs, Title} from "@mantine/core";
import React, {useEffect} from "react";
import Link from "next/link";
import {IconAward, IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {PostWithRelations} from "../../../entities/Types";
import {PostCard} from "../../../component/Community/PostCard/PostCard";
import {authOptions} from "../../api/auth/[...nextauth]";
import {User} from "@prisma/client";
import {convertDateToYearMonth} from "../../../util/util";
import InspoCard from "../../../component/Community/InspoCard/InspoCard";

interface ProfileProps {
    userPosts : PostWithRelations[],
    likedPosts : PostWithRelations[],
    userInspos : PostWithRelations[],
    user: User,
    userSession: Session
}

export default function Profile(props: ProfileProps) {
    const ootds = [];

    useEffect(() => {
        console.log(props)
    }, []);

    for (let i = 0; i < 20; i++) {
        ootds.push(
            <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
                {/*<InspoCard />*/}
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
                                    src={props.user.image}
                                    alt={''}
                                    radius={200}
                                    size={'9rem'}
                                    style={{ border: '5px solid' }}
                                />
                            </div>
                            <Stack gap={5}>
                                <Group>
                                    <Title>
                                        {props.user.username}
                                    </Title>
                                    <IconAward size={'1.7rem'} color={'#00abfb'} />
                                </Group>

                                <Title size={'1rem'} fw={'100'} c={'gray'}>
                                    this is a description about myself, asdmflaksmdflamsdflkadm
                                </Title>
                                <Title size={'0.9rem'} fw={'100'} c={'gray'}>
                                    EST. {convertDateToYearMonth(props.user.createdAt)}
                                </Title>
                                <Space h={'xs'} />
                                <Group gap={'xl'}>
                                    {/*<Stack gap={10} align={'center'}>*/}
                                    {/*    <Text mb={'.1rem'} size={'md'} fw={'bold'}>21 </Text>*/}
                                    {/*    <Text mb={'.1rem'} size={'sm'}>Followers</Text>*/}
                                    {/*</Stack>*/}
                                    {/*<Stack gap={10} align={'center'}>*/}
                                    {/*    <Text mb={'.1rem'} size={'md'} fw={'bold'}>28 </Text>*/}
                                    {/*    <Text mb={'.1rem'} size={'sm'}>Following</Text>*/}
                                    {/*</Stack>*/}
                                    {/*<Stack gap={10} align={'center'}>*/}
                                    {/*    <Text mb={'.1rem'} size={'md'} fw={'bold'}>101</Text>*/}
                                    {/*    <Text mb={'.1rem'} size={'sm'}>Likes</Text>*/}
                                    {/*</Stack>*/}
                                </Group>
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        {
                            //TODO ADD DROP DOWN MENU FOR SETTING, UPLOAD, AND OTHER USER AUTHENTICATED ACTIONS
                            (props.userSession && props.userSession.user.id === props.user.id) &&
                            <></>
                            // <Group justify={'flex-end'} pt={'3.8rem'}>
                            //     <Button darkHidden variant="filled" size="sm" radius="0" mb={'md'} bg={'black'}
                            //             component={Link}
                            //             href="community/post/create">
                            //         Upload
                            //     </Button>
                            //     <Button lightHidden variant="outline" size="sm" radius="0" mb={'md'} color={'var(--mantine-color-dark-1)'}
                            //             component={Link}
                            //             href="community/post/create">
                            //         Upload
                            //     </Button>
                            // </Group>
                        }
                    </Grid.Col>
                </Grid>

                <Tabs defaultValue="gallery" color="gray">
                    <Tabs.List>
                        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={{ width: rem(12), height: rem(12) }} />}>
                            Inspos
                        </Tabs.Tab>
                        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={{ width: rem(12), height: rem(12) }} />}>
                            Posts
                        </Tabs.Tab>
                        {
                            (props.userSession && props.userSession.user.id === props.user.id) &&
                            <>
                                {/*<Tabs.Tab value="saved"*/}
                                {/*        leftSection={<IconSettings style={{width: rem(12), height: rem(12)}}/>}>*/}
                                {/*Saved*/}
                                {/* </Tabs.Tab>*/}
                                <Tabs.Tab value="liked" leftSection={<IconSettings
                                style={{width: rem(12), height: rem(12)}}/>}>
                                Liked
                            </Tabs.Tab></>
                        }
                    </Tabs.List>

                    <Tabs.Panel value="gallery">
                        <Grid mt={'2rem'} gutter={'xs'}>
                            {
                                props.userInspos.map( (inspo, index) => (
                                    <Grid.Col key={index} span={{base: 12, md: 6, lg: 3}}>
                                        <InspoCard post={inspo} session={props.userSession} />
                                    </Grid.Col>
                                ))}
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="messages">
                        <Grid mt={'2rem'} gutter={15}>
                            {props.userPosts.map((post) => (
                                <PostCard post={post} likedPosts={props.likedPosts} key={post.id} session={props.userSession}/>
                            ))}
                        </Grid>
                    </Tabs.Panel>
                    {
                        (props.userSession && props.userSession.user.id === props.user.id) &&
                        <>
                            {/*<Tabs.Panel value="settings">*/}
                            {/*    Settings tab content*/}
                            {/*</Tabs.Panel>*/}
                            <Tabs.Panel value="liked">
                                <Grid mt={'2rem'} gutter={15}>
                                    {props.likedPosts.map((post) => (
                                        <PostCard likedPosts={props.likedPosts} post={post} key={post.id}
                                                  session={props.userSession}/>
                                    ))}
                                </Grid>
                            </Tabs.Panel>
                        </>
                    }
                </Tabs>
            </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const session = await getServerSession(context.req, context.res, authOptions);
        const { username } = context.query

        const userRes = await fetch(`${process.env.API_URL}/api/user?username=${username}`);

        if (!userRes.ok) {
            throw new Error('Failed to get user');
        }

        const user = await userRes.json();

        const [userPostsRes, likedPostsRes, userInsposRes] = await Promise.all([
            fetch(`${process.env.API_URL}/api/posts/user/${user.id}`),
            fetch(`${process.env.API_URL}/api/posts/user/${user.id}/liked`),
            fetch(`${process.env.API_URL}/api/inspos/user/${user.id}`),
        ]);

        if (!userPostsRes.ok || !likedPostsRes.ok || !userInsposRes.ok) {
            throw new Error('Failed to fetch posts');
        }

        const [userPosts, likedPosts, userInspos] = await Promise.all([
            userPostsRes.json(),
            likedPostsRes.json(),
            userInsposRes.json(),
        ]);

        return {
            props: {
                userPosts,
                likedPosts,
                userInspos,
                user,
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