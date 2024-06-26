import React, {useEffect, useMemo, useState} from "react";
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
import {IconBookmark} from "@tabler/icons-react";

import {generateHTML} from '@tiptap/html';
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
import {getBadgeColor, timeAgo} from "../../../../util/util";
import PostComment from "../../../../component/Community/Comment/Comment";
import {ShareButton} from "../../../../component/Community/ShareButton/ShareButton";
import {LikeButton} from "../../../../component/Community/LikeButton/LikeButton";
import {Post} from "@prisma/client";
import ImageOverlay from "../../../../component/ImageOverlay/ImageOverlay";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../../../api/auth/[...nextauth]";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import {Community} from ".prisma/client";
import {Carousel} from "@mantine/carousel";

interface PostDetailProps {
    post: PostWithRelations
    comments: CommentWithRelations[]
    likedPosts: Post[]
    userSession: Session
    communities: Community[]
}

const PostDetail: React.FC<PostDetailProps> = (props: PostDetailProps) => {
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState<CommentWithRelations[]>(props.comments);

    const handlePostComment = async () => {
        if (!newComment.trim()) return;  // Prevent posting empty comments

        try {
            const response = await fetch(`/api/post/${props.post.id}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId: props.post.id, authorId: props.userSession.user.id, content: newComment }),
            });

            if (response.ok) {
                const res = await response.json()
                setComments(comments => [...comments, res]);
            } else {
                setError('Failed to post comment');
            }
            setNewComment('');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    const handleAddReply = (parentId: number, reply: CommentWithRelations) => {
        setComments(prevComments => {
            const updateComments = (comments: CommentWithRelations[]): CommentWithRelations[] => {
                return comments.map(comment => {
                    if (comment.id === parentId) {
                        return {
                            ...comment,
                            replies: [...(comment.replies || []), reply],
                        };
                    } else if (comment.replies) {
                        return {
                            ...comment,
                            // @ts-ignore
                            replies: updateComments(comment.replies),
                        };
                    } else {
                        return comment;
                    }
                });
            };

            return updateComments(prevComments);
        });
    };

    const output = useMemo(() => {
        return generateHTML(
            props.post ? JSON.parse(props.post?.content) : {
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
            ]
        )
    }, [props.post])

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }}>
            <Grid gutter={'xl'}>
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar currentCommunity={props.post?.community.name}  communities={props.communities}/>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 9 }} pt={'6rem'}>
                    <Card
                        p={'xl'} radius={0}
                        style={{
                            backgroundColor: 'light-dark(rgb(255,255, 255), rgb(21,22,25))'
                        }}
                    >
                        <Group>
                            <Anchor href={'../c/' + props.post?.community.name} style={{ color: 'inherit.inherit' }} fw={'800'} pb={'lg'}>
                                <Badge
                                    bg={getBadgeColor(props.post?.community.id)}
                                    radius={'0'}
                                >
                                    {props.post?.community.name}
                                </Badge>
                            </Anchor>
                        </Group>
                        <Title size={'1.5rem'}>{props.post?.title}</Title>
                        <Group justify={'space-between'} mb={'lg'}>
                            <Group>
                                <Anchor
                                    href={'../../../../user/' + props.post?.author.user.username}
                                    style={{
                                        color: 'inherit',
                                    }}
                                >
                                    <TextMantine size={'sm'}>{props.post?.author.user.username}</TextMantine>
                                </Anchor>
                                <TextMantine size={'sm'}>posted {timeAgo(props.post?.createdAt.toString())}</TextMantine>
                            </Group>
                            <Group mt="md" gap={5}>
                                {props.post ?
                                    <LikeButton post={props.post} session={props.userSession} likedPosts={props.likedPosts} /> : <></>
                                }
                                {/*<Button variant="subtle" size='compact-sm' c='gray' leftSection={<IconBookmark size={16} />}>*/}
                                {/*    Save*/}
                                {/*</Button>*/}
                                <ShareButton href={''} size={'compact-sm'} />
                            </Group>
                        </Group>
                        <Space h={'xl'} />
                        <Carousel withControls={props.post?.images.length > 1} withIndicators={props.post?.images.length > 1}>
                        {props.post?.images.map((image, index) => (
                            <ImageOverlay imgUrl={image.imgUrl} key={index} />
                        ))}
                        </Carousel>
                        <Space h={'xl'} />
                        <div dangerouslySetInnerHTML={{ __html: output }} />
                        <Divider mt={'xl'} mb={'md'} />
                        <div>
                            <Title size={'md'}>{props.post?._count.comments} comments</Title>
                            <Space h='lg' />
                            <div
                                style={{
                                    backgroundColor: 'light-dark(rgb(240,240,240), rgb(21,22,25))',
                                    border: '2px solid light-dark(rgb(255,255,255), rgb(66,66,66))'}}
                            >
                                <Textarea
                                    variant="transparent"
                                    size="md"
                                    radius="0"
                                    placeholder="Add a comment"
                                    mb={'sm'}
                                    value={newComment}
                                    onChange={(event) => setNewComment(event.currentTarget.value)}
                                />
                            </div>
                            <Group justify={'flex-end'} mb={'lg'} mt={'md'}>
                                <Button darkHidden variant="filled" size="sm" radius="xs" bg={'black'} onClick={() => setNewComment('')}>Cancel</Button>
                                <Button lightHidden variant="outline" size="sm" radius="xs" color={'var(--mantine-color-dark-1)'} onClick={() => setNewComment('')}>Cancel</Button>

                                <Button darkHidden variant="filled" size="sm" radius="xs" bg={'black'} onClick={handlePostComment}>Post</Button>
                                <Button lightHidden variant="outline" size="sm" radius="xs" color={'var(--mantine-color-dark-1)'} onClick={handlePostComment}>Post</Button>
                            </Group>
                            {comments.map((comment) => (
                                <PostComment
                                    key={comment.id}
                                    comment={comment}
                                    author={comment.author}
                                    session={props.userSession}
                                    onAddReply={handleAddReply} // Pass down the function to add replies
                                    postUserId={props.post.authorId}
                                />
                            ))}
                        </div>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions);

    const { id } = context.query;

    let post = null;
    let comments = [];
    let communities = [];
    let likedPosts= [];

    try {
        const postResponse = await fetch(`${process.env.API_URL}/api/post/${id}`, { cache: 'no-store' });
        if (postResponse.ok) {
            post = await postResponse.json();
        }

        const commentsResponse = await fetch(`${process.env.API_URL}/api/post/${id}/comment`, { cache: 'no-store' });
        if (commentsResponse.ok) {
            comments = await commentsResponse.json();
        }

        const communitiesResponse = await fetch(`${process.env.API_URL}/api/post`, { cache: 'no-store' });
        if (communitiesResponse.ok) {
            communities = await communitiesResponse.json();
        }

        if ( session ) {
            const likedResponse = await fetch(`${process.env.API_URL}/api/posts/user/${session.user.id}/liked`, {cache: 'no-store'});
            if (likedResponse.ok) {
                likedPosts = await likedResponse.json();
            }
        }
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            post,
            comments,
            likedPosts,
            communities,
            userSession: await getServerSession(context.req, context.res, authOptions),
        }
    };
};

export default PostDetail;