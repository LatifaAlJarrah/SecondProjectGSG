"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import Countdown from "./Countdown";
import ProductCard from "@/components/home/product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useCallback } from "react";
import type { Swiper as SwiperType } from "swiper";
import { flashSaleProducts } from "@/data/products";

export default function FlashSale() {
    const endAt = new Date("2026-01-01T00:00:00Z").getTime();
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const products = flashSaleProducts;

    // Update state based on swiper position
    const updateSwiperState = useCallback((swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }, []);

    // Handle swiper initialization
    const handleSwiper = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper;
        updateSwiperState(swiper);
    }, [updateSwiperState]);

    // Handle slide change
    const handleSlideChange = useCallback((swiper: SwiperType) => {
        updateSwiperState(swiper);
    }, [updateSwiperState]);

    // Navigation handlers
    const handlePrev = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    return (
        <section className="mt-12 space-y-6">
            <div className="px-4 md:px-12 xl:px-32 flex flex-col items-start justify-between gap-4 w-full">
                <div className="space-y-3 w-full">
                    <SectionHeadLine title="Today's" />
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                            <h3 className="text-2xl font-semibold sm:text-3xl text-start md:text-center">Flash Sales</h3>
                            <div className="flex items-center gap-3">
                                <Countdown endAt={endAt} />  
                            </div>        
                        </div>
                        <div className="hidden items-center gap-2 md:flex justify-end">
                            <button
                                aria-label="Previous products"
                                onClick={handlePrev}
                                disabled={isBeginning}
                                className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            >
                                <ArrowLeftIcon />
                            </button>
                            <button
                                aria-label="Next products"
                                onClick={handleNext}
                                disabled={isEnd}
                                className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                            >
                                <ArrowRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="px-4 md:px-12 xl:px-32">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.15}
                    onSwiper={handleSwiper}
                    onSlideChange={handleSlideChange}
                    speed={450}
                    grabCursor
                    roundLengths={false}
                    watchOverflow
                    breakpoints={{
                        0: {
                            slidesPerView: 1.15,
                            spaceBetween: 16,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 128,
                        },
                        640: {
                            slidesPerView: 2.15,
                            spaceBetween: 16,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 128,
                        },
                        768: {
                            slidesPerView: 3.15,
                            spaceBetween: 16,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 128,
                        },
                        1024: {
                            slidesPerView: 4.15,
                            spaceBetween: 16,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 128,
                        },
                    }}
                    className="px-0"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto!">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center">
                <button
                    type="button"
                    className="rounded-md bg-[#DB4444] px-6 py-2 text-white transition-opacity hover:opacity-90"
                >
                    View All Products
                </button>
            </div>
        </section>
    );
}

function ArrowLeftIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
