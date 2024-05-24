import "@mantine/core/styles.css";
import Head from "next/head";
import {AppShell, Group, MantineProvider, Space, Title} from "@mantine/core";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";
import React, {useEffect, useState} from "react";
import {TitleHeader} from "../component/TitleHeader/TitleHeader";
import {FooterSocial} from "../component/FooterSocial/FooterSocial";
import {Sen, Reddit_Mono} from "next/font/google";
import '@mantine/carousel/styles.css';
import {SessionProvider} from "next-auth/react"
import {usePathname} from "next/navigation";
import '@mantine/tiptap/styles.css';
import AuthWrapper from "../component/AuthWrapper/AuthWrapper";
import {GetServerSideProps} from "next";
import {useViewportSize} from "@mantine/hooks";
import {MobileHeaderSimple} from "../component/MobileHeaderSimple/MobileHeaderSimple";
import {MantineEmotionProvider} from "@mantine/emotion";

const sen = Sen({weight: "700", subsets: ['latin']})
const montserrat = Reddit_Mono({weight: "400", subsets: ['latin']})

export default function App({Component, pageProps: {session, ...pageProps}}: any, { data: string }: any) {
    const [scrollY, setScrollY] = useState(0);
    const pathName = usePathname()
    const { width } = useViewportSize();

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

    // @ts-ignore
    return (
        <SessionProvider session={session}>
            <MantineProvider
                theme={{
                    headings: {fontFamily: sen.style.fontFamily},
                }}
            >
                <MantineEmotionProvider>
                <Head>
                    <title>OWEN</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                    />
                    <link rel="shortcut icon" href="/favicon.svg"/>
                </Head>

                {pathName?.includes('_auth/signin') ? (<Component {...pageProps} />) : (
                    <AppShell
                        header={{
                            height: scrollY > 0 ? 100 : 120,
                        }}
                        padding="md"
                        style={{
                            maxWidth : '135rem',
                            margin: 'auto',
                        }}
                    >
                        <AuthWrapper>
                            <AppShell.Header
                                withBorder={false}
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, rgb(0,0,0) 45%, rgb(0,0,0,0) 45%)',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <div style={{
                                    padding: 30,
                                    paddingTop: 10,
                                }}>
                                    {width < 1500 && (
                                        <Group justify={'center'}>
                                            <Title c={'white'} size={'1.5rem'}>MOTIF</Title>
                                        </Group>
                                    )}
                                    {width >= 1500 && (
                                        <TitleHeader
                                            titleFontSize={scrollY > 0 ? '1.15rem' : '1.4rem'}
                                        />
                                    )}

                                    {width < 1000 && (
                                        <MobileHeaderSimple/>
                                    )}
                                    {width >= 1000 && (
                                        <HeaderSimple
                                            linkFontSize={scrollY > 0 ? '1.15rem' : '1.6rem'}
                                            subLinkFontSize={scrollY > 0 ? '1rem' : '1.2rem'}
                                        />
                                    )}
                                </div>
                            </AppShell.Header>
                            <AppShell.Main>
                                <Component {...pageProps} />
                                <Space h={'5rem'}/>
                                <FooterSocial/>
                            </AppShell.Main>
                        </AuthWrapper>
                    </AppShell>
                )}
                </MantineEmotionProvider>
            </MantineProvider>
        </SessionProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from an API or database
    const data = 'Hello from the server side!';

    return {
        props: {
            data,
        },
    };
};
