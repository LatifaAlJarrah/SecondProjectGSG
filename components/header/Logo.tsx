import Link from "next/link";
import type { ComponentProps } from "react";

type LogoProps = {
    className?: string;
    href?: string;
    children?: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export default function Logo({ className, href = "/", children, ...linkProps }: LogoProps) {
    return (
        <Link href={href} className={className} {...linkProps}>
            {children ?? "Exclusive"}
        </Link>
    );
}


