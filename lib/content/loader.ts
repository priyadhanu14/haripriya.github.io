import { siteContent } from "@/lib/content/data";
import type { SiteContent, WorkCategory, WorkItem } from "@/lib/content/types";

export function getSiteContent(): SiteContent {
  return siteContent;
}

export function getFeaturedWork(limit = 6): WorkItem[] {
  return siteContent.work.slice(0, limit);
}

export function getWorkByCategory(categories: WorkCategory[]): WorkItem[] {
  return siteContent.work.filter((item) => categories.includes(item.category));
}
