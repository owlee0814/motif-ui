import React from "react";
import {Grid, GridCol, Image, Title, Text, Space, Badge, Group, ActionIcon, ThemeIcon, Center, Card} from "@mantine/core";
import Link from "next/link";
import {IconHeart} from "@tabler/icons-react";

export function ProductListing2() {
    return (
        <>
            <Card padding="xs" radius="lg" bg={'rgb(221,221,221)'}>
            <Link href='products/product'>
                <Image
                    src={null}
                    h={400}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
            </Link>

            <Space h='xs'/>
            <Group justify="center">
                <Text fw={800} size={'xs'}>
                    Brand
                </Text>
            </Group>
            <Space h='xs'/>
            <Group justify="center">
                <Text
                    size={'xs'}
                >
                    Name of listing
                </Text>
            </Group>

            <Group justify="center">
                <Title
                    fw={200}
                    size='0.9rem'
                >
                    $80
                </Title>
            </Group>
            </Card>
        </>
    );
}