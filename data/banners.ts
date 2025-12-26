export type Banner = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl: string;
    cta?: { label: string; href: string };
    dark?: boolean;
};

export const banners: Banner[] = [
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

