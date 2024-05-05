
export default interface Product {
    id: number,
    productName: string,
    brandName: string,
    currentPrice: number,
    originalPrice: number,
    likeCounts: number,
    imgSrc?: string
}

export const sampleProducts : Product[] = [
    {
        id : 1,
        productName: 'Basic Heavyweight Tee (White)',
        brandName: 'Essence',
        currentPrice: 30,
        originalPrice: 40,
        likeCounts: 11,
        imgSrc: 'https://motif-mvp-bucket.s3.amazonaws.com/products/40fb1c9b1b1c4e00aa6e1c3fca1aa4cc.jpeg'
    },
    {
        id : 2,
        productName: 'Essentials Hoodie Light Gray',
        brandName: 'Van Couture',
        currentPrice: 40,
        originalPrice: 50,
        likeCounts: 3,
        imgSrc: 'https://motif-mvp-bucket.s3.amazonaws.com/products/6bca8f38d7a44f9c98bbaa2619fd170d.jpeg'
    },
    {
        id : 3,
        productName: 'Draped Twill One Pocket Shirt',
        brandName: 'Reverié',
        currentPrice: 25,
        originalPrice: 50,
        likeCounts: 6,
        imgSrc: 'https://motif-mvp-bucket.s3.amazonaws.com/products/bdc45b8cfca341bb9a1c846a99784b78.jpeg'
    },
    {
        id : 4,
        productName: 'Staight Fit Standard Jean',
        brandName: 'Essence',
        currentPrice: 135,
        originalPrice: 150,
        likeCounts: 5,
        imgSrc: 'https://motif-mvp-bucket.s3.amazonaws.com/products/w1200_q60.jpg-7.avif'
    },
    {
        id : 5,
        productName: 'Black Leather MA-1 Bomber Jacket',
        brandName: 'No Name Brand',
        currentPrice: 335,
        originalPrice: 400,
        likeCounts: 5,
        imgSrc: 'https://motif-mvp-bucket.s3.amazonaws.com/products/6cd203e2ecb24c70a3be93bdc2178034.jpeg'
    }
];