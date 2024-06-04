import {Anchor, Avatar, Button, Card, Group, Space, Text, Textarea} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {IconMessage} from "@tabler/icons-react";
import {timeAgo} from "../../../util/util";
import classes from "./Comment.module.css";
import {CommentWithRelations, UserWithRelations} from "../../../entities/Types";
import {Session} from "next-auth";

interface PostCommentProps {
    postUserId: string;
    comment: CommentWithRelations
    author: UserWithRelations
    session: Session
    onAddReply: (parentId: number, reply: CommentWithRelations) => void // Add this prop
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

            const reply = await response.json();
            props.onAddReply(props.comment.id, reply); // Update the state in the parent component

            setShowReplyForm(false);
            setReplyText("");
        } catch (error) {
            console.error("Error posting reply:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Space h={'xs'}/>
            <Group display={'flex'} gap={5}>
                <Anchor href={'../../../../user/' + props.author.user.username}>
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
                                href={'../../../../user/' + props.comment.author.user.username}
                                style={{
                                    color: 'inherit',
                                }}
                            >
                                <Text size="sm">{props.comment.author.user.username}</Text>
                            </Anchor>
                            <Text size="xs" fw='bold' c={'red'}>{props.postUserId === props.comment.authorId ? 'OP' : ''}</Text>
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
            <Group gap={0} p={'xs'} pt={0}>
                <Button leftSection={<IconMessage size={14} />} ml={'2.5rem'} size={'compact-sm'} variant={'subtle'} fw={'500'} onClick={() => setShowReplyForm(true)}>
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
                        <Button darkHidden variant="filled" size="sm" radius="xs" bg={'black'} onClick={() => setShowReplyForm(!showReplyForm)} >Cancel</Button>
                        <Button lightHidden variant="outline" size="sm" radius="xs" color={'var(--mantine-color-dark-1)'} onClick={() => setShowReplyForm(!showReplyForm)} >Cancel</Button>
                        <Button darkHidden variant="filled" size="sm" radius="xs" bg={'black'} onClick={handlePostReply} disabled={loading}>
                            {loading ? 'Posting...' : 'Reply'}
                        </Button>
                        <Button lightHidden variant="outline" size="sm" radius="xs" color={'var(--mantine-color-dark-1)'} onClick={handlePostReply} disabled={loading}>
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
                            session={props.session}
                            onAddReply={props.onAddReply} // Pass down the function to handle adding replies
                            author={props.author}
                            postUserId={props.postUserId}
                        />
                    </div>
                )) : <></>
            }
        </div>
    );
}