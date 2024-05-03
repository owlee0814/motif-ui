
export default interface Product {
    id: number,
    productName: string,
    brandName: string,
    currentPrice: number,
    originalPrice: number,
    likeCounts: number,
    imgSrc: String
}

export const sampleProducts : Product[] = [
    {
        id : 1,
        productName: 'Product 1',
        brandName: 'Brand A',
        currentPrice: 60,
        originalPrice: 80,
        likeCounts: 11,
        imgSrc: ''
    },
    {
        id : 2,
        productName: 'Product 2',
        brandName: 'Brand B',
        currentPrice: 40,
        originalPrice: 50,
        likeCounts: 3,
        imgSrc: ''
    },
    {
        id : 3,
        productName: 'Product 3',
        brandName: 'Brand C',
        currentPrice: 25,
        originalPrice: 50,
        likeCounts: 6,
        imgSrc: ''
    },
    {
        id : 4,
        productName: 'Product 4',
        brandName: 'Brand D',
        currentPrice: 135,
        originalPrice: 150,
        likeCounts: 5,
        imgSrc: ''
    },
    {
        id : 5,
        productName: 'Product 4',
        brandName: 'Brand D',
        currentPrice: 135,
        originalPrice: 150,
        likeCounts: 5,
        imgSrc: ''
    }
];