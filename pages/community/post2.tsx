import {ActionIcon, Badge, Card, Grid, Group, Image, Space, Text, Title} from "@mantine/core";
import {IconMessageDots, IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

export function Post2() {
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
                            <div>
                                <Title size={'sm'}>Title of the post</Title>
                                <Space h={'sm'}/>
                                <Text fw={'lighter'}>this is a content of the post and blah...</Text>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={1.5}>
                            <Group gap={5} style={{
                                'margin': '0',
                                'position': 'absolute',
                                'top': '50%',
                                'transform': 'translateY(-50%)',
                            }}>
                                <Text size={'xs'}>10</Text>
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