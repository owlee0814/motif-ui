
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
        productName: 'Basic Heavyweight Tee (White)',
        brandName: 'Essence',
        currentPrice: 30,
        originalPrice: 40,
        likeCounts: 11,
        imgSrc: ''
    },
    {
        id : 2,
        productName: 'Essentials Hoodie Light Gray',
        brandName: 'Van Couture',
        currentPrice: 40,
        originalPrice: 50,
        likeCounts: 3,
        imgSrc: ''
    },
    {
        id : 3,
        productName: 'Draped Twill One Pocket Shirt',
        brandName: 'Reverié',
        currentPrice: 25,
        originalPrice: 50,
        likeCounts: 6,
        imgSrc: ''
    },
    {
        id : 4,
        productName: 'Staight Fit Standard Jean',
        brandName: 'Essence',
        currentPrice: 135,
        originalPrice: 150,
        likeCounts: 5,
        imgSrc: ''
    },
    {
        id : 5,
        productName: 'Black Leather MA-1 Bomber Jacket',
        brandName: 'No Name Brand',
        currentPrice: 335,
        originalPrice: 400,
        likeCounts: 5,
        imgSrc: ''
    }
];