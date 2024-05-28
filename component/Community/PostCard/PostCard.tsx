import {AspectRatio, Badge, Button, Card, Grid, Group, Image, Popover, Space, Text, Title} from "@mantine/core";
import {IconHeart, IconMessageCircle, IconShare, IconLink} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import classes from "./PostCard.module.css"
import {PostWithRelations} from "../../../entities/Types";
import {getBadgeColor, timeAgo} from "../../../util/util";

interface PostCardProps {
    post: PostWithRelations
}

export function PostCard(props: PostCardProps) {
    const [substringLength, setSubstringLength] = useState(160);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (opened) {
            timeout = setTimeout(() => {
                setOpened(false);
            }, 2000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [opened]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setSubstringLength(80);
            } else if (window.innerWidth < 800) {
                setSubstringLength(120);
            } else {
                setSubstringLength(160);
            }
        }

        window.addEventListener('resize', handleResize);

        // Set the initial value
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const ShareButton = () => {
        const clickHandler = (e: Event) => {
            e.stopPropagation();
            // ... other click logic
        };

        return <Button onClick={() => clickHandler}>Text</Button>;
    };

    return (
        <Grid.Col span={12}>
            <Link
                style={{
                    textDecoration: 'none'
                }}
                href={'../../community/post/' + props.post.id}
            >
                <Card radius="0" p="0" className={classes.card}>
                    <div className={classes.content}>
                        <Group gap={5} p={'md'}>
                            <Badge
                                bg={getBadgeColor(props.post.community.id)}
                                radius={'0'}
                            >
                                {props.post.community.label}
                            </Badge>
                        </Group>
                        <Title size={'sm'} pl={'md'}>{props.post.title}</Title>
                        <div style={{width: '80%', minHeight: '30%'}}>
                            <Space h={'sm'}/>
                            <Text size={'sm'} pl={'md'}>{(props.post.text).substring(0, substringLength)}...</Text>
                        </div>
                        <Group justify='space-between'>
                            <Group gap={10}>
                                <Group mt="md" gap={0} className={classes.actions}>
                                    <Button variant="subtle" c='gray' onClick={event => event.preventDefault()} leftSection={<IconHeart size={16} />}>
                                        0
                                    </Button>
                                    <Button variant="subtle" c='gray' onClick={event => event.preventDefault()}  leftSection={<IconMessageCircle size={16} />}>
                                        {/*{props.post.commentCount}*/}comments
                                    </Button>
                                    <Popover opened={opened} onChange={setOpened}>
                                        <Popover.Target>
                                            <Button variant="subtle" c='gray' leftSection={<IconShare size={16} />} onClick={(e) => {
                                                console.log(location.href)
                                                navigator.clipboard.writeText(location.host.toString() + '/community/post/' + props.post.id)
                                                setOpened((o) => !o)
                                                e.preventDefault()
                                            }}>
                                                Share
                                            </Button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Group gap={'xs'}>
                                                <IconLink color={'gray'} size={'16'}/>
                                                <Text size={'sm'} fw={'bold'} c={'gray'}>
                                                    Link Copied
                                                </Text>
                                            </Group>
                                        </Popover.Dropdown>
                                    </Popover>
                                </Group>
                            </Group>
                            <Group gap={10} pr={'lg'} mt={'lg'}>
                                {/*<Text fw={'bold'} size={'xs'}>@{props.post.author.user.username}</Text>*/}
                                <Text size={'xs'}>{timeAgo(props.post.createdAt.toString())}</Text>
                            </Group>
                        </Group>
                    </div>
                    <AspectRatio className={classes.imageContainer}>
                        <Image src={''} alt="Post image" h={'205'} w={'250'} className={classes.image} fallbackSrc="https://placehold.co/600x400?text=Placeholder"/>
                    </AspectRatio>
                </Card>
            </Link>
        </Grid.Col>
    )
}