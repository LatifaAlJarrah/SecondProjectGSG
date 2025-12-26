type Category = {
	id: string;
	name: string;
	icon: React.ReactNode;
};

type Props = {
	category: Category;
	active?: boolean;
	onClick?: (id: string) => void;
};

export default function CategoryCard({ category, active, onClick }: Props) {
	return (
		<button
			type="button"
			onClick={() => onClick?.(category.id)}
			className={`group flex h-28 w-full items-center justify-center rounded-md border transition ${
				active
					? "border-[#DB4444] bg-[#DB4444] text-white"
					: "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
			}`}
		>
			<div className="flex flex-col items-center gap-3">
				<span className={`text-2xl ${active ? "text-white [&_img]:brightness-0 [&_img]:invert" : "text-neutral-700"}`}>{category.icon}</span>
				<span className={`text-xs ${active ? "text-white" : "text-neutral-700"}`}>{category.name}</span>
			</div>
		</button>
	);
}


