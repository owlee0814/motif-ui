import React from "react";
import {
    ActionIcon,
    Group,
    MantineProvider,
    rem,
    Title,
    useComputedColorScheme,
    useMantineColorScheme
} from '@mantine/core';
import Link from "next/link";
import {IconMoon, IconSun} from "@tabler/icons-react";
import cx from 'clsx';
import classes from "./TitleHeader.module.css";
import {Archivo_Black, Figtree, Inter, Sen, Montserrat} from "next/font/google";
import LoginButton from "../LoginButton/LoginButton";

const montserrat = Sen({weight: "700", subsets: ['latin']})

interface TitleHeaderProps {
    titleFontSize : String
}

export function TitleHeader(props : TitleHeaderProps) {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <>
            <Group gap={5} visibleFrom="xs">
                <Link
                    key={'home'}
                    href={'/home'}
                    style = {{
                        'padding' : '1rem',
                        'text-decoration': 'none'
                    }}
                    className={classes.link}
                >
                    <Title
                        size={props.titleFontSize}
                        fw={1200}
                        style={{
                            'font-family' : montserrat.style.fontFamily
                        }}
                    >
                        MOTIF
                    </Title>
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
                <LoginButton/>
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