import {Container, Grid, Group, Image, NavLink, Space, Text, Title, Transition} from "@mantine/core";
import React, {useEffect, useState} from "react";

export default function Home() {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        setOpened(true)
    }, []);

    return (
    <>
        <Container size={'98%'}>
            <Grid>
                <Grid.Col span={2}>
                    <Title
                        size={'2rem'}
                        fw={800}
                        style={{
                            'padding-bottom': '1rem',
                            'padding-top': '1rem'
                        }}
                        mb={'md'}
                    >
                        Brands
                    </Title>
                    <Group gap={0}>
                        <NavLink fw={'400'} label='Brand A' href={''}/>
                        <NavLink fw={'400'} label='Brand B' href={''}/>
                        <NavLink fw={'400'} label='Brand C' href={''}/>
                        <NavLink fw={'400'} label='Brand D' href={''}/>
                    </Group>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Title mt={'md'}>
                        Reverié
                    </Title>
                    {/*<Image*/}
                    {/*    src={''}*/}
                    {/*    h={450}*/}
                    {/*    fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-yu5AP0WWeaVOEJWtPJOQ2.jpeg"*/}
                    {/*/>*/}
                    <br/>
                    <Text fw={'lighter'} mr={'15%'}>
                        Amet facilisis magna etiam tempor orci eu lobortis. Orci a scelerisque purus semper eget duis at tellus at. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae nunc sed velit dignissim sodales ut eu sem. Orci a scelerisque purus semper eget. Cursus sit amet dictum sit amet justo. Nibh sit amet commodo nulla.
                    </Text>
                    <br/>
                    <Grid>
                        <Grid.Col span={6}>
                            <Transition
                                mounted={opened}
                                transition={"fade-up"}
                                duration={1250}
                                timingFunction="ease"
                                keepMounted
                            >
                                {(transitionStyle) => (
                                    <Image
                                        src={''}
                                        h={800}
                                        fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/image_fx_photorealistic__wide_angle_shot_male_model.jpg"
                                        style={{ ...transitionStyle }}
                                    />
                                )}
                            </Transition>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Transition
                                mounted={opened}
                                transition={"slide-left"}
                                duration={1500}
                                timingFunction="ease"
                                keepMounted
                            >
                                {(transitionStyle) => (
                                    <Image
                                        src={''}
                                        h={800}
                                        fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-lJw8QzImtAhJsljLJyrk9.jpeg"
                                        style={{ ...transitionStyle }}
                                    />
                                )}
                            </Transition>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Transition
                                mounted={opened}
                                transition={"slide-right"}
                                duration={1500}
                                timingFunction="ease"
                                keepMounted
                            >
                                {(transitionStyle) => (
                                    <Image
                                        src={''}
                                        h={800}
                                        style={{ ...transitionStyle }}
                                        fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-1jV9exL0inPXanCC8yoNF.jpeg"
                                    />
                                )}
                            </Transition>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Transition
                                mounted={opened}
                                transition={"fade-left"}
                                duration={2000}
                                timingFunction="ease"
                                keepMounted
                            >
                                {(transitionStyle) => (
                                    <Image
                                        src={''}
                                        h={800}
                                        fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-yu5AP0WWeaVOEJWtPJOQ2.jpeg"
                                        style={{ ...transitionStyle }}
                                    />
                                )}
                            </Transition>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    </>
    )
}