import React, {useEffect} from "react";
import {Button, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core";

import {usePathname} from "next/navigation";
import {CommunityNavBar} from "../../../../component/CommunityNavBar/CommunityNavBar";
import {samplePosts} from "../../../../entities/Post";
import {PostCard} from "../../../../component/PostCard/PostCard";
import {sampleCommunities} from "../../../../entities/Community";

export default function Home() {


    return (
        <>
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2} style={{position: 'fixed'}}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={2.1}/>
                    <Grid.Col span={9.9}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Select
                                style={{'padding-top': '10px'}}
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
                                        radius="xl"
                                        placeholder="Search"
                                    />
                                </div>
                                <Button variant="filled" size="sm" radius="xl" bg={'black'}>Create a Post</Button>
                            </Group>
                        </Group>
                        <Space h={'1.45rem'}/>
                        <Grid>
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