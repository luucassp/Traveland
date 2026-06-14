import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container-page py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao blog
      </Link>

      <div className="mx-auto mt-6 max-w-3xl">
        <Badge variant="secondary">{post.category}</Badge>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>
        <p className="mt-2 text-sm text-text-secondary">
          {new Date(post.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
