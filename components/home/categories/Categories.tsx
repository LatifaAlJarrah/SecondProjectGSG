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
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_868)">
                <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.6667 7H31.1354" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 44.0052V44.0305" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="currentColor" stroke-width="2" />
            </g>
            <defs>
                <clipPath id="clip0_6646_868">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Computer: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_613)">
                <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3333 46.6666H39.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 37.3334V46.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 37.3334V46.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 32H48" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_6646_613">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Watch: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_621)">
                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 42V49H35V42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 14V7H35V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="24" y1="23" x2="24" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <line x1="32" y1="26" x2="32" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_6646_621">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Camera: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_3)">
                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_6646_3">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Headphones: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_640)">
                <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_6646_640">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    Gaming: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6646_804)">
                <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 25.6666V25.6908" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333V30.3574" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_6646_804">
                    <rect width="56" height="56" fill="white" />
                </clipPath>
            </defs>
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
        <section className="mt-14 space-y-6 border-y border-black/30 py-6 md:py-10">
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}

function ArrowRightIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}


