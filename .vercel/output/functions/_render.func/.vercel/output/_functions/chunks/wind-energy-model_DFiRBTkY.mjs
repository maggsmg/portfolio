import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_TmEa5s-H.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_CSsN8egm.mjs';

const html = "<p><strong>Analysis</strong>: I began this experiment with a seasonal decomposition of the dataset as part of the exploratory analysis. Initially, I applied this decomposition directly to hourly data. However, as shown in Figure 1.1, the large amount of data and inherent noise made it difficult to discern any clear trends or seasonality.</p>\n<p><img src=\"/assets/figure21.jpg\" alt=\"\"> Figure 1.1</p>\n<p>Next Steps: I then attempted to group the data by daily average wind speed to gain more insight into the trends and seasonality. However, this approach still did not yield the clarity I was hoping for.<img src=\"/assets/figure22.png\" alt=\"\">Figure 1.2</p>\n<p>Lastly, I grouped the data by month, which revealed a noticeable downward trend and clear seasonality within the dataset.<img src=\"/assets/figure23.png\" alt=\"\">Figure 1.3</p>\n<p><strong>Purpose</strong>: Wind speed forecasts are crucial for supporting wind power predictions, particularly for the long-term planning needs of energy companies. Monthly forecasts, which smooth out noise and fluctuations, are more valuable to corporate executives than hourly forecasts. With a clearer understanding of the data, I proceeded to explore two models designed to capture both trend and seasonality: Triple Exponential Smoothing (Winter’s Model) and the SARIMA model.</p>\n<p><strong>Methodology Application</strong>: I trained our models on the training set and evaluated their accuracy using the validation set. After a visual comparison, it became apparent that Winter’s Model was likely a better fit for the data than the SARIMA model.</p>\n<p><img src=\"/assets/figure2.png\" alt=\"\"> Figure 1.4</p>\n<p><strong>Evaluation and Model Selection</strong>: To evaluate and choose between the two models, I used the mean absolute percentage error (MAPE) as the star metric. After calculating MAPE for both models, it was confirmed that Triple Exponential Smoothing (Winter’s Model) is the best model for predicting wind speed at 100 meters above the surface.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Model</th><th>MAPE</th></tr></thead><tbody><tr><td>Triple Exponential Smoothing (Winter’s Model)</td><td>6.28%</td></tr><tr><td>SARIMA</td><td>6.32%</td></tr></tbody></table>\n<p><strong>Model Details</strong>: After selecting Winter’s Model as the best fit, I retrained it using both the training and validation sets (2017-2020), reserving 2021 for testing and prediction. For the model, I applied an additive trend with multiplicative seasonality, using 12 seasonal periods. The final output from this model will now be used to predict wind power output for 2021.</p>\n<p><img src=\"/assets/figure25.png\" alt=\"\">Figure 1.5</p>\n<p><strong>Assumption Checks</strong>: Before training the SARIMA model, I tested for stationarity and confirmed it with a p-value of 0.0045. This allowed me to proceed with predictions using the SARIMA model. However, due to a higher mean absolute percentage error (MAPE), SARIMA was not selected for the final prediction.</p>";

				const frontmatter = {"layout":"../layouts/BlogPost.astro","title":"How can we forecast wind speed to estimate power generation output?","slug":"wind-energy-model","description":"Wind speed is one of the most important factors to predict power generation. The forecasts support the intended audience to understand patterns of wind speed over time and anticipate wind power supply. ","tags":["technical","learning","predictive","python"],"added":"2024-05-30T07:00:00.000Z"};
				const file = "/Users/magdalenamartinez/portfolio/src/posts/wind-energy-model.md";
				const url = undefined;
				function rawContent() {
					return "\n**Analysis**: I began this experiment with a seasonal decomposition of the dataset as part of the exploratory analysis. Initially, I applied this decomposition directly to hourly data. However, as shown in Figure 1.1, the large amount of data and inherent noise made it difficult to discern any clear trends or seasonality.\n\n![](/assets/figure21.jpg) Figure 1.1\n\nNext Steps: I then attempted to group the data by daily average wind speed to gain more insight into the trends and seasonality. However, this approach still did not yield the clarity I was hoping for.![](/assets/figure22.png)Figure 1.2\n\nLastly, I grouped the data by month, which revealed a noticeable downward trend and clear seasonality within the dataset.![](/assets/figure23.png)Figure 1.3\n\n**Purpose**: Wind speed forecasts are crucial for supporting wind power predictions, particularly for the long-term planning needs of energy companies. Monthly forecasts, which smooth out noise and fluctuations, are more valuable to corporate executives than hourly forecasts. With a clearer understanding of the data, I proceeded to explore two models designed to capture both trend and seasonality: Triple Exponential Smoothing (Winter’s Model) and the SARIMA model.\n\n**Methodology Application**: I trained our models on the training set and evaluated their accuracy using the validation set. After a visual comparison, it became apparent that Winter’s Model was likely a better fit for the data than the SARIMA model.\n\n![](/assets/figure2.png) Figure 1.4\n\n**Evaluation and Model Selection**: To evaluate and choose between the two models, I used the mean absolute percentage error (MAPE) as the star metric. After calculating MAPE for both models, it was confirmed that Triple Exponential Smoothing (Winter’s Model) is the best model for predicting wind speed at 100 meters above the surface.\n\n| Model                                         | MAPE  |\n| --------------------------------------------- | ----- |\n| Triple Exponential Smoothing (Winter’s Model) | 6.28% |\n| SARIMA                                        | 6.32% |\n\n**Model Details**: After selecting Winter’s Model as the best fit, I retrained it using both the training and validation sets (2017-2020), reserving 2021 for testing and prediction. For the model, I applied an additive trend with multiplicative seasonality, using 12 seasonal periods. The final output from this model will now be used to predict wind power output for 2021.\n\n![](/assets/figure25.png)Figure 1.5\n\n**Assumption Checks**: Before training the SARIMA model, I tested for stationarity and confirmed it with a p-value of 0.0045. This allowed me to proceed with predictions using the SARIMA model. However, due to a higher mean absolute percentage error (MAPE), SARIMA was not selected for the final prediction.\n";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
