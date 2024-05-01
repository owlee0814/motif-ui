
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
        imgSrc: 'https://media.discordapp.net/attachments/723908387032531015/1234878784784695346/lowkeyindustries.png?ex=663255fd&is=6631047d&hm=615e26488760016cfebe7953a683e0f8860eb7aec916494e4753e4da77edd760&=&format=webp&quality=lossless&width=934&height=1400'
    },
    {
        id : 2,
        productName: 'Product 2',
        brandName: 'Brand B',
        currentPrice: 50,
        originalPrice: 50,
        likeCounts: 3,
        imgSrc: 'https://media.discordapp.net/attachments/723908387032531015/1234878786214952960/brigagepants.png?ex=663255fd&is=6631047d&hm=0cf04a3b5aad620d812d595c70adacd6a23fe06a75206dc09ed98b30d7c5c3ea&=&format=webp&quality=lossless&width=934&height=1400'
    },
    {
        id : 3,
        productName: 'Product 3',
        brandName: 'Brand C',
        currentPrice: 25,
        originalPrice: 50,
        likeCounts: 6,
        imgSrc: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id : 4,
        productName: 'Product 4',
        brandName: 'Brand D',
        currentPrice: 135,
        originalPrice: 150,
        likeCounts: 5,
        imgSrc: ''
    }
];