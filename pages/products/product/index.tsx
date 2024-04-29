import React from "react";
import {
    Accordion,
    ActionIcon,
    Badge,
    Button,
    Container,
    Grid,
    Group,
    Image,
    Rating,
    Select,
    Space,
    Text,
    Title
} from "@mantine/core";
import { IconHeart} from "@tabler/icons-react";

export default function Product() {
    const groceries = [
        {
            emoji: '🍎',
            value: 'Apples',
            description:
                'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
        },
        {
            emoji: '🍌',
            value: 'Bananas',
            description:
                'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
        },
        {
            emoji: '🥦',
            value: 'Broccoli',
            description:
                'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
        },
    ];

    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            <Container size='xl'>
                <Space h='lg'/>
                <Group>
                    <Grid>
                        <Grid.Col span={2}>
                            <Image
                                radius="md"
                                src={null}
                                h={125}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <Title size={'1.25rem'}>Brand</Title>
                            <Text size={'sm'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            <Space h={'sm'}/>

                            <Button>Go to Brand</Button>
                        </Grid.Col>
                        <Grid.Col span={2}></Grid.Col>
                    </Grid>
                </Group>
                <Space h='xl'/>
                <Grid>
                    <Grid.Col span={6}>
                        <Image
                            radius="md"
                            src={null}
                            h={650}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Container size={'sm'}>
                            <hr/>
                            <Space h='sm'/>
                            <Title size={'1rem'}>Brand Name</Title>
                            <Group>
                                <Title size={'3rem'}>Name of a product</Title>
                                <ActionIcon variant="transparent" color="pink" size="xl" aria-label="Settings">
                                    <IconHeart style={{ width: '70%', height: '70%' }} stroke={1.5} />
                                </ActionIcon>
                            </Group>
                            <Space h='sm'/>
                            <Group>
                                <Title size={'1.5rem'}>$55.99</Title>
                                <Title c="gray" td="line-through" size={'1.5rem'} >$69.99</Title>
                                <Title c="red" size={'1.5rem'} >20%</Title>
                            </Group>

                            <Space h='xl'></Space>

                            <Group>
                                <Badge variant="outline" color="gray" radius="xs">#Best Seller</Badge>
                                <Badge variant="outline" color="gray" radius="xs">#Tee</Badge>
                                <Badge variant="outline" color="gray" radius="xs">#Sale</Badge>
                                <Badge variant="outline" color="gray" radius="xs">#Men</Badge>
                                <Badge variant="outline" color="gray" radius="xs">#SS24</Badge>
                            </Group>
                            <Space h='xs'></Space>
                            <Rating defaultValue={4} size="sm" />
                            <Space h='sm'></Space>




                            <Space h='md'/>
                            <Select
                                label="Select Color"
                                placeholder="Pick value"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                            />
                            <Space h='md'/>
                            <Select
                                label="Select Size"
                                placeholder="Pick value"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                            />
                            <Space h='xl'/>

                            <Grid>
                                <Grid.Col span={6}>
                                    <Button variant="default" fullWidth>Add to Cart</Button>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Button variant="default" fullWidth>Buy Now</Button>
                                </Grid.Col>
                            </Grid>

                            <Space h='xl'/>
                            <Accordion>
                                {items}
                            </Accordion>
                        </Container>
                    </Grid.Col>
                </Grid>
                <Space h='md'/>
                <Text c={'gray'} size={'0.8rem'}>Model is 184cm wearing a large size</Text>
                <Space h='md'/>
                <hr/>
                <Space h='sm'/>
                <Title>Styles</Title>
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
            </Container>
        </>
    )
}