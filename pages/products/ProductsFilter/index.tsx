import {ActionIcon, Button, Container, Grid, Group, Input, NavLink, Space, Title} from "@mantine/core";
import React from "react";

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
            <Group gap={0}>
                <NavLink
                    label='Brand A'
                />
                <NavLink
                    label='Brand B'
                />
                <NavLink
                    label='Brand C'
                />
                <NavLink
                    label='Brand D'
                />
                <NavLink
                    label='Brand E'
                />
                <NavLink
                    label='Brand F'
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
                Colors
            </Title>
            <Grid>
                <Grid.Col span={10}>
                    <Group gap={8}>
                        <ActionIcon bg='red' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='orange' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='yellow' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='violet' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='indigo' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='pink' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='green' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='navy' variant="filled" size="lg" radius="xl" />
                        <ActionIcon variant="default" size="lg" radius="xl" />
                        <ActionIcon bg='gray' variant="filled" size="lg" radius="xl" />
                        <ActionIcon bg='black' variant="filled" size="lg" radius="xl" />
                    </Group>
                </Grid.Col>
            </Grid>

            <Space h='sm'/>
            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '0.5rem',
                    'padding-top': '1rem'
                }}
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
            <Group gap={0}>
                <NavLink
                    label='Up To 25%'
                />
                <NavLink
                    label='Up To 50%'
                />
                <NavLink
                    label='Up to 75%'
                />
                <NavLink
                    label='Clearance'
                />
            </Group>

            <Space h='xl'/>
            <Button fullWidth variant="filled" size="md" radius="xs" bg={'black'}>
                Clear
            </Button>
        </>
    )
};