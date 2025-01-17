import {
  NextRequest,
  // NextResponse
} from "next/server";
import { format } from "date-fns";

export const config = {
  runtime: "edge",
};

const staticPages = [
  { url: "/", priority: 1.0 },
  { url: "/products", priority: 0.8 },
  { url: "/umkm", priority: 0.8 },
  { url: "/map", priority: 0.8 },
];

export default function handler(req: NextRequest) {
  // const host = req.nextUrl.host;
  const sites = staticPages.map((page) => ({
    url: page.url,
    lastModified: format(new Date(), "yyyy-MM-dd"),
    changeFrequency: "yearly",
    priority: page.priority,
  }));

  return sites;
  // const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   ${staticPages
  //     .map((page) => {
  //       return `
  //     <url>
  //       <loc>https://${host}${page.url}</loc>
  //       <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
  //       <changefreq>monthly</changefreq>
  //       <priority>${page.priority}</priority>
  //     </url>`;
  //     })
  //     .join("")}
  // </urlset>`;

  // return new NextResponse(sitemapContent, {
  //   headers: {
  //     "Content-Type": "application/xml",
  //   },
  // });
}
