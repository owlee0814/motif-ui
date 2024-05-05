import React from "react";
import {Grid, Image} from "@mantine/core";
import Link from "next/link";

export default function Lookbooks() {
    const lookbooks = [];
    const links = [
        'https://media.discordapp.net/attachments/723908387032531015/1234878719529713796/lki.png?ex=663255ed&is=6631046d&hm=4db0cd40ea940df16ac0f5f61dcfc1c0448ea2f1f91b08bd37a7d2e5d6790d5c&=&format=webp&quality=lossless&width=934&height=1400',
        'https://media.discordapp.net/attachments/723908387032531015/1234878721345847356/FCM_Stock_Photo.png?ex=663255ee&is=6631046e&hm=376810f818cb4d9376d6de8c264f45afaad7e27841eaaf3b37972ab4dd1121a7&=&format=webp&quality=lossless&width=934&height=1400',
        'https://media.discordapp.net/attachments/723908387032531015/1234878723166175342/brigade_brand.png?ex=663255ee&is=6631046e&hm=dbb26983b4bc719e3eb74417af23bd908b7f7d90ee6453fb6da82ed2aed39f5b&=&format=webp&quality=lossless&width=934&height=1400',
        'https://media.discordapp.net/attachments/723908387032531015/1234879825852764282/sus.png?ex=663256f5&is=66310575&hm=536fffa7c75f33dcc7cb11528ece0989a73d0338228f2d3243bbdd16691f5622&=&format=webp&quality=lossless&width=934&height=1400',
    ];

    for (let i = 0; i <= links.length + 4; i++) {
        lookbooks.push(
                <Grid.Col span={4}>
                    <Link href='brands/brand/lookbook'>
                        <Image
                            src={links[i]}
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