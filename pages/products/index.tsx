import React from "react";
import {Container, Grid, Group, Select, Space, Text} from "@mantine/core";
import {ProductListing} from "../../component/ProductListing";
import {ProductsFilter} from "../../component/ProductsFilter";
import {sampleProducts} from "../../entities/Product";

export default function Home() {
    const products = [];


    for (let i = 0; i < sampleProducts.length; i++) {
        products.push(
            <Grid.Col span={3}>
                <ProductListing product={sampleProducts[i]}/>
            </Grid.Col>
        );
    }

    return (
        <>
            <Container size="100%">
                <Grid>
                    <Grid.Col span={1.95} >
                        <ProductsFilter/>
                    </Grid.Col>
                    <Grid.Col span={0.1}/>
                    <Grid.Col span={9.9}>

                        {/*<Space h={'lg'}/>*/}
                        {/*<Group>*/}
                        {/*    <Group gap={'5'}>*/}
                        {/*        <Text fw={'bold'} size={'sm'}>Brands: </Text>*/}
                        {/*        <Badge bg={'blue'}>Brand A</Badge>*/}
                        {/*        <Badge bg={'blue'}>Brand B</Badge>*/}
                        {/*    </Group>*/}
                        {/*    <Group gap={'5'}>*/}
                        {/*        <Text fw={'bold'} size={'sm'}>Category: </Text>*/}
                        {/*        <Badge bg={'red'}>Shirts</Badge>*/}
                        {/*        <Badge bg={'red'}>Shoes</Badge>*/}
                        {/*    </Group>*/}
                        {/*    <Group gap={'5'}>*/}
                        {/*        <Text fw={'bold'} size={'sm'}>Color: </Text>*/}
                        {/*        <Badge bg={'violet'}>Red</Badge>*/}
                        {/*    </Group>*/}
                        {/*</Group>*/}

                        <Space h={'lg'}/>
                        <Group justify={'space-between'}>
                            <Text>100 items</Text>
                            <Group gap={10}>
                                <Select
                                    placeholder="Recommended"
                                    data={['Hot', 'New', 'Price (Asc)', 'Price (Desc)']}
                                    variant='unstyled'
                                    comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
                                />
                            </Group>

                        </Group>
                        <Space h={'lg'}/>
                        <Grid>
                            {products}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}