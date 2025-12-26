"use client";
import Image from "next/image";

function CircleIcon({ children }: { children: React.ReactNode }) {
    return <div className="relative grid h-20 w-20 place-items-center bg-[#2F2E30]/30 rounded-full">
            <div className="relative z-10 grid h-15 w-15 place-items-center rounded-full bg-black text-white">{children}</div>
        </div>;
}

function TruckIcon() {
    return <Image src="/assets/Icons/TruckIcon.svg" alt="Truck" width={40} height={40} unoptimized />
}

function HeadsetIcon() {
    return <Image src="/assets/Icons/HeadsetIcon.svg" alt="Headset" width={40} height={40} unoptimized />
}

function ShieldIcon() {
    return <Image src="/assets/Icons/ShieldIcon.svg" alt="Shield" width={40} height={40} unoptimized />
}

function Item({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <CircleIcon>{icon}</CircleIcon>
            <div className="space-y-1">
                <p className="text-sm font-semibold uppercase">{title}</p>
                <p className="text-xs text-neutral-600">{subtitle}</p>
            </div>
        </div>
    );
}

export default function ServiceFeatures() {
    return (
        <section className="mt-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                <Item icon={<TruckIcon />} title="Free and fast delivery" subtitle="Free delivery for all orders over $140" />
                <Item icon={<HeadsetIcon />} title="24/7 customer service" subtitle="Friendly 24/7 customer support" />
                <Item icon={<ShieldIcon />} title="Money back guarantee" subtitle="We return money within 30 days" />
            </div>
        </section>
    );
}


