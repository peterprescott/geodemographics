---
title: "Course: Data Mining & Visualization."
date: 2020-01-27T12:26:22Z
draft: false
tags: [Python, Data Mining, Machine Learning, COMP527]
---

## [Last Year's Notes](http://danushka.net/lect/dm/)

## Recommended Reading

* Bishop (2006). [Pattern recognition and machine learning](http://www.cs.man.ac.uk/~fumie/tmp/bishop.pdf).
* Deisenroth, Faisal, and Ong (. [Mathematics for Machine Learning](https://mml-book.github.io/book/mml-book.pdf).
* Duda (2001). [Pattern classification](https://docs.google.com/file/d/0B78A_rsP6RDSVjBTa1ZUSXBGYzA/edit)
* Manning (2011). [Fundamentals of Statistical Natural Language Processing](https://www.cs.vassar.edu/~cs366/docs/Manning_Schuetze_StatisticalNLP.pdf).
* Witten et al (2011). [Data mining: practical machine learning tools and techniques](ftp://ftp.ingv.it/pub/manuela.sbarra/Data%20Mining%20Practical%20Machine%20Learning%20Tools%20and%20Techniques%20-%20WEKA.pdf).

## Intro

[Notes.](http://danushka.net/lect/dm/intro.pdf)

### Course Summary

* Data preprocessing (missing values, noisy data, scaling)
* Classification algorithms
* Decision trees, Naive Bayes, k-NN, logistic regression, SVM
* Clustering algorithms
    - k-Means, 
    - k-Medoids, 
    - Hierarchical clustering
* Text Mining, Graph Mining, Information Retrieval
* Neural networks and Deep Learning
* Dimensionality reduction
* Visualization theory, t-SNE, embeddings
* Word embedding learning

### Definitions

> *Knowledge discovery* [= 'data mining'] is the nontrivial extraction of implicit, previously unknown, and
potentially useful information from data.
Given a set of facts (data) F, a language L,
and some measure of certainty C, we define a
pattern as a statement S in L that describes
relationships among a subset FS of F with a
certainty c, such that S is simpler (in some
sense) than the enumeration of all facts in
FS. A pattern that is interesting (according to
a user-imposed interest measure) and certain
enough (again according to the user’s criteria)
is called knowledge. The output of a program
that monitors the set of facts in a database
and produces patterns in this sense is discovered knowledge.

([Piatetsky-Shapiro et al (1992)](https://www.aaai.org/ojs/index.php/aimagazine/article/view/1011))

> …the automated or convenient extraction of
patterns representing knowledge implicitly stored
or captured in large databases, data warehouses,
the Web, … or data streams ([Han](http://myweb.sabanciuniv.edu/rdehkharghani/files/2016/02/The-Morgan-Kaufmann-Series-in-Data-Management-Systems-Jiawei-Han-Micheline-Kamber-Jian-Pei-Data-Mining.-Concepts-and-Techniques-3rd-Edition-Morgan-Kaufmann-2011.pdf), page xxi)

> …the process of discovering patterns in data. The
process must be automatic or (more usually)
semiautomatic. The patterns discovered must be
meaningful…” (Witten, page 5)

### Applications

[Playing GO](https://www.wired.com/2016/01/in-a-huge-breakthrough-googles-ai-beats-a-top-player-at-the-game-of-go/)

[Recognizing cat videos](https://www.wired.com/2012/06/google-x-neural-network/)

### Conferences

* [Knowledge Discovery and Data Mining (KDD)](http://www.kdd.org/
kdd2018/)
* [Annual Conference of the Association for Computational
Linguistics (ACL)](http://acl2018.org/)
* [International Word Wide Web Conference (WWW)](www2018.thewebconf.org)
* International Conference on Machine Learning (ICML)
* Neural and Information Processing (NIPS)
* International Conference on Learning Representations
(ICLR)

### Two Main Goals in Data Mining

* Prediction ~ Classification

* Description ~ Clustering

## Maths

[Notes](http://danushka.net/lect/dm/maths.pdf)

### Linear Algebra

Vectors. 
Matrices.
Vector Arithmetic: Addition, Hadamard Product, Inner-Product = Dot Product, Outer-Product.
Matrix Arithmetic: Addition, Multiplication.
Transpose and Inverse.
Determinant.
Trace.
Linear Independence.
Rank.
Trace.
Eigenstuff: eigenvectors, eigenvalues, eigendecomposition.
Vector Calculus.
Differentiation: Product Rule, Quotient Rule, Sum Rule, Chain Rule.
Partial Derivatives: Definition, Jacobian Gradient Vector.
Multivariate Chain Rule.
Useful Identities.

## Jaccard Coefficient

[See Wikipedia](https://en.wikipedia.org/wiki/Jaccard_index)

[Jupyter Notebook](https://colab.research.google.com/drive/16W89gUW-vqAf9_w4vR_d2JB98TT74O84)

```{python}
def jaccard_coefficient(s1, s2):
    """A function to find the Jaccard Coefficient of two sentences.
    
    Args:
        s1 (string): First sentence.
        s2 (string): Second sentence.
    """

    v1 = s1.lower().split()
    v2 = s2.lower().split()

    A = set(v1)
    B = set(v2)
    jaccard = len(A.intersection(B)) / len(A.union(B))
    print(f'Jaccard coefficient of "{s1}" and "{s2}" is {jaccard}.')
    return jaccard
```

## Data Representation

[Notes](http://danushka.net/lect/dm/types.pdf)

### Types of Data
* Categorical 
* Numerical
* Text (string)
* Time series (sequential)

Consider: 

* What is the best data type to represent the
value of a given variable?
* What type of data does a particular algorithm
can handle?
* How can we convert one data type to a
different data type?
* What is the scale/range of the data type that
we are using and is it appropriate?

We could represent a given sentence as:

* a list of words
* a set of words
* a vector of word frequency

### Features

> "features are attributes of data points that we can use to represent the data
points"

Normalisation:

1. Scaling.
2. Gaussian Normalization.

## Perceptron

[Notes](http://danushka.net/lect/dm/Percept.pdf)

- Inspired by biological neuron.

- Activation threshold.

- Error-driven learning.

- So order of input is significant.

- Assumes linear separability of dataset.

## Issues

[Notes](http://danushka.net/lect/dm/missing-values.pdf)

### Missing Values

Options:

1. Ignore.

2. Re-measure.

3. Set a 'missing' constant, eg. 0

4. Replace with mean.

5. Predicting missing values.

6. Accept missing values.

### Noisy Values

- Beware overfitting.

Solutions:

1. Manual inspection and removal.

2. Clustering and outlier detection.

3. Linear regression and outlier removal.

4. Ignore values below given frequency threshold.

### Normalization/Canonicalization

- Same name can refer to different entities.
- Different names can refer to same entity.

### Redundant values.

Repeated data points.

### Over-fitting and Under-fitting.



