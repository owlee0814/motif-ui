import {
    AspectRatio,
    Avatar,
    Button,
    Card,
    Center,
    Container,
    Divider,
    Group,
    Image,
    Loader,
    Modal,
    Overlay, ScrollArea,
    Space,
    Stack,
    Text,
    Textarea,
    Title
} from "@mantine/core";
import {IconMessageCircle, IconShirt, IconShoe, IconSunglasses} from "@tabler/icons-react";
import {convertDateToTimeMonthYear} from "../../util/util";
import {LikeButton} from "../Community/LikeButton/LikeButton";
import {ShareButton} from "../Community/ShareButton/ShareButton";
import React, {useEffect, useState} from "react";
import {CommentWithRelations, PostWithRelations} from "../../entities/Types";
import {Session} from "next-auth";
import InspoComment from "../Community/InspoComment/InspoComment";

interface InspoDetailInterface {
    inspoId: number;
    userSession: Session
    opened: boolean
    closeModal: () => void
    loading: boolean
}

export default function InspoDetail(props: InspoDetailInterface) {
    const [inspo, setInspo] = useState<PostWithRelations>()
    const [comments, setComments] = useState<CommentWithRelations[]>([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(props.loading)
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        setLoading(true)
    }, [props.opened]);

    useEffect(() => {
        if(props.opened) {
            setLoading(true)
            const fetchGet = async () => {
                try {
                    const response = await fetch(`/api/post/${props.inspoId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch post');
                    }
                    await response.json().then((res) => {
                        setInspo(res);
                        setTimeout(function(){ setLoading(false) }, 250);
                    });
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message);
                    } else {
                        setError('An unexpected error occurred');
                    }
                }
            };

            const fetchGetComments = async () => {
                try {
                    const response = await fetch(`/api/post/${props.inspoId}/comment`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch post');
                    }
                    const res = await response.json();
                    setComments(res);
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message);
                    } else {
                        setError('An unexpected error occurred');
                    }
                }
            };
            fetchGet();
            fetchGetComments();
        }

    }, [props.inspoId, props.opened]);

    const handlePostComment = async () => {
        if (!newComment.trim()) return;  // Prevent posting empty comments

        try {
            const response = await fetch(`/api/post/${props.inspoId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId: props.inspoId, authorId: props.userSession.user.id, content: newComment }),
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

    return props.opened && loading ? (
        <>
            <Modal
                opened
                onClose={()=>{}}
                overlayProps={{
                    blur: 40,
                }}
                withCloseButton={false}
                centered
                styles={{
                    content: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                    }
                }}
            >
                <Center>
                    <Loader/>
                </Center>
            </Modal>
        </>
        ) : (
        <>
            <Modal
                opened={props.opened}
                onClose={props.closeModal}
                centered
                style={{
                    position: 'relative',
                    right: 250,
                }}
                styles={{
                    content: {
                        flex: 'none'
                    }
                }}
                overlayProps={{
                    blur: 40,
                }}
                withCloseButton={false}
                size="xl"
                padding={0}
                radius={0}
            >
                <AspectRatio ratio={7/10}>
                    <Image src={inspo && inspo.images[0].imgUrl} h={'80dvh'}/>
                </AspectRatio>
            </Modal>
            <Modal
                opened={props.opened}
                onClose={props.closeModal}
                overlayProps={{
                    backgroundOpacity: 0,
                    blur: 0,
                }}
                withCloseButton={false}

                styles={{
                    inner: {
                        padding: 0,
                    },
                    content: {
                        backgroundColor: 'light-dark(rgb(240,240,240), rgb(21,22,25))',
                        position: 'absolute',
                        right: 0,
                        minHeight: '100%',
                        minWidth: '450px',
                        maxWidth: '14vw',
                    },
                }}
                radius={0}
            >
                <Stack pt={'2'} gap={5}>
                    <Group justify={'space-between'}>
                        <Group>
                            <div
                                style={{
                                    borderRadius: '50%',
                                    background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                                    width: '65px',
                                    height: '65px'
                                }}>
                                <Avatar
                                    src={inspo && inspo.author.user.image || undefined}
                                    alt="Profile Preview"
                                    size={'3.5rem'}
                                    radius={'3rem'}
                                    style={{position: 'relative', top: '7%', left: '7%'}}
                                />

                            </div>

                            <Stack gap={0}>
                                <Text fw={'bold'} size={'lg'}>{inspo && inspo.author.user.username}</Text>
                                <Text size={'xs'}>New York. NY</Text>
                            </Stack>
                        </Group>
                        <Button variant={'transparent'} c={'gray'} p={0} size={'xl'}>
                            ···
                        </Button>
                    </Group>
                    <Divider mt={'xs'}/>
                    {
                        inspo && JSON.parse(inspo.content).caption &&
                        <Text mb={'xs'} pt='xs' size={'xl'}>{JSON.parse(inspo.content).caption}</Text>
                    }
                    {
                        inspo &&
                        (JSON.parse(inspo.content).outfit.top
                            || JSON.parse(inspo.content).outfit.bottom
                            || JSON.parse(inspo.content).outfit.shoes
                            || JSON.parse(inspo.content).outfit.accessories
                        ) &&
                        <Stack pb={'xl'} pt='md' pl={'sm'} gap={0}>
                            {
                                JSON.parse(inspo.content).outfit.top &&
                                <Group>
                                    <Title>·</Title>
                                    <IconShirt/>
                                    <Text size={'md'}>{JSON.parse(inspo.content).outfit.top}</Text>
                                </Group>
                            }
                            {
                                JSON.parse(inspo.content).outfit.top &&
                                <Group>
                                    <Title>·</Title>
                                    <IconShirt/>
                                    <Text size={'md'}>{JSON.parse(inspo.content).outfit.bottom}</Text>
                                </Group>
                            }
                            {
                                JSON.parse(inspo.content).outfit.top &&
                                <Group>
                                    <Title>·</Title>
                                    <IconShoe/>
                                    <Text size={'md'}>{JSON.parse(inspo.content).outfit.shoes}</Text>
                                </Group>
                            }
                            {
                                JSON.parse(inspo.content).outfit.top &&
                                <Group>
                                    <Title>·</Title>
                                    <IconSunglasses/>
                                    <Text size={'md'}>{JSON.parse(inspo.content).outfit.accessories}</Text>
                                </Group>
                            }
                        </Stack>
                    }
                    <Group pb={'xs'}>
                        <Text size={'lg'}>{convertDateToTimeMonthYear(inspo ?  inspo.createdAt : '')}</Text>
                    </Group>
                    <Divider mb={5}/>
                    <Group gap={0} >
                        <Button
                            variant="subtle"
                            c={'gray'}
                            leftSection={<IconMessageCircle size={25} color={'gray'} />}
                        >
                            {inspo && inspo._count.comments}
                        </Button>
                        { inspo && <LikeButton session={props.userSession} post={inspo} size={25} /> }
                        <ShareButton href={''} iconSize={21}/>
                    </Group>
                    <Divider mt={5}/>
                </Stack>
                <Space h={'md'}/>
                {
                    comments.length == 0 &&
                    <Center p={'xl'}>
                        <Stack gap={0}>
                            <Text ta={'center'} fw={'bold'} size={'xl'}>
                                No Comment
                            </Text>
                            <Text ta={'center'}>
                                Be the first one to leave a comment!
                            </Text>
                        </Stack>
                    </Center>
                }
                <ScrollArea h={'33dvh'} scrollbarSize={8}>
                    <Container>
                        {comments.map((comment) => (
                            <InspoComment
                                key={comment.id}
                                comment={comment}
                                author={comment.author}
                                session={props.userSession}
                                onAddReply={handleAddReply} // Pass down the function to add replies
                            />
                        ))}
                    </Container>
                </ScrollArea>
                <div style={{position: 'fixed', bottom: 10, width: '93%', padding: '0'}}>
                    <Divider/>
                    <Card radius={0} padding={0} pt={5} style={{ backgroundColor: 'light-dark(rgb(240,240,240), rgb(21,22,25))' }}>
                        <Textarea radius={0} size='md' variant={'unstyled'} placeholder={'Add a comment...'}
                                  value={newComment}
                                  onChange={(event) => setNewComment(event.currentTarget.value)}
                        />
                        <Group justify={'flex-end'}>
                            <Button p={0} variant={'transparent'} c='light-dark(black, white    )' size='sm' pl={'sm'} pr={'sm'} onClick={handlePostComment}>
                                Post
                            </Button>
                        </Group>
                    </Card>
                </div>
            </Modal>
        </>
    );
}