"use client";

import SectionHeadLine from "@/components/SectionHeadLine";
import Image from "next/image";
import { banners, type Banner } from "@/data/banners";

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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Main banner - full width on mobile, half on desktop */}
                <BannerCard
                    item={banners[0]}
                    className="col-span-1 md:col-span-6 h-64 sm:h-72 md:h-full w-full"
                />

                {/* Right side banners - full width on mobile, half on desktop */}
                <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
                    {/* Top banner */}
                    <BannerCard
                        item={banners[1]}
                        className="h-64 sm:h-72 md:h-96 w-full"
                    />

                    {/* Bottom two banners */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BannerCard
                            item={banners[2]}
                            className="h-64 sm:h-72 w-full"
                        />
                        <BannerCard
                            item={banners[3]}
                            className="h-64 sm:h-72 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}