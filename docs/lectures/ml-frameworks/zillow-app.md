---
title: The Zillow App
menu: Programming Background
---

The Zillow app is based on the end to end machine learning example in Chapter 2 of Geron's book. We will go through this end to end example during this lecture. 

<iframe src="https://nbviewer.jupyter.org/github/pantelis/handson-ml/blob/master/02_end_to_end_machine_learning_project.ipynb" width="800" height="1200"></iframe>


### Key Questions

1. Is the dataset appropriate for training?

![California-housing-histograms](images/california-housing-histograms.png)

> Any unexpected ranges, any range heterogeneity, any clipping?
> Do we face long-tails?
> What options do we have to glean the data?

2. What will happen if we remove the following line from the ```split_train_set``` function?
 
    ```python
    shuffled_indices = np.random.permutation(len(data))
    ```
