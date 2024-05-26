import {
    ActionIcon,
    Anchor,
    Button,
    Card,
    Center,
    Container,
    Divider,
    Grid,
    Group,
    Image,
    Space,
    Text as TextMantine,
    Textarea,
    Title
} from "@mantine/core";
import {IconBookmarkFilled, IconShare, IconThumbUpFilled} from "@tabler/icons-react";
import React, {useEffect, useMemo, useState} from "react";
import PostComment from "./comment";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import {useRouter} from "next/router";
import {generateHTML} from '@tiptap/html'
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import {Text} from '@tiptap/extension-text';
import {Bold} from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import {Strike} from "@tiptap/extension-strike";
import {ListItem} from "@tiptap/extension-list-item";
import {Italic} from "@tiptap/extension-italic";
import {Code} from "@tiptap/extension-code";
import {BulletList} from "@tiptap/extension-bullet-list";
import {Blockquote} from "@tiptap/extension-blockquote";
import {Heading} from "@tiptap/extension-heading";
import {PostWithRelations} from "../../../../entities/Types";

export default function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<PostWithRelations>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/post/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);
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
        fetchPost();
    }, [id]);

    const output = useMemo(() => {
        return generateHTML(
            post ? JSON.parse(post?.content) : {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [],
                },
            ],
        }, [
            Document,
            Paragraph,
            Text,
            Bold,
            Underline,
            Strike,
                ListItem,
                Italic,
                Code,
                BulletList,
                Blockquote,
                Heading,
            // other extensions …
        ])
    }, [post])

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }}>
            <Grid gutter={'xl'}>
                <Grid.Col span={3}>
                    <div style={{ paddingTop: '2rem' }}>
                        <CommunityNavBar />
                    </div>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Card padding={'xl'} mt={'3rem'}>
                        <Anchor href={''} style={{ color: 'inherit.inherit' }} fw={'800'} pb={'sm'}>
                            {post?.community.name}
                        </Anchor>
                        <Title size={'1.5rem'} mb={'xs'}>{post?.title}</Title>
                        <Group justify={'space-between'}>
                            <Group>
                                {/*<TextMantine size={'sm'}>{post?.author.user.name}</TextMantine>*/}
                                <TextMantine size={'sm'}>posted {post?.createdAt.toString()}</TextMantine>
                            </Group>
                            <Group>
                                <TextMantine fw={'800'}>100 Likes</TextMantine>
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
                        {/*TODO add image support*/}
                        {/*{*/}
                        {/*    post?.postImgUrl ?*/}
                        {/*        <>*/}
                        {/*        <Space h='3rem'/>*/}
                        {/*        <Center>*/}
                        {/*        <Image*/}
                        {/*            src={post?.postImgUrl}*/}
                        {/*            w={400}*/}
                        {/*            fallbackSrc="https://placehold.co/600x400?text=Placeholder"*/}
                        {/*        />*/}
                        {/*        </Center>*/}
                        {/*        </> :*/}
                        {/*        <></>*/}
                        {/*}*/}
                        <div dangerouslySetInnerHTML={{__html: output}}/>
                        <Divider mt={'xl'} mb={'md'}/>
                        <div>
                            <Title size={'md'}>{} comments</Title>
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
                                        <PostComment username={'oteh'} avatarImgUrl={''}
                                                     comment={'This is a second reply'}/>
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