import React from "react";
import {ActionIcon, Center, Group, Title, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import Link from "next/link";
import {IconMoon, IconShoppingBag, IconShoppingCart, IconSun, IconThumbUpFilled} from "@tabler/icons-react";
import cx from 'clsx';
import classes from "./TitleHeader.module.css";
import {Sen} from "next/font/google";
import LoginButton from "../LoginButton/LoginButton";

const montserrat = Sen({weight: "700", subsets: ['latin']})

interface TitleHeaderProps {
    titleFontSize : string
}

export function TitleHeader(props : TitleHeaderProps) {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <div>
            <Group gap={5} justify={'space-between'} visibleFrom="xs">
                <Title
                    size={props.titleFontSize}
                    fw={1200}
                    c={'black'}
                    style={{
                        'font-family' : montserrat.style.fontFamily
                    }}
                >
                    MOTIF
                </Title>
                <Link
                    key={'home'}
                    href={'/home'}
                    style = {{
                        paddingTop: '0rem',
                        textDecoration: 'none'
                    }}
                    className={classes.link}
                >
                    <Title
                        size={props.titleFontSize}
                        fw={1200}
                        c={'white'}
                        style={{
                            'font-family' : montserrat.style.fontFamily
                        }}
                    >
                        MOTIF
                    </Title>
                </Link>

                <Group style={{marginTop:'-0.4%'}}>
                    <LoginButton/>
                    <Link
                        key='cart'
                        href={'/cart'}
                    >
                        <ActionIcon size={'1.5rem'} variant='transparent' color="gray" mt='0.3rem' radius="0">
                            <IconShoppingBag style={{width: '100%', height: '100%',}} stroke={1.5}/>
                        </ActionIcon>
                    </Link>
                    <ActionIcon
                        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                        variant="subtle"
                        color="gray"
                        aria-label="Toggle color scheme"
                        size={'md'}
                    >
                        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Group>
        </div>
    );
}