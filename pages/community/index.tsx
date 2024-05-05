import React from "react";
import {Container, Grid, Group, Select, Space, Title} from "@mantine/core";
import {Post} from "./post";
import {CommunityNavBar} from "./CommunityNavBar";

export default function Home() {
    return (
        <>
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={9.5}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Title>
                                All
                            </Title>
                            <Select
                                style={{'padding-top' : '10px'}}
                                placeholder="Hot"
                                data={['Hot', 'New', 'Likes']}
                                variant='unstyled'
                                w={'10%'}
                                comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
                            />
                        </Group>
                        <Space h={'lg'}/>
                        <Grid>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}