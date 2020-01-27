---
title: Syllabus
metaTitle: "Syllabus"
metaDescription: "The course schedule below highlights our journey to understand the multiple subsystems and how they can be connected together to create compelling but, currently, domain specific forms of intelligence."
---


The course schedule below highlights our journey to understand the multiple subsystems and how they can be connected together to create compelling but, currently, domain specific forms of intelligence. 

## Books

1. [Artificial Intelligence: A Modern Approach, by Stuart Russell, 3rd edition, 2010](https://www.amazon.com/Artificial-Intelligence-Approach-Stuart-Russell/dp/9332543518/ref=sr_1_2?crid=17NGBV1XXV150&keywords=ai+a+modern+approach&qid=1576432665&sprefix=ai+the+modern+appr%2Caps%2C158&sr=8-2) and [also](http://aima.cs.berkeley.edu/)

The publisher is about to release the [4th edition (2020) of this classic](https://www.amazon.com/Artificial-Intelligence-A-Modern-Approach/dp/0134610997/ref=sr_1_3?crid=17NGBV1XXV150&keywords=ai+a+modern+approach&qid=1576432686&sprefix=ai+the+modern+appr%2Caps%2C158&sr=8-3). We will be monitoring availability in bookstores but it does not seem to be that this edition will be published on time for the Spring 2020 class.  

Optional but recommended texts are: (a) FDRL: "Foundations of Deep Reinforcement Learning", by Graesser & Keng, 2020. (b) GERON: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", 2nd Edition, by Geron, 2019. (c) DL: https://www.deeplearningbook.org/ (free)

## Schedule

The schedule is based on [Academic Calendar Spring 2020](https://www.nyu.edu/registrar/calendars/university-academic-calendar.html): 

### Part I:  Perception and Machine Learning

1. **Week 1 (1/27/2020)** We start with an introduction to AI and present a systems approach towards it. We develop a map that will guide us through the rest of the course as we deep dive into each component embedded into _AI agents_. Reading: AIMA Chapters 1 & 2.  

2. **Week 2 (2/3/2020)**  The perception subsystem is the first stage of many AI systems including our brain. Its function is to process and fuse multimodal sensory inputs. Perception is implemented via a number of reflexive agents that map directly perceived state to an primitive action such as regressing on the frame coordinates of an object in the scene. We present _the supervised learning problem_ both for classification and regression, starting with classical ML algorithms. Reading: AIMA Chapter 18. 

3. **Week 3 (2/10/2020)**  We expand into _Deep neural networks_. DNNs are developed bottom up from the Perceptron algorithm. MLPs learn via optimization approaches such as Stochastic Gradient Descent.  We deep-dive into back-propagation - a fundamental algorithm that efficiently trains DNNs. Reading: DL Chapter 6

4. **Week 4: (2/[17]/2020) Since this is President's Day, we need to decide which day we can have the lecture.** We dive into the most dominant DNN architecture today -  _Convolutional Neural Networks (CNNs) and Recursive Neural Networks (RNNs)_. Reading: DL Chapter 9 & 10. 

5. **Week 5: (2/24/2020)** When agents move in the environment they need to abilities such as _scene understanding_.  We will go through few key perception building blocks such as Object Detection, Semantic and Instance Segmentation. Some of these building blocks (autoencoders) are instructive examples of representations learning that will be shown to be an essential tool in the construction of environment state representations. Reading: Various papers 
        
### Part II: Reasoning and Planning

6. **Week 7: (3/2/2020)**  In this lecture we introduce probabilistic models that process the outputs of perception (measurement / sensor model) and the state transitions and understand how the agent will track / update its belief state over time. This is a achieved with probabilistic recursive state estimation algorithms and dynamic bayesian networks. Reading: AIMA Chapters 14 & 15. 

7. **Week 6: (3/9/2020)** After the last lecture, the agent has a clear view of the environment state such as what and where the objects that surround it are, its able to track them as they potentially move. It needs to plan the best sequence of actions to reach its goal state and the approach we take here is that of _problem solving_. In fact planning and problem solving are inherently connected as concepts. If the goal state is feasible then the problem to solve  becomes that of  _search_. For instructive purposes we start from simple environmental conditions that are fully observed, known and deterministic. This is where the A* algorithm comes in. We then relax some of the assumptions and treat environments that are deterministic but the agent takes stochastic actions or when both the environment and agent actions are stochastic. Reading: AIMA Chapters 3 & 4. 

8. **Week 8: (3/16/2020)**  Enjoy your Spring Break.

9.  **Week 9: (3/23/2020) - This is your Midterm Test (2h)** 
    
10. **Week 10: (3/30/2020)**  We continue on our path (literally :) ) to investigate what happens when we do not just care about reaching our goal state, but when we, in addition, need to do so with optimality. Optimal planning under uncertainty is perhaps the cornerstone application today in robotics and other fields. Readings: AIMA Chapters 10 & 11 and selected papers.

### Part III: Deep Reinforcement Learning

11.   **Week 11: (4/6/2020)** We now make a considerable extension to our assumptions: the utility of the agent now depends on a sequence of decisions and, further, the stochastic environment offers a feedback signal to the agent called _reward_. We review how the agent's policy, the sequence of actions, can be calculated when it fully observes its current state (MDP) and also when it can only partially do so (POMDP). The algorithms that learn optimal policies in such settings are known as Reinforcement Learning (RL). Today they are enhanced with the Deep Neural Networks that we met in Part I, to significantly improve the expected reward since DNNs are excellent approximators to the various functions embedded in such problems. We conclude with the basic taxonomy of the algorithm space for DRL Problems. In this course we are focusing on model free methods that have general applicability.  Readings: AIMA Chapter 16 & 17, DRL Chapter 1. This lectured will be delivered in person by Gurudutt Hossangadi as I will be out of town. 
        
12.  **Week 12: (4/13/2020)**  In this lecture we start on the exploration of the various algorithms that do not depend on learning any model of the environment dynamics. The first algorithm is the policy-based algorithm called REINFORCE and its extensions especially the Advantage Actor Critic (A2C).   DRL Chapter 2, 6 and 7.  
                
13.  **Week 13: (4/20/2020)**  Staying in the setting of model-free algorithms we will work with the so-called value-based methods and the State Action Reward State Action (SARSA) algorithms. This is the ancestor of algorithms such as DQN, DDQN with Prioritized Experience Replay (PER) that will also be covered. Readings: DRL Chapter 3, 4 and 5. 

### Part IV: Knowledge Bases and Communication

1.    **Week 14: (4/27/2019)**  Every intelligent agent needs to know how the world works for each task it encounters. These facts are stored in its Knowledge Base also known as Knowledge Graph. In addition as the agent affects the environment it must be able to create the right representations using its perception systems and update the knowledge base with dynamic content. Finally it needs to draw conclusions - aka infer new facts from existing ones - that will help the task at hand.  Readings: AIMA Chapter 12 and selected papers. 
                
2.   **Week 15: (5/05/2020)**  We are all familiar that natural language is the prime means of communication between humans to collaboratively complete successfully tasks or simply share our knowledge bases. How can we achieve the same objectives when we enable communicate with intelligent agents. Is natural language the universal language that together with imitation is the missing link in our ability to (re)task robots from intelligent assistants to cognitive collaborative robots in our factories of the future? Readings: AIMA Chapter 23 and selected papers. 
        
3.  **Week 16: (5/11/2020)** In this last lecture, we review the main points of what we learned and emphasize what kind of questions you are expected to answer in the final exam. **Final projects are due 5/10/2020 11:59pm.** 
        
4.  **Week 17: (5/18/2020)**  Good luck with your final test.
          



