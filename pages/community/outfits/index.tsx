import React from "react";
import {ActionIcon, Container, Grid, Group, Space, Title} from "@mantine/core";
import {CommunityNavBar} from "../../../component/CommunityNavBar/CommunityNavBar";
import {Carousel} from "@mantine/carousel";
import {IconPlus} from "@tabler/icons-react";
import OotdCard from "../../../component/OotdCard/OotdCard";

export default function index() {
    const topOotds = [];
    const ootds = [];

    for (let i = 0; i < 10; i++) {
        topOotds.push(
            <Carousel.Slide>
                <OotdCard/>
            </Carousel.Slide>
        );
    }

    for (let i = 0; i < 12; i++) {
        ootds.push(
            <Grid.Col span={3}>
                <OotdCard/>
            </Grid.Col>
        );
    }

    return (
        <>
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2} style={{position: 'fixed'}}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={2}/>
                    <Grid.Col span={9.5}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Title>
                                OOTDs
                            </Title>
                            <ActionIcon size="md" bg={'black'} variant="filled">
                                <IconPlus stroke={3} />
                            </ActionIcon>
                        </Group>
                        <Space h={'xl'}/>
                        <Group>
                            <Title size={'1.5rem'}>TOP Monthly</Title>
                        </Group>
                        <Space h={'lg'}/>
                        <Carousel draggable={false} align="start" slideGap="md" slideSize="25%" loop >
                            {topOotds}
                        </Carousel>
                        <Space h={'xl'}/>
                        <Title size={'1.5rem'}>Latest</Title>
                        <Space h={'lg'}/>
                        <Grid>
                            {ootds}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}