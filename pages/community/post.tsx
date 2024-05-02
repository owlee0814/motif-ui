import {ActionIcon, Badge, Card, Grid, Group, Image, Space, Text, Title} from "@mantine/core";
import {IconMessageDots, IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";

export function Post() {
    return (
        <Grid.Col span={6}>
            <Card padding="lg" radius="0" withBorder>
                <Group justify="space-between">
                    <Badge bg={'blue'}>New</Badge>
                    <Group gap={10}>
                        <Group gap={4}>
                            <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">
                                <IconMessageDots style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <Text size={'xs'}>4</Text>
                        </Group>
                        <Group gap={2}>
                            <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">
                                <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <Text size={'xs'}>10</Text>
                        </Group>
                    </Group>
                </Group>
                <Space h={'sm'}/>
                <Group justify="space-between">
                    <div>
                        <Title size={'sm'}>Title of the post</Title>
                        <Space h={'sm'}/>
                        <Text>this is a content of the post and blah...</Text>
                    </div>
                    <Image
                        src={'https://media.discordapp.net/attachments/723908387032531015/1234891624467664957/DSCF0140.jpg?ex=663261f2&is=66311072&hm=f9a404053638a8e13a7d047ea6ef0a88842871c6890e44b4c89febf401eeb004&=&format=webp&width=934&height=1402'}
                        h={80}
                        w={80}
                        radius={"lg"}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                </Group>
                <Space h={'xl'}/>
                <Group justify='space-between'>
                    <Text size={'xs'} fw={800}>username</Text>
                    <Text size={'xs'}>posted 01/01/2024</Text>
                </Group>
            </Card>
        </Grid.Col>
    )
}