"use client";
import SectionHeadLine from "@/components/SectionHeadLine";
import Countdown from "./Countdown";
import ProductCard from "@/components/home/product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function FlashSale() {
    // Example: sale ends in ~3 days from now
    const endAt = new Date("2026-01-01T00:00:00Z").getTime(); // constant timestamp for demo
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [openSwiper, setOpenSwiper] = useState(false);

    const products = useMemo(() => [
        {
            id: "1",
            name: "HAVIT HV-G92 Gamepad",
            imageUrl:
                "/assets/images/products/product1.png",
            price: 120,
            oldPrice: 160,
            discountPercent: 40,
            rating: 4,
            ratingCount: 88,
        },
        {
            id: "2",
            name: "AK-900 Wired Keyboard",
            imageUrl:
                "/assets/images/products/product2.png",
            price: 960,
            oldPrice: 1160,
            discountPercent: 35,
            rating: 4,
            ratingCount: 75,
        },
        {
            id: "3",
            name: "IPS LCD Gaming Monitor",
            imageUrl:
                "/assets/images/products/product3.png",
            price: 370,
            oldPrice: 400,
            discountPercent: 10,
            rating: 4,
            ratingCount: 99,
        },
        {
            id: "4",
            name: "S-Series Comfort Chair",
            imageUrl:
                "/assets/images/products/product4.png",
            price: 375,
            oldPrice: 400,
            discountPercent: 25,
            rating: 4,
            ratingCount: 99,
        },
        {
            id: "5",
            name: "HAVIT HV-G92 Gamepad",
            imageUrl:
                "/assets/images/products/product1.png",
            price: 120,
            oldPrice: 160,
            discountPercent: 40,
            rating: 4,
            ratingCount: 88,
        },
        {
            id: "6",
            name: "AK-900 Wired Keyboard",
            imageUrl:
                "/assets/images/products/product2.png",
            price: 960,
            oldPrice: 1160,
            discountPercent: 35,
            rating: 4,
            ratingCount: 75,
        },
        {
            id: "7",
            name: "IPS LCD Gaming Monitor",
            imageUrl:
                "/assets/images/products/product3.png",
            price: 370,
            oldPrice: 400,
            discountPercent: 10,
            rating: 4,
            ratingCount: 99,
        },
        {
            id: "8",
            name: "S-Series Comfort Chair",
            imageUrl:
                "/assets/images/products/product4.png",
            price: 375,
            oldPrice: 400,
            discountPercent: 25,
            rating: 4,
            ratingCount: 99,
        },

    ] as const, []);

    return (
        <section className="mt-12 space-y-6">
            <div className="pl-32 flex items-end justify-between gap-4">
                <div className="space-y-3">
                    <SectionHeadLine title="Today's" />
                    <h3 className="text-2xl font-semibold sm:text-3xl">Flash Sales</h3>
                </div>
                <div className="flex items-center gap-3">
                    <Countdown endAt={endAt} />
                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            ref={prevRef}
                            aria-label="Previous products"
                            className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ArrowLeftIcon />
                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Next products"
                            className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${!openSwiper ? "ml-32" : "-ml-32"} ${openSwiper && "pl-32"} transition-all duration-300`}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.15}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setOpenSwiper(!swiper.isBeginning);
                    }}
                    onReachBeginning={() => setOpenSwiper(false)}
                    onFromEdge={() => setOpenSwiper(true)}
                    // Smooth feel without extra overhead
                    speed={450}
                    grabCursor
                    roundLengths={false}
                    watchOverflow
                    breakpoints={{
                        // 128px (Tailwind 32) is the section's left padding we removed with -ml-32
                        0: { slidesPerView: 1.15, spaceBetween: 16, slidesOffsetBefore: 0, slidesOffsetAfter: 128 },
                        640: { slidesPerView: 2.15, spaceBetween: 16, slidesOffsetBefore: 0, slidesOffsetAfter: 128 },
                        768: { slidesPerView: 3.15, spaceBetween: 16, slidesOffsetBefore: 0, slidesOffsetAfter: 128 },
                        1024: { slidesPerView: 4.15, spaceBetween: 16, slidesOffsetBefore: 0, slidesOffsetAfter: 128 },
                    }}
                    className="px-0 md:px-0"
                >
                    {products.map((p) => (
                        <SwiperSlide key={p.id} className="h-auto!">
                            <ProductCard product={{ ...p }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center">
                <button className="rounded-md bg-[#DB4444] px-6 py-2 text-white hover:opacity-90">
                    View All Products
                </button>
            </div>
        </section>
    );
}

function ArrowLeftIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}


