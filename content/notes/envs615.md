---
title: "Course: Data Science Studio."
date: 2020-01-20T19:17:58Z
draft: false
tags: [Python, pandas, Machine Learning, Clustering, Linear Regression, ENVS615]
---
<a id="1"></a>

## Lecturer: [Dani Arribas-Bel](https://darribas.org/)

> I am a Senior Lecturer in Geographic Data Science at the Department of Geography and Planning , and member of the Geographic Data Science Lab, at the University of Liverpool (UK), where I direct the MSc in Geographic Data Science.

## Data Science Papers

Arribas-Bel, D. (2014). [Accidental, open and everywhere: Emerging data sources for the understanding of cities.](https://livrepository.liverpool.ac.uk/2051842/1/arribas2012data_aoe.pdf).

Lazer & Radford, (2017) [Data ex Machina: Introduction to Big Data.](https://www.annualreviews.org/doi/pdf/10.1146/annurev-soc-060116-053457).

Davenport and Patil (2012). [Data Scientist: Sexiest Job of the 21st Century](https://perso.esiee.fr/~bercherj/Documents/data/Harvard_Data-Scientist-The-sexiest-job-of-the-21st-century_2012.pdf).

Donoho, D. (2015). [50 Years of Data Science](https://courses.csail.mit.edu/18.337/2015/docs/50YearsDataScience.pdf).

[Tukey, J.](https://en.wikipedia.org/wiki/John_Tukey) (1962). [The Future of Data Analysis](https://projecteuclid.org/download/pdf_1/euclid.aoms/1177704711).

Snow, C.P. (1959, ..., 2002). [The Two Cultures. Cambridge: University Press](http://intelligentagent.com/RISD/TheTwoCultures.pdf).

First mention of data *science*: Peter Naur (1975). Concise Survey of Computer Methods.

## What was [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs)?

> For a long stretch of the twentieth century, Bell Labs was the most innovative scientific organization in the world.

[Gertner (2012). The Idea Factory](http://s3.amazonaws.com/arena-attachments/1606731/a41cb3f6903d5ace340477d62a8bbf73.pdf?1516213556).

### R vs. Python.

> Be a ninja in one. Be able to survive in the other.

## Open Science

[Computational Notebooks, Open-Source Packages, and Reproducible Platforms](https://geographicdata.science/book/notebooks/01_geospatial_computational_environment.html):
Jupyter, Python, Docker.

## `pandas`

Developed by [Wes McKinney](https://wesmckinney.com/pages/about.html) while working for an investment management firm.

Now [an open source, BSD-licensed library](https://pandas.pydata.org/) "providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language".

> "For users of the R language for statistical computing, the DataFrame name will be familiar as the object was named after the similar R `data.frame` object."

[McKinney, W (2018). Python For Data Analysis: p.5](https://www.programmer-books.com/wp-content/uploads/2019/04/Python-for-Data-Analysis-2nd-Edition.pdf)

## Reading & Manipulating Tabular Data

```{python}
import pandas

db = pandas.read_csv("...")
db.head()
db.info()
db.describe()
db.set_index("id")

db.columns()

# Columns
db["Price"].head()

#Full slice of one dimension
db.loc[0:]

# Conditional queries
db.loc[db["neighbourhood_cleansed"] == "Observatoire", 
       ["neighbourhood_cleansed", "Price"]]\
  .head()
  
db.loc[db["Price"] < 100, ["id", "neighbourhood_cleansed"]].head()

db.loc[(db["Price"] < 100) & \
       (db["bathrooms"] >= 8),
       :]
       
# Conditional filters
fltr = db["bathrooms"] > 8
fltr.head()
db[fltr]

# Concatenated queries
db.loc[(db["Price"] < 100) & \
       (db["bathrooms"] >= 8),
       :]

# Unique       
db.neighbourhood_cleansed.unique()

# New columns
db["more_beds_than_accomodates"] = db["beds"] > db["accommodates"]

```

------------------------------
<a id="2"></a>
## Visualization

> "[matplotlib](https://matplotlib.org/) is the [latex](https://www.latex-project.org/) of visualization"

~ Declarative (ggplot2) vs. Imperative (matplotlib) Approaches to Visualization.

ggplot2 and the [Grammar of Graphics](https://www.amazon.co.uk/Grammar-Graphics-Statistics-Computing/dp/0387245448), as implemented by [Hadley Wickham]((https://byrneslab.net/classes/biol607/readings/wickham_layered-grammar.pdf)

### Seaborn.

```
import seaborn as sns
```

[Because](https://stackoverflow.com/questions/41499857/seaborn-why-import-as-sns) of [the West Wing](https://www.youtube.com/watch?v=r1C4ieZ4NDw).

"Check out [the Seaborn tutorial](https://seaborn.pydata.org/tutorial.html)"

The limits of 1-to-1 mapping.

The box-plot and the violin-plot.

Deceitful visualisations. 'How Charts Lie'. Australia temperature? https://www.bbc.co.uk/news/world-australia-50585968

matplotlib first principles

## Unsupervised Machine Learning = Clustering.

[![Clustering Algorithms](https://scikit-learn.org/stable/_images/sphx_glr_plot_cluster_comparison_001.png)](https://scikit-learn.org/stable/modules/clustering.html)

[K-Means Algorithm](https://www.youtube.com/watch?v=hDmNF9JG3lo) ~ [Andrew Ng](https://en.wikipedia.org/wiki/Andrew_Ng)

Recommendation Algorithms and Clustering.
- [Geodemographics](https://maps.cdrc.ac.uk/#/geodemographics/oac11/default/BTTTFFT/14/-2.9266/53.4218/)
- Amazon
- Spotify
- Cambridge Analytica

"Machine learning is about two things: 1. Clustering, and 2. Predicting"

code environment hygiene

[pseudo-random number generator](https://docs.python.org/3/library/random.html)
- The Mersenne Twister

[Euclidean metrics and multi-dimensional space](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions)
~ consider also Manhattan distance metric https://en.wikipedia.org/wiki/Taxicab_geometry

Reducing dimensionality using Principal Component Analysis.

Principal Component Analysis and 
- [Latent Variable Model](https://en.wikipedia.org/wiki/Latent_variable_model)
- [Structural Equation Modelling](https://en.wikipedia.org/wiki/Structural_equation_modeling)


------------------------------
<a id="3"></a>

Standardized multi-dimensional data removes (some of) the problem of units.

Tidy Data. ~ 'Long-Form'.
every observation a row; every variable a column.
Hadley Wickham and the Tidyverse.

[Leo Breiman](https://en.wikipedia.org/wiki/Leo_Breiman): invented the [Random Forest](https://en.wikipedia.org/wiki/Random_forest)

[Statistical Modeling: The Two Cultures](https://projecteuclid.org/download/pdf_1/euclid.ss/1009213726)

[Wired Magazine 2008. The End of Theory: The Data Deluge Makes the Scientific Method Obsolete](https://www.wired.com/2008/06/pb-theory/)

[Machine Learning: An Applied Econometric Approach](https://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.31.2.87)

~ inference plus prediction

names of gradients and constants: beta and alpha, or m plus c

['hedonic models'](https://en.wikipedia.org/wiki/Hedonic_regression)

Social Scientists like to have a Theory before they model Data.

> "There's no such thing as a free lunch"

> "As we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don’t know we don’t know." Donald Rumsfeld

[Andrew Gelman](https://en.wikipedia.org/wiki/Andrew_Gelman)

------------------------------
<a id="4"></a>

## 'Overfitting & Cross-Validation'

Overfitting is bad. It happens when your model fits itself to the random idiosynchracies of your sample, rather than the fundamental generative properties of the data.

Linear Models are good because they don't overfit.
They are inately parsimonious and simple.


Contrast `sk-learn` with `statsmodels`:
former focussed on prediction, the latter on p-values.

~ sci-kit learn returns mean-square error as negative: see [discussion](https://github.com/scikit-learn/scikit-learn/issues/2439)


