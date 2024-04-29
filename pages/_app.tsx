import "@mantine/core/styles.css";
import Head from "next/head";
import {AppShell, MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";
import React from "react";
import {useDisclosure} from "@mantine/hooks";
import {TitleHeader} from "../component/TitleHeader/TitleHeader";
import {FooterSocial} from "../component/FooterSocial/FooterSocial";

export default function App({Component, pageProps}: any) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <MantineProvider theme={theme}>
            <Head>
                <title>OWEN</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.svg"/>
            </Head>

            <AppShell
                header={{height: 240}}
                padding="md"
            >
                <AppShell.Header>
                    <TitleHeader/>
                    <HeaderSimple/>
                </AppShell.Header>
                <AppShell.Main>
                    <Component {...pageProps} />
                    <FooterSocial/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
