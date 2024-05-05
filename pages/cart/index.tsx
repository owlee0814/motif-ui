import React from "react";
import {
    Button,
    Card,
    Center,
    Grid,
    Group,
    Title,
    Text,
    Space,
    Stack,
    Divider
} from "@mantine/core";
import {CartItemCart} from "../../component/CartItemCard/CartItemCart";

export default function Cart() {
    return (
    <>
        <Space h={'2rem'}/>
        <Center>
            <Title>SHOPPING CART</Title>

        </Center>
        <Space h={'6rem'}/>
        <Grid>
            <Grid.Col span={8}>

                <Stack
                    bg="var(--mantine-color-body)"
                    align="stretch"
                    justify="center"
                    gap="md"
                >
                    <Grid>
                        <Grid.Col span={9}>
                            <Center>Product</Center>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Center>Price</Center>
                        </Grid.Col>
                    </Grid>

                    <CartItemCart/>
                    <CartItemCart/>
                    <CartItemCart/>

                </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
                <Card shadow="sm" padding="lg" >

                    <Group justify="space-between" mt="xl" mb="xs">
                        <Title size='24'>Order Summary</Title>
                    </Group>

                    <>
                        <Space h={'2rem'}/>
                        <Divider/>
                    </>

                    <Group justify="space-between" mt="xl" mb="xs">
                        <Title size='14'>Subtotal</Title>
                        <Text fw={500}>0.00</Text>
                    </Group>
                    <Group justify="space-between" mt="xs" mb="xs">
                        <Title size='14'>Shipping</Title>
                        <Text fw={500}>0.00</Text>

                    </Group>
                    <Group justify="space-between" mt="xs" mb="xs">
                        <Title size='14'>Tax</Title>
                        <Text fw={500}>0.00</Text>
                    </Group>

                    <>
                        <Space h={'1rem'}/>
                        <Divider/>
                    </>

                    <Group justify="space-between" mt="lg" mb="xs">
                        <Title size='xs'>Total</Title>
                        <Text fw={500}>0.00</Text>

                    </Group>

                    <Button color="blue" fullWidth mt="md" >
                        Checkout
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
    </>
    )
}