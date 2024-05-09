import React, {useState} from 'react';
import {Button, Card, Group, TextInput, Title} from '@mantine/core';
import classes from './HeaderSimple.module.css';
import Link from "next/link";
import {Sen} from "next/font/google";
import {usePathname} from "next/navigation";

const mainLinks = [
    {link: '/home', label: 'HOME'},
    {link: '/brands', label: 'BRANDS'},
    {link: '/products', label: 'SHOP'},
    {link: '', label: '|', disabled: true},
    {link: '/community', label: 'COMMUNITY'},
    {link: '/profile', label: 'PROFILE'},
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
    {link: '/about', label: 'About MOTIF'},
];

const sen = Sen({weight: 'variable', subsets: ['latin']})

interface HeaderSimpleProps {
    linkFontSize : string,
    subLinkFontSize : string
}

export function HeaderSimple(props : HeaderSimpleProps) {
    const pathname = usePathname()
    const [brandSubLinksVisible, setBrandSubLinksVisible] = useState(false);
    const [shopSubLinksVisible, setShopSubLinksVisible] = useState(false);

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
                fw={pathname === link.link ? 750 : 700}
                style={{
                    fontFamily : sen.style.fontFamily
                }}
                size={props.linkFontSize}
                td={link.disabled && link.label !== '|' ? 'line-through' : ''}
                className={classes.title}
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
                fontSize: 40,
                pointerEvents: 'none'
            } : {fontSize: 40}}
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
        if (shopSubLinksVisible && !brandSubLinksVisible )
            return (
                <Card
                    bg={'light-dark(rgb(233,246,240), rgb(46,46,46))'}
                    radius={'xl'}
                    style={{display: 'inline-block'}}
                    onMouseEnter={() => setShopSubLinksVisible(true)}
                    onMouseLeave={() => setShopSubLinksVisible(false)}
                >
                <Group
                    gap={5}
                    visibleFrom="xs"
                >
                    {subItems}
                </Group>
                </Card>
            )
        else if (brandSubLinksVisible)
            return (
                <Card
                    bg={'light-dark(rgb(233,246,240), rgb(46,46,46))'}
                    radius={'xl'}
                    style={{display: 'inline-block'}}
                    onMouseEnter={() => setBrandSubLinksVisible(true)}
                    onMouseLeave={() => setBrandSubLinksVisible(false)}
                >
                <Group
                    gap={5}
                    visibleFrom="xs"
                >
                    {brandSubItems}
                </Group>
                </Card>
            )
    }

    return (
        <>
            <Group justify="space-between" mt={'0.6rem'}>
                <Group gap={5} visibleFrom="xs">
                    {mainItems}
                </Group>
                <Link href={''} style={{ color: 'inherit' }}>
                    <Title size={'1rem'}>
                        FEEDBACK@MOTIF.COM
                    </Title>
                </Link>
            </Group>

            {subLinkGroup()}
            {
                pathname?.includes('/community') && (
                    <Group justify={'flex-end'}
                    style={{
                        paddingTop : '1rem',
                        paddingRight : '5.3%'
                    }}>
                        <div style={{width : '15rem'}}>
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