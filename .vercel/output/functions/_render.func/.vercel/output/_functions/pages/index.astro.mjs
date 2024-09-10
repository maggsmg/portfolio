import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$ColorScript, S as SITE_TITLE, d as SITE_DESCRIPTION } from '../chunks/ColorScript_BcpgUV-v.mjs';
import { $ as $$Post } from '../chunks/Post_D6uQeZoV.mjs';
import { g as getTags, $ as $$Tags } from '../chunks/getTags_CpSqTbSa.mjs';
import { C as Content } from '../chunks/about_DqJ6hJmD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://blahg.netlify.app/");
const $$HomePosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomePosts;
  const { allPosts } = Astro2.props;
  let posts = allPosts.sort(
    (a, b) => new Date(b.frontmatter.updated || b.frontmatter.added).valueOf() - new Date(a.frontmatter.updated || a.frontmatter.added).valueOf()
  ).slice(0, 5);
  return renderTemplate`${maybeRenderHead()}<content> <ul class="posts-list"> ${posts.map(
    ({
      url,
      frontmatter: { description, slug, title, tags, added: date }
    }) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "url": url, "description": description, "date": date, "slug": slug, "title": title, "tags": tags })}`
  )} </ul> </content>`;
}, "/Users/magdalenamartinez/portfolio/src/components/HomePosts.astro", void 0);

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/project-1.md": () => import('../chunks/project-1_DU0DvyQv.mjs').then(n => n._),"../posts/sales-dashboard-tableau.md": () => import('../chunks/sales-dashboard-tableau_DhbhCA7K.mjs').then(n => n._),"../posts/wind-energy-model.md": () => import('../chunks/wind-energy-model_DFiRBTkY.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = getTags(posts);
  return renderTemplate`<html lang="en-us"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <main> ${renderComponent($$result, "About", Content, {})} <br> <h3>Here are my most recent projects</h3> ${renderComponent($$result, "HomePosts", $$HomePosts, { "allPosts": posts })} <br> ${renderComponent($$result, "Tags", $$Tags, { "tags": tags, "all": true })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ColorScript", $$ColorScript, {})} </body></html>`;
}, "/Users/magdalenamartinez/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/magdalenamartinez/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
