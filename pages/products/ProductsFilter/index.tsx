import {ActionIcon, Button, Checkbox, Container, Grid, Group, Input, NavLink, Space, Stack, Title} from "@mantine/core";
import React from "react";
import {ColorPickerIcon} from "../ColorPickerIcon/ColorPickerIcon";

export function ProductsFilter() {
    return (
        <>
            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '1rem',
                    'padding-top': '1rem'
                }}
            >
                Categories
            </Title>

            <Group gap={0}>
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

            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '1rem',
                    'padding-top': '1rem'
                }}
            >
                Brands
            </Title>
            <Stack gap={25}>
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

            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '1rem',
                    'padding-top': '1rem'
                }}
                mt={'md'}
            >
                Colors
            </Title>
            <Grid>
                <Grid.Col span={10}>
                    <Group gap={8}>
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
                </Grid.Col>
            </Grid>

            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '0.5rem',
                    'padding-top': '1rem'
                }}
                mt={'lg'}
            >
                Price
            </Title>

            <div style={{'width' : '12rem'}}>
                <Input.Wrapper label="Min. Price" description="Input description">
                    <Input variant="filled" size="md" radius="xs" placeholder="$ 0.00" />
                </Input.Wrapper>
                <Space h='sm'/>
                <Input.Wrapper label="Max. Price" description="Input description">
                    <Input variant="filled" size="md" radius="xs" placeholder="$ 0.00" />
                </Input.Wrapper>
            </div>

            <Space h='sm'/>

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
            <Stack gap={25}>
                <Checkbox label='Up To 25%' />
                <Checkbox label='Up To 50%' />
                <Checkbox label='Up to 75%' />
                <Checkbox label='Clearance' />
            </Stack>

            <Button w={'80%'} variant="filled" size="md" radius="xs" bg={'black'} mt={50}>
                Clear
            </Button>
        </>
    )
};