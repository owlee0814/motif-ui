import {Container, Group, ActionIcon, rem, Title} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSocial.module.css';
import React from "react";

export function FooterSocial() {
    return (
        <Container fluid className={classes.inner}>

            <Title style={{
                'font-size': '1.25rem',
                'border-radius' : 'var(--mantine-radius-sm)',
                'padding' : 15
            }}>
                MOTIF
            </Title>

            <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Container>
    );
}