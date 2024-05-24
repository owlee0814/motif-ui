import React from "react";
import {Button, Container, Grid, Group, Select, Space, TextInput} from "@mantine/core";
import {CommunityNavBar} from "../../../../component/CommunityNavBar/CommunityNavBar";
import {samplePosts} from "../../../../entities/Post";
import {PostCard} from "../../../../component/PostCard/PostCard";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
                <Grid gutter={'xl'}>
                    <Grid.Col span={3}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={9}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Select
                                style={{paddingTop: '10px'}}
                                placeholder="Hot"
                                data={['Hot', 'New', 'Likes']}
                                variant='unstyled'
                                w={'10%'}
                                comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
                            />
                            <Group justify={'flex-end'}>
                                <div style={{width: '15rem'}}>
                                    <TextInput
                                        variant="filled"
                                        size="md"
                                        radius="0"
                                        placeholder="Search"
                                    />
                                </div>
                                <Button variant="filled" size="sm" radius="0" bg={'black'} component={Link} href="../post/create">
                                    Create a Post
                                </Button>
                            </Group>
                        </Group>
                        <Space h={'1.45rem'}/>
                        <Grid gutter={15}>
                            {samplePosts.map((post, i) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}