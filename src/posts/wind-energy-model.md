---
layout: ../layouts/BlogPost.astro
title: How can we forecast wind speed to estimate power generation output?
slug: wind-energy-model
description: >-
  Wind speed is one of the most important factors to predict power generation.
  The forecasts support the intended audience to understand patterns of wind
  speed over time and anticipate wind power supply. 
tags:
  - technical
  - learning
  - predictive
  - python
added: 2024-05-30T07:00:00.000Z
---

**Analysis**: I began this experiment with a seasonal decomposition of the dataset as part of the exploratory analysis. Initially, I applied this decomposition directly to hourly data. However, as shown in Figure 1.1, the large amount of data and inherent noise made it difficult to discern any clear trends or seasonality.

![](/assets/figure21.jpg) Figure 1.1

Next Steps: I then attempted to group the data by daily average wind speed to gain more insight into the trends and seasonality. However, this approach still did not yield the clarity I was hoping for.![](/assets/figure22.png)Figure 1.2

Lastly, I grouped the data by month, which revealed a noticeable downward trend and clear seasonality within the dataset.![](/assets/figure23.png)Figure 1.3

**Purpose**: Wind speed forecasts are crucial for supporting wind power predictions, particularly for the long-term planning needs of energy companies. Monthly forecasts, which smooth out noise and fluctuations, are more valuable to corporate executives than hourly forecasts. With a clearer understanding of the data, I proceeded to explore two models designed to capture both trend and seasonality: Triple Exponential Smoothing (Winter’s Model) and the SARIMA model.

**Methodology Application**: I trained our models on the training set and evaluated their accuracy using the validation set. After a visual comparison, it became apparent that Winter’s Model was likely a better fit for the data than the SARIMA model.

![](/assets/figure2.png) Figure 1.4

**Evaluation and Model Selection**: To evaluate and choose between the two models, I used the mean absolute percentage error (MAPE) as the star metric. After calculating MAPE for both models, it was confirmed that Triple Exponential Smoothing (Winter’s Model) is the best model for predicting wind speed at 100 meters above the surface.

| Model                                         | MAPE  |
| --------------------------------------------- | ----- |
| Triple Exponential Smoothing (Winter’s Model) | 6.28% |
| SARIMA                                        | 6.32% |

**Model Details**: After selecting Winter’s Model as the best fit, I retrained it using both the training and validation sets (2017-2020), reserving 2021 for testing and prediction. For the model, I applied an additive trend with multiplicative seasonality, using 12 seasonal periods. The final output from this model will now be used to predict wind power output for 2021.

![](/assets/figure25.png)Figure 1.5

**Assumption Checks**: Before training the SARIMA model, I tested for stationarity and confirmed it with a p-value of 0.0045. This allowed me to proceed with predictions using the SARIMA model. However, due to a higher mean absolute percentage error (MAPE), SARIMA was not selected for the final prediction.
