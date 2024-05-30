import {Anchor, Avatar, Button, Card, Grid, Group, Space, Text, Textarea} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {IconMessage} from "@tabler/icons-react";
import {timeAgo} from "../../../util/util";
import classes from "./Comment.module.css";
import {CommentWithRelations} from "../../../entities/Types";
import {Session} from "next-auth";

interface PostCommentProps {
    comment: CommentWithRelations
    postAuthorId: string
    session: Session
}

export default function PostComment(props: PostCommentProps) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReplyClick = () => {
        setShowReplyForm(!showReplyForm);
    };

    const handlePostReply = async () => {
        if (!replyText.trim()) return; // Do not allow empty replies

        setLoading(true);

        try {
            const response = await fetch('/api/post/' + props.comment.postId + '/comment/reply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postId: props.comment.postId,
                    authorId: props.session.user.id,
                    content: replyText,
                    parentId: props.comment.id // Assuming you have a commentId prop
                })
            });

            if (!response.ok) {
                throw new Error('Failed to post reply');
            }

            const result = await response.json();
            // Optionally, you can handle the reply result, e.g., updating the UI

            setShowReplyForm(false);
            setReplyText("");
        } catch (error) {
            console.error("Error posting reply:", error);
        } finally {
            setLoading(false);
        }
    };

    // @ts-ignore
    return (
        <div>
            <Space h={'xs'}/>
            <Group display={'flex'}>
            <Anchor href={''}>
                <Avatar
                    src={props.comment.author.user.image}
                    alt={props.comment.author.user.username}
                    radius="xl"
                    color="indigo"
                />
            </Anchor>
            <Card radius="0" pl='md' pr='md' pt='md' pb='xs' className={classes.card}>
                <Group gap={'lg'}>
                    <Group gap={8}>
                        <Anchor
                            href={''}
                            style={{
                                color: 'inherit',
                            }}
                        >
                            <Text size="sm">{props.comment.author.user.username}</Text>
                        </Anchor>
                        <Text size="xs" fw='bold' c={'red'}>{props.postAuthorId === props.comment.authorId ? 'OP' : ''}</Text>
                    </Group>
                    <Text size="xs" c="dimmed">
                        {timeAgo(props.comment.createdAt)}
                    </Text>
                </Group>
                <Text pt="5" size="sm">
                    {props.comment.content}
                </Text>
                <Space h={'xs'}/>
            </Card>
            </Group>
            <Group gap={0} p={'xs'}>
                <Button leftSection={<IconMessage size={14} />} size={'compact-sm'} variant={'transparent'} fw={'500'} onClick={() => setShowReplyForm(true)}>
                    Reply
                </Button>
            </Group>

            {showReplyForm && (
                <div>
                    <Textarea
                        variant="filled"
                        size="md"
                        radius="0"
                        placeholder="Write your reply..."
                        mb={'sm'}
                        value={replyText}
                        onChange={(event) => setReplyText(event.currentTarget.value)}
                        disabled={loading}
                    />
                    <Group justify={'flex-end'} mb={'lg'}>
                        <Button variant="filled" size="sm" radius="xs" bg={'black'} onClick={() => setShowReplyForm(!showReplyForm)} >Cancel</Button>
                        <Button variant="filled" size="sm" radius="xs" bg={'black'} onClick={handlePostReply} disabled={loading}>
                            {loading ? 'Posting...' : 'Reply'}
                        </Button>
                    </Group>
                </div>
            )}
            {
                props.comment.replies ? props.comment.replies.map((reply, index) => (
                    <div style={{paddingLeft: '2rem', paddingRight: '1rem'}}>
                        <PostComment
                            key={reply.id}
                            // @ts-ignore
                            comment={reply}
                            postAuthorId={props.postAuthorId}
                        />
                    </div>
                )) : <></>
            }
        </div>
    );
}