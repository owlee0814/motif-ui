import React from "react";
import {Grid, Image, NavLink} from "@mantine/core";
import Link from "next/link";

export default function Home() {
    const products = [];

    for (let i = 1; i <= 24; i++) {
        products.push(
                <Grid.Col span={3}>
                    <Link href='products/product'>
                        <Image
                            radius="md"
                            src={null}
                            h={300}
                            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        />
                    </Link>
                </Grid.Col>
        );
    }

    return (
        <>
            <Grid>
                <Grid.Col span={2}>
                    <NavLink
                        label='category 1'
                    />
                    <NavLink
                        label='category 2'
                    />
                    <NavLink
                        label='category 3'
                    />
                    <NavLink
                        label='category 4'
                    />
                    <NavLink
                        label='category 5'
                    />
                    <NavLink
                        label='category 6'
                    />
                </Grid.Col>
                <Grid.Col span={10}>
                    <Grid>
                        {products}
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
    )
}