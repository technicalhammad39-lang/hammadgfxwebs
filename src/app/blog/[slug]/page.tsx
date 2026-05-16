import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SourceBackLink from "@/components/ui/SourceBackLink";
import { blogs, getBlogPost } from "@/data/data";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Hammad GFX",
    };
  }

  return {
    title: `${post.title} | Hammad GFX Blog`,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} | Hammad GFX`,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white px-5 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-[71px]">
      <Navbar />

      <article className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 py-10 sm:py-14 lg:py-16">
        <header className="rounded-[32px] bg-[#171717] p-6 text-white sm:rounded-[44px] sm:p-10 lg:p-12">
          <SourceBackLink source="blog" homeHref="/#blog" defaultHref="/blog" className="mb-6 inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#171717]">
            Back to Blog
          </SourceBackLink>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#FD853A]">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <span>{post.date}</span>
            <span aria-hidden="true">/</span>
            <span>Author: Hammad GFX</span>
          </div>
          <h1 className="mt-5 text-[38px] font-semibold leading-[1.02] sm:text-[58px] lg:text-[72px]">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">{post.excerpt}</p>
        </header>

        <div className="relative h-[280px] overflow-hidden rounded-[32px] bg-[#171717] sm:h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 40px), 1120px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FD853A]/30 via-black/10 to-transparent" />
        </div>

        <section className="rounded-[32px] border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="space-y-6 text-lg leading-relaxed text-[#344054]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {relatedPosts.map((related) => (
            <Link key={related.slug} href={`/blog/${related.slug}`} className="rounded-[28px] bg-[#F2F4F7] p-6 transition-colors hover:bg-[#FFF6ED]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Related Post</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#171717]">{related.title}</h2>
              <p className="mt-3 text-[#667085]">{related.excerpt}</p>
            </Link>
          ))}
        </section>

        <section className="flex flex-col items-start justify-between gap-5 rounded-[32px] bg-[#171717] p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Want your brand to look more professional?</h2>
            <p className="mt-2 max-w-2xl text-white/70">Start with clean, consistent visuals built for trust, clarity, and stronger first impressions.</p>
          </div>
          <Link href="/#contact" className="rounded-full bg-[#FD853A] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#e46e24]">
            Contact Hammad GFX
          </Link>
        </section>
      </article>
    </main>
  );
}
