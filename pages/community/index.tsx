import React from "react";
import {Grid, Container, Text, Card, Title, Space, Group, Badge, ActionIcon, NavLink, Select} from "@mantine/core";
import {JournalItem} from "../../component/JournalItem/JournalItem";
import {IconThumbUpFilled, IconMessageDots } from "@tabler/icons-react";
import {Post} from "./post";

export default function Home() {
    return (
        <>
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2}>
                        <Title
                            size={'1.5rem'}
                            fw={800}
                            style={{
                                'padding-bottom': '1rem',
                                'padding-top': '1rem'
                            }}
                        >
                            Motifs
                        </Title>

                        <Group gap={0}>
                            <NavLink fw={'600'}
                                label='All'>
                            </NavLink>
                            <NavLink fw={'600'}
                                label='Lounge'
                            />
                            <NavLink fw={'600'}
                                label='Sales & Deals'
                            />
                            <NavLink fw={'600'}
                                label='Brand Share'
                            />
                            <NavLink fw={'600'}
                                label='OOTDs'
                            />
                            <NavLink fw={'600'}
                                label='What I bought'
                            />
                            <NavLink fw={'600'}
                                label='Q&A'
                            />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={10}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Title>
                                All
                            </Title>
                            <Select
                                style={{'padding-top' : '10px'}}
                                placeholder="Hot"
                                data={['Hot', 'New', 'Liked (Desc)']}
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