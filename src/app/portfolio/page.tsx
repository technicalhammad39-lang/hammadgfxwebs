import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { portfolioCategories, portfolioData } from "@/data/data";

export const metadata: Metadata = {
  title: "Portfolio | Hammad GFX",
  description: "Graphic design portfolio by Hammad GFX featuring logo design, brand identity, social media, print design, business profiles, and website graphics.",
  openGraph: {
    title: "Portfolio | Hammad GFX",
    description: "Explore premium graphic design projects by Hammad GFX.",
  },
};

type PortfolioPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const activeCategory = params?.category ?? "All";
  const projects = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter((project) => project.category === activeCategory);

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white px-5 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-[71px]">
      <Navbar />

      <section className="mx-auto flex w-full max-w-[1298px] flex-col gap-8 py-10 sm:py-14 lg:py-16">
        <div className="rounded-[32px] bg-[#171717] px-6 py-10 text-white sm:rounded-[44px] sm:px-10 lg:px-14 lg:py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#FD853A]">Hammad GFX Portfolio</p>
          <h1 className="max-w-4xl text-[40px] font-semibold leading-[0.98] sm:text-[58px] lg:text-[76px]">
            Graphic Design Work Built for Trust and First Impressions.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Explore selected logo, brand identity, social media, print, business profile, and website graphics projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {portfolioCategories.map((category) => (
            <Link
              key={category}
              href={category === "All" ? "/portfolio" : `/portfolio?category=${encodeURIComponent(category)}`}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:text-base ${activeCategory === category ? "bg-[#FD853A] text-white" : "bg-[#F2F4F7] text-[#171717] hover:bg-[#171717] hover:text-white"}`}
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <PortfolioCard key={project.slug} {...project} priority={index < 2} />
          ))}
        </div>
      </section>
    </main>
  );
}

