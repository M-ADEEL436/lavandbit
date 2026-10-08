import Link from "next/link";
import type { Post } from "@/content/types";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={`flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-ink-3 ${
        featured ? "sm:p-8" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-[0.68rem] tracking-wide text-ink-3">
          {post.readingMinutes} min read
        </span>
      </div>

      <h3 className={`leading-snug ${featured ? "text-[1.4rem]" : "text-[1.08rem]"}`}>
        <Link href={`/blog/${post.slug}`} className="hover:text-brand">
          {post.title}
        </Link>
      </h3>

      <p className="flex-1 text-[0.92rem] leading-relaxed text-ink-2">{post.description}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-1 font-mono text-[0.72rem] tracking-wide text-brand hover:underline"
      >
        Read →
      </Link>
    </article>
  );
}

export function PostList({ posts }: { posts: readonly Post[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
