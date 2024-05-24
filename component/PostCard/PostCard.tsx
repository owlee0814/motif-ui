import {AspectRatio, Badge, Button, Card, Grid, Group, Image, Space, Text, Title} from "@mantine/core";
import {IconHeart, IconMessageCircle, IconShare} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import Post from "../../entities/Post";
import {createStyles} from "@mantine/emotion";

function getBadgeColor(tag: string) {
    let tagColor = ''
    switch (tag) {
        case 'new':
            tagColor = 'blue';
            break;
        case 'trending':
            tagColor = 'red';
            break;
        case 'q&a':
            tagColor = 'green';
            break;
        case 'review':
            tagColor = 'purple';
            break;
        case 'lounge':
            tagColor = 'pink';
            break;
        case 'announcement':
            tagColor = 'black';
            break;
        default:
            tagColor = 'gray';
    }
    return tagColor;
}

interface PostCardProps {
    post: Post
}

const useStyles = createStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'light-dark(rgb(240,240,240), rgb(46,46,46))'
    },
    content: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 15,
    },
    image: {
        height: '100%',
        width: '100%',
        // borderTopRightRadius: theme.radius.md,
        // borderBottomRightRadius: theme.radius.md,
    },
    body: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
    actions: {
        justifyContent: 'space-between',
    },
    badge: {
        backgroundColor: theme.colors.gray[0],
    },
    button: {
        backgroundColor: theme.colors.orange[6],
        color: theme.white,
        '&:hover': {
            backgroundColor: theme.colors.orange[7],
        },
    },
}));

export function PostCard(props: PostCardProps) {
    const { classes } = useStyles();

    return (
        <Grid.Col span={12}>
            <Link
                style={{
                    textDecoration: 'none'
                }}
                href={'../post/' + props.post.id}
            >
                <Card radius="0" p="0" className={classes.card}>
                    <div className={classes.content}>
                        <Group gap={5} p={'md'}>
                            {props.post.tags.map((tag, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <Badge
                                    bg={getBadgeColor(tag)}
                                    key={index}
                                    radius={'0'}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </Group>
                        <Title size={'sm'} pl={'md'}>{props.post.title}</Title>
                        <div style={{width: '65%'}}>
                            <Space h={'sm'}/>
                            <Text size={'sm'} pl={'md'}>{(props.post.post).substring(0, 100)}...</Text>
                        </div>
                        <Group justify='space-between'>
                            <Group gap={10}>
                                <Group mt="md" gap={0} className={classes.actions}>
                                    <Button variant="subtle" c='gray' leftSection={<IconHeart size={16} />}>
                                        {props.post.likes}
                                    </Button>
                                    <Button variant="subtle" c='gray' leftSection={<IconMessageCircle size={16} />}>
                                        {props.post.commentCount} comments
                                    </Button>
                                    <Button variant="subtle" c='gray' leftSection={<IconShare size={16} />}>
                                        Share
                                    </Button>
                                </Group>
                                {/*<Group gap={4}>*/}
                                {/*    <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">*/}
                                {/*        <IconMessageDots style={{width: '100%', height: '100%'}} stroke={1.5}/>*/}
                                {/*    </ActionIcon>*/}
                                {/*    <Text size={'xs'}>{props.post.commentCount}</Text>*/}
                                {/*</Group>*/}
                                {/*<Group gap={2}>*/}
                                {/*    <ActionIcon variant='transparent' color="gray" size="1.25rem" radius="0">*/}
                                {/*        <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>*/}
                                {/*    </ActionIcon>*/}
                                {/*    <Text size={'xs'}>{props.post.likes}</Text>*/}
                                {/*</Group>*/}
                            </Group>
                            <Group gap={10} pr={'lg'} mt={'lg'}>
                                <Text size={'xs'}>@{props.post.username}</Text>
                                <Text size={'xs'}>{props.post.postedDate}</Text>
                            </Group>
                        </Group>
                    </div>
                    <AspectRatio>
                        <Image src={props.post.postImgUrl} alt="Post image" h={'205'} w={'250'} className={classes.image} />
                    </AspectRatio>
                </Card>
            </Link>
        </Grid.Col>
    )
}