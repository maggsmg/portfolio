import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am a Data Analyst with 5 years of experience. I have worked on data analytic projects with different industries(retail, consulting firms, fintech) providing metrics and reporting capabilities from c level management all the way to end users and clients.</p>\n<p>Some of the systems and tools I have worked with had business objectives like resource planning, delivery capacity and standard operation metrics for daily activities.</p>\n<p>I have mainly used SQL and <a href=\"https://public.tableau.com/app/profile/magdalena.martinez/vizzes\">Tableau</a> for these projects but also have R and Python experience for predictive analysis. I recently graduated as a Master of Science in Business Analytics from University of Washington(Go Dawgs!).</p>\n<p>Big fan of reading, running, cooking, lakes and spending time with my loved ones.</p>";

				const frontmatter = {};
				const file = "/Users/magdalenamartinez/portfolio/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "I am a Data Analyst with 5 years of experience. I have worked on data analytic projects with different industries(retail, consulting firms, fintech) providing metrics and reporting capabilities from c level management all the way to end users and clients. \n\nSome of the systems and tools I have worked with had business objectives like resource planning, delivery capacity and standard operation metrics for daily activities. \n\nI have mainly used SQL and [Tableau](https://public.tableau.com/app/profile/magdalena.martinez/vizzes) for these projects but also have R and Python experience for predictive analysis. I recently graduated as a Master of Science in Business Analytics from University of Washington(Go Dawgs!).\n\nBig fan of reading, running, cooking, lakes and spending time with my loved ones.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content as C, _page as _ };
