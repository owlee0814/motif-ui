import {AspectRatio, Badge, Button, Card, Grid, Group, Image, Popover, Space, Text, Title} from "@mantine/core";
import {IconHeart, IconMessageCircle, IconShare, IconLink} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import classes from "./PostCard.module.css";
import {PostWithRelations} from "../../../entities/Types";
import {getBadgeColor, timeAgo} from "../../../util/util";
import {useSession} from "next-auth/react";
import {Post} from "@prisma/client";
import {ShareButton} from "../ShareButton/ShareButton";

interface PostCardProps {
    post: PostWithRelations
    likedPosts?: Post[]
}

export function PostCard(props: PostCardProps) {
    const [substringLength, setSubstringLength] = useState(160);
    const [opened, setOpened] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(props.post._count.likes);// Add state for like status
    const { data, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated' && props.likedPosts) {
            props.likedPosts.map((likedPost) => {
                if (likedPost.id === props.post.id)
                    setIsLiked(true);
            })
        }
    }, [props.likedPosts, status]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setSubstringLength(80);
            } else if (window.innerWidth < 800) {
                setSubstringLength(120);
            } else {
                setSubstringLength(160);
            }
        }

        window.addEventListener('resize', handleResize);

        // Set the initial value
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLikeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the default link behavior
        const postId = props.post.id;
        const userId = data?.user.id

        try {
            const response = await fetch(`/api/post/${postId}/like/${isLiked ? 'remove' : 'create'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, userId })
            });

            if (response.ok) {
                isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
                setIsLiked(!isLiked); // Toggle the like status
            } else {
                console.error('Failed to toggle like');
            }
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    return (
        <Grid.Col span={12}>
            <Link
                style={{
                    textDecoration: 'none'
                }}
                href={'../../community/post/' + props.post.id}
            >
                <Card radius="0" p="0" className={classes.card}>
                    <div className={classes.content}>
                        <Group gap={5} p={'md'}>
                            <Badge
                                bg={getBadgeColor(props.post.community.id)}
                                radius={'0'}
                            >
                                {props.post.community.label}
                            </Badge>
                        </Group>
                        <Title size={'sm'} pl={'md'}>{props.post.title}</Title>
                        <div style={{width: '80%', minHeight: '30%'}}>
                            <Space h={'sm'}/>
                            <Text size={'sm'} pl={'md'}>{(props.post.text).substring(0, substringLength)}...</Text>
                        </div>
                        <Group justify='space-between'>
                            <Group gap={10}>
                                <Group mt="md" gap={0} className={classes.actions}>
                                    <Button
                                        variant="subtle"
                                        c={isLiked ? 'pink' : 'gray'}
                                        onClick={handleLikeClick}
                                        leftSection={<IconHeart size={16} color={isLiked ? 'pink' : 'gray'} />}
                                    >
                                        {likes}
                                    </Button>
                                    <Button variant="subtle" c='gray' leftSection={<IconMessageCircle size={16} />}>
                                        {props.post._count.comments} comments
                                    </Button>
                                    <ShareButton href={location.host.toString() + '/community/post/' + props.post.id}/>
                                </Group>
                            </Group>
                            <Group gap={5} pr={'lg'} mt={'lg'}>
                                <Text fw={'bold'} size={'xs'}>{props.post.author.user.username}</Text>
                                <Text>&#8226;</Text>
                                <Text size={'xs'}>{timeAgo(props.post.createdAt.toString())}</Text>
                            </Group>
                        </Group>
                    </div>
                    <AspectRatio className={classes.imageContainer}>
                        <Image src={''} alt="Post image" h={'205'} w={'250'} className={classes.image} fallbackSrc="https://placehold.co/600x400?text=Placeholder"/>
                    </AspectRatio>
                </Card>
            </Link>
        </Grid.Col>
    )
}