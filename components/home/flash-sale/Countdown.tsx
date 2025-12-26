"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

/**
 * Props for the Countdown component
 */
type CountdownProps = {
    /** Target date/time for the countdown (Date object, ISO string, or timestamp) */
    endAt: Date | string | number;
    /** Optional CSS class name */
    className?: string;
    /** Optional callback when countdown reaches zero */
    onComplete?: () => void;
};

/**
 * Time units remaining in the countdown
 */
type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

/**
 * Time constants in milliseconds
 */
const TIME_CONSTANTS = {
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
} as const;

/**
 * Update interval in milliseconds
 */
const UPDATE_INTERVAL = 1000;

/**
 * Calculates the time remaining until the target date
 * @param target - Target timestamp in milliseconds
 * @returns Object containing days, hours, minutes, and seconds remaining
 */
function getTimeLeft(target: number): TimeLeft {
    const now = Date.now();
    const delta = Math.max(0, target - now);

    const days = Math.floor(delta / TIME_CONSTANTS.DAY);
    const hours = Math.floor((delta % TIME_CONSTANTS.DAY) / TIME_CONSTANTS.HOUR);
    const minutes = Math.floor((delta % TIME_CONSTANTS.HOUR) / TIME_CONSTANTS.MINUTE);
    const seconds = Math.floor((delta % TIME_CONSTANTS.MINUTE) / TIME_CONSTANTS.SECOND);

    return { days, hours, minutes, seconds };
}

/**
 * Validates and converts the endAt prop to a timestamp
 * @param endAt - Date object, ISO string, or timestamp
 * @returns Valid timestamp or throws error
 */
function parseEndDate(endAt: Date | string | number): number {
    const timestamp = typeof endAt === "number" ? endAt : new Date(endAt).getTime();

    if (isNaN(timestamp)) {
        throw new Error(`Invalid date provided to Countdown: ${endAt}`);
    }

    return timestamp;
}

/**
 * Countdown component that displays time remaining until a target date
 * 
 * @example
 * ```tsx
 * <Countdown endAt={new Date("2026-01-01")} />
 * <Countdown endAt="2026-01-01T00:00:00Z" onComplete={() => console.log("Done!")} />
 * ```
 */
export default function Countdown({ endAt, className, onComplete }: CountdownProps) {
    const target = useMemo(() => parseEndDate(endAt), [endAt]);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));
    const [isComplete, setIsComplete] = useState(false);

    const updateTimeLeft = useCallback(() => {
        const newTimeLeft = getTimeLeft(target);
        setTimeLeft(newTimeLeft);

        // Check if countdown is complete
        const total = newTimeLeft.days + newTimeLeft.hours + newTimeLeft.minutes + newTimeLeft.seconds;
        if (total === 0 && !isComplete) {
            setIsComplete(true);
            onComplete?.();
        }
    }, [target, isComplete, onComplete]);

    useEffect(() => {
        // Set up interval
        const intervalId = setInterval(updateTimeLeft, UPDATE_INTERVAL);

        return () => clearInterval(intervalId);
    }, [updateTimeLeft]);

    // Don't render if countdown is complete (optional - remove if you want to show 00:00:00:00)
    if (isComplete) {
        return (
            <div
                aria-label="Countdown completed"
                role="timer"
                aria-live="polite"
                className={className}
            >
                <div className="flex items-end gap-5 sm:gap-7">
                    <TimeUnit label="Days" value={0} />
                    <Separator />
                    <TimeUnit label="Hours" value={0} />
                    <Separator />
                    <TimeUnit label="Minutes" value={0} />
                    <Separator />
                    <TimeUnit label="Seconds" value={0} />
                </div>
            </div>
        );
    }

    return (
        <div
            aria-label="Flash sale countdown"
            role="timer"
            aria-live="polite"
            className={className}
        >
            <div className="flex items-end gap-5 sm:gap-7">
                <TimeUnit label="Days" value={timeLeft.days} />
                <Separator />
                <TimeUnit label="Hours" value={timeLeft.hours} />
                <Separator />
                <TimeUnit label="Minutes" value={timeLeft.minutes} />
                <Separator />
                <TimeUnit label="Seconds" value={timeLeft.seconds} />
            </div>
        </div>
    );
}

/**
 * Props for TimeUnit component
 */
type TimeUnitProps = {
    /** Label for the time unit (e.g., "Days", "Hours") */
    label: string;
    /** Numeric value to display */
    value: number;
};

/**
 * Displays a single time unit (days, hours, minutes, or seconds)
 */
function TimeUnit({ label, value }: TimeUnitProps) {
    const padded = String(value).padStart(2, "0");

    return (
        <div className="text-center">
            <div
                className="text-[10px] uppercase tracking-wide text-neutral-500 sm:text-xs"
                aria-hidden="true"
            >
                {label}
            </div>
            <div
                className="font-semibold tabular-nums sm:text-xl"
                aria-label={`${label}: ${padded}`}
                suppressHydrationWarning
            >
                {padded}
            </div>
        </div>
    );
}

/**
 * Separator component between time units
 */
function Separator() {
    return (
        <span
            className="mb-1 text-lg font-semibold text-[#DB4444]"
            aria-hidden="true"
        >
            :
        </span>
    );
}
