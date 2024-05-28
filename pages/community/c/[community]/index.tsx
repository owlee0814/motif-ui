import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import {PostCard} from "../../../../component/Community/PostCard/PostCard";
import Link from "next/link";
import {PostWithRelations} from "../../../../entities/Types";
import InfiniteScroll from "react-infinite-scroll-component";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {Post} from "@prisma/client";

export default function Home() {
    const router = useRouter();
    const { status, data } = useSession();
    const { community } = router.query;
    const [posts, setPosts] = useState<PostWithRelations[]>([]);
    const [likedPosts, setLikedPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(community !== undefined)
            community === 'all' ? fetchAllPosts(page) : fetchCommunityPosts(page)
    }, [community, page]);

    useEffect(() => {
        if(status === 'authenticated')
            fetchLikedPosts()
    }, [data]);

    const fetchLikedPosts = async () => {
        try {
            const response = await fetch('/api/posts/user/' + data?.user.id + '/liked' );
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const res = await response.json();
            setLikedPosts(res)
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

    const fetchAllPosts = async (page: number) => {
        try {
            const response = await fetch(`/api/posts?page=${page}&limit=5`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const res = await response.json();
            if (res.length < 5) {
                setHasMore(false);
            }
            setPosts((prevPosts) => [...prevPosts, ...res]);
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

    const fetchCommunityPosts = async (page: number) => {
        try {
            const response = await fetch(`/api/posts/c/${community}/?page=${page}&limit=5`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const res = await response.json();
            if (res.length < 5) {
                setHasMore(false);
            }
            setPosts((prevPosts) => [...prevPosts, ...res]);
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

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }} style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <Grid gutter={'xl'}>
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar currentCommunity={community} />
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 9 }}>
                    <Space h={'xs'} />
                    <Group justify={'space-between'}>
                        <Select
                            style={{ paddingTop: '10px' }}
                            placeholder="Hot"
                            data={['Hot', 'New', 'Likes']}
                            variant='unstyled'
                            w={'10%'}
                            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                        />
                        <Group justify={'flex-end'}>
                            <div style={{ width: '15rem' }}>
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
                    <Space h={'1.45rem'} />
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={loadMore}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={<Title size={'xs'} mt={'xl'}>No posts to display</Title>}
                        style={{ overflow: 'visible' }}
                    >
                        <Grid gutter={15}>
                            {posts.map((post) => (
                                <PostCard post={post} likedPosts={likedPosts} key={post.id} />
                            ))}
                        </Grid>
                    </InfiniteScroll>
                </Grid.Col>
            </Grid>
        </Container>
    )
}