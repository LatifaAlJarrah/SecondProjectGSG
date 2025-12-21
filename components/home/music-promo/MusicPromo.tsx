"use client";

import PillCountdown from "./PillCountdown";
import { useEffect, useState } from "react";

type Props = {
    imageUrl?: string;
    endAt?: string | number | Date;
};

export default function MusicPromo({ imageUrl = "/assets/images/music.png", endAt }: Props) {
    const [end, setEnd] = useState<string>(() => (endAt ? new Date(endAt).toISOString() : ""));

    useEffect(() => {
        if (endAt) {
            setEnd(new Date(endAt).toISOString());
        } else {
            // set once after mount to avoid impure Date.now during render
            setEnd(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Boolean(endAt)]);

    return (
        <section className="mt-14">
            <div className="relative overflow-hidden bg-black">
                {/* Radial vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_50%,rgba(255,255,255,0.18)_0%,rgba(0,0,0,0.9)_60%,rgba(0,0,0,1)_100%)]" />

                <div className="relative grid grid-cols-1 items-center gap-6 px-6 py-10 sm:px-14 md:grid-cols-2 md:py-14">
                    {/* Left copy */}
                    <div className="space-y-5 text-white">
                        <p className="text-base font-semibold text-[#00FF66]">Categories</p>
                        <h3 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Enhance Your Music Experience</h3>
                        {end ? <PillCountdown endAt={end} /> : null}
                        <button className="mt-4 inline-flex items-center rounded-sm bg-[#00FF66] px-10 py-3 text-base font-medium text-white">
                            Buy Now!
                        </button>
                    </div>

                    {/* Right image */}
                    <div className="relative mx-auto w-full max-w-155">
                        {/* halo */}
                        <div
                            aria-hidden="true"
                            className="
      pointer-events-none absolute left-1/2 top-1/2
      h-255 w-150 -translate-x-1/2 -translate-y-1/2
      rounded-full bg-[#D9D9D9]/30 blur-[200px] z-0
    "
                        />
                        <img
                            src={imageUrl}
                            alt="Promo"
                            className="w-full max-w-xl select-none object-contain z-10 relative image-animation"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


