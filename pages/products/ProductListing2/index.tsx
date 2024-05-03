import React from "react";
import {Card, Grid, Image, Space, Text, Title} from "@mantine/core";
import Product from "../../../entities/Product";
import Link from "next/link";

interface ProductListing2 {
    product: Product,
    rank: number
}

export function ProductListing2(props: ProductListing2) {
    return (
        <>
            <Space h={'sm'}/>
            <Card padding="md" radius="0" withBorder>
                <Link
                    style={{
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                    href={'products/product/' + props.product.id}
                >
                    <Grid>
                        <Grid.Col span={1.25}>
                            <Title style={{
                                'margin': '0',
                                'position': 'absolute',
                                'top': '50%',
                                'transform': 'translateY(-50%)',
                            }} size={'2rem'}>{props.rank}.</Title>
                        </Grid.Col>

                        <Grid.Col span={8.75}>
                            <div style={{
                                'margin': '0',
                                'position': 'absolute',
                                'top': '50%',
                                'transform': 'translateY(-50%)',
                            }}>
                                <Text size={'md'} fw={'bold'}>{props.product.brandName}</Text>
                                <Text size={'sm'}>{props.product.productName}</Text>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={2}>
                            <Image
                                src={props.product.imgSrc}
                                h={60}
                                w={60}
                                radius={"xs"}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            />
                        </Grid.Col>
                    </Grid>
                </Link>
            </Card>
        </>
    );
}