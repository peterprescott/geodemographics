---
title: "Agent-Based Modelling"
date: 2019-09-19T11:04:12+01:00
draft: false
---

A project done as part of [the Data CDT](https://datacdt.org/)'s GEOG5995M/ENVS802 module: **Programming For Social Scientists**.

Contents: [Intro](#intro). [Installation](#install). [Discussion](#discuss). [Browser Demo](#demo). [History & Theory](#theory).

<a name="intro"></a>
## Intro
This project is the result of working through [the practical exercises](https://www.geog.leeds.ac.uk/courses/computing/study/core-python-phd/) put together by [Dr. Andy Evans](https://ajevans.github.io/) to teach core programming skills to students starting a four-year integrated PhD and MSc in Data Analytics and Society.

It is 'licensed' under the [The Unlicense](https://unlicense.org/), and available on [my Github](https://github.com/peterprescott/agent-based-modelling). 

It is intended to be [run from the command line](https://www.howtogeek.com/437682/command-lines-why-do-people-still-bother-with-them/), though the project includes the beginnings of a Tkinter GUI, as well as a [proof-of-concept of a web-page GUI with code written in JavaScript](https://github.com/peterprescott/js-agent-modelling) instead of Python.

<a name="install"></a>
## Installation
You need to have Git and Python installed. If you don't, use your system's recommended package manager to download them from the command line. (For Windows, use [Chocolatey](https://chocolatey.org/install).)

(*Note: [Python 3.8](https://docs.python.org/3/whatsnew/3.8.html) was released on October 14th, 2019, and at time of writing [is not supported by Matplotlib](https://stackoverflow.com/questions/58386191/python-pip-failed-installing-matplotlib), so you need to [install Python 3.7 specifically](https://chocolatey.org/packages/python/3.7.2), otherwise you will get Python 3.8 and your installation of Matplotlib will fail.*)

Then clone the Github repository, and navigate into the project folder. You can then immediately run the model:

```console
python --version
git --version
git clone https://github.com/peterprescott/agent-based-modelling
cd agent-based-modelling
pip install -r requirements.txt
python run_model.py
```

<script id="asciicast-6ldhFPdvzJSHvyrVz0bcSQJp2" src="https://asciinema.org/a/6ldhFPdvzJSHvyrVz0bcSQJp2.js" data-speed="3" data-rows="10" async></script>

If everything is working correctly, you should be told the *Initial Parameters* with which the model is running (as ```python run_model.py``` doesn't specify any, the model will use the defaults), and that the various steps of running the model have successfully taken place, including how long it took to run the model, and the details of the machine you are using to run it. The output data is saved in the ```output_files``` folder.

If you are interested in testing the speed of the model with iterations of various orders of magnitude, then you can use the ```tests.sh``` or ```tests.bat``` script in the `tests` folder to do so efficiently. 

<script id="asciicast-WO9oNzJcxv3veBcjtm7FRpjEA" src="https://asciinema.org/a/WO9oNzJcxv3veBcjtm7FRpjEA.js" data-speed="3" data-rows="10" async></script>

But you probably want to be able to **see** what your model is actually doing. We use [Matplotlib](https://matplotlib.org/) for the graphic visualization. You then run ```python run_model.py animate```, or just ```python run_model.py a``` if you're feeling lazy. (In fact, any word beginning with 'a' should do the trick!)

```console
pip install -r graphic_requirements.txt
python run_model.py animate
```

You should then see a visual animation of your model as it runs: specifically, white and black dots wobbling around on a yellowly-green square. The white dots represent male rabbits; the black dots female rabbits.

![GIF showing run_model.py animation](../../images/abm.gif)

You can specify the parameters with which the model runs from the command line, in this order: *num_of_agents*, *lifespan*, *neighbourhood*, *num_of_iterations*. These must each be an integer value, otherwise the model will just run with default values.

You also need to specify that you want it to be animated by adding an ```a``` at the end.
```console
python run_model.py 20 100 10 1000 a
```
This would run the model with 20 agents (all with a lifespan of 100, and a mating range of 10) for 1000 iterations.

<a name="discuss"></a>
## Discussion

The practicals developed a class of `Agent` that took random walks across a two-dimensional `Environment`, stored resources from that Environment, and interacted with other Agents within a certain specified 'neighbourhood' range.

I then extended the model by writing a child `Rabbit` class that inherited `move()` and `eat()` functions from the parent Agent class (though now with the idea that eating gives the energy essential for life, and for movement)...

```python

    def move(self):
        """Rabbit moves just like an Agent, but uses energy to do so."""
        
        Agent.move(self)
        
        self.energy -= 5

    def eat(self): 
        """A Rabbit eats just like an Agent, but dies if it runs out of energy."""
        
        if self.energy < 0:
            self.die()
            print(f"{self} died of starvation.")

        Agent.eat(self)

```

and then added a ```mate(range)``` function, as well as `get_older()` and `die()` functions.

```python

    def mate(self, range):
        """Mature female rabbits become pregnant whenever male is in range,
        and then give birth after ten steps."""
                
        if self.sex == "female" and self.age > 10:

            if self.pregnant > 0:
                self.energy -= 5
                self.pregnant += 1
                if self.pregnant == 10:
					### create new baby rabbit
                    self.agents.append(Rabbit(self.environment, self.agents, self.x, self.y, self.lifespan))
                    print(f'{self.name} gave birth.')
                    self.pregnant = 0
            else:
                for agent in self.agents:
                    if self.distance_between(agent) <= range:
                        if agent.sex == "male":
                            self.pregnant = 1

    def get_older(self):
        """Rabbits age."""
        
        self.age += 1
        if self.age > self.lifespan:
            self.die()
            print(f"{self} died of old age.")

    def die(self):
        """Rabbits die."""

        try:
            index = self.agents.index(self)
            self.agents.pop(index)
        except ValueError:
            # I haven't worked out why, but sometimes this thows errors.
            print('Something went wrong, but we will press on')

```

These functions introduced the ideas of *age*, *lifespan*, *sex*, and being *pregnant*, so when a Rabbit is initialized, we add these properties to those inherited from its initialization as an Agent. We also used [the ```names``` package](https://pypi.org/project/names/) to assign names to each rabbit.

```python
    def __init__(self, env, agents, x, y, lifespan):
        """Initialize Rabbit"""
        
        Agent.__init__(self, env, agents, x, y)
        
        self.age = 0
        self.lifespan = lifespan
        
        self.sex = random.choice(["male", "female"])
        if self.sex == "female":
            self.pregnant = 0
            self.colour = "k ie. black"
            
        self.name = names.get_first_name(gender=self.sex)

        
```

<a name="demo"></a>
## Browser Demo

I then tried [the same sort of thing in JavaScript](https://github.com/peterprescott/js-agent-modelling), so that the graphical interface could be easily displayed in a web browser:
    <center>
		<svg id="backdrop" width=500 height=500 style="border:1px solid black"></svg><br>
		<button onClick=more()>Add Agent</button>
		<button onClick=less()>Remove Agent</button>
	</center>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="/projects/abm101.js"></script>

At the moment all you have is agents interacting with the environment, and the rendering is rather glitchy as I haven't worked out how to use D3.js very well. But if anyone wants to develop it, they are free to [clone the repository and do so!](https://github.com/peterprescott/js-agent-modelling).

<a name="theory"></a>
## History & Theory

The week that this project was due for submission, I also had the chance to give a short *Lightning Talk* on Agent-Based Modelling as a key technique in Geographic Data Science. You can see the slides below.

<iframe src="//www.slideshare.net/slideshow/embed_code/key/" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> 
