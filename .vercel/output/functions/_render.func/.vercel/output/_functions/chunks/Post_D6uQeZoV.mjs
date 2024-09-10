import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { slug, title, tags, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="post"> <a${addAttribute(`/post/${slug}/`, "href")} class="title">${title}</a> <time${addAttribute(date, "datetime")}> ${new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> <br> ${description && renderTemplate`<span class="excerpt">${description}</span>`} <div> ${tags && tags.map((tag) => renderTemplate`<a class="tag"${addAttribute(`/tag/${tag}`, "href")}>
#${tag} </a>`)} </div> </li>`;
}, "/Users/magdalenamartinez/portfolio/src/components/Post.astro", void 0);

export { $$Post as $ };
