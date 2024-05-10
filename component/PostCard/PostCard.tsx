import {ActionIcon, Badge, Card, Grid, Group, Image, Space, Text, Title} from "@mantine/core";
import {IconMessageDots, IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import Post from "../../entities/Post";

function getBadgeColor(tag: string) {
    let tagColor = ''
    switch (tag) {
        case 'new':
            tagColor = 'blue';
            break;
        case 'trending':
            tagColor = 'red';
            break;
        case 'q&a':
            tagColor = 'green';
            break;
        case 'review':
            tagColor = 'purple';
            break;
        case 'lounge':
            tagColor = 'pink';
            break;
        case 'announcement':
            tagColor = 'black';
            break;
        default:
            tagColor = 'gray';
    }
    return tagColor;
}

interface PostCardProps {
    post: Post
}

export function PostCard(props: PostCardProps) {
    const cardStyle = { backgroundColor: 'light-dark(rgb(240,240,240), rgb(46,46,46))' }

    return (
        <Grid.Col span={6}>
            <Link
                style={{
                    textDecoration: 'none'
                }}
                href={'community/post/' + props.post.id}
            >
            <Card padding="lg" radius={'lg'} style={cardStyle}>
                <Group justify="space-between">
                    <Group gap={5}>
                    {props.post.tags.map((t) => (
                        // eslint-disable-next-line react/jsx-key
                        <Badge
                            bg={getBadgeColor(t)}
                        >
                            {t}
                        </Badge>
                    ))}
                    </Group>
                    <Group gap={10}>
                        <Group gap={4}>
                            <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">
                                <IconMessageDots style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <Text size={'xs'}>{props.post.commentCount}</Text>
                        </Group>
                        <Group gap={2}>
                            <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">
                                <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <Text size={'xs'}>{props.post.likes}</Text>
                        </Group>
                    </Group>
                </Group>
                <Space h={'sm'}/>
                <Group justify="space-between">
                    <div style={{width:'80%'}}>
                        <Title size={'sm'}>{props.post.title}</Title>
                        <Space h={'sm'}/>
                        <Text size={'sm'}>{(props.post.post).substring(0, 125)}...</Text>
                    </div>
                    <Image
                        src={props.post.postImgUrl}
                        h={80}
                        w={80}
                        radius={"lg"}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                </Group>
                <Space h={'xl'}/>
                <Group justify='space-between'>
                    <Text size={'xs'} fw={800}>{props.post.username}</Text>
                    <Text size={'xs'}>posted {props.post.postedDate}</Text>
                </Group>
            </Card>
            </Link>
        </Grid.Col>
    )
}