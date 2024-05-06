import {Container, Grid, Group, Image, NavLink, Space, Text, Title} from "@mantine/core";
import React from "react";

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
                    <Text>
                        Orci dapibus ultrices in iaculis nunc sed. Neque volutpat ac tincidunt vitae semper. Amet facilisis magna etiam tempor orci eu lobortis. Orci a scelerisque purus semper eget duis at tellus at. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae nunc sed velit dignissim sodales ut eu sem. Orci a scelerisque purus semper eget. Cursus sit amet dictum sit amet justo. Nibh sit amet commodo nulla.
                    </Text>
                    <br/>
                    <Grid>
                        <Grid.Col span={6}>
                            <Image
                                src={''}
                                h={800}
                                fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/image_fx_photorealistic__wide_angle_shot_male_model.jpg"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                src={''}
                                h={800}
                                fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-lJw8QzImtAhJsljLJyrk9.jpeg"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                src={''}
                                h={800}
                                fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-1jV9exL0inPXanCC8yoNF.jpeg"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                src={''}
                                h={800}
                                fallbackSrc="https://motif-mvp-bucket.s3.amazonaws.com/brands/img-yu5AP0WWeaVOEJWtPJOQ2.jpeg"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    </>
    )
}