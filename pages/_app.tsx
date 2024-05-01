import "@mantine/core/styles.css";
import Head from "next/head";
import {AppShell, MantineProvider, Space} from "@mantine/core";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";
import React from "react";
import {useDisclosure} from "@mantine/hooks";
import {TitleHeader} from "../component/TitleHeader/TitleHeader";
import {FooterSocial} from "../component/FooterSocial/FooterSocial";
import {Inter, Figtree, Lexend, Archivo_Black} from "next/font/google";
import '@mantine/carousel/styles.css';

const inter = Inter({subsets: ['latin']})
const lexend = Lexend({weight: "400", subsets: ['latin']})

export default function App({Component, pageProps}: any) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <MantineProvider
            theme={{
                fontFamily: inter.style.fontFamily,
                headings: { fontFamily: lexend.style.fontFamily },
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
                    height: 240
                }}
                padding="md"
            >
                <AppShell.Header>
                    <div style={{
                        'padding': 30
                    }}>
                        <TitleHeader/>
                        <HeaderSimple/>
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
