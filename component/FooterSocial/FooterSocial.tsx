import {Container, Group, ActionIcon, rem, Title, Text} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';
import React from "react";

export function FooterSocial() {
    return (
        <Container fluid>
            <Group justify={'end'}>



                <Group gap={0} className={classes.links}>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{width: rem(22), height: rem(22)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{width: rem(22), height: rem(22)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{width: rem(24), height: rem(24)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </Group>
           
            <Group justify={'space-between'}>
                <Title style={{
                    'font-size': '1.25rem',
                    'border-radius' : 'var(--mantine-radius-sm)',
                    'padding' : 15
                }}>
                    MOTIF
                </Title>

                <Text size={'sm'}>
                    © 2024
                    DEVELOPED & DESIGNED BY OWEN · MOTIF
                </Text>
            </Group>
        </Container>
    );
}