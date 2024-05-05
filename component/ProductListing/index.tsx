import React from "react";
import {Anchor, Group, Image, Space, Text, ThemeIcon, Title} from "@mantine/core";
import Link from "next/link";
import {IconHeart} from "@tabler/icons-react";
import Product from "../../entities/Product";

interface ProductListingProps {
    product: Product
}

export function ProductListing(props: ProductListingProps) {
    return (
        <>
            <Link href={'products/' + props.product.id}>
                <Image
                    src={props.product.imgSrc}
                    h={400}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
            </Link>

            <Group justify="space-between">
                <Anchor underline="never"
                        fw={700}
                        style={{color : 'inherit'}}
                        href={'brand'}
                        size={'sm'}
                >
                    {props.product.brandName}
                </Anchor>
                <Group justify="end" gap={0}>
                    <ThemeIcon variant="transparent" color="gray">
                        <IconHeart style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ThemeIcon>
                    <Text size={'xs'}>
                        {props.product.likeCounts}
                    </Text>
                </Group>
            </Group>

            <Group>
                <Anchor underline="never"
                        style={{color : 'inherit'}}
                        href={'products/product'}
                        size={'xs'}
                >
                    {props.product.productName}
                </Anchor>
            </Group>

            <Space h='5'/>

            <Group gap={3}>
                <Title
                    fw={200}
                    size='0.9rem'
                >
                    ${props.product.currentPrice}
                </Title>
                <Title
                    fw={200}
                    size='0.9rem'
                    c='gray'
                >
                    ${props.product.originalPrice}
                </Title>
            </Group>
        </>
    );
}