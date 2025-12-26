export type Product = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    discountPercent?: number;
    rating: number;
    ratingCount: number;
};

// Flash Sale Products
export const flashSaleProducts: Product[] = [
    {
        id: "1",
        name: "HAVIT HV-G92 Gamepad",
        imageUrl: "/assets/images/products/product1.png",
        price: 120,
        oldPrice: 160,
        discountPercent: 40,
        rating: 4,
        ratingCount: 88,
    },
    {
        id: "2",
        name: "AK-900 Wired Keyboard",
        imageUrl: "/assets/images/products/product2.png",
        price: 960,
        oldPrice: 1160,
        discountPercent: 35,
        rating: 4,
        ratingCount: 75,
    },
    {
        id: "3",
        name: "IPS LCD Gaming Monitor",
        imageUrl: "/assets/images/products/product3.png",
        price: 370,
        oldPrice: 400,
        discountPercent: 10,
        rating: 4,
        ratingCount: 99,
    },
    {
        id: "4",
        name: "S-Series Comfort Chair",
        imageUrl: "/assets/images/products/product4.png",
        price: 375,
        oldPrice: 400,
        discountPercent: 25,
        rating: 4,
        ratingCount: 99,
    },
    {
        id: "5",
        name: "HAVIT HV-G92 Gamepad",
        imageUrl: "/assets/images/products/product1.png",
        price: 120,
        oldPrice: 160,
        discountPercent: 40,
        rating: 4,
        ratingCount: 88,
    },
    {
        id: "6",
        name: "AK-900 Wired Keyboard",
        imageUrl: "/assets/images/products/product2.png",
        price: 960,
        oldPrice: 1160,
        discountPercent: 35,
        rating: 4,
        ratingCount: 75,
    },
    {
        id: "7",
        name: "IPS LCD Gaming Monitor",
        imageUrl: "/assets/images/products/product3.png",
        price: 370,
        oldPrice: 400,
        discountPercent: 10,
        rating: 4,
        ratingCount: 99,
    },
    {
        id: "8",
        name: "S-Series Comfort Chair",
        imageUrl: "/assets/images/products/product4.png",
        price: 375,
        oldPrice: 400,
        discountPercent: 25,
        rating: 4,
        ratingCount: 99,
    },
];

// Explore Products
export const exploreProducts: Product[] = [
    { id: "ep-1", name: "Breed Dry Dog Food", imageUrl: "/assets/images/products/product9.jpg", price: 100, discountPercent: 16, rating: 4, ratingCount: 50 },
    { id: "ep-2", name: "CANON EOS DSLR Camera", imageUrl: "/assets/images/products/product10 (2).png", price: 360, discountPercent: 10, rating: 4, ratingCount: 65 },
    { id: "ep-3", name: "MSI GF Laptop", imageUrl: "/assets/images/products/product11 (2).png", price: 860, discountPercent: 6, rating: 4, ratingCount: 48 },
    { id: "ep-4", name: "Curology Face Wash", imageUrl: "/assets/images/products/product12 (2).png", price: 180, discountPercent: 10, rating: 4, ratingCount: 45 },
    { id: "ep-5", name: "Kids Electric Car", imageUrl: "/assets/images/products/product13 (2).png", price: 960, discountPercent: 14, rating: 4, ratingCount: 25 },
    { id: "ep-6", name: "Jr. Zoom Soccer Cleats", imageUrl: "/assets/images/products/product14 (2).png", price: 1160, discountPercent: 11, rating: 4, ratingCount: 58 },
    { id: "ep-7", name: "GPX Drone", imageUrl: "/assets/images/products/product15 (2).png", price: 980, discountPercent: 4, rating: 4, ratingCount: 60 },
    { id: "ep-8", name: "Quilted Jacket", imageUrl: "/assets/images/products/product16 (2).png", price: 660, discountPercent: 6, rating: 4, ratingCount: 70 },
];

// Best Selling Products
export const bestSellingProducts: Product[] = [
    {
        id: "bs-1",
        name: "The north coat",
        imageUrl: "/assets/images/products/product5 (2).png",
        price: 260,
        oldPrice: 360,
        discountPercent: 28,
        rating: 4,
        ratingCount: 65,
    },
    {
        id: "bs-2",
        name: "Gucci duffle bag",
        imageUrl: "/assets/images/products/product6 (2).png",
        price: 960,
        oldPrice: 1160,
        discountPercent: 17,
        rating: 4,
        ratingCount: 65,
    },
    {
        id: "bs-3",
        name: "RGB liquid CPU Cooler",
        imageUrl: "/assets/images/products/product7 (2).png",
        price: 160,
        oldPrice: 170,
        discountPercent: 6,
        rating: 4,
        ratingCount: 65,
    },
    {
        id: "bs-4",
        name: "Small BookSelf",
        imageUrl: "/assets/images/products/product8 (2).png",
        price: 360,
        oldPrice: 0,
        discountPercent: 0,
        rating: 4,
        ratingCount: 65,
    },
];

// Explore Products Colors
export const exploreProductColors = ["#E11D48", "#111827", "#F59E0B"];

