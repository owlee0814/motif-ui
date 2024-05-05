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
                    <Image
                        src={'https://media.discordapp.net/attachments/723908387032531015/1234884705791250502/image.png?ex=66325b80&is=66310a00&hm=cd2bba212ae74aff4f0aaace81baf4c6ce3e7a994a4f5fc8ca2b387b5f628e6f&=&format=webp&quality=lossless&width=2400&height=1184'}
                        h={450}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                    <br/>
                    <Text>
                        Orci dapibus ultrices in iaculis nunc sed. Neque volutpat ac tincidunt vitae semper. Amet facilisis magna etiam tempor orci eu lobortis. Orci a scelerisque purus semper eget duis at tellus at. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Vitae nunc sed velit dignissim sodales ut eu sem. Orci a scelerisque purus semper eget. Cursus sit amet dictum sit amet justo. Nibh sit amet commodo nulla.
                    </Text>
                    <br/>
                    <Grid>
                        <Grid.Col span={6}>
                            <Image
                                src={'https://media.discordapp.net/attachments/723908387032531015/1234890708637319219/IMG_4482.PNG?ex=66326118&is=66310f98&hm=0fea7cda57712090fec0433641311e8edc2a47aa652dd27ffa0eefad67800bb5&=&format=webp&quality=lossless&width=648&height=1402'}
                                h={400}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                            <Space h={'lg'}/>
                            <Image
                                src={'https://media.discordapp.net/attachments/723908387032531015/1234890710239543397/IMG_4480.PNG?ex=66326118&is=66310f98&hm=4ddc24744d5168eb2fc5591a2523f45abab03ddddb566865a9050ae64168ab5c&=&format=webp&quality=lossless&width=648&height=1402'}
                                h={400}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                src={'https://media.discordapp.net/attachments/723908387032531015/1234890709375389758/IMG_4481.PNG?ex=66326118&is=66310f98&hm=146ad70304380b335fbad2fff0c906f99a0977b642aa297e4560a715a3dd3541&=&format=webp&quality=lossless&width=648&height=1402'}
                                h={820}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    </>
    )
}