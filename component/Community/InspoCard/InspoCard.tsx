import React, {useState} from "react";
import {ActionIcon, AspectRatio, Avatar, Group, Image, Overlay, Text, Title} from "@mantine/core";
import {IconBookmarkFilled, IconHeartFilled, IconMessageCircle2Filled, IconShare} from "@tabler/icons-react";
import {PostWithRelations} from "../../../entities/Types";
import {Session} from "next-auth";

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
                <Overlay color="#000" backgroundOpacity={0.5}>
                    <div style={{ position: "absolute", top: '3%', right: '75%'}}>
                        <Avatar
                            src={props.post.author.user.image}
                            alt={props.post.author.user.username}
                            radius="xl"
                        />
                        <Text size="xs" c={'white'} style={{ paddingTop: '0.5rem' }}>{props.post.author.user.username}</Text>
                    </div>
                    <Group justify={'center'} style={{ position: "relative", top: '50%'}}>
                        <Group gap={5}>
                            <Title c={'white'} size={'lg'}>
                                {props.post._count.likes}
                            </Title>
                            <ActionIcon variant='transparent' color="white" size="2rem" radius="0">
                                <IconHeartFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                        </Group>
                        <Group gap={5}>
                            <Title c={'white'} size={'lg'}>
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
