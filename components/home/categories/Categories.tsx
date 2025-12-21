"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import CategoryCard from "./CategoryCard";

type Cat = { id: string; name: string; icon: React.ReactNode };

const icons = {
    Phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    ),
    Computer: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Watch: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="1" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="19" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    Camera: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7l2-2h4l2 2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    Headphones: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 14a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.5" />
            <rect x="3" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="17" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    Gaming: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 14h-3M7.5 12.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
            <circle cx="18.5" cy="12.5" r="1" fill="currentColor" />
        </svg>
    ),
} as const;

export default function Categories() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState<string>("camera");

    const cats: Cat[] = useMemo(
        () => [
            { id: "phones", name: "Phones", icon: icons.Phone },
            { id: "computers", name: "Computers", icon: icons.Computer },
            { id: "watch", name: "SmartWatch", icon: icons.Watch },
            { id: "camera", name: "Camera", icon: icons.Camera },
            { id: "headphones", name: "HeadPhones", icon: icons.Headphones },
            { id: "gaming", name: "Gaming", icon: icons.Gaming },
            { id: "more1", name: "Phones", icon: icons.Phone },
            { id: "more2", name: "Computers", icon: icons.Computer },
        ],
        []
    );

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


