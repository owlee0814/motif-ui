import {
    Anchor,
    Badge,
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Group,
    Space,
    Text as TextMantine,
    Textarea,
    Title
} from "@mantine/core";
import {IconBookmark, IconBookmarkFilled, IconHeart, IconShare} from "@tabler/icons-react";
import React, {useEffect, useMemo, useState} from "react";

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
import {CommentWithRelations, PostWithRelations} from "../../../../entities/Types";
import {countComments, getBadgeColor, timeAgo} from "../../../../util/util";
import classes from "../../../../component/Community/PostCard/PostCard.module.css";
import {useSession} from "next-auth/react";
import PostComment from "../../../../component/Community/Comment/Comment";
import {ShareButton} from "../../../../component/Community/ShareButton/ShareButton";

export default function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useSession()
    const [post, setPost] = useState<PostWithRelations>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState<CommentWithRelations[]>([]);
    const [newComment, setNewComment] = useState('');

    async function fetchComments(postId: number) {
        const response = await fetch(`/api/post/${postId}/comment`);
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        return response.json();
    }

    async function postComment(postId: number, content: string) {
        const authorId = data?.user.id;
        const response = await fetch(`/api/post/${postId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId, authorId, content }),
        });

        if (!response.ok) {
            throw new Error('Failed to post comment');
        }

        return response.json();
    }


    const fetchCommentsForPost = async () => {
        try {
            setLoading(true);
            const commentsData = await fetchComments(Number(id));
            setComments(commentsData);
            setLoading(false);
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

    const handlePostComment = async () => {
        if (!newComment.trim()) return;  // Prevent posting empty comments

        try {
            await postComment(Number(id), newComment);
            setNewComment(''); // Clear the textarea
            fetchCommentsForPost(); // Refresh comments
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

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
        fetchCommentsForPost();
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
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar currentCommunity={post?.community.name}/>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 9 }} pt={'6rem'}>
                    <Card p={'xl'} radius={0}>
                        <Anchor href={'../c/' + post?.community.name} style={{ color: 'inherit.inherit' }} fw={'800'} pb={'lg'}>
                            <Badge
                                bg={getBadgeColor(post?.community.id)}
                                radius={'0'}
                            >
                                {post?.community.name}
                            </Badge>
                        </Anchor>
                        <Title size={'1.5rem'} mb={'lg'}>{post?.title}</Title>
                        <Group justify={'space-between'} mb={'lg'}>
                            <Group>
                                <TextMantine size={'sm'}>{post?.author.user.username}</TextMantine>
                                <TextMantine size={'sm'}>posted {timeAgo(post?.createdAt.toString())}</TextMantine>
                            </Group>
                            <Group mt="md" gap={5}>
                                <Button variant="subtle" size='compact-sm' c='gray' leftSection={<IconHeart size={16} />}>
                                    {post?._count.likes}
                                </Button>
                                <Button variant="subtle" size='compact-sm' c='gray' leftSection={<IconBookmark size={16} />}>
                                    Save
                                </Button>
                                <ShareButton href={''} size={'compact-sm'}/>
                            </Group>
                        </Group>
                        <div dangerouslySetInnerHTML={{__html: output}}/>
                        <Divider mt={'xl'} mb={'md'}/>
                        <div>
                            <Title size={'md'}>{post?._count.comments} comments</Title>
                            <Space h='lg'/>
                            <Textarea
                                variant="filled"
                                size="md"
                                radius="0"
                                placeholder="Add a comment"
                                mb={'sm'}
                                value={newComment}
                                onChange={(event) => setNewComment(event.currentTarget.value)}
                            />
                            <Group justify={'flex-end'} mb={'lg'}>
                                <Button variant="filled" size="sm" radius="xs" bg={'black'} onClick={() => setNewComment('')}>Cancel</Button>
                                <Button variant="filled" size="sm" radius="xs" bg={'black'} onClick={handlePostComment}>Post</Button>
                            </Group>
                            {comments.map((comment) => (
                                <PostComment
                                    key={comment.id}
                                    comment={comment}
                                    postAuthorId={post ? post?.authorId : ''}
                                />
                            ))}
                        </div>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
}