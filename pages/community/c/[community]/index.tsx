import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import {PostCard} from "../../../../component/Community/PostCard/PostCard";
import Link from "next/link";
import {PostWithRelations} from "../../../../entities/Types";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSession} from "next-auth/react";
import {Post} from "@prisma/client";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../../../api/auth/[...nextauth]";
import {Community} from ".prisma/client";

interface HomeProps {
    initialPosts: PostWithRelations[];
    initialLikedPosts: Post[];
    community: string;
    communities: Community[];
    initialPage: number;
    initialHasMore: boolean;
    userSession: Session;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [posts, setPosts] = useState<PostWithRelations[]>(props.initialPosts);
    const [likedPosts, setLikedPosts] = useState<Post[]>(props.initialLikedPosts);
    const [page, setPage] = useState(props.initialPage);
    const [hasMore, setHasMore] = useState(props.initialHasMore);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState('Newest');
    const { status } = useSession();

    useEffect(() => {
        fetchPosts()
    }, [sortOption]);

    const fetchPosts = async () => {
        console.log(hasMore)
        setLoading(true);
        try {
            const response = await fetch(
                props.community === 'all' ?
                    `/api/posts?page=${page + 1}&limit=5&sort=${sortOption.toLowerCase()}` :
                    `/api/posts/c/${props.community}?page=${page + 1}&limit=5&sort=${sortOption.toLowerCase()}`,
                { cache: 'no-store' }
            );
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const res = await response.json();
            if (res.length < 5) {
                setHasMore(false);
            }
            setPosts((prevPosts) => [...prevPosts, ...res]);
            setPage((prevPage) => prevPage + 1);
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

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }} style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <Grid gutter={'xl'}>
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar currentCommunity={props.community}  communities={props.communities}/>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 9 }}>
                    <Space h={'xs'} />
                    <Group justify={'space-between'}>
                        <Select
                            style={{ paddingTop: '10px' }}
                            placeholder='Newest'
                            data={['Newest', 'Oldest', 'Likes']}
                            variant='unstyled'
                            w={'10%'}
                            comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                            onChange={(_value) => {
                                setPage(0)
                                setPosts([])
                                setHasMore(true)
                                setSortOption(_value || 'Newest')
                            }}
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
                            <Button variant="filled" size="sm" radius="0" bg={'black'}
                                    component={Link}
                                    href={status === 'authenticated' ? "../post/create" : '../../api/auth/signin'}
                            >
                                Create a Post
                            </Button>
                        </Group>
                    </Group>
                    <Space h={'1.45rem'} />
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchPosts}
                        hasMore={hasMore}
                        loader={<Title size={'1.5rem'}>Loading...</Title>}
                        endMessage={<Title size={'xs'} mt={'xl'}>No posts to display</Title>}
                        style={{ overflow: 'visible' }}
                    >
                        <Grid gutter={15}>
                            {posts.map((post) => (
                                <PostCard post={post} likedPosts={likedPosts} key={post.id} session={props.userSession} />
                            ))}
                        </Grid>
                    </InfiniteScroll>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions);
    const { community } = context.query;
    const page = 1;

    let initialPosts = [];
    let initialLikedPosts = [];
    let communities = [];
    let initialHasMore = true;

    try {
        const postsResponse = await fetch(
            community === 'all'
                ? `${process.env.API_URL}/api/posts?page=${page}&limit=5`
                : `${process.env.API_URL}/api/posts/c/${community}/?page=${page}&limit=5`,
            { cache: 'no-store' }
        );
        if (postsResponse.ok) {
            initialPosts = await postsResponse.json();
            initialHasMore = initialPosts.length >= 5;
        }

        const communitiesResponse = await fetch(`${process.env.API_URL}/api/post`, { cache: 'no-store' });
        if (communitiesResponse.ok) {
            communities = await communitiesResponse.json();
        }

        // Fetch liked posts on the server side
        if ( session ) {
            const likedResponse = await fetch(`${process.env.API_URL}/api/posts/user/${session.user.id}/liked`, {cache: 'no-store'});
            if (likedResponse.ok) {
                initialLikedPosts = await likedResponse.json();
            }
        }
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            initialPosts,
            initialLikedPosts,
            community: community || 'all',
            communities: communities,
            initialPage: page,
            initialHasMore,
            userSession: session,
        }
    };
};

export default Home;