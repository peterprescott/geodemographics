---
title: "Course: Programming For Social Scientists"
date: 2019-09-20T14:56:43Z
draft: false
tags: [Python, Object-Oriented Programming, Agent-Based Modelling, GEOG5995M]
---

Here are some things to take from this week's intensive introduction to programming in Python.

You can find the [notes for the course here](https://www.geog.leeds.ac.uk/courses/computing/study/core-python-phd/) -- in fact, working through the links on that webpage is all we did this week, as [Dr Andy Evans](https://ajevans.github.io/) who put the course together is, I think, unwell, and so was unable to teach in person.

## Culture
> "Becoming a programmer isn't just about knowing how to code, there's a whole culture and history to engage with as well."

* Ousterhout, John (1998). [Scripting: Higher Level Programming for the 21st Century. IEEE Computer magazine.](http://www.tcl.tk/doc/scripting.html)

* van Rossum, Guido (undated). [Why was Python created in the first place? General Python FAQ.](https://docs.python.org/3/faq/general.html#why-was-python-created-in-the-first-place)

* van Rossum, Guido (2009). [Python's Design Philosophy. The History of Python blog.](http://python-history.blogspot.com/2009/01/pythons-design-philosophy.html)

## Counting Systems

<iframe width="560" height="315" src="https://www.youtube.com/embed/5sS7w-CMHkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Top Ten Algorithms:

1946: The Metropolis Algorithm for Monte Carlo. Through the use of random processes, this algorithm offers an efficient way to stumble toward answers to problems that are too complicated to solve exactly.

1947: Simplex Method for Linear Programming. An elegant solution to a common problem in planning and decision-making.

1950: Krylov Subspace Iteration Method. A technique for rapidly solving the linear equations that abound in scientific computation.

1951: The Decompositional Approach to Matrix Computations. A suite of techniques for numerical linear algebra.

1957: The Fortran Optimizing Compiler. Turns high-level code into efficient computer-readable code.

1959: QR Algorithm for Computing Eigenvalues. Another crucial matrix operation made swift and practical.

1962: Quicksort Algorithms for Sorting. For the efficient handling of large databases.

1965: Fast Fourier Transform. Perhaps the most ubiquitous algorithm in use today, it breaks down waveforms (like sound) into periodic components.

1977: Integer Relation Detection. A fast method for spotting simple equations satisfied by collections of seemingly unrelated numbers.

1987: Fast Multipole Method. A breakthrough in dealing with the complexity of n-body calculations, applied in problems ranging from celestial mechanics to protein folding.

## Git, Github, & Version Control

```{git}
git clone ...
git add ...
git commit -m "..."
git push
```

You can [make your code citable with a DOI](https://guides.github.com/activities/citable-code/) (that is, a [*Digital Object Identifier*](https://www.doi.org/)).

> The most important thing to remember about GitHub: Never, ever, allow passwords to be pushed to GitHub.

## Floating-Point Arithmetic

* [How Python treats Floating-Point Numbers](https://docs.python.org/3/tutorial/floatingpoint.html)
> "On most machines today, floats are approximated using a binary fraction with the numerator using the first 53 bits starting with the most significant bit and with the denominator as a power of two."
```{python}
>>> 0.1
0.1000000000000000055511151231257827021181583404541015625
```
* Goldberg, David (1991). [What Every Computer Scientist Should Know About Floating-Point Arithmetic. ACM Computing Surveys 23:1 5—48.](http://www.validlab.com/goldberg/paper.pdf)
* [The Floating Point Guide](https://floating-point-gui.de/)
* [Disasters Caused By Rounding Errors](http://ta.twi.tudelft.nl/users/vuik/wi211/disasters.html)
* NB: Python can also work with [complex numbers](https://docs.python.org/3/library/cmath.html)

## Data Structures
[See documentation](https://docs.python.org/3/tutorial/datastructures.html)

* Tuples
* Lists
* Sets
* Strings
* Dicts

* NB: the [NumPy array](https://docs.scipy.org/doc/numpy/user/quickstart.html)

## Documentation

Can be automated with [Sphinx](http://www.sphinx-doc.org/en/master/).
