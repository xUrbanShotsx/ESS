import Image from "next/image";
import { MaskHeading, Reveal } from "@/components/site/reveal";
import { unsplash } from "@/lib/site";

type PageHeroProps = {
  kicker: string;
  title: string;
  intro?: string;
  imageId: string;
  imageAlt: string;
};

export function PageHero({ kicker, title, intro, imageId, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-graphite-deep text-onDark">
      <div className="absolute inset-0 -z-10">
        <Image
          src={unsplash(imageId, 2000, 78)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.9] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-deep via-graphite-deep/75 to-graphite-deep/45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-graphite-deep/70 to-transparent" />
      </div>

      <div className="container-x flex min-h-[62svh] flex-col justify-end pb-16 pt-40 sm:pb-20">
        <p className="kicker kicker-on-dark mb-6">{kicker}</p>
        <MaskHeading
          as="h1"
          trigger="mount"
          text={title}
          className="text-display max-w-[15ch] font-display font-medium text-onDark"
        />
        {intro && (
          <Reveal trigger="mount">
            <p className="measure mt-7 text-lead text-onDark/85">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
