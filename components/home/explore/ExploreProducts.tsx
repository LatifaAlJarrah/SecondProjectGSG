"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import ExploreCard from "./ExploreCard";
import { exploreProducts, exploreProductColors } from "@/data/products";

type Product = Parameters<typeof ExploreCard>[0]["product"];

export default function ExploreProducts() {
    const products: Product[] = exploreProducts;
    const colors = exploreProductColors;

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


