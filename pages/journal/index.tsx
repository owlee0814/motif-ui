import React from "react";
import {Grid, Container} from "@mantine/core";
import {JournalItem} from "../../component/JournalItem/JournalItem";

export default function Home() {
    return (
    <>
        <Container size={'xl'}>
            <Grid>
                <Grid.Col span={6}>
                    <JournalItem/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <JournalItem/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <JournalItem/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <JournalItem/>
                </Grid.Col>
            </Grid>
        </Container>
    </>
    )
}