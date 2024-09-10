import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://blahg.netlify.app/");
const Astro = $$Astro;
async function getStaticPaths() {
  let posts = await Astro.glob(/* #__PURE__ */ Object.assign({"../../posts/project-1.md": () => import('../../chunks/project-1_DU0DvyQv.mjs').then(n => n._),"../../posts/sales-dashboard-tableau.md": () => import('../../chunks/sales-dashboard-tableau_DhbhCA7K.mjs').then(n => n._),"../../posts/wind-energy-model.md": () => import('../../chunks/wind-energy-model_DFiRBTkY.mjs').then(n => n._)}), () => `../../posts/*.md`);
  return posts.map((post) => {
    return {
      params: { slug: post.frontmatter.slug },
      props: { post }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = post;
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/magdalenamartinez/portfolio/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/magdalenamartinez/portfolio/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
