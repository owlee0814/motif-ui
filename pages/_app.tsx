import "@mantine/core/styles.css";
import Head from "next/head";
import {AppShell, Center, MantineProvider, Space, Title} from "@mantine/core";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";
import React, {useEffect, useState} from "react";
import {TitleHeader} from "../component/TitleHeader/TitleHeader";
import {FooterSocial} from "../component/FooterSocial/FooterSocial";
import {Sen} from "next/font/google";
import '@mantine/carousel/styles.css';
import {SessionProvider} from "next-auth/react"
import {usePathname} from "next/navigation";

const sen = Sen({weight: "700", subsets: ['latin']})

export default function App({Component, pageProps: {session, ...pageProps}}: any) {
    const [scrollY, setScrollY] = useState(0);
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <SessionProvider session={session}>
            <MantineProvider
                theme={{
                    fontFamily: 'Helvetica',
                    headings: {fontFamily: sen.style.fontFamily},
                }}
            >
                <Head>
                    <title>OWEN</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                    />
                    <link rel="shortcut icon" href="/favicon.svg"/>
                </Head>

                {pathName?.includes('auth/signin') ? (<Component {...pageProps} />) : (
                    <AppShell
                        header={{
                            height: scrollY > 0 ? 100 : 120,
                        }}
                        padding="md"
                        style={{
                            maxWidth : '135rem',
                            minWidth : '90rem',
                            margin: 'auto',
                        }}
                    >
                        <AppShell.Header
                            withBorder={false}
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, rgb(0,0,0) 45%, rgb(0,0,0,0) 45%)',
                                backgroundSize: 'cover',
                                // maxWidth : '135rem',
                                // minWidth : '80rem',
                                // margin: 'auto',
                            }}
                        >
                            <div style={{
                                'padding': 30,
                                paddingTop: 10,
                            }}>
                                <TitleHeader
                                    titleFontSize={scrollY > 0 ? '1.15rem' : '1.4rem'}
                                />
                                <HeaderSimple
                                    linkFontSize={scrollY > 0 ? '1.15rem' : '1.6rem'}
                                    subLinkFontSize={scrollY > 0 ? '1rem' : '1.2rem'}
                                />
                            </div>
                        </AppShell.Header>
                        <AppShell.Main>
                            <Component {...pageProps} />
                            <Space h={'5rem'}/>
                            <FooterSocial/>
                        </AppShell.Main>
                    </AppShell>
                )}
            </MantineProvider>
        </SessionProvider>
    );
}
