export interface IProduct {
    id: number;
    short_name: string;
    name: string;
    full_name: string;
    price_ru: [number,number];
    price: number;
    img: string;
    article_number: string;
    description: string;
    price_eur: [number,number];
}