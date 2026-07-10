import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "ink" | "onDark";
  className?: string;
};

/**
 * Eternal Safety Solutions wordmark. Uses the graphite variant on light
 * surfaces and the white variant on dark surfaces. Height is controlled by the
 * wrapper (default h-9); pass `className` to override per placement.
 */
export function Logo({ tone = "ink", className }: LogoProps) {
  const src = tone === "onDark" ? "/esslogo-light.png" : "/esslogo-dark.png";

  return (
    <Link
      href="/"
      aria-label="Eternal Safety Solutions — home"
      className={cn(
        "inline-flex h-9 items-center focus-visible:outline-none",
        className,
      )}
    >
      <Image
        src={src}
        alt="Eternal Safety Solutions"
        width={3752}
        height={1203}
        priority
        className="h-full w-auto select-none"
      />
    </Link>
  );
}
