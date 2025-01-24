export interface Product {
    name: string;
    color: string;
    rom: string;
    expandable?: number | undefined;
    ram: string;
    screenSize: number;
    displaySpec: string;
    rearCameraDetails: number[];
    frontCameraDetails: number[];
    battery: number;
    soc: string;
    price: number;
    mrp: number;
    image: string;
    stock: number;
    avgRating: number;
}