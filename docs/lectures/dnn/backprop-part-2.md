---
title: Backpropagation in Neural Networks
menu: Week 4 - Deep Neural Networks
---

Now that we have persuaded ourselves that backpropagation is a procedure that involves the repetitive application of the chain rule, let us look more specifically its application to neural networks and the gates that we usually meet there. In NNs we are dealing with vectors, matrices and in general tensors and therefore its required to review first how we can expand on the template above for these data types.

In the following we heavily borrow from [this](https://web.stanford.edu/class/cs224n/readings/gradient-notes.pdf) text. The basic building block of vectorized gradients is the *Jacobian Matrix*. Suppose we have a function $f: \mathbb{R}^n \to \mathbb{R}^m$ that maps a vector of length $n$ to a vector of length $m$: $f(x) = [f_1(x_1, ..., x_n), f_2(x_1, ..., x_n), ..., f_m(x_1, ..., x_n)]$. Then its Jacobian is.

$\frac{\partial{f}}{\partial x} = \begin{bmatrix}
		\frac{\partial{f_1}}{\partial x_1} & \dots & \frac{\partial{f_1}}{\partial x_n} \\
                \vdots & \dots & \vdots \\
                \frac{\partial{f_m}}{\partial x_1} & \frac{\partial{f_m}}{\partial x_n}
	\end{bmatrix}$

The Jacobian matrix will be useful for us because we can apply the chain rule to a vector-valued function just by multiplying Jacobians. 

As a little illustration of this, suppose we have a function $f(x) = [f_1(x), f_2(x)]$ taking a scalar to a vector of size 2 and a function $g(y) = [g_1(y_1, y_2), g_2(y_1, y_2)]$ taking a vector of size two to a vector of size two. Now let's compose them to get $g(x) = [g_1(f_1(x), f_2(x)), g_2(f_1(x), f_2(x))]$. Using the regular chain rule, we can compute the derivative of $g$ as the Jacobian

$\frac{\partial{g}}{\partial x} = \begin{bmatrix}
		\frac{\partial{}}{\partial x}g_1(f_1(x), f_2(x))  \\
		\frac{\partial{}}{\partial x}g_2(f_1(x), f_2(x))  \\
	\end{bmatrix} =  \begin{bmatrix}
		\frac{\partial{g_1}}{\partial f_1}\frac{\partial{f_1}}{\partial x} + \frac{\partial{g_1}}{\partial f_2}\frac{\partial{f_2}}{\partial x}   \\
		\frac{\partial{g_2}}{\partial f_1}\frac{\partial{f_1}}{\partial x} + \frac{\partial{g_2}}{\partial f_2}\frac{\partial{f_2}}{\partial x}  \\
	\end{bmatrix}$ 

And we see this is the same as multiplying the two Jacobians:

 $\frac{\partial{g}}{\partial x} = \frac{\partial{ g}}{\partial f}\frac{\partial{f}}{\partial x} = \begin{bmatrix}
	\frac{\partial{g_1}}{\partial f_1} & \frac{\partial{g_1}}{\partial f_2} \\
	\frac{\partial{g_2}}{\partial f_1} & \frac{\partial{g_2}}{\partial f_2} \\
\end{bmatrix}
\begin{bmatrix}
	\frac{\partial{f_1}}{\partial x} \\
	\frac{\partial{f_2}}{\partial x} \\ 
\end{bmatrix}$

[This](http://cs231n.stanford.edu/vecDerivs.pdf) is also another instructive summary that help us understand how to calculate the local gradients involved and the gate templates (identities) summarized below that are routinely found in neural network backpropagation calculations. Assume that  with $\mathbf W \in \mathbb{R}^{n \times m}, \mathbf x \in \mathbb{R}^m$. 

|  Gate | Solution  |
|---|---|
|  $\mathbf z = \mathbf W \mathbf x$ |  $\frac{\partial \mathbf z}{\partial \mathbf x} = \mathbf W$ |
|  $\mathbf z =  \mathbf x$ | $\frac{\partial \mathbf z}{\partial \mathbf x} = \mathbf I$  |
|  $\mathbf z =  f(\mathbf x)$ element-wise |  $\frac{\partial \mathbf z}{\partial \mathbf x} = Diag[ f'(\mathbf x) ]$ |
|  $\mathbf \delta =  \frac{\partial L}{\partial \mathbf z}$  |  $\frac{\partial L}{\partial \mathbf W} = \mathbf \delta^T \mathbf x$ |
|  $\mathbf z = \mathbf W \mathbf x$ | |
|  $\hat \mathbf y = \mathtt{softmax}(\mathbf z)$ | $\frac{\partial L}{\partial \mathbf z} = \hat \mathbf y - \mathbf y$ |
|  $L=CE(\mathbf y , \hat \mathbf y )$ | | 

During the lecture we will go through an NN example on the whiteboard that will use these gate gradients for the estimation of the gradient of the loss with respect to its parameters using backpropagation. In the final you may be given such gate gradients. 
