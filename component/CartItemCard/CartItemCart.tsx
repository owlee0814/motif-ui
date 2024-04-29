import {Card, Center, Grid, Image, PaperProps, Text} from "@mantine/core";
import React from "react";

export function CartItemCart() {
    return (
        <Card shadow="sm" padding="lg" radius="md">
            <Grid>
                <Grid.Col span={3}>
                    <Image
                        radius="sm"
                        src={null}
                        h={180}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text>Brand A</Text>
                    <Text>Product Name</Text>
                    <Text>Color: </Text>
                    <Text>Size: </Text>
                    <Text>Product ID: </Text>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Center>
                        <Text>0.00</Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Card>
    )
}