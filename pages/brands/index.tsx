import {AppShell, Text, Grid, Image, NavLink, Title} from "@mantine/core";
import React from "react";

export default function Home() {
    return (
    <>
        <Grid>
            <Grid.Col span={2}>
                <NavLink
                    label='Brand A'
                />
                <NavLink
                    label='Brand B'
                />
            </Grid.Col>
            <Grid.Col span={10}>
                <Image
                    radius="md"
                    src={null}
                    h={450}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
                <br/>
                <Title>
                    BRAND NAME GOES HERE
                </Title>
                <Text>
                    Orci dapibus ultrices in iaculis nunc sed. Neque volutpat ac tincidunt vitae semper. Amet facilisis magna etiam tempor orci eu lobortis. Orci a scelerisque purus semper eget duis at tellus at. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae nunc sed velit dignissim sodales ut eu sem. Orci a scelerisque purus semper eget. Cursus sit amet dictum sit amet justo. Nibh sit amet commodo nulla.
                </Text>
                <br/>
                <Grid>
                    <Grid.Col span={6}>
                        <Image
                            radius="md"
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            radius="md"
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            radius="md"
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Image
                            radius="md"
                            src={null}
                            h={450}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
    </>
    )
}