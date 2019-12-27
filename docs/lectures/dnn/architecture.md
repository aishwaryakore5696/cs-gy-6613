---
title: DNN Architecture
menu: Week 4 - Deep Neural Networks
---

NOTE: We will use [this](http://alexlenail.me/NN-SVG/index.html) to visit several DNN architectures in this course. You can also use it for your project documentation. 
<iframe src="http://alexlenail.me/NN-SVG/index.html" width="900" height="1200"></iframe>

Feedforward networks consist of elementary **units** that resemble the [perceptron](../classification/perceptron). These units are stacked up into layers. 

There are multiple layers:

1. The input layer
2. One or more hidden layers
3. Th output layer

A typical DNN consists a trivial placeholder layer that feeds the network with input data $\mathbf x$ via an input layer.  One or more hidden layers that that employ one ore more activation functions and  output layer that usually takes the shape for classification problems of a **softmax** function. 

## Activation Functions
There are several possible but we limit the discussion just three here.
    
1. The perceptron activation function which we have seen [here](../classification/perceptron):

    $g(a) =  \left\{ \begin{array}{rl}
                    1 & a \geq 0 \\
                    -1 & a < 0 . \end{array} \right.$

2. The sigmoid activation function that we have also seen during [logistic regression](../classification/logistic-regression). 
       
    $g(a) = \sigma(a) = \frac{1}{1+e^{-a}}  \hspace{0.3in} \sigma(a) \in (0,1)$

    Towards either end of the sigmoid function, the $\sigma(a)$ values tend to respond much less to changes in a **vanishing gradients**. The neuron refuses to learn further or is drastically slow. 

3. The Rectified Linear Unit activation function - very popular in Deep Learning. 

    ![relu](images/relu.png)

    The RELU is very inexpensive to compute compared to sigmoid and it offers the following benefit that has to do with sparsity: Imagine an MLP  with random initialized weights to zero mean ( or normalised ). Almost 50\% of the network yields 0 activation because of the characteristic of RELU. This means a fewer neurons are firing (sparse activation) making the the network lighter and more efficient.  On the other hand for negative $a$, the gradient can go towards 0 and the weights will not get adjusted during descent. 

## Softmax Output units
The softmax output unit is a generalization of the sigmoid for problems with more than two classes. 

$softmax(\mathbf z)_i = \arg \max_i \frac{\exp (z_i)}{\sum_i \exp(z_i)}$

where $i$ is over the number of inputs of the softmax function.

From a neuroscientiﬁc point of view, it is interesting to think of the softmax as a way to create a form of competition between the units that participate in it: the softmax outputs always sum to 1 so an increase in the value of one unit necessarily corresponds to a decrease in the value of others. This is analogous to the lateral inhibition that is believed to exist between nearby neurons in the cortex. At theextreme (when the diﬀerence between the maximalaiand the others is large in magnitude) it becomes a form of winner-take-all(one of the outputs is nearly 1,and the others are nearly 0).



