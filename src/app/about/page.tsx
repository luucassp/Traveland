"use client";

import Image from "next/image";
import { StatsSection } from "@/components/sections/stats-section";
import { useLanguage } from "@/lib/i18n/context";

const team = [
  {
    name: "Sarah Murphy",
    roleKey: "role1",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Conor Byrne",
    roleKey: "role2",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Aoife Kelly",
    roleKey: "role3",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
] as const;

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-8">
      <div className="container-page grid gap-10 py-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{t.about.title}</h1>
          <p className="mt-4 text-text-secondary leading-relaxed">{t.about.intro1}</p>
          <p className="mt-4 text-text-secondary leading-relaxed">{t.about.intro2}</p>
        </div>
        <div className="grid h-72 grid-cols-2 gap-3 sm:h-96">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/116953ea1-13df-44f1-b20e-0d9f9be5b00d"
              alt={t.about.imageAlt1}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/2feb0ca7a-b7f0-448b-abbc-209f45b0dc2f"
              alt={t.about.imageAlt2}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="relative h-56 overflow-hidden rounded-2xl sm:h-80">
          <Image
            src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/342043978-ec33-4e69-be06-6d2df9b7b1a7"
            alt={t.about.imageAlt3}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <StatsSection />

      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.about.teamTitle}</h2>
          <p className="mt-3 text-text-secondary">{t.about.teamSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image src={member.photo} alt={member.name} fill sizes="128px" className="object-cover" />
              </div>
              <p className="mt-4 font-semibold">{member.name}</p>
              <p className="text-sm text-text-secondary">{t.about[member.roleKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
