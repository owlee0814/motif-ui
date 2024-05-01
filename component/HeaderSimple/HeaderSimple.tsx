import React from 'react';
import {Group, Title} from '@mantine/core';
import classes from './HeaderSimple.module.css';
import Link from "next/link";
import {Montserrat} from "next/font/google";
import { useHover } from '@mantine/hooks';

const mainLinks = [
    {link: '/home', label: 'HOME'},
    {link: '/shop', label: 'SHOP'},
    {link: '/brands', label: 'BRANDS'},
    {link: '/community', label: 'COMMUNITY', disabled: true},
    {link: '/journal', label: 'JOURNAL', disabled: true},
];

const subLinks = [
    {link: '/products', label: 'New'},
    {link: '/exclusives', label: 'Exclusives'},
    {link: '/products', label: 'Men'},
    {link: '/products', label: 'Women'},
    {link: '/products', label: 'Accessories'},
    {link: '/products', label: 'Sales'},
];

const brandSubLinks = [
    {link: '/brands', label: 'Brands'},
    {link: '/lookbooks', label: 'Lookbook'},
    {link: '/about', label: 'About Motif'},
];

const montserrat = Montserrat({weight: "700", subsets: ['latin']})

export function HeaderSimple() {
    const [selectedLink, setSelectedLink] = React.useState("");

    const mainItems = mainLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            style={ link.disabled ? {
                'font-size': 40,
                'pointer-events': 'none'
            } : {'font-size': 40}}

            onClick={() => {
                setSelectedLink(link.label);
            }}
        >
            <Title
                style={{
                    'font-family' : montserrat.style.fontFamily
                }}
                td={link.disabled ? 'line-through' : ''}
            >
                {link.label}
            </Title>
        </Link>

    ));

    const subItems = subLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            <Title fw='400' size='1.5rem'>
                {link.label}
            </Title>
        </Link>
    ));

    const brandSubItems = brandSubLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            <Title c='black' fw='400' size='1.5rem'>
                {link.label}
            </Title>
        </Link>
    ));


    return (
        <>
            <Group gap={5} visibleFrom="xs">
                {mainItems}
            </Group>
            {
                selectedLink == 'SHOP' && (
                    <Group gap={5} visibleFrom="xs">
                        {subItems}
                    </Group>
                )
            }
            {
                selectedLink == 'BRANDS' && (
                    <Group gap={5} visibleFrom="xs">
                        {brandSubItems}
                    </Group>
                )
            }
        </>
    );
}