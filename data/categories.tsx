import React from "react";
import Image from "next/image";

export type CategoryItem = {
    label: string;
    href?: string;
    hasChildren?: boolean;
    children?: Array<{ label: string; href?: string }>;
};

export const defaultCategories: CategoryItem[] = [
    {
        label: "Woman's Fashion",
        href: "/c/women",
        hasChildren: true,
        children: [
            { label: "Dresses", href: "/c/women/dresses" },
            { label: "Tops", href: "/c/women/tops" },
            { label: "Shoes", href: "/c/women/shoes" },
        ],
    },
    {
        label: "Men's Fashion",
        href: "/c/men",
        hasChildren: true,
        children: [
            { label: "T-Shirts", href: "/c/men/t-shirts" },
            { label: "Pants", href: "/c/men/pants" },
            { label: "Shoes", href: "/c/men/shoes" },
        ],
    },
    { label: "Electronics", href: "/c/electronics" },
    { label: "Home & Lifestyle", href: "/c/home" },
    { label: "Medicine", href: "/c/medicine" },
    { label: "Sports & Outdoor", href: "/c/sports" },
    { label: "Baby & Toys", href: "/c/baby" },
    { label: "Groceries & Pets", href: "/c/groceries" },
    { label: "Health & Beauty", href: "/c/beauty" },
];

export type Category = {
    id: string;
    name: string;
    icon: React.ReactNode;
};

// Icon wrapper component
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <span className="transition-all duration-200">
        {children}
    </span>
);

export const categoryIcons = {
    Phone: (
        <IconWrapper>
            <Image
                src="/assets/Icons/PhoneIcon.svg"
                alt="Phone"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
    Computer: (
        <IconWrapper>
            <Image
                src="/assets/Icons/computer.svg"
                alt="Computer"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
    Watch: (
        <IconWrapper>
            <Image
                src="/assets/Icons/watch.svg"
                alt="Watch"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
    Camera: (
        <IconWrapper>
            <Image
                src="/assets/Icons/camera.svg"
                alt="Camera"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
    Headphones: (
        <IconWrapper>
            <Image
                src="/assets/Icons/headphones.svg"
                alt="Headphones"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
    Gaming: (
        <IconWrapper>
            <Image
                src="/assets/Icons/gaming.svg"
                alt="Gaming"
                width={56}
                height={56}
                unoptimized
                className="transition-all duration-200"
            />
        </IconWrapper>
    ),
};

export const categories: Category[] = [
    { id: "phones", name: "Phones", icon: categoryIcons.Phone },
    { id: "computers", name: "Computers", icon: categoryIcons.Computer },
    { id: "watch", name: "SmartWatch", icon: categoryIcons.Watch },
    { id: "camera", name: "Camera", icon: categoryIcons.Camera },
    { id: "headphones", name: "HeadPhones", icon: categoryIcons.Headphones },
    { id: "gaming", name: "Gaming", icon: categoryIcons.Gaming },
    { id: "more1", name: "Phones", icon: categoryIcons.Phone },
    { id: "more2", name: "Computers", icon: categoryIcons.Computer },
];
