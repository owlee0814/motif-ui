import { Container, Group, ActionIcon, Title, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';
import React from "react";

export function FooterSocial() {
    return (
        <Container fluid>
            <Group justify={'end'}>
                <Group gap={0} className={classes.links}>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter className={classes.icon} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube className={classes.icon} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram className={classes.icon} />
                    </ActionIcon>
                </Group>
            </Group>
            <Group justify={'space-between'} className={classes.footerContent}>
                <Title className={classes.title}>MOTIF</Title>
                <Text size="sm">© 2024 DEVELOPED & DESIGNED BY OWEN · MOTIF</Text>
            </Group>
        </Container>
    );
}