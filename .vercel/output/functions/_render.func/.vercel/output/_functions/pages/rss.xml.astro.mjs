import { _ as __vite_glob_0_0 } from '../chunks/project-1_DU0DvyQv.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/sales-dashboard-tableau_DhbhCA7K.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/wind-energy-model_DFiRBTkY.mjs';
import rss from '@astrojs/rss';
import { S as SITE_TITLE, d as SITE_DESCRIPTION } from '../chunks/ColorScript_BcpgUV-v.mjs';
export { renderers } from '../renderers.mjs';

let posts = Object.values(/* #__PURE__ */ Object.assign({"../posts/project-1.md": __vite_glob_0_0,"../posts/sales-dashboard-tableau.md": __vite_glob_0_1,"../posts/wind-energy-model.md": __vite_glob_0_2}));
posts = posts.sort(
  (a, b) => new Date(b.frontmatter.updated || b.frontmatter.added).valueOf() - new Date(a.frontmatter.updated || a.frontmatter.added).valueOf()
);
const GET = () => rss({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  site: "https://blahg.netlify.app/",
  items: posts.map((post) => {
    return {
      link: `/post/${post.frontmatter.slug}`,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.added,
      description: post.frontmatter.description,
      content: post.compiledContent(),
      customData: `<updated>${post.frontmatter.updated ? post.frontmatter.updated : ""}</updated>`
    };
  })
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
