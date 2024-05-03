import "@mantine/core/styles.css";
import Head from "next/head";
import {AppShell, Button, MantineProvider, Space} from "@mantine/core";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";
import React, {useEffect, useState} from "react";
import {useDisclosure} from "@mantine/hooks";
import {TitleHeader} from "../component/TitleHeader/TitleHeader";
import {FooterSocial} from "../component/FooterSocial/FooterSocial";
import {Inter, Lexend} from "next/font/google";
import '@mantine/carousel/styles.css';

const inter = Inter({subsets: ['latin']})
const lexend = Lexend({weight: "400", subsets: ['latin']})

export default function App({Component, pageProps}: any) {
    const [opened, {toggle}] = useDisclosure();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => { setScrollY(window.scrollY); };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <MantineProvider
            theme={{
                fontFamily: 'Helvetica',
                headings: {fontFamily: lexend.style.fontFamily},
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

            <AppShell
                header={{
                    height: scrollY > 0 ? 175 : 230
                }}
                padding="md"
            >
                <AppShell.Header>
                    <div style={{
                        'padding': 30
                    }}>
                        <TitleHeader titleFontSize={ scrollY > 0 ? '1.5rem' : '2rem' }/>
                        <HeaderSimple
                            linkFontSize={ scrollY > 0 ? '1rem' : '2rem' }
                            subLinkFontSize={ scrollY > 0 ? '1rem' : '1.5rem' }
                        />
                    </div>
                </AppShell.Header>
                <AppShell.Main>
                    <Component {...pageProps} />
                    <Space h={'5rem'}/>
                    <FooterSocial/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
