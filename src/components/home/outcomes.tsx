import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { stats, img, unsplash } from "@/lib/site";

export function Outcomes() {
  return (
    <section className="section-sm bg-bg">
      <div className="container-x">
        <div className="grid items-stretch gap-8 overflow-hidden rounded-xl lg:grid-cols-[0.85fr_1.15fr]">
          {/* Image */}
          <Reveal className="relative min-h-[22rem] overflow-hidden rounded-xl bg-graphite-deep">
            <Image
              src={unsplash(img.welding.id, 1200, 78)}
              alt={img.welding.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-deep/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="max-w-xs font-display text-lg text-onDark">
                Fifteen years of NSW worksites, distilled into a standard you can
                rely on.
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="flex flex-col justify-center rounded-xl bg-graphite-deep p-8 text-onDark sm:p-12">
            <p className="kicker kicker-on-dark mb-8">By the numbers</p>
            <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <div className="font-display text-5xl font-medium tracking-tight text-onDark sm:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 h-px w-10 bg-amber" />
                  <p className="mt-3 text-sm text-onDark/70">{stat.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
