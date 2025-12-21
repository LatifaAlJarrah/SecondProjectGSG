"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
    endAt: string | number | Date;
    className?: string;
};

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function compute(target: number): TimeLeft {
    const now = Date.now();
    const d = Math.max(0, target - now);
    return {
        days: Math.floor(d / (24 * 60 * 60 * 1000)),
        hours: Math.floor((d % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        minutes: Math.floor((d % (60 * 60 * 1000)) / (60 * 1000)),
        seconds: Math.floor((d % (60 * 1000)) / 1000),
    };
}

export default function PillCountdown({ endAt, className }: Props) {
    const target = useMemo(() => new Date(endAt).getTime(), [endAt]);
    const [left, setLeft] = useState<TimeLeft>(() => compute(target));

    useEffect(() => {
        const id = setInterval(() => setLeft(compute(target)), 1000);
        return () => clearInterval(id);
    }, [target]);

    const pills = [
        { label: "Hours", value: left.hours },
        { label: "Days", value: left.days },
        { label: "Minutes", value: left.minutes },
        { label: "Seconds", value: left.seconds },
    ];

    return (
        <div className={`flex items-center gap-3 ${className ?? ""}`} role="timer" aria-label="deal countdown">
            {pills.map((p) => (
                <div key={p.label} className="grid place-items-center rounded-full bg-white text-black" style={{ width: 62, height: 62 }}>
                    <div className="text-center">
                        <div className="text-base font-semibold tabular-nums leading-none">{String(p.value).padStart(2, "0")}</div>
                        <div className={`mt-1 text-[11px] leading-none text-black`}>{p.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}


