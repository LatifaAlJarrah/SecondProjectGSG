"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import ExploreCard from "./ExploreCard";

type Product = Parameters<typeof ExploreCard>[0]["product"];

const colors = ["#E11D48", "#111827", "#F59E0B"];
export default function ExploreProducts() {
    const products: Product[] = [
        { id: "ep-1", name: "Breed Dry Dog Food", imageUrl: "/assets/images/products/product9.jpg", price: 100, discountPercent: 16, rating: 4, ratingCount: 50 },
        { id: "ep-2", name: "CANON EOS DSLR Camera", imageUrl: "/assets/images/products/product10 (2).png", price: 360, discountPercent: 10, rating: 4, ratingCount: 65 },
        { id: "ep-3", name: "MSI GF Laptop", imageUrl: "/assets/images/products/product11 (2).png", price: 860, discountPercent: 6, rating: 4, ratingCount: 48 },
        { id: "ep-4", name: "Curology Face Wash", imageUrl: "/assets/images/products/product12 (2).png", price: 180, discountPercent: 10, rating: 4, ratingCount: 45 },
        { id: "ep-5", name: "Kids Electric Car", imageUrl: "/assets/images/products/product13 (2).png", price: 960, discountPercent: 14, rating: 4, ratingCount: 25 },
        { id: "ep-6", name: "Jr. Zoom Soccer Cleats", imageUrl: "/assets/images/products/product14 (2).png", price: 1160, discountPercent: 11, rating: 4, ratingCount: 58 },
        { id: "ep-7", name: "GPX Drone", imageUrl: "/assets/images/products/product15 (2).png", price: 980, discountPercent: 4, rating: 4, ratingCount: 60 },
        { id: "ep-8", name: "Quilted Jacket", imageUrl: "/assets/images/products/product16 (2).png", price: 660, discountPercent: 6, rating: 4, ratingCount: 70 },
    ];

    return (
        <section className="mt-14 space-y-6">
            <div className="space-y-3">
                <SectionHeadLine title="Our Products" />
                <h3 className="text-2xl font-semibold sm:text-3xl">Explore Our Products</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {products.map((p) => (
                    <ExploreCard key={p.id} product={{ ...p, colors: colors as string[] }} />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="rounded-md bg-[#DB4444] px-6 py-2 text-white hover:opacity-90">View All Products</button>
            </div>
        </section>
    );
}


