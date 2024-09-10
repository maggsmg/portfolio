import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$ColorScript, S as SITE_TITLE, d as SITE_DESCRIPTION } from '../../chunks/ColorScript_BcpgUV-v.mjs';
import { $ as $$Post } from '../../chunks/Post_D6uQeZoV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://blahg.netlify.app/");
const Astro = $$Astro;
async function getStaticPaths() {
  let posts = await Astro.glob(/* #__PURE__ */ Object.assign({"../../posts/project-1.md": () => import('../../chunks/project-1_DU0DvyQv.mjs').then(n => n._),"../../posts/sales-dashboard-tableau.md": () => import('../../chunks/sales-dashboard-tableau_DhbhCA7K.mjs').then(n => n._),"../../posts/wind-energy-model.md": () => import('../../chunks/wind-energy-model_DFiRBTkY.mjs').then(n => n._)}), () => `../../posts/*.md`);
  const tags = posts.reduce((allTags, post) => {
    const postTags = post.frontmatter.tags;
    if (postTags) {
      postTags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(post);
      });
    }
    return allTags;
  }, {});
  return Object.keys(tags).map((t) => {
    return {
      params: { tag: t },
      props: { tag: tags[t] }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const { tag: currentTag } = Astro2.params;
  let sortedPosts = tag.sort(
    (a, b) => new Date(b.frontmatter.added).valueOf() - new Date(a.frontmatter.added).valueOf()
  );
  return renderTemplate`<html lang="en-us"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main> <content> <h3>Posts tagged with "${currentTag}"</h3> <ul class="tags-list"> ${sortedPosts.map(
    ({
      url,
      frontmatter: { description, slug, title, tags, added: date }
    }) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "url": url, "description": description, "date": date, "slug": slug, "title": title, "tags": tags })}`
  )} </ul> </content> ${renderComponent($$result, "Footer", $$Footer, {})} </main> ${renderComponent($$result, "ColorScript", $$ColorScript, {})} </body></html>`;
}, "/Users/magdalenamartinez/portfolio/src/pages/tag/[tag].astro", void 0);

const $$file = "/Users/magdalenamartinez/portfolio/src/pages/tag/[tag].astro";
const $$url = "/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
