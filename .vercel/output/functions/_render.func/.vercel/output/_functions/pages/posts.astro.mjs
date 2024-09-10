import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$ColorScript, S as SITE_TITLE, d as SITE_DESCRIPTION } from '../chunks/ColorScript_BcpgUV-v.mjs';
import { $ as $$Post } from '../chunks/Post_D6uQeZoV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/project-1.md": () => import('../chunks/project-1_DU0DvyQv.mjs').then(n => n._),"../posts/sales-dashboard-tableau.md": () => import('../chunks/sales-dashboard-tableau_DhbhCA7K.mjs').then(n => n._),"../posts/wind-energy-model.md": () => import('../chunks/wind-energy-model_DFiRBTkY.mjs').then(n => n._)}), () => "../posts/*.md")).sort(
    (a, b) => new Date(b.frontmatter.updated || b.frontmatter.added).valueOf() - new Date(a.frontmatter.updated || a.frontmatter.added).valueOf()
  );
  return renderTemplate`<html lang="en-us"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main> <content> <ul class="posts-list"> ${posts.map(
    ({
      url,
      frontmatter: { description, slug, title, tags, added: date }
    }) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "description": description, "date": date, "slug": slug, "title": title, "tags": tags })}`
  )} </ul> </content> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ColorScript", $$ColorScript, {})} </body></html>`;
}, "/Users/magdalenamartinez/portfolio/src/pages/posts.astro", void 0);

const $$file = "/Users/magdalenamartinez/portfolio/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Posts,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
