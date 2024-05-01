import React from "react";
import {Anchor, Group, Image, Space, Text, ThemeIcon, Title} from "@mantine/core";
import Link from "next/link";
import {IconHeart} from "@tabler/icons-react";
import Product from "../../../entities/Product";

export function ProductListing(product: Product) {
    return (
        <>
            <Link href={'products/product/' + product.id}>
                <Image
                    src={product.imgSrc}
                    h={400}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
            </Link>

            <Group justify="space-between">
                <Anchor underline="never"
                        fw={700} c='black'
                        href={'brand'}
                        size={'sm'}
                >
                    {product.brandName}
                </Anchor>
                <Group justify="end" gap={0}>
                    <ThemeIcon variant="transparent" color="gray">
                        <IconHeart style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ThemeIcon>
                    <Text size={'xs'}>
                        {product.likeCounts}
                    </Text>
                </Group>
            </Group>

            <Group>
                <Anchor underline="never"
                        c='black'
                        href={'products/product'}
                        size={'xs'}
                >
                    {product.productName}
                </Anchor>
            </Group>

            <Space h='5'/>

            <Group gap={3}>
                <Title
                    fw={200}
                    size='0.9rem'
                >
                    ${product.currentPrice}
                </Title>
                <Title
                    fw={200}
                    size='0.9rem'
                    c='gray'
                >
                    ${product.originalPrice}
                </Title>
            </Group>
        </>
    );
}