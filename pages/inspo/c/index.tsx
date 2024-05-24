import React from "react";
import {Center, Container, Divider, Grid, Space, Text, Title} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
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
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <OotdCard/>
            </Grid.Col>
        );
    }

    return (
        <>
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
                <Title size={'1.5rem'} fw={700}>
                    Inspirations from you
                </Title>
                <Text size="sm" pt={'md'} pb={'md'}>
                    Discover fit pics from the community
                </Text>
                <Divider size="xl" pb={'lg'} />
                <Title size="1.25rem">Monthly Most Liked</Title>
                <Space h={'lg'}/>
                <Carousel draggable={false} align="start" slideGap="10" slideSize={{ base: '100%', md: '50%', lg: '25%' }} loop >
                    {topOotds}
                </Carousel>
                <Space h={'lg'}/>
                <Title size="1.25rem">Latest</Title>
                <Space h={'lg'}/>
                <Center>
                    <Grid gutter={'xs'}>
                        {ootds}
                    </Grid>
                </Center>
            </Container>
        </>
    )
}