import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal, MaskHeading } from "@/components/site/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a WHS consultation with Eternal Safety Solutions. Servicing construction, civil, manufacturing and logistics operations across New South Wales.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: MapPin,
    label: "Servicing",
    value: `${site.address.locality} & all of ${site.address.region}`,
  },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <section className="bg-bg">
      <div className="container-x pb-20 pt-32 sm:pb-28 sm:pt-40">
        {/* Page heading — no hero */}
        <div className="max-w-3xl">
          <p className="kicker mb-6">Contact</p>
          <MaskHeading
            as="h1"
            trigger="mount"
            text="Book a consultation."
            className="text-h2 font-display font-medium text-ink"
          />
          <Reveal trigger="mount">
            <p className="measure mt-6 text-lead text-ink-soft">
              Tell us about your operation and we&apos;ll come back within one
              business day. No obligation — just a clear next step toward a
              safer, compliant business.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-12 border-t border-line pt-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div>
            <h2 className="text-h3 max-w-[16ch] font-display font-medium text-ink">
              However you reach out, you&apos;ll speak to a practitioner — not a
              call centre.
            </h2>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-2 text-amber-deep">
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-medium text-ink">
                      {d.href ? (
                        <a href={d.href} className="link-underline">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
              ABN {site.abn} · Aligned to the WHS Act 2011 (NSW), ISO 45001 and
              SafeWork NSW codes of practice.
            </p>
          </div>

          {/* Form */}
          <Reveal className="rounded-xl border border-line bg-surface p-6 sm:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
