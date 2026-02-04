import type { BlogProvider, BlogPost, BlogPostPreview } from "@/lib/blog/types";

export class PlaceholderBlogProvider implements BlogProvider {
  async listPosts(): Promise<BlogPostPreview[]> {
    return [];
  }

  async getPost(slug: string): Promise<BlogPost | null> {
    void slug;
    return null;
  }
}

export const blogProvider: BlogProvider = new PlaceholderBlogProvider();
