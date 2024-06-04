import {
    AspectRatio,
    Card,
    Center,
    Container, Divider,
    Grid,
    Group,
    Image,
    Pagination,
    SimpleGrid,
    Text,
    Title
} from "@mantine/core";
import React, {useState} from "react";
import {formatDate} from "../../util/util";

const outfits = [
    { id: 1, name: "style_guru_24", neighborhood: "Flatiron", image: "/path/to/image1.jpg", views: 42, createdDate: "2024-05-17T13:46:23.555046Z" },
    { id: 2, name: "fashionista_young", neighborhood: "SoHo", image: "/path/to/image2.jpg", views: 86, createdDate: "2024-05-09T14:50:21.555046Z" },
    { id: 3, name: "trendsetter_miu", neighborhood: "Hell's Kitchen", image: "/path/to/image3.jpg", views: 38, createdDate: "2024-05-16T21:23:50.555046Z" },
    { id: 4, name: "mystery_style_lover", neighborhood: "Williamsburg", image: "/path/to/image4.jpg", views: 30, createdDate: "2024-05-01T10:39:29.555046Z" },
    { id: 5, name: "elegant_yeji29", neighborhood: "Greenwich Village", image: "/path/to/image5.jpg", views: 25, createdDate: "2024-05-11T06:06:15.555046Z" },
    { id: 6, name: "urban_jun22", neighborhood: "Upper East Side", image: "/path/to/image6.jpg", views: 49, createdDate: "2024-05-18T08:46:53.555046Z" },
    { id: 7, name: "classic_min28", neighborhood: "Chelsea", image: "/path/to/image7.jpg", views: 72, createdDate: "2024-04-26T01:05:03.555046Z" },
    { id: 8, name: "chic_song27", neighborhood: "Tribeca", image: "/path/to/image8.jpg", views: 43, createdDate: "2024-05-14T00:20:56.555046Z" },
    { id: 9, name: "stylish_seol22", neighborhood: "Harlem", image: "/path/to/image9.jpg", views: 55, createdDate: "2024-05-03T10:22:22.555046Z" },
    { id: 10, name: "youthful_seo19", neighborhood: "East Village", image: "/path/to/image10.jpg", views: 61, createdDate: "2024-05-14T03:31:16.555046Z" },
    { id: 11, name: "vibrant_yoo25", neighborhood: "Brooklyn Heights", image: "/path/to/image11.jpg", views: 61, createdDate: "2024-05-04T11:06:07.555046Z" },
    { id: 12, name: "trendy_chae21", neighborhood: "Astoria", image: "/path/to/image12.jpg", views: 27, createdDate: "2024-05-10T09:44:31.555046Z" }
];

export default function Inspo() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;

    const paginatedOutfits = outfits.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
            <Title size={'1.5rem'} fw={700}>
                Inspirations from us
            </Title>
            <Text size="sm" pt={'md'} pb={'md'}>
                Discover fit pics taken by our team
            </Text>
            <Divider pb={'lg'} color={'light-dark(rgb(220,220,220), rgb(59,59,59))'} />
            <Grid gutter={'xs'}>
                {paginatedOutfits.map((outfit, index) => (
                    <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
                        <AspectRatio ratio={7/10}>
                            <Image src={"https://placehold.co/600x400?text=Placeholder"} h={'100%'} w={'100%'}/>
                        </AspectRatio>
                        <Group justify={'space-between'} mt={'4'}>
                            <Text size={'xs'} mt={'4'}>
                                {outfit.neighborhood}, NY
                            </Text>
                            <Text size={'xs'}>
                                | {formatDate(outfit.createdDate)} |
                            </Text>
                        </Group>
                    </Grid.Col>
                ))}
            </Grid>
            <Center style={{ marginTop: 20 }}>
                <Pagination onChange={setPage} total={Math.ceil(outfits.length / itemsPerPage)} />
            </Center>
        </Container>

    );
}