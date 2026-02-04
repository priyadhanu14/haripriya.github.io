export interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // YYYY-MM-DD
}

export interface BlogPost extends BlogPostPreview {
  content: string;
}

export interface BlogProvider {
  listPosts(): Promise<BlogPostPreview[]>;
  getPost(slug: string): Promise<BlogPost | null>;
}
