---
title: Intelligent Agents and Hierarchical Representations 
metaTitle: "Intelligent Agents and  Hierarchical Representations"
metaDescription: "AI agents that are rational and act on environment representations at multiple levels of abstraction."
---

## The Agent - Environment Interface

In this section we will understand the interface between the agent and its environment and see a practical example that highlights the concepts described.  

As the following figure with the help of notation indicates, the agent *perceives* the environment state $s_t$ via a bank of sensors, its agent function (called **policy**) produces an action $a_t$ that will have two effects. The first is that the action itself will change the environment state to some other state 

$$s_{t+1} = p( s_{t+1} | (s_0, a_0), ..., (s_t, a_t) )$$ 

and the second is that it will cause the environment to send the agent a signal called reward 

$$r_t = f_r(s_t, a_t, s_{t+1})$$

This new state will trigger a new iteration and the interaction will terminate at some point either because the environment terminated after reaching a maximum time step or reaching a desired target state.

![agent-environment](images/01fig02.jpg)
*Agent-Environment Interface*

Notation Table:
| Symbol  | Description  |
|:-:|---|
| $a_t$ | agent action within time step $t$, $a \in \mathcal{A}$ |
| $s_t$ | environment state within time step $t$, $s \in \mathcal{S}$|
| $r_t$ | reward sent by the environment within time step $t$, $r \in \mathcal{R}$|
| $t$ | time step index associated with each tuple ($s, a, r$) called the *experience*. | 
| $T$ | Maximum time step beyond which the interaction terminates. 
| *episode* | The time horizon from $t=0$ to the termination of the environment is called an *episode*. |
| $\tau$ | Trajectory - the sequence of experiences over an episode. 


## Markov Decision Process (MDP)

To simplify the problem we usually assume a Markovian environment where its next state only depends on the current state. Under this assumption,

$$s_{t+1} = p( s_{t+1} | (s_0, a_0), ..., (s_t, a_t) ) =  p(( s_{t+1} | s_t, a_t)$$ 

This assumption is sometimes erroneously called *memoryless* but in any MDP above we can incorporate memory (dependence in more than one state) by cleverly defining the state $S$ as a container of any number of states. For example, $S_t = \left \{ s_t, s_{t-1} \right \}$ can still define and MDP transition using $S$ states. The transition model $p(S_t | S_{t-1}) = p(s_t, s_{t-1} | s_{t-1}, s_{t-2}) = p(s_t|s_{t-1}, s_{t-2})$ is called the 2nd order Markov environment. 

## A real-world AI system

    TODO: add linkage to self-driving car block diagram.  

