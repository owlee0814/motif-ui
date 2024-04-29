import React from "react";
import {Grid, Group, Image, Space, Title, Text} from "@mantine/core";

export default function Home() {
    return (
        <>
            <Grid>
                <Grid.Col span={8}>
                    <Grid>
                        <Grid.Col span={8}>
                            <hr/>
                        </Grid.Col>
                    </Grid>

                    <Space h='xl'/>
                    <Image
                        radius="md"
                        src={null}
                        h={450}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                    <Space h='xl'/>

                    <Title>
                        Community OOTDs
                    </Title>
                    <hr/>
                    <Space h='sm'/>

                    <Grid>

                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={null}
                                h={450}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={null}
                                h={450}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                radius="md"
                                src={null}
                                h={450}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>

                <Grid.Col span={4}>
                    <hr/>
                    <Title>Latest Post</Title>
                    <Space h='xl'/>
                    <Group>
                        <Image
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat...
                        </Text>
                    </Group>

                    <Space h='xl'/>

                    <Group>
                        <Image
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequa...
                        </Text>
                    </Group>
                </Grid.Col>
            </Grid>
        </>

    )
}