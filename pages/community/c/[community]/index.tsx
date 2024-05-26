import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Group, Select, Space, TextInput} from "@mantine/core";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import {PostCard} from "../../../../component/Community/PostCard/PostCard";
import Link from "next/link";
import {PostWithRelations} from "../../../../entities/Types";

export default function Home() {
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

    return (
        <>
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
                <Grid gutter={'xl'}>
                    <Grid.Col span={{  sm: 0, md: 0, lg: 3 }}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={{ sm: 12, md: 12, lg: 9 }}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Select
                                style={{paddingTop: '10px'}}
                                placeholder="Hot"
                                data={['Hot', 'New', 'Likes']}
                                variant='unstyled'
                                w={'10%'}
                                comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
                            />
                            <Group justify={'flex-end'}>
                                <div style={{width: '15rem'}}>
                                    <TextInput
                                        variant="filled"
                                        size="md"
                                        radius="0"
                                        placeholder="Search"
                                    />
                                </div>
                                <Button variant="filled" size="sm" radius="0" bg={'black'} component={Link} href="../post/create">
                                    Create a Post
                                </Button>
                            </Group>
                        </Group>
                        <Space h={'1.45rem'}/>
                        <Grid gutter={15}>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}