import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://blahg.netlify.app/");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, all } = Astro2.props;
  return renderTemplate`${all && renderTemplate`${maybeRenderHead()}<h3 class="tag-title">View posts by tag</h3>`}<div${addAttribute(`${all && "tags"}`, "class")}>${tags && tags.map((tag) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<a class="tag"${addAttribute(`/tag/${tag}`, "href")}>
#${tag}</a>${` `}` })}`)}</div>`;
}, "/Users/magdalenamartinez/portfolio/src/components/Tags.astro", void 0);

function getTags(posts) {
	// Get tags from all posts
	const allTags = posts
		.map((post) => {
			const postTags = post.frontmatter.tags;
			let allTags = [];

			if (postTags?.length > 0) {
				postTags.forEach((tag) => {
					if (allTags?.indexOf(tag) === -1) {
						allTags.push(tag);
					}
				});
			}
			return allTags;
		})
		.flat(1);

	// Make the tags unique
	let tags = [...new Set(allTags)];

	return tags;
}

export { $$Tags as $, getTags as g };
