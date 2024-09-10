import { a as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$ColorScript } from './ColorScript_BcpgUV-v.mjs';
import { g as getTags, $ as $$Tags } from './getTags_CpSqTbSa.mjs';

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/project-1.md": () => import('./project-1_DU0DvyQv.mjs').then(n => n._),"../posts/sales-dashboard-tableau.md": () => import('./sales-dashboard-tableau_DhbhCA7K.mjs').then(n => n._),"../posts/wind-energy-model.md": () => import('./wind-energy-model_DFiRBTkY.mjs').then(n => n._)}), () => "../posts/*.md");
  const allTags = getTags(posts);
  let {
    content: { title, description, added, updated, tags, heroImage }
  } = Astro2.props;
  added = new Date(added).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  );
  if (updated) {
    updated = new Date(updated).toLocaleDateString(
      "en-us",
      {
        year: "numeric",
        month: "short",
        day: "numeric"
      }
    );
  }
  return renderTemplate`<html lang="en-us"> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main> <article> ${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="">`} <h1 class="article-title">${title}</h1> ${updated ? renderTemplate`<span><time>${added}</time>, last updated on <time>${updated}</time></span>` : renderTemplate`<span>${added && renderTemplate`<time>${added}</time>`}</span>`} ${renderComponent($$result, "Tags", $$Tags, { "tags": tags })} <hr> <div class="blog-post"> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Tags", $$Tags, { "tags": allTags, "all": true })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ColorScript", $$ColorScript, {})} </body></html>`;
}, "/Users/magdalenamartinez/portfolio/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
