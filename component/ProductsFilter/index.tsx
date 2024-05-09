import {Button, Card, Center, Checkbox, Grid, Group, Input, NavLink, Space, Stack, Title} from "@mantine/core";
import React from "react";
import {ColorPickerIcon} from "../ColorPickerIcon/ColorPickerIcon";

export function ProductsFilter() {
    return (
        <>
            <Card radius={'xl'} mt={'4.7rem'}>
                <Center>
                <Title
                    size={'1.5rem'}
                    fw={800}
                    style={{
                        'padding-bottom': '1rem',
                    }}
                >
                    Categories
                </Title>
                </Center>
                <Group gap={0} mb={'sm'}>
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
            <Card radius={'xl'} mt={'lg'}>
                <Center>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            'padding-bottom': '1rem',
                        }}
                        mb={'xs'}
                    >
                        Brands
                    </Title>
                </Center>
                <Stack gap={25} mb={'md'}>
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
            <Card radius={'xl'} mt={'lg'}>
                <Center>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            'padding-bottom': '1rem',
                        }}
                    >
                        Colors
                    </Title>
                </Center>
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
            <Card radius={'xl'} mt={'lg'}>
                <Center>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            'padding-bottom': '0.5rem',
                        }}
                        mb={'xs'}
                    >
                        Price
                    </Title>
                </Center>
                <div style={{
                    width : '12.5rem',
                    paddingLeft: '8%',
                    paddingBottom: '1rem'
                }}>
                    <Input.Wrapper label="Min. Price" description="Input description">
                        <Input variant="filled" size="md" radius="lg" placeholder="$ 0.00" />
                    </Input.Wrapper>
                    <Space h='md'/>
                    <Input.Wrapper label="Max. Price" description="Input description">
                        <Input variant="filled" size="md" radius="lg" placeholder="$ 0.00" />
                    </Input.Wrapper>
                </div>
            </Card>
            <Card radius={'xl'} mt={'lg'}>
                <Center>
                    <Title
                        size={'1.5rem'}
                        fw={800}
                        style={{
                            'padding-bottom': '1rem',
                            'padding-top': '1rem'
                        }}
                    >
                        Discount
                    </Title>
                </Center>
                <Stack gap={25}>
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