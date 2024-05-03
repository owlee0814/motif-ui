import React, {useState} from 'react';
import {Button, Group, TextInput, Title} from '@mantine/core';
import classes from './HeaderSimple.module.css';
import Link from "next/link";
import {Montserrat , Sen} from "next/font/google";
import { useHover } from '@mantine/hooks';
import {usePathname} from "next/navigation";

const mainLinks = [
    {link: '/home', label: 'HOME'},
    {link: '/brands', label: 'BRANDS'},
    {link: '/products', label: 'SHOP'},
    {link: '', label: '|'},
    {link: '/community', label: 'COMMUNITY'},
    {link: '/profile', label: 'PROFILE'},
    {link: '/journal', label: 'JOURNAL', disabled: true},
];

const subLinks = [
    {link: '/products', label: 'New'},
    {link: '/exclusives', label: 'Exclusives', disabled: true},
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

const montserrat = Sen({weight: "700", subsets: ['latin']})

interface HeaderSimpleProps {
    linkFontSize : String,
    subLinkFontSize : String
}

export function HeaderSimple(props : HeaderSimpleProps) {
    const pathname = usePathname()
    const [brandSubLinksVisible, setBrandSubLinksVisible] = useState(false);
    const [shopSubLinksVisible, setShopSubLinksVisible] = useState(false);

    // @ts-ignore
    // @ts-ignore
    const mainItems = mainLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            style={ link.disabled ? {
                pointerEvents: 'none'
            } : {}}
            onMouseEnter={() => {
                if (link.link == '/products')
                    setShopSubLinksVisible(true)
                if (link.link == '/brands')
                    setBrandSubLinksVisible(true)
            }}
            onMouseLeave={() => {
                if (link.link == '/products')
                    setShopSubLinksVisible(false)
                if (link.link == '/brands')
                    setBrandSubLinksVisible(false)
            }}
        >
            <Title
                style={{
                    'font-family' : montserrat.style.fontFamily
                }}
                size={props.linkFontSize}
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
            style={ link.disabled ? {
                'font-size': 40,
                'pointer-events': 'none'
            } : {'font-size': 40}}
        >
            <Title fw='400' size={props.subLinkFontSize} td={link.disabled ? 'line-through' : ''}>
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
            <Title fw='400' size={props.subLinkFontSize} >
                {link.label}
            </Title>
        </Link>
    ));

    function subLinkGroup() {
        if ((shopSubLinksVisible || pathname.includes('/products')) && !brandSubLinksVisible )
            return (
                <Group gap={5}
                       visibleFrom="xs"
                       onMouseEnter={() => setShopSubLinksVisible(true)}
                       onMouseLeave={() => setShopSubLinksVisible(false)}>
                    {subItems}
                </Group>
            )
        else if (brandSubLinksVisible || pathname.includes('/brands'))
            return (
                <Group gap={5}
                       visibleFrom="xs"
                       onMouseEnter={() => setBrandSubLinksVisible(true)}
                       onMouseLeave={() => setBrandSubLinksVisible(false)}>
                    {brandSubItems}
                </Group>
            )
    }

    return (
        <>
            <Group gap={5} visibleFrom="xs">
                {mainItems}
            </Group>
            {subLinkGroup()}
            {
                pathname.includes('/community') && (
                    <Group justify={'flex-end'} style={{ 'padding-top' : '1rem', 'padding-right' : '5.3%' }}>
                        <div style={{'width' : '15rem'}}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="xl"
                            placeholder="Search"
                        />
                        </div>
                        <Button variant="filled" size="sm" radius="xs" bg={'black'}>Create a Post</Button>
                    </Group>
                )
            }
        </>
    );
}