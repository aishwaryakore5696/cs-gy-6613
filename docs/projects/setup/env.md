---
title: Your Programming Environment
---

## Starting Jupyter in Google Colab
The runtime performance will greatly improve for some projects using the **free** GPU resources provided by [Google Colab](https://colab.research.google.com). In this course we will make use of these facilities - the good news is that you have an account in Google Colab as most of you have a google account. If not go ahead and create one to be able to login into Google colab. You will need Google Colab for all your projects so that you can demonstrate that your results can be replicated.  In addition Colab has many [features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb) that come handy. 

I heavily borrowed from Geron's book for the following. 

## Setup Anaconda Python
When using Anaconda, you need to create an isolated Python environment dedicated to this course. This is recommended as it makes it possible to have a different environment for each project, with potentially different libraries and library versions:

    $ conda create -n cs634 python=3.6 anaconda
    $ conda activate cs634

This creates a fresh Python 3.6 environment called `cs634` (you can change the name if you want to), and it activates it. This environment contains all the scientific libraries that come with Anaconda. This includes all the libraries we will need (NumPy, Matplotlib, Pandas, Jupyter and a few others), except for TensorFlow, so let's install it:

    $ conda install -n cs634 -c conda-forge tensorflow

This installs the latest version of TensorFlow available for Anaconda (which is usually *not* the latest TensorFlow version) in the `cs634` environment (fetching it from the `conda-forge` repository). If you chose not to create an `cs634` environment, then just remove the `-n cs634` option.

Next, you can optionally install Jupyter extensions. These are useful to have nice tables of contents in the notebooks, but they are not required.

    $ conda install -n cs634 -c conda-forge jupyter_contrib_nbextensions

## Kaggle
Assuming you have activated the cs634 conda environment, follow the directions [here](https://github.com/Kaggle/kaggle-api) to install the Kaggle command line interface (CLI). You will need Kaggle for all your projects. You guessed it right - all the projects in this course are in fact Kaggle competitions. Not only you will get to compete (your ranking relative to others does not matter per se), but as you improve your knowledge over time you can revisit these competitions and see how your score improves.  

You are all set! Next, jump to the [Starting Jupyter](#starting-jupyter) section.

## Starting Jupyter locally
If you want to use the Jupyter extensions (optional, they are mainly useful to have nice tables of contents), you first need to install them:

    $ jupyter contrib nbextension install --user

Then you can activate an extension, such as the Table of Contents (2) extension:

    $ jupyter nbextension enable toc2/main

Okay! You can now start Jupyter, simply type:

    $ jupyter notebook

This should open up your browser, and you should see Jupyter's tree view, with the contents of the current directory. If your browser does not open automatically, visit [localhost:8888](http://localhost:8888/tree). Click on `index.ipynb` to get started!

Note: you can also visit [http://localhost:8888/nbextensions](http://localhost:8888/nbextensions) to activate and configure Jupyter extensions.


## Starting Jupyter in Google Colab
The runtime performance will greatly improve for some projects using the **free** GPU resources provided by [Google Colab](https://colab.research.google.com). In this course we will make use of these facilities - the good news is that you have an account in Google Colab as most of you have a google account. If not go ahead and create one to be able to login into Google colab. You will need Google Colab for all your projects so that you can demonstrate that your results can be replicated.  In addition Colab has many [features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb) that come handy. 


## Git / Github
Git is the defacto standard when it comes to code version control. Learning basic git commands takes less than half an hour. However, to install git and understand the principle behind git, please go over Chapters 1 and 2 of the [ProGit book](https://git-scm.com/book/en/v2).

As we have discussed in class you need to be able to publish your work in Github so you need to create a Github account. Then you will use the git client for your operating system to interact with github and iterate on your projects.  You may be using Kaggle or Colab hosted notebooks but the underlying technology that powers such web-frontends when it comes to committing the code and seeing version numbers in your screen is git.

In addition, almost no data science project starts in vacuum - there is almost always software that will be inherited to be refined. 