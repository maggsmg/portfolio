import { a as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, g as renderHead, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, d as renderComponent } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const SITE_TITLE = "MAGDALENA MARTINEZ";
const SITE_DESCRIPTION = "Data/Business Analyst in Seattle";

const $$Astro$1 = createAstro("https://blahg.netlify.app/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/home-blog-card.png" } = Astro2.props;
  return renderTemplate`<head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta name="twitter:creator" content="@cassidoo"><meta name="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- RSS Link --><link rel="alternate" href="/rss.xml" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml">${renderHead()}</head>`;
}, "/Users/magdalenamartinez/portfolio/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  let isActive = href === Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/magdalenamartinez/portfolio/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="header-section" data-astro-cid-3ef6ksr2> <div class="header-frame" data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2>${SITE_TITLE}</h1> <h2 data-astro-cid-3ef6ksr2>${SITE_DESCRIPTION}</h2> </div> <div class="header-img-container" data-astro-cid-3ef6ksr2> <img class="header-img" src="/assets/profile2.JPG" alt="Magdalena Martinez" data-astro-cid-3ef6ksr2> </div> </div> </header> <nav data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/assets/MagdalenaMartinezResumeWebsite.pdf", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`resume` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/posts", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`portfolio` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://www.linkedin.com/in/magdalenamtzg/", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`linkedin` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://public.tableau.com/app/profile/magdalena.martinez/vizzes", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`tableau` })} </nav> `;
}, "/Users/magdalenamartinez/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} maggs with help of this awesome template by cassidoo. <a href="https://github.com/cassidoo/blahg" data-astro-cid-sz7xmlte>This site is open source</a>! <3
</footer> `;
}, "/Users/magdalenamartinez/portfolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ColorScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n	let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];\n\n	function getRandomColor() {\n		return colors[Math.floor(Math.random() * colors.length)];\n	}\n\n	function setRandomLinkColor() {\n		Array.from(document.getElementsByTagName("a")).forEach((e) => {\n			e.style.textDecorationColor = getRandomColor();\n		});\n	}\n\n	function setColorHoverListener() {\n		Array.from(document.querySelectorAll("a, button")).forEach((e) => {\n			e.addEventListener("mouseover", setRandomLinkColor);\n		});\n	}\n\n	(function () {\n		setRandomLinkColor();\n		setColorHoverListener();\n	})();\n<\/script>'])));
}, "/Users/magdalenamartinez/portfolio/src/components/ColorScript.astro", void 0);

export { $$BaseHead as $, SITE_TITLE as S, $$Header as a, $$Footer as b, $$ColorScript as c, SITE_DESCRIPTION as d };
