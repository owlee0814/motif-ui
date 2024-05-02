import {Avatar, Button, Group, Space, Text} from "@mantine/core";
import React from "react";

export default function PostComment({username, avatarImgUrl, comment}) {
    return (
        <div>
            <Space h={'sm'}/>
            <Group>
                <Avatar
                    src={avatarImgUrl}
                    alt={username}
                    radius="xl"
                />
                <div>
                    <Text size="sm">{username}</Text>
                    <Text size="xs" c="dimmed">
                        10 minutes ago
                    </Text>
                </div>
            </Group>
            <Text pl={54} pt="sm" size="sm">
                {comment}
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