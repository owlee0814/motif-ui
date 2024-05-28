import {ActionIcon, Badge, Button, Card, Grid, Group, Image, Space, Stack, Text, Title} from "@mantine/core";
import {IconHeart, IconMessageCircle, IconShare, IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import classes from "./PostCard2.module.css";
import {PostWithRelations} from "../../../entities/Types";
import {getBadgeColor} from "../../../util/util";

interface PostCard2Props {
    post: PostWithRelations
}

export function PostCard2(props: PostCard2Props) {
    return (
        <>
            <Space h={'sm'}/>
            <Card padding="md" radius={0} className={classes.card}>
                <Link
                    style={{
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                    href={'../../community/post/' + props.post.id}
                >
                    <Grid>
                        <Grid.Col span={9}>
                            <Stack gap={'xs'} pt={'xs'}>
                                <Badge
                                    color={getBadgeColor(props.post.community.id)}
                                    radius={'0'}
                                    variant={'light'}
                                >
                                    {props.post.community.name}
                                </Badge>
                                <Title size={'0.9rem'} pl={5} pt={5}>{props.post.title}</Title>
                                <Group gap={0} className={classes.actions}>
                                    <Button variant="subtle" c='gray' size={'xs'} leftSection={<IconHeart size={16} />}>
                                        123
                                    </Button>
                                    <Button variant="subtle" c='gray' size={'xs'} leftSection={<IconMessageCircle size={16} />}>
                                        123
                                    </Button>
                                </Group>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Group justify={'flex-end'}>
                                <Image
                                    src={''}
                                    h={100}
                                    w={100}
                                    radius={"0"}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Link>
            </Card>
        </>
    )
}