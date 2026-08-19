import { Link } from "react-router";
import { categoryLabel, categoryKanji } from "@/lib/categories";
import { Clock } from "lucide-react";
import type { Post } from "@db/schema";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-sumi/10 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-sumi/5">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-serif text-6xl text-aka/20">
            {categoryKanji(post.category)}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-sm bg-aka px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-washi">
          {categoryLabel(post.category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold leading-snug text-sumi transition-colors group-hover:text-aka">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-sumi/65">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-sumi/50">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min
          </span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
