"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
    endAt: Date | string | number;
    className?: string;
};

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
    const now = Date.now();
    const delta = Math.max(0, target - now);
    const days = Math.floor(delta / (24 * 60 * 60 * 1000));
    const hours = Math.floor((delta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((delta % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((delta % (60 * 1000)) / 1000);
    return { days, hours, minutes, seconds };
}

export default function Countdown({ endAt, className }: CountdownProps) {
    const target = useMemo(() => new Date(endAt).getTime(), [endAt]);
    const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(target));

    useEffect(() => {
        const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
        return () => clearInterval(id);
    }, [target]);

    return (
        <div
            aria-label="Flash sale countdown"
            role="timer"
            className={className}
        >
            <div className="flex items-end gap-5 sm:gap-7">
                <TimeUnit label="Days" value={left.days} />
                <Separator />
                <TimeUnit label="Hours" value={left.hours} />
                <Separator />
                <TimeUnit label="Minutes" value={left.minutes} />
                <Separator />
                <TimeUnit label="Seconds" value={left.seconds} />
            </div>
        </div>
    );
}

function TimeUnit({ label, value }: { label: string; value: number }) {
    const padded = String(value).padStart(2, "0");
    return (
        <div className="text-center">
            <div className="text-[10px] uppercase tracking-wide text-neutral-500 sm:text-xs">
                {label}
            </div>
            <div className="font-semibold tabular-nums sm:text-xl">{padded}</div>
        </div>
    );
}

function Separator() {
    return <span className="mb-1 text-lg font-semibold text-[#DB4444]">:</span>;
}


