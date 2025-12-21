"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import EyeBrow from "./EyeBrow";
type Slide = {
    id: string;
    title: string;
    subtitle?: string;
    cta?: { label: string; href: string };
    imageUrl: string;
    imageAlt: string;
};

const slides: Slide[] = [
    {
        id: "iphone-14",
        title: "Up to 10% \noff Voucher",
        cta: { label: "Shop Now", href: "/c/phones" },
        imageUrl:
            "/assets/images/hero-image.jpg",
        imageAlt: "iPhone hero",
    },
    {
        id: "headphones",
        title: "Feel the music \nwith sound",
        cta: { label: "Shop Now", href: "/c/audio" },
        imageUrl:
            "/assets/images/hero-image.jpg",
        imageAlt: "Headphones hero",
    },
    {
        id: "watch",
        title: "Track more, \ncharge less",
        cta: { label: "Shop Now", href: "/c/wearables" },
        imageUrl:
            "/assets/images/hero-image.jpg",
        imageAlt: "Watch hero",
    },
];

export default function Hero() {
    return (
        <div className="hero-swiper relative h-90 w-full overflow-hidden bg-black sm:h-64 md:h-80">
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="h-full w-full"
            >
                {slides.map((s) => (
                    <SwiperSlide key={s.id}>
                        <SlideContent slide={s} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function SlideContent({ slide }: { slide: Slide }) {
    return (
        <div className="relative h-full w-full">
            <div className="relative z-10 px-5 sm:px-8 md:px-14 py-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="max-w-lg text-white space-y-4">
                    <EyeBrow />
                    <h2 className="whitespace-pre-line text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">
                        {slide.title}
                    </h2>

                    {slide.cta ? (
                        <a
                            href={slide.cta.href}
                            className="inline-flex items-center gap-2 px-4 py-2 text-base font-medium text-white transition underline underline-offset-2 hover:no-underline"
                        >
                            {slide.cta.label} <ArrowRightIcon />
                        </a>
                    ) : null}
                </div>
                <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

function ArrowRightIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}


