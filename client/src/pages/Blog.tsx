import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { blogPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function Blog() {
  return (
    <div className="space-y-8">
      <h1>Blog Posts</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="space-y-1">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {formatDate(post.date)} — {post.summary}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
