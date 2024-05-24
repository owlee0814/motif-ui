import {
    ActionIcon,
    Anchor,
    Breadcrumbs,
    Button,
    Card,
    Center,
    Container, Divider,
    Grid,
    Group,
    Image,
    Space,
    Text,
    Textarea,
    Title
} from "@mantine/core";
import {IconBookmarkFilled, IconShare, IconThumbUpFilled} from "@tabler/icons-react";
import React, {useEffect} from "react";
import PostComment from "./comment";
import {CommunityNavBar} from "../../../../component/CommunityNavBar/CommunityNavBar";
import Post, {samplePosts} from "../../../../entities/Post";
import {useRouter} from "next/router";
import {PostCard2} from "../../../../component/PostCard2/PostCard2";

export default function PostDetail() {
    const router = useRouter();
    const [post, setPost] = React.useState<Post>();

    const items = [
        { title: 'All', href: '/community' },
        { title: 'Lounge', href: '/community' }
    ].map((item, index) => (
        <Anchor href={item.href} key={index} style={{color: 'inherit.inherit'}} fw={'800'}>
            {item.title}
        </Anchor>
    ));

    useEffect(()=>{
        if(!router.isReady) return;
        setPost(samplePosts[Number(router.query.id) - 1]);
    }, [router.isReady]);

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
            <Grid gutter={'xl'}>
                <Grid.Col span={3}>
                    <div style={{paddingTop: '2rem'}}>
                        <CommunityNavBar/>
                    </div>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Card padding={'xl'} mt={'3rem'}>
                        <Breadcrumbs separator=">" separatorMargin="xs" mb={'md'}>
                            {items}
                        </Breadcrumbs>
                        <Title size={'1.5rem'} mb={'xs'}>{post?.title}</Title>
                        <Group justify={'space-between'}>
                            <Group>
                                <Text size={'sm'}>{post?.username}</Text>
                                <Text size={'sm'}>posted {post?.postedDate}</Text>
                            </Group>
                            <Group>
                                <Text fw={'800'}>{post?.likes} Likes</Text>
                                <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                    <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                                <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                    <IconBookmarkFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                                <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                    <IconShare style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>
                        </Group>
                        <Space h='3rem'/>
                        <Center>
                            <Image
                                src={post?.postImgUrl}
                                w={400}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Center>
                        <Space h={'lg'}/>
                        <Text>{post?.post}</Text>
                        <Divider mt={'xl'} mb={'md'}/>
                        <div>
                            <Title size={'md'}>{post?.commentCount} comments</Title>
                            <Space h='lg'/>
                            <Textarea
                                variant="filled"
                                size="md"
                                radius="0"
                                placeholder="Add a comment"
                                mb={'sm'}
                            />
                            <Group justify={'flex-end'} mb={'lg'}>
                                <Button variant="filled" size="sm" radius="xs" bg={'black'}>Cancel</Button>
                                <Button variant="filled" size="sm" radius="xs" bg={'black'}>Post</Button>
                            </Group>
                            <PostComment username={'olee0814'}
                                         avatarImgUrl={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'}
                                         comment={'this is an example comment, blah blah bah'}/>
                            <Card>
                                <Grid>
                                    <Grid.Col span={0.4}/>
                                    <Grid.Col span={11.6}>
                                        <PostComment username={'oteh'} avatarImgUrl={''} comment={'This is a reply'}/>
                                    </Grid.Col>
                                    <Grid.Col span={0.4}/>
                                    <Grid.Col span={11.6}>
                                        <PostComment username={'oteh'} avatarImgUrl={''} comment={'This is a second reply'}/>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                            <PostComment username={'testuser01'}
                                         avatarImgUrl={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'}
                                         comment={'Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim tortor at auctor urna nunc id cursus metus aliquam. '}/>
                            <PostComment username={'oteh'} avatarImgUrl={''}
                                         comment={'Senectus et netus et malesuada fames ac turpis egestas maecenas. Non blandit massa enim nec dui.'}/>
                        </div>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
}