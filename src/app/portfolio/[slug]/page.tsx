import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SourceBackLink from "@/components/ui/SourceBackLink";
import { getPortfolioProject, portfolioData } from "@/data/data";

export function generateStaticParams() {
  return portfolioData.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Hammad GFX",
    };
  }

  return {
    title: `${project.title} | Hammad GFX Portfolio`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Hammad GFX`,
      description: project.desc,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white px-5 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-[71px]">
      <Navbar />

      <article className="mx-auto flex w-full max-w-[1298px] flex-col gap-8 py-10 sm:py-14 lg:py-16">
        <section className="grid gap-8 rounded-[32px] bg-[#171717] p-6 text-white sm:rounded-[44px] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#FD853A]">{project.category}</p>
              <h1 className="text-[42px] font-semibold leading-[0.98] sm:text-[64px] lg:text-[78px]">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{project.desc}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/#contact" className="rounded-full bg-[#FD853A] px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-[#e46e24]">
                Start a Similar Project
              </a>
              <SourceBackLink source="projects" homeHref="/#projects" defaultHref="/portfolio" className="rounded-full border border-white/40 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#171717]">
                Back to Portfolio
              </SourceBackLink>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[28px] bg-white/10 sm:min-h-[360px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FD853A]/80 via-[#171717] to-white/10" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Project Preview</p>
              <h2 className="mt-3 text-4xl font-semibold leading-none text-white sm:text-5xl">{project.title}</h2>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-4">
          {project.services.map((service) => (
            <div key={service} className="rounded-[28px] border border-[#E4E7EC] bg-[#F9FAFB] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Service</p>
              <h2 className="mt-3 text-xl font-semibold text-[#171717]">{service}</h2>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[32px] bg-[#F2F4F7] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#171717]">Project Overview</h2>
            <p className="mt-4 leading-relaxed text-[#667085]">{project.overview}</p>
          </div>
          <div className="rounded-[32px] bg-[#F2F4F7] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#171717]">Design Challenge</h2>
            <p className="mt-4 leading-relaxed text-[#667085]">{project.challenge}</p>
          </div>
          <div className="rounded-[32px] bg-[#F2F4F7] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#171717]">Final Result</h2>
            <p className="mt-4 leading-relaxed text-[#667085]">{project.result}</p>
          </div>
        </section>

        <section className="rounded-[32px] border border-[#FD853A]/25 bg-[#FFF6ED] p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-[#171717]">Design Solution</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#667085]">{project.solution}</p>
        </section>
      </article>
    </main>
  );
}
