import {Button, Card, Center, Checkbox, Group, Input, NavLink, Stack, Title} from "@mantine/core";
import React from "react";
import {ColorPickerIcon} from "../ColorPickerIcon/ColorPickerIcon";
import classes from "./ProductsFilter.module.css";

export function ProductsFilter() {
    return (
        <>
            <Card mt={'4.7rem'}>
                <Title
                    size={'1.5rem'}
                    fw={800}
                    style={{ paddingBottom: '1rem' }}
                >
                    Categories
                </Title>

                <Group gap={0} mb={'sm'} ml={'sm'}>
                    <NavLink
                        label='category 1'
                    />
                    <NavLink
                        label='category 2'
                    />
                    <NavLink
                        label='category 3'
                    />
                    <NavLink
                        label='category 4'
                    />
                    <NavLink
                        label='category 5'
                    />
                    <NavLink
                        label='category 6'
                    />
                </Group>
            </Card>
            <Card mt={'lg'}>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{paddingBottom: '1rem'}}
                        mb={'xs'}
                    >
                        Brands
                    </Title>
                <Stack gap={25} mb={'md'} ml={'sm'}>
                    <Checkbox
                        label='Brand A'
                    />
                    <Checkbox
                        label='Brand B'
                    />
                    <Checkbox
                        label='Brand C'
                    />
                    <Checkbox
                        label='Brand D'
                    />
                    <Checkbox
                        label='Brand E'
                    />
                    <Checkbox
                        label='Brand F'
                    />
                </Stack>
            </Card>
            <Card mt={'lg'}>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{ paddingBottom: '1rem' }}
                    >
                        Colors
                    </Title>
                <Center>
                    <Group gap={10} w={'80%'} mb={'md'}>
                        <ColorPickerIcon bg='red' size="lg" radius="xl"/>
                        <ColorPickerIcon bg='orange' size="lg" radius="xl" />
                        <ColorPickerIcon bg='yellow'  size="lg" radius="xl" />
                        <ColorPickerIcon bg='violet'  size="lg" radius="xl" />
                        <ColorPickerIcon bg='indigo'  size="lg" radius="xl" />
                        <ColorPickerIcon bg='pink' size="lg" radius="xl" />
                        <ColorPickerIcon bg='green' size="lg" radius="xl" />
                        <ColorPickerIcon bg='navy' size="lg" radius="xl" />
                        <ColorPickerIcon bg='white' size="lg" radius="xl" />
                        <ColorPickerIcon bg='gray' size="lg" radius="xl" />
                        <ColorPickerIcon bg='black'  size="lg" radius="xl" />
                    </Group>
                </Center>
            </Card>
            <Card mt={'lg'}>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            paddingBottom: '0.5rem',
                        }}
                        mb={'xs'}
                    >
                        Price
                    </Title>
                <Center>
                <Stack mb={'md'}>
                    <Input.Wrapper label="Min. Price" description="Input description" ml={'sm'} mr={'sm'}>
                        <Input variant="filled" size="md" radius="lg" placeholder="$ 0.00" />
                    </Input.Wrapper>
                    <Input.Wrapper label="Max. Price" description="Input description" ml={'sm'} mr={'sm'}>
                        <Input variant="filled" size="md" radius="lg" placeholder="$ 0.00" />
                    </Input.Wrapper>
                </Stack>
                </Center>
            </Card>
            <Card mt={'lg'}>

                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            paddingBottom: '1rem',
                            paddingTop: '1rem'
                        }}
                    >
                        Discount
                    </Title>

                <Stack gap={25} ml={'sm'} mt={'sm'}>
                    <Checkbox label='Up To 25%' />
                    <Checkbox label='Up To 50%' />
                    <Checkbox label='Up to 75%' />
                    <Checkbox label='Clearance' />
                </Stack>
                <Center>
                    <Button w={'80%'} variant="filled" size="md" radius="lg" bg={'black'} mt={'xl'} mb={'sm'}>
                        Clear
                    </Button>
                </Center>
            </Card>
        </>
    )
};