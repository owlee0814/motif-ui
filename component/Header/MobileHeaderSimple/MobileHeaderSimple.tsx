import React, {useState} from 'react';
import {Card, Group, Title, Transition} from '@mantine/core';
import classes from './MobileHeaderSimple.module.css';
import Link from "next/link";
import {Sen} from "next/font/google";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {useViewportSize} from "@mantine/hooks";

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

const inspoSublinks = [
    {link: '/inspo/c', label: 'By You'},
    {link: '/inspo', label: 'By Us'},
    {link: '/inspo/albums', label: 'Albums'},
];

const sen = Sen({weight: 'variable', subsets: ['latin']})

export function MobileHeaderSimple() {
    const { status} = useSession()

    const mainLinks = [
        {link: '/home', label: 'HOME'},
        {link: '/brands', label: 'BRANDS'},
        {link: '/products', label: 'SHOP'},
        {link: '', label: '|', disabled: true},
        {link: '/community/c/all', label: 'COMMUNITY'},
        {link: '/inspo', label: 'INSPIRATION'},
        {link: status === "unauthenticated" ? '/api/auth/signin' : '/profile', label: 'PROFILE'},
    ];

    const pathname = usePathname()
    const [shopLinksCardTransition, setShopLinksCardTransition] = useState(false);
    const [inspoLinksCardTransition, setInspoLinksCardTransition] = useState(false);
    const [brandLinksCardTransition, setBrandLinksCardTransition] = useState(false);

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
                    setShopLinksCardTransition(true)
                if (link.link == '/brands')
                    setBrandLinksCardTransition(true)
                if (link.link == '/inspo')
                    setInspoLinksCardTransition(true)
            }}
            onMouseLeave={() => {
                if (link.link == '/products')
                    setShopLinksCardTransition(false)
                if (link.link == '/brands')
                    setBrandLinksCardTransition(false)
                if (link.link == '/inspo')
                    setInspoLinksCardTransition(false)
            }}
        >
            <Title
                fw={pathname === link.link ? 750 : 700}
                style={{
                    fontFamily : sen.style.fontFamily
                }}
                size={'.5rem'}
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
            <Title fw='400' size={'1rem'} td={link.disabled ? 'line-through' : ''} className={classes.title}>
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
            <Title fw='400' size={'1rem'} className={classes.title}>
                {link.label}
            </Title>
        </Link>
    ));

    const inspoSubItems = inspoSublinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            <Title fw='400' size={'1rem'} className={classes.title}>
                {link.label}
            </Title>
        </Link>
    ));

    function subLinkGroup() {
        return (
            <Transition
                mounted={shopLinksCardTransition && !brandLinksCardTransition}
                transition="fade"
                duration={400}
                timingFunction="ease"
            >
                {(transitionStyle) => (
                    <Card
                        className={classes.nav}
                        radius={'xl'}
                        style={{...transitionStyle, display: 'inline-block', position: 'fixed'}}
                        onMouseEnter={() => {
                            // setShopSubLinksVisible(true)
                            setShopLinksCardTransition(true)
                        }}
                        onMouseLeave={() => {
                            // setShopSubLinksVisible(false)
                            setShopLinksCardTransition(false)
                        }}
                    >
                        <Group
                            gap={5}
                            visibleFrom="xs"
                        >
                            {subItems}
                        </Group>
                    </Card>
                )}
            </Transition>
        )
    }

    function brandLinkGroup() {
        return (
            <Transition
                mounted={brandLinksCardTransition && !shopLinksCardTransition}
                transition="fade"
                duration={400}
                timingFunction="ease"
            >
                {(transitionStyle) => (
                    <Card
                        className={classes.nav}
                        radius={'xl'}
                        style={{...transitionStyle, display: 'inline-block', position: 'fixed'}}
                        onMouseEnter={() => {
                            // setShopSubLinksVisible(true)
                            setBrandLinksCardTransition(true)
                        }}
                        onMouseLeave={() => {
                            // setShopSubLinksVisible(false)
                            setBrandLinksCardTransition(false)
                        }}
                    >
                        <Group
                            gap={5}
                            visibleFrom="xs"
                        >
                            {brandSubItems}
                        </Group>
                    </Card>
                )}
            </Transition>
        )
    }

    function inspoLinkGroup() {
        return (
            <Transition
                mounted={inspoLinksCardTransition && !brandLinksCardTransition}
                transition="fade"
                duration={400}
                timingFunction="ease"
            >
                {(transitionStyle) => (
                    <Card
                        className={classes.nav}
                        radius={'xl'}
                        style={{...transitionStyle, display: 'inline-block', position: 'absolute', left:'34rem'}}
                        onMouseEnter={() => {
                            // setShopSubLinksVisible(true)
                            setInspoLinksCardTransition(true)
                        }}
                        onMouseLeave={() => {
                            // setShopSubLinksVisible(false)
                            setInspoLinksCardTransition(false)
                        }}
                    >
                        <Group
                            gap={5}
                            visibleFrom="xs"
                        >
                            {inspoSubItems}
                        </Group>
                    </Card>
                )}
            </Transition>
        )
    }

    return (
        <>
            <Group mt={'0.6rem'} gap={0} visibleFrom="xs">
                {mainItems}
            </Group>
            {subLinkGroup()}
            {brandLinkGroup()}
            {inspoLinkGroup()}
        </>
    );
}