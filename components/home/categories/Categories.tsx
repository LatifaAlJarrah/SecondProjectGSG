"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

type Cat = { id: string; name: string; icon: React.ReactNode };

export default function Categories() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState<string>("camera");

    const cats: Cat[] = categories;

    return (
        <section className="mt-14 space-y-6">
            <div className="flex items-end justify-between gap-4">
                <div className="space-y-3">
                    <SectionHeadLine title="Categories" />
                    <h3 className="text-2xl font-semibold sm:text-3xl">Browse By Category</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        ref={prevRef}
                        aria-label="Previous categories"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                        <ArrowLeftIcon />
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Next categories"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2.2}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    0: { slidesPerView: 2.2, spaceBetween: 12 },
                    640: { slidesPerView: 3.2, spaceBetween: 12 },
                    768: { slidesPerView: 4.2, spaceBetween: 16 },
                    1024: { slidesPerView: 6.2, spaceBetween: 16 },
                }}
            >
                {cats.map((c) => (
                    <SwiperSlide key={c.id} className="!h-auto">
                        <CategoryCard
                            category={{ id: c.id, name: c.name, icon: c.icon }}
                            active={c.id === activeId}
                            onClick={setActiveId}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
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


