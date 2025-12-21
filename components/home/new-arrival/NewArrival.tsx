"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import Image from "next/image";

type Banner = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl: string;
    cta?: { label: string; href: string };
    dark?: boolean;
};

const banners: Banner[] = [
    {
        id: "ps5",
        title: "PlayStation 5",
        subtitle: "Black and White version of the PS5 coming out on sale.",
        imageUrl: "/assets/images/PlayStation.png",
        cta: { label: "Shop Now", href: "#" },
        dark: true,
    },
    {
        id: "women",
        title: "Women's Collections",
        subtitle: "Featured women collections that give you another vibe.",
        imageUrl: "/assets/images/Women's.png",
        cta: { label: "Shop Now", href: "#" },
        dark: true,
    },
    {
        id: "speakers",
        title: "Speakers",
        subtitle: "Amazon wireless speakers",
        imageUrl: "/assets/images/Speakers.png",
        cta: { label: "Shop Now", href: "#" },
        dark: true,
    },
    {
        id: "perfume",
        title: "Perfume",
        subtitle: "GUCCI INTENSE OUD EDP",
        imageUrl: "/assets/images/Perfume.png",
        cta: { label: "Shop Now", href: "#" },
        dark: true,
    },
];

function BannerCard({ item, className }: { item: Banner; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-sm ${className ?? ""} bg-black`}>
            <Image
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full select-none object-cover"
                fill
                draggable={false}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h4 className="text-lg font-semibold sm:text-2xl">{item.title}</h4>
                {item.subtitle ? (
                    <p className="mt-1 max-w-xs text-xs text-neutral-200 sm:text-base">{item.subtitle}</p>
                ) : null}
                {item.cta ? (
                    <a
                        href={item.cta.href}
                        className="mt-3 inline-flex w-max items-center rounded-sm underline px-4 py-2 text-base font-medium text-white hover:opacity-90"
                    >
                        {item.cta.label}
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default function NewArrival() {
    return (
        <section className="mt-14 space-y-6">
            <div className="space-y-3">
                <SectionHeadLine title="Featured" />
                <h3 className="text-2xl font-semibold sm:text-3xl">New Arrival</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <BannerCard item={banners[0]} className="md:col-span-6 h-72 sm:h-full" />
                <div className="flex flex-col gap-4 col-span-6">
                    <BannerCard item={banners[1]} className="md:col-span-12 h-72 sm:h-96" />
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <BannerCard item={banners[2]} className="h-72 w-full" />
                        <BannerCard item={banners[3]} className="h-72 w-full " />
                    </div>
                </div>
            </div>
        </section>
    );
}


