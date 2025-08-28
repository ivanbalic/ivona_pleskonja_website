import { writeFileSync } from "fs";
import prettier from "prettier";
import globby from "globby";

const baseUrl = "https://ivonapleskonja.com";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "app/**/*.tsx",
    "!app/**/_*.tsx",
    "!app/**/layout.tsx",
    "!app/**/loading.tsx",
    "!app/**/error.tsx",
    "!app/**/*.test.tsx",
  ]);

  const locales = ["en", "sr"];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages
        .map((page) => {
          const path = page
            .replace("app", "")
            .replace("/page.tsx", "")
            .replace("/index.tsx", "");

          const route = path === "" ? "" : path;

          return `
            ${locales
              .map(
                (locale) => `
              <url>
                <loc>${baseUrl}${locale === "en" ? "" : `/${locale}`}${route}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                ${locales
                  .map(
                    (l) => `
                  <xhtml:link
                    rel="alternate"
                    hreflang="${l}"
                    href="${baseUrl}${l === "en" ? "" : `/${l}`}${route}"
                  />
                `,
                  )
                  .join("")}
              </url>
            `,
              )
              .join("")}
          `;
        })
        .join("")}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", await formatted);
}

generate();
