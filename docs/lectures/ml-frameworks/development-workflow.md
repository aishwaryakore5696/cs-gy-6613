---
title: Development Workflow
menu: Programming Background
---

## Elements of data scientist's workflow

The underlying high-level iterative flow that governs data science is shown below.

![axes-ml-development](images/axes-ml-development.svg)

Data scientists are trying to borrow ideas from their colleagues in neuroscience and psychologists. There is no surprise that most of the original publications of algorithms such as the perceptron appeared in psychology journals - no data scientists back then. Todays' inventions of Long-Term Short-Term Memory (LSTM), Replay Memory and many others not shown in the diagram (as its currently in draft form) are abstractions (models) of discoveries that took place in neuroscience and psychology over tens of years. These *methods* as we call them is the subject of data science research community. To *use* however these methods major software components have been developed also known as *frameworks*. So at the very high level, data scientists look at the neuroscience/psychology axis,  map discoveries to points in the methods axis, and finally develop these methods inside frameworks. Frameworks in turn help the neuroscientists and psychologists as they can provide generative behavioral models of their own discoveries or help them simulate conditions that are not possible using their native tools. So this counter-clockwise progression of work acts as a ppsitive feedback loop accelerating discoveries in this space.

In this course we will be focusing on the *frameworks* axis and understand how data scientists are making progress there. In a nutshell, its a practitioners workflow as we are dealing with software and may involve many steps that in the last lecture we grouped into four pipelines. In this lecture we will deal with three greatly simplified pipelines as we all as the mechanics working with ML software (in fact any software). The walk through is given in a number of steps as described next.

##  Workflow Steps
Although the ML project checklist provided in Appendix B of Garon's book is extensive (we will go through this list in the lecture as we go through your first data mining application) for now focus on the eight steps as shown below. 

![simple-workflow](images/simple-workflow.png)
*Steps in workflow (from [here](https://github.com/mjbahmani/A-Comprehensive-ML-Workflow-for-HousePrices))*

 
> As discussed the data pipeline is responsible for providing the training datasets if the aim is to train (or retrain) a model. For the purposes of this lecture we assume that we deal with *small data* aka. data fit in the memory of today's typical workstations/laptops (< 16 GB).  Therefore you will be given a URL from where compressed data files can be downloaded.  For structured data, these files when uncompressed will be typically CSV. For unstructured they will be in various formats depending on the use case. In most instances, ML frameworks that implement training will require certain transformations to optimize the format for the framework at hand (see TFrecords in tensorflow).  

Appendix B of Garon's book goes into more detail on the [steps suggested to be followed in an end to end ML project](https://learning.oreilly.com/library/view/hands-on-machine-learning/9781491962282/app02.html#project_checklist_appendix). 