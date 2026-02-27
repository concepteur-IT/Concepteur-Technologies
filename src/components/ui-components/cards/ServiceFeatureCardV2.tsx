import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  description: string;
  variant?: "wide" | "default";
  href?: string;
  className?: string;
}

export default function ServiceFeatureCardV2({
  image,
  title,
  description,
  variant = "default",
  href,
  className = "",
}: Props) {
  const isWide = variant === "wide";

  const content = (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
      {/* Text Area */}
      <div
        className={`relative z-10 flex flex-col p-8 md:p-10 ${isWide ? "pb-6" : "pb-4"}`}
      >
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
        <p
          className={`mt-3 text-base leading-relaxed text-gray-500 ${isWide ? "max-w-2xl" : "max-w-xs"}`}
        >
          {description}
        </p>
      </div>

      {/* Image Area */}
      <div
        className={`relative w-full flex-1 overflow-hidden mt-auto bg-gray-50/50 ${isWide ? "min-h-[280px]" : "min-h-[220px]"}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle inner shadow overlay to blend the image edge with the container smoothly if needed, but keeping it perfectly clear and bright */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent opacity-80 z-10" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`group block w-full h-full ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`group w-full h-full ${className}`}>{content}</div>;
}
