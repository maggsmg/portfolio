---
layout: ../layouts/BlogPost.astro
title: SLA compliance prediction
slug: sla-prediction
description: >-
  Utilizes a Logistic Regression Model to predict tickets' SLA compliance based
  on various factors such as category, queues, user, and priority, achieving an
  average accuracy score of 73%
tags:
  - technical
  - learning
  - predictive
  - python
added: 2024-07-08T07:00:00.000Z
---

### Objective

Predict whether a ticket will meet SLA compliance based on factors such as ticket categories, priorities, and staff handling the tickets.

### Research Design & Methodology

The core research question guiding this effort is: How effectively can we predict whether a ticket will fall within SLA compliance?

Data Caveats

* The dataset was highly imbalanced, with 91% of records corresponding to tickets within SLA (1) and only 9% corresponding to tickets out of SLA (0).
* To mitigate this imbalance, we followed a subsampling approach:
  * Selected 1500 random records with in\_response\_sla = 1.
  * Selected 1500 random records with in\_response\_sla = 0.
  * This resulted in a balanced sample population of 3000 records, enabling more effective model training and evaluation.

Variable Selection

* user: The employee responsible for solving the ticket.
* priority\_id: Indicates the priority level of the ticket (1 being the highest priority and 4 the lowest).
* queue\_cat: The category of the queue to which the ticket belongs (e.g. Managed Services).
* category: The category of the ticket (e.g., Backup/Restore, Service Management, Devices).
* ticket\_type: The type of ticket (incident or service request).
* in\_response\_sla: A binary variable indicating whether the ticket was resolved within SLA (1) or outside SLA (0).

Data Transformation and Partitioning

* The final dataset included 87 dummy variables derived from categorical transformations and 1 binary variable (in\_response\_sla).
* The data was partitioned into 80% for training and 20% for testing.

### Model Specifications and Results

Logistic Regression Model

* We found that the threshold for classification was set at 0.4 after hyperparameter tuning would be the one that would yield the best performance of the model.

Model Evaluation Metrics

* Precision: 72.97% - The ratio of correctly predicted positive observations to the total predicted positives.
* Recall: 77.63% - The ratio of correctly predicted positive observations to all actual positives.
* Accuracy: 73.33% - The overall accuracy of the model.

Confusion Matrix Results

* True Positive Rate: Predicted out-of-SLA tickets correctly 33% of the time.
* True Negative Rate: Predicted within-SLA tickets correctly 41% of the time.
* False Negative Rate: Incorrectly predicted tickets as within SLA when they were actually out of SLA 12% of the time.

False Positive Rate: Incorrectly predicted tickets as out of SLA when they were actually within SLA 15% of the time.

### Business Outcomes and Recommendations

Next Steps

* Deploy the Model: Implement the model in a live environment and conduct an A/B test to assess its performance on real-time data.
* Benefits: This approach has low implementation costs, helps identify patterns in specific queues, and enhances the model by incorporating a larger set of tickets outside SLA.

Further Research

* Cost Analysis of SLA Breaches: Quantify the cost implications of SLA breaches to better assess the risks associated with erroneous predictions.
* Incorporate Contextual Data: Include text data to analyze sentiment and the complexity of tasks, providing a deeper understanding of service desk performance.
* Benefits: Capturing additional signals and insights will help identify gaps between capacity, skills, and SLA compliance, enabling more targeted improvements.

Conclusion

The initial phase of this project has successfully laid the groundwork for addressing critical resource allocation and operational efficiency questions regarding SLA compliance efforts. The models and insights developed provide a robust foundation for further enhancements, particularly with the inclusion of additional data and cost function analysis. It is recommended to continue refining these models and exploring new data integration opportunities to improve client support and operational efficiency further.
