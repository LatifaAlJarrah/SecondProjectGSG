"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import ProductCard from "@/components/home/product-card/ProductCard";

type Product = Parameters<typeof ProductCard>[0]["product"];

export default function BestSelling() {
	const products: Product[] = [
		{
			id: "bs-1",
			name: "The north coat",
			imageUrl: "/assets/images/products/product1.png",
			price: 260,
			oldPrice: 360,
			discountPercent: 28,
			rating: 4,
			ratingCount: 65,
		},
		{
			id: "bs-2",
			name: "Gucci duffle bag",
			imageUrl: "/assets/images/products/product2.png",
			price: 960,
			oldPrice: 1160,
			discountPercent: 17,
			rating: 4,
			ratingCount: 65,
	},
		{
			id: "bs-3",
			name: "RGB liquid CPU Cooler",
			imageUrl: "/assets/images/products/product3.png",
			price: 160,
			oldPrice: 170,
			discountPercent: 6,
			rating: 4,
			ratingCount: 65,
		},
		{
			id: "bs-4",
			name: "Small BookSelf",
			imageUrl: "/assets/images/products/product4.png",
			price: 360,
			oldPrice: 0,
			discountPercent: 0,
			rating: 4,
			ratingCount: 65,
		},
	];

	return (
		<section className="mt-14 space-y-6">
			<div className="flex items-start justify-between gap-4">
				<div className="space-y-3">
					<SectionHeadLine title="This Month" />
					<h3 className="text-2xl font-semibold sm:text-3xl">Best Selling Products</h3>
				</div>
				<div>
					<a
						href="#view-all"
						className="inline-flex items-center rounded-md bg-[#DB4444] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
					>
						View All
					</a>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{products.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</section>
	);
}


