import {ActionIcon, Card, Grid, Group, Image, Space, Text, Title} from "@mantine/core";
import {IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import Post from "../../entities/Post";

interface PostCard2Props {
    post: Post
}

export function PostCard2(props: PostCard2Props) {
    return (
        <>
            <Space h={'sm'}/>
            <Card padding="md" radius="0" withBorder>
                <Link
                    style={{
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                    href={'community/post/1'}
                >
                    <Grid>
                        <Grid.Col span={8.5}>
                            <div
                                style={{
                                    position: 'relative',
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                <Title size={'0.9rem'}>{props.post.title}</Title>
                                <Space h={'xs'}/>
                                <Text size={'xs'}>{props.post.post.substring(0, 50)}...</Text>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={1.5}>
                            <Group gap={5} style={{
                                'margin': '0',
                                'position': 'absolute',
                                'top': '50%',
                                'transform': 'translateY(-50%)',
                            }}>
                                <Text size={'xs'}>{props.post.likes}</Text>
                                <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">
                                    <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={2}>
                            <Image
                                src={''}
                                h={60}
                                w={60}
                                radius={"xs"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                    </Grid>
                </Link>
            </Card>
        </>
    )
}