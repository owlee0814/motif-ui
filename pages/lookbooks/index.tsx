import React from "react";
import {Grid, Image} from "@mantine/core";
import Link from "next/link";

export default function Lookbooks() {
    const lookbooks = [];
    const links = [];

    for (let i = 0; i <= links.length + 4; i++) {
        lookbooks.push(
                <Grid.Col span={4}>
                    <Link href='brands/brand/lookbook'>
                        <Image
                            // src={links[i]}
                            h={400}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Link>
                </Grid.Col>
        );
    }

    return (
        <>
            <Grid>
                {lookbooks}
            </Grid>
        </>
    )
}