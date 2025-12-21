export default function SectionHeadLine({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm">

            </div>
            <h2 className="whitespace-pre-line text-base font-semibold leading-tight text-[#DB4444]">
                {title}
            </h2>
        </div>
    );
}