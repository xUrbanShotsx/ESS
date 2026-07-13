import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-deep text-onDark">
      <div className="container-x">
        {/* Columns */}
        <div className="grid gap-12 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="onDark" className="h-11" />
            <p className="measure-sm mt-5 text-sm leading-relaxed text-onDark-muted">
              A NSW work health &amp; safety consultancy helping businesses
              protect their people and meet their legal duties — from first
              audit to ISO&nbsp;45001 certification.
            </p>
          </div>

          <nav aria-label="Footer — site">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-onDark-muted">
              Site
            </h3>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-onDark/80 transition-colors hover:text-onDark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — services">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-onDark-muted">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="link-underline text-onDark/80 transition-colors hover:text-onDark"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-onDark-muted">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-onDark/80">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-onDark"
                >
                  <Phone className="size-4 text-amber" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-onDark"
                >
                  <Mail className="size-4 text-amber" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 text-amber" aria-hidden="true" />
                <span>
                  {site.address.locality}, {site.address.region}
                  <br />
                  {site.region}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Base */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-onDark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. ABN {site.abn}.
          </p>
          <p>
            Aligned to the WHS Act 2011 (NSW) · ISO&nbsp;45001 · SafeWork NSW
          </p>
          <a
            href="https://sanj-studio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-onDark"
          >
            Website by SanjStudio
          </a>
        </div>
      </div>
    </footer>
  );
}
