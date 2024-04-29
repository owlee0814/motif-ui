import React from "react";
import {ActionIcon, Group, rem, Title, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import Link from "next/link";
import {IconMoon, IconSun} from "@tabler/icons-react";
import cx from 'clsx';
import classes from "./TitleHeader.module.css";

export function TitleHeader() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <>
            <Group gap={5} visibleFrom="xs">
                <Link
                    style = {{
                        'font-size': '4rem',
                        'border-radius' : 'var(--mantine-radius-sm)',
                        'padding' : '1rem',
                        'text-decoration': 'none',
                        'color': 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
                        'font-weight': 500,
                        'font-family': 'Roboto Slab'
                    }}
                    key={'home'}
                    href={'/home'}
                >
                    MOTIF
                </Link>

                <Link
                    key='cart'
                    href={'/cart'}
                    className={classes.link}
                    style={{
                        'marginLeft' : 'auto',
                        'marginRight' : 0
                    }}
                >
                    CART
                </Link>
                <Link
                    key='login'
                    href={'/login'}
                    className={classes.link}
                    style={{
                        'marginRight' : '0.5rem'
                    }}
                >
                    LOGIN
                </Link>
                <ActionIcon
                    onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                    variant="subtle"
                    color="gray"
                    size="xl"
                    aria-label="Toggle color scheme"
                    style={{
                        'marginRight' : '1rem'
                    }}
                >
                    <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                    <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                </ActionIcon>


            </Group>
        </>
    );
}