import {Anchor, Avatar, Button, Card, Divider, Grid, Group, Space, Text, Textarea} from "@mantine/core";
import React, {useState} from "react";
import {timeAgo} from "../../../util/util";
import classes from "./InspoComment.module.css";
import {CommentWithRelations, UserWithRelations} from "../../../entities/Types";
import {Session} from "next-auth";

interface PostCommentProps {
    inspoUserId: string
    comment: CommentWithRelations
    author: UserWithRelations
    session: Session
    onAddReply: (parentId: number, reply: CommentWithRelations) => void // Add this prop
}

export default function InspoComment(props: PostCommentProps) {
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
            <Grid gutter={0} p={0} pb={'xs'}>
                <Grid.Col span={1.5} pt={5}>
                    <Anchor href={'../../../../user/' + props.author.user.username}>
                        <div
                            style={{
                                borderRadius: '50%',
                                background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                                width: '42px',
                                height: '42px',
                            }}>
                            <Avatar
                                src={props.comment.author.user.image}
                                alt={props.comment.author.user.username}
                                radius="xl"
                                color="indigo"
                                style={{position: 'relative', top: '5%', left: '5%'}}
                            />
                        </div>
                    </Anchor>
                </Grid.Col>
                <Grid.Col span={10.5}>
                <Card radius="0" p={0} pl='sm' pt={0} className={classes.card} >
                    <Group gap={'lg'} justify={'space-between'}>
                        <Group gap={8}>
                            <Anchor
                                href={'../../../../user/' + props.comment.author.user.username}
                                style={{
                                    color: 'inherit',
                                }}
                            >
                                <Text size="sm">{props.comment.author.user.username}</Text>
                            </Anchor>
                            <Text size="xs" fw='bold' c={'red'}>{props.inspoUserId === props.comment.authorId ? 'OP' : ''}</Text>
                        </Group>
                        <Text size="xs" c="dimmed">
                            {timeAgo(props.comment.createdAt)}
                        </Text>
                    </Group>
                    <Textarea variant={'unstyled'} autosize>
                        {props.comment.content.trim()}
                    </Textarea>
                </Card>
                <Button size={'xs'} pt={0} h={18} variant={'transparent'} fw={'500'} onClick={() => setShowReplyForm(true)}>
                    Reply
                </Button>
                {showReplyForm && (
                    <div>
                        <Textarea
                            variant="filled"
                            size="sm"
                            radius="0"
                            placeholder="Write your reply..."
                            mb={'sm'}
                            value={replyText}
                            onChange={(event) => setReplyText(event.currentTarget.value)}
                            disabled={loading}
                        />
                        <Group justify={'flex-end'} mb={'lg'}>
                            <Button variant="filled" size="xs" radius="xs" bg={'black'} onClick={() => setShowReplyForm(!showReplyForm)} >Cancel</Button>
                            <Button variant="filled" size="xs" radius="xs" bg={'black'} onClick={handlePostReply} disabled={loading}>
                                {loading ? 'Posting...' : 'Reply'}
                            </Button>
                        </Group>
                    </div>
                )}
                </Grid.Col>
            </Grid>

            {
                props.comment.replies ? props.comment.replies.map((reply, index) => (
                    <div style={{paddingLeft: '1rem'}}>
                        <InspoComment
                            key={reply.id}
                            // @ts-ignore
                            comment={reply}
                            session={props.session}
                            onAddReply={props.onAddReply} // Pass down the function to handle adding replies
                            author={props.author}
                            inspoUserId={props.inspoUserId}
                        />
                    </div>
                )) : <></>
            }
        </div>
    );
}