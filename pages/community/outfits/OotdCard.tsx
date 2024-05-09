import React, {useState} from "react";
import {ActionIcon, AspectRatio, Avatar, Group, Image, Overlay, Text, Title} from "@mantine/core";
import {IconBookmarkFilled, IconHeartFilled} from "@tabler/icons-react";

export default function OotdCard() {
    const [visible, setVisible] = useState(false);

    return (
        <AspectRatio ratio={9 / 13} maw={400} onMouseEnter={() => setVisible(true)}
                     onMouseLeave={() => setVisible(false)} mx="auto" pos="relative">
            <Image radius={'md'} src={null} fallbackSrc="https://placehold.co/600x400?text=Placeholder"/>
            {
                visible &&
                <Overlay color="#000" backgroundOpacity={0.5}>
                    <div style={{ position: "absolute", top: '3%', right: '75%'}}>
                        <Avatar
                            src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'}
                            alt={'username'}
                            radius="xl"
                        />
                        <Text size="xs" c={'white'} style={{ paddingTop: '0.5rem' }}>{'username'}</Text>
                    </div>
                    <Group justify={'center'} style={{ position: "relative", top: '50%'}}>
                        <Group gap={5}>
                            <Title c={'white'} size={'lg'}>
                                100
                            </Title>
                            <ActionIcon variant='transparent' color="white" size="2rem" radius="0">
                                <IconHeartFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                        </Group>
                        <ActionIcon variant='transparent' color="white" size="2rem" radius="0">
                            <IconBookmarkFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                        </ActionIcon>
                    </Group>
                </Overlay>
            }
        </AspectRatio>
    );
}
