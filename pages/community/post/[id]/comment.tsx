import {Avatar, Button, Group, Space, Text} from "@mantine/core";
import React from "react";

interface PostCommentProps {
    avatarImgUrl: string,
    username: string,
    comment: string
}

export default function PostComment(props: PostCommentProps) {
    return (
        <div>
            <Space h={'sm'}/>
            <Group>
                <Avatar
                    src={props.avatarImgUrl}
                    alt={props.username}
                    radius="xl"
                    color="indigo"
                />
                <div>
                    <Text size="sm">{props.username}</Text>
                    <Text size="xs" c="dimmed">
                        10 minutes ago
                    </Text>
                </div>
            </Group>
            <Text pl={54} pt="sm" size="sm">
                {props.comment}
            </Text>
            <Space h={'xs'}/>
            <Group gap={0} style={{'padding-left': '46px'}}>
                <Button size={'compact-sm'} c={'black'} variant={'transparent'} fw={'400'}>reply</Button>
            </Group>
            <Space h={'sm'}/>
            <hr/>
        </div>
    );
}