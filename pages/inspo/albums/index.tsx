import {AspectRatio, Container, Divider, Grid, Group, Image, Text, Title} from "@mantine/core";
import {Bebas_Neue, Bitter, JetBrains_Mono, Manrope, Noto_Serif, Roboto} from "next/font/google";
import React from "react";

const bebasNeue = Bebas_Neue({weight: "400", subsets: ['latin']})
const notoSerif = Noto_Serif({weight: "500", subsets: ['latin']})
const manrope = Manrope({weight: "300", subsets: ['latin']})
const roboto = Roboto({weight: "500", subsets: ['latin']})
const bitter = Bitter({weight: "500", subsets: ['latin']})
const jetBrainMono = JetBrains_Mono({weight: "300", subsets: ['latin']})

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export const inspos = [
    {
        title: 'City Boy',
        imgSrc: 'https://i.pinimg.com/564x/6e/c8/11/6ec8113411ec93ec693a5cfd6d5b9600.jpg',
        path: '',
        font: jetBrainMono,
        size: '2.7rem',
        description: 'Representing lifestyle of city dwellers',
        createdDate: '2024-05-24T19:22:02.460956Z'
    },
    {
        title: 'LEATHER',
        imgSrc: 'https://m.cozymode.co.kr/web/product/big/202202/5e513e644ceebf175e82fcbcd27cb3a4.jpg',
        path: '',
        font: roboto,
        size: '4rem',
        description: 'A staple piece in everyone\'s wardrobe',
        createdDate: '2024-05-22T15:16:58.460956Z'
    },
    {
        title: 'Business Casual',
        imgSrc: 'https://ptry.co.kr/campaign/23ss_campaign_1/imgs/s8_img2-2x.jpg',
        path: '',
        font: bitter,
        size: '3rem',
        description: 'A balance between professionalism and comfort',
        createdDate: '2024-05-21T04:35:35.460956Z'
    },
    {
        title: 'ATHLEISURE',
        imgSrc: 'https://images.pexels.com/photos/3222146/pexels-photo-3222146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        path: '',
        font: bebasNeue,
        size: '4rem',
        description: 'Comfort, functionality, and a sporty aesthetic ',
        createdDate: '2024-05-19T06:16:32.460956Z'
    },
    {
        title: 'MINIMAL',
        imgSrc: 'https://i.pinimg.com/originals/22/d8/fe/22d8fe311afad90b11608c80b502a3c6.jpg',
        path: '',
        font: manrope,
        size: '4rem',
        description: 'Understated essentials that create a timeless look',
        createdDate: '2024-05-13T17:39:56.460956Z'
    },
    {
        title: 'QUIET LUXURY',
        imgSrc: 'https://cdn.imweb.me/upload/S202008179a8a184fd9517/d8bc8eb56d95c.jpg',
        path: '',
        font: notoSerif,
        size: '1.8rem',
        description: 'Emphasizes quality, timelessness, and subtlety',
        createdDate: '2024-04-24T21:07:24.460956Z'
    }
].map((inspo, index) => (
    <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
        <div style={{position: 'relative', width: '500', height: '500'}}>
            <AspectRatio ratio={1/1}>
                <Image
                    src={inspo.imgSrc}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    w={'100%'}
                    h={'100%'}
                />
            </AspectRatio>
            <Title
                c={'white'}
                size={inspo.size}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: inspo.font.style.fontFamily
                }}
            >
                {inspo.title}
            </Title>
        </div>
        <div style={{width: '500px'}}>

            <Group justify={'space-between'} pt={'xs'}>
                <Title size={'1.5rem'}>{inspo.title}</Title>
                <Text size={'xs'}>| {formatDate(inspo.createdDate)} |</Text>
            </Group>
            <Text size={'sm'} pt={'xxs'} pb={'lg'}>{inspo.description}</Text>
        </div>
    </Grid.Col>
));


export default function index() {
    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
            <Title size={'1.5rem'} fw={700}>
                Inspiration Albums
            </Title>
            <Text size="sm" pt={'md'} pb={'md'}>
                Curated albums to help you to find your style
            </Text>
            <Divider size="xl" pb={'lg'} />
            <Grid gutter='xs'>
                {inspos}
            </Grid>
        </Container>
    )
}