import {Avatar, Button, Card, Divider, Grid, Group, Space, Text} from "@mantine/core";
import React from "react";
import {IconMessage} from "@tabler/icons-react";

interface PostCommentProps {
    avatarImgUrl: string,
    username: string,
    comment: string
}

export default function PostComment(props: PostCommentProps) {
    return (
        <div>
            <Space h={'xs'}/>
            <Grid>
                <Grid.Col span={0.6}>
                    <Avatar
                        src={props.avatarImgUrl}
                        alt={props.username}
                        radius="xl"
                        color="indigo"
                    />
                </Grid.Col>
                <Grid.Col span={11}>
                    <Card radius="0" pl='md' pr='md' pt='md' pb='xs' style={{backgroundColor: 'light-dark(rgb(240,240,240), rgb(46,46,46))'}}>
                    <Group gap={'lg'}>
                        <Text size="sm">{props.username}</Text>
                        <Text size="xs" c="dimmed">
                            10 minutes ago
                        </Text>
                    </Group>
                    <Text pt="5" size="sm">
                        {props.comment}
                    </Text>
                    <Space h={'xs'}/>
                    </Card>
                    <Group gap={0} p={'xs'}>
                        <Button leftSection={<IconMessage size={14} />} size={'compact-sm'} variant={'transparent'} fw={'500'}>Reply</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </div>
    );
}