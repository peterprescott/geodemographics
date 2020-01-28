---
title: "Course: Social Survey Analysis"
date: 2019-12-02T20:15:28Z
draft: false
tags: [R, Social Surveys, Statistics, Regression, ENVS450]
---

## Lecturer: [Paul Williamson](https://www.liverpool.ac.uk/environmental-sciences/staff/paul-williamson/publications/)

## Descriptive Statistics
Variance = sum of squared errors
Standard Deviation = square root of variance

## Principles of Table Design
- never present raw output
- rates are usually better than counts
- but show number of persons that equals 100%
- make tables interesting:
    * concatenate
    * compare subgroups
- shading scheme must be unambiguous for ranked categories
- only use pie charts in graph multiples
- be imaginative

![Election Data Visualized](/images/envs450/1.png)

![Income Distribution](/images/envs450/2.png)

- maximize data:ink
- provide a context
- table or graph -- not both
- captions: above tables, below figures
- attribute contents

## Measurement Error & Missing Data
- Systematic bias.
- Random bias.

Either impute plausible values or delete missing values.

Reweighting. 'Post-stratification'.

'Conditional Independence Assumption'.

## Inferential Statistics and χ-Squared

[Karl Popper, Falsification](https://staff.washington.edu/lynnhank/Popper-1.pdf)

Null Hypothesis.

P-Values.

[Amrhein et al. (2019) Scientists rise up against statistical significance.](https://www.nature.com/articles/d41586-019-00857-9)

- Statistical Significance is an arbitrary threshold.
- Statistical Significance is not equivalent to 'Importance'.
- 'Effect size' more important that 'p-value'.
- Publish all findings (even if not statistically significant).

## Confidence Intervals

[The Amazing Central Limits Theorem.](https://en.wikipedia.org/wiki/Central_limit_theorem)
(trivia: see also [Alan Turing and the Central Limit Theorem](https://www.jstor.org/stable/2974762))

Standard Error.

## Correlation and Regression

Best line minimizes sum of squared errors.

Visualizing correlation:
- for continuous, scatter plot
- for categorical, stacked percentage bar charts

## Logistic Regression

[Mood, C. (2009). Logistic Regression: Why We Cannot Do What We Think We Can Do, and What We Can Do About It](https://academic.oup.com/esr/article-abstract/26/1/67/540767)
vs.
[Kuha, J. (2018). On Group Comparisons With Logistic Regression Models](https://journals.sagepub.com/doi/abs/10.1177/0049124117747306)

## Model Diagnostics
- Meets Regression Assumptions?
- Statistically robust?
- Best model?

## Dangers of Area-Level Data Analysis
- Ecological Fallacy
- Modifiable Areal Unit Problem
- Scale Effects
