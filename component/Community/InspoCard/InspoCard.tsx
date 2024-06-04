import React, {useState} from "react";
import {ActionIcon, Anchor, AspectRatio, Avatar, Group, Image, Overlay, Text, Title} from "@mantine/core";
import {IconBookmarkFilled, IconHeartFilled, IconMessageCircle2Filled, IconShare} from "@tabler/icons-react";
import {PostWithRelations} from "../../../entities/Types";
import {Session} from "next-auth";
import Link from "next/link";

interface InspoCardProps {
    post: PostWithRelations
    session: Session
}

export default function InspoCard(props: InspoCardProps ) {
    const [visible, setVisible] = useState(false);

    return (
            <AspectRatio ratio={7 / 10} onMouseEnter={() => setVisible(true)}
                         onMouseLeave={() => setVisible(false)} mx="auto" pos="relative">
                <Image src={props.post.images[0].imgUrl} h={'100%'} w={'100%'}/>
                {
                    visible &&
                    <Overlay color="#000" backgroundOpacity={0.75} zIndex={1}>
                        <Group mt={'md'} ml={'md'}>
                            <Anchor
                                onClick={(event) => event.stopPropagation()}
                                href={'../../../../user/' + props.post.author.user.username}
                                style={{
                                    color: 'inherit',
                                }}
                            >
                                <Avatar
                                    src={props.post.author.user.image}
                                    alt={props.post.author.user.username}
                                    radius="xl"
                                />
                            </Anchor>
                            <Anchor
                                href={'../../../../user/' + props.post.author.user.username}
                                onClick={(event) => event.stopPropagation()}
                                style={{
                                    color: 'inherit',
                                }}
                            >
                                <Text size="sm" c={'white'} fw='bold'>{props.post.author.user.username}</Text>
                            </Anchor>
                        </Group>
                        <Group justify={'center'} gap={'lg'} style={{ position: "relative", top: '36%'}}>
                            <Group gap={5}>
                                <Title c={'white'} size={'1.4rem'}>
                                    {props.post._count.likes}
                                </Title>
                                <ActionIcon variant='transparent' color="white" size="2rem" radius="0">
                                    <IconHeartFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>
                            <Group gap={5}>
                                <Title c={'white'} size={'1.4rem'}>
                                    {props.post._count.comments}
                                </Title>
                                <ActionIcon variant='transparent' color="white" size="2rem" radius="0">
                                    <IconMessageCircle2Filled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>
                            {/*<ActionIcon variant='transparent' color="white" size="2rem" radius="0">*/}
                            {/*    <IconBookmarkFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>*/}
                            {/*</ActionIcon>*/}
                        </Group>
                    </Overlay>
                }
            </AspectRatio>

    );
}
