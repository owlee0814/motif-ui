import React from "react";
import {
    Accordion,
    ActionIcon,
    Badge,
    Box,
    Button,
    Center,
    Container,
    Grid,
    Group,
    Image, Paper,
    Rating,
    Select,
    Space,
    Text,
    Title
} from "@mantine/core";
import { IconHeart, IconShoppingCart, IconShare } from "@tabler/icons-react";
import { Inter, Tapestry } from 'next/font/google'

const inter = Tapestry({weight: '400', subsets: ['latin'] })

export default function Product() {
    const groceries = [
        {
            value: 'Product Info',
            description:
                'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
        },
        {
            value: 'Size Info',
            description:
                'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
        },
        {
            value: 'Delivery Info',
            description:
                'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
        }
    ];

    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));




    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <Container size='xl'>
                <Space h='lg'/>
                <Group>
                    <Grid>
                        <Grid.Col span={1.5}>
                            <div style={{'vertical-align': 'middle'}}>
                                <Image
                                    radius="md"
                                    src={''}
                                    h={125}
                                    w={125}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <Title fw={1000} size={'1.25rem'}>Brand</Title>
                            <Text size={'sm'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            <Space h={'sm'}/>
                            <Button c='black' color='gray' size={'xs'} radius={0} variant={'outline'}>Go to Brand</Button>
                        </Grid.Col>
                        <Grid.Col span={3.5}></Grid.Col>
                    </Grid>
                </Group>
                <Space h='xl'/>
                <Grid>
                    <Grid.Col span={6}>
                        <Center>
                            <Image
                                src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                h={650}
                                w={"auto"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Center>

                        <Center>
                            <Group>
                                <Image
                                    src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    h={"auto"}
                                    w={100}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                                <Image
                                    src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    h={"auto"}
                                    w={100}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                                <Image
                                    src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    h={"auto"}
                                    w={100}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                                <Image
                                    src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    h={"auto"}
                                    w={100}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                                <Image
                                    src={'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    h={"auto"}
                                    w={100}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                            </Group>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Container size={'sm'}>
                            <Group justify="flex-end">
                                <Text c='blue' size={'1rem'}>MOTIF EXCLUSIVE</Text>
                            </Group>
                            <hr/>
                            <Space h='sm'/>

                            <Group justify="space-between">
                                <Title size={'1.25rem'}>Fitom</Title>
                                <ActionIcon variant="transparent" color="gray" size="lg">
                                    <IconShare style={{width: '70%', height: '70%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>

                            <Title size={'2rem'}>Heavyweight Long Sleeve Tee</Title>

                            <Space h='sm'/>
                            <Text c="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut lab</Text>

                            <Space h='sm'/>
                            <Text c="gray" fw={250} size={'1.25rem'}>$69.99</Text>
                            <Space h='xs'/>
                            <Group>
                                <Text size={'1.5rem'}>$55.99</Text>
                                <Text c="red" size={'1.5rem'}>20%</Text>
                            </Group>

                            <Space h='xs'></Space>
                            <Group>
                                <Rating color="rgba(0, 0, 0, 1)" defaultValue={4} size="xs"/>
                                <Text> 2 Reviews </Text>
                            </Group>

                            <Space h='sm'></Space>

                            <hr color='#D3D3D3'/>
                            <Accordion multiple={true}>
                                {items}
                            </Accordion>
                            <Space h='xl'/>
                            <hr color='#D3D3D3'/>

                            <Space h='md'/>
                            <Select
                                label="Color"
                                placeholder="Pick value"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                                radius={0}
                            />
                            <Space h='md'/>
                            <Select
                                label="Size"
                                placeholder="Pick value"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                                radius={0}
                            />
                            <Space h='xl'/>

                            <Grid>
                                <Grid.Col span={9}>
                                    <Button radius={0} size="xl" color="rgba(0, 0, 0, 1)" fullWidth>Check Out</Button>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Group>
                                        <ActionIcon variant="outline" color="gray" size="3.75rem" radius="0">
                                            <IconHeart style={{width: '45%', height: '45%'}} stroke={1.5}/>
                                        </ActionIcon>
                                        <ActionIcon variant="outline" color="gray" size="3.75rem" radius="0">
                                            <IconShoppingCart style={{width: '45%', height: '45%'}} stroke={1.5}/>
                                        </ActionIcon>
                                    </Group>
                                </Grid.Col>
                            </Grid>


                        </Container>
                    </Grid.Col>
                </Grid>
                <Space h='md'/>
                <Group>
                    <Badge variant="outline" color="gray" radius="xs">#Best Seller</Badge>
                    <Badge variant="outline" color="gray" radius="xs">#Tee</Badge>
                    <Badge variant="outline" color="gray" radius="xs">#Sale</Badge>
                    <Badge variant="outline" color="gray" radius="xs">#Men</Badge>
                    <Badge variant="outline" color="gray" radius="xs">#SS24</Badge>
                </Group>
                <Space h='md'/>
                <hr/>
                <Space h='sm'/>
                <Title fw={'200'}>Styles</Title>
                <Space h='xl'/>
                <Grid>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={350}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                </Grid>
                <Space h='xl'/>
                <hr/>
                <Space h='xl'/>

                <Image
                    radius="md"
                    src={null}
                    h={1000}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
                <Space h='xl'/>
                <Image
                    radius="md"
                    src={null}
                    h={1000}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />

                <Space h='lg'/>
                <hr/>
                <Space h='lg'/>
                <Title size={'2rem'} fw={'200'}>More By Fitom</Title>
                <Space h='lg'/>
                <Grid>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={200}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={200}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={200}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Image
                            radius="md"
                            src={null}
                            h={200}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                </Grid>
                <Space h='xl'/>
                <Title size={'2rem'} fw={'200'}>Reviews</Title>
                <Space h='xs'/>
                <Rating color="rgba(0, 0, 0, 1)" defaultValue={4} size="md"/>
                <Space h='xs'/>
                <Title>TBD</Title>
            </Container>
        </>
    )
}