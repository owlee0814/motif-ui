import React from "react";
import {
    Accordion,
    ActionIcon,
    Badge,
    Button,
    Center,
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
import {IconHeart, IconShare, IconShoppingCart} from "@tabler/icons-react";
import {Tapestry} from 'next/font/google'
import Product, {sampleProducts} from "../../../../entities/Product";
import {router} from "next/client";
import {ProductListing3} from "../../ProductListing3";

const inter = Tapestry({weight: '400', subsets: ['latin']})

export default function ProductDetail() {
    const product : Product = sampleProducts[Number(router.query.id) - 1]
    const productPhotos = [];
    const stylePhotos = [];

    for (let i = 0; i < 5; i++) {
        productPhotos.push(
            <Image
                src={product.imgSrc}
                h={125}
                w={100}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
        );
    }

    for (let i = 0; i < 6; i++) {
        stylePhotos.push(
            <Grid.Col span={2}>
                <Image
                    src={null}
                    h={350}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
            </Grid.Col>
        );
    }

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
                            <div style={{verticalAlign: 'middle'}}>
                                <Image
                                    src={'https://media.discordapp.net/attachments/723908387032531015/1234708378853310464/image.png?ex=6631b749&is=663065c9&hm=cecd757c1d8bb10e792c0f5f7918fdb3e192790dcc34e87ba9012ab24a013cd8&=&format=webp&quality=lossless&width=752&height=700'}
                                    h={125}
                                    w={125}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <Title fw={1000} size={'1.25rem'}>
                                {product.brandName}
                            </Title>
                            <Text size={'sm'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            <Space h={'sm'}/>
                            <Button color='gray' size={'xs'} radius={0} variant={'outline'}>
                                Go to Brand
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={3.5}></Grid.Col>
                    </Grid>
                </Group>
                <Space h='xl'/>
                <Grid>
                    <Grid.Col span={6}>
                        <Center>
                            <Image
                                src={product.imgSrc}
                                h={650}
                                w={"auto"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Center>
                        <Space h={'sm'}/>
                        <Center>
                            <Group>
                                {productPhotos}
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
                                <Title size={'1.25rem'}>
                                    {product.brandName}
                                </Title>
                                <ActionIcon variant="transparent" color="gray" size="lg">
                                    <IconShare style={{width: '70%', height: '70%'}} stroke={1.5}/>
                                </ActionIcon>
                            </Group>

                            <Title size={'2rem'}>{sampleProducts[Number(router.query.id) - 1].productName}</Title>

                            <Space h='sm'/>
                            <Text c="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut lab</Text>

                            <Space h='sm'/>
                            {
                                product.originalPrice > product.currentPrice ?
                                <Text c="gray" fw={250} size={'1.25rem'}>
                                    $ {product.originalPrice.toFixed(2)}
                                </Text> : ''
                            }
                            <Space h='xs'/>
                            <Group>
                                <Text size={'1.5rem'}>
                                    $ {product.currentPrice.toFixed(2)}
                                </Text>
                                {
                                    product.originalPrice > product.currentPrice ?
                                    <Text c="red" size={'1.5rem'}>
                                        {100 - (product.currentPrice * 100 / product.originalPrice)}%
                                    </Text> : ''
                                }
                            </Group>

                            <Space h='xs'></Space>
                            <Group>
                                <Rating color="rgba(0, 0, 0, 1)" defaultValue={4} size="xs"/>
                                <Text> 2 Reviews </Text>
                            </Group>

                            <Space h='sm'></Space>

                            <hr color='#D3D3D3'/>
                            <Space h='lg'></Space>
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
                    {stylePhotos}
                </Grid>
                <Space h='xl'/>
                <hr/>
                <Space h='xl'/>

                <Image
                    src={null}
                    h={1000}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
                <Space h='xl'/>
                <Image
                    src={null}
                    h={1000}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
                <Space h='lg'/>
                <hr/>
                <Space h='lg'/>
                <Title size={'2rem'} fw={'200'}>
                    More By {product.brandName}
                </Title>
                <Space h='lg'/>
                <Grid>
                    <Grid.Col span={2}>
                        <ProductListing3/>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <ProductListing3/>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <ProductListing3/>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <ProductListing3/>
                    </Grid.Col>
                </Grid>
                <Space h='xl'/>
                <Title size={'2rem'} fw={'200'}>Reviews</Title>
                <Space h='xs'/>
                <Rating color="rgba(0, 0, 0, 1)" defaultValue={4} size="md"/>
                <Space h='xl'/>
                <Title>TBD</Title>
            </Container>
        </>
    )
}