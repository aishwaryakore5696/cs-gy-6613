---
title: Course Introduction
metaTitle: "AI Course Introduction"
metaDescription: "AI evolution according to DARPA with representative examples"
---

## DARPA's AI Evolution Classification

If engineering difficulty has a pinnacle today this must be in AI domains that combines ML, optimal control and planning. Self-driving cars and humanoids from Boston Dynamics fit the bill. 

Initially there were rules.

* In the 1980s *knowledge-base* systems that hard-coded knowledge about the world in formal languages.
  * IF this happens, THEN do that.
* They failed to get any traction as the number of rules that are needed to model the real world exploded.
* However, they are still in use today in simpler modeling domains e.g. fault management. For example Rule Based Engines are used today in many complex systems that manage mission critical infrastructures e.g. [ONAP](http://wiki.onap.org).

The introduction of advanced AI methods few years ago, created a situation we can explain with the following analogy.

![Cumberland Basin, April 1844](images/nautical-analogy.png)

*A nautical analogy on where we are today on AI for mission critical systems. Can you notice anything strange with this ship (Cumberland Basin, photo taken April 1844)?*

To put order into the many approaches and methods for delivering AI in our lives, DARPA classified AI development in terms of "waves". 

### Wave I: Symbolic GOFAI

<!-- video: https://www.youtube.com/watch?v=qnKSfY_RDOU -->

<!-- `youtube: qnKSfY_RDOU` -->

<section class="bg-apple" >
  <div class="wrap">
    <div class="grid">
      <div class="column">
        <h3>Wave I: Symbolic GOFAI</h3>
        <div class="embed">
          <iframe src="https://www.youtube.com/embed/qnKSfY_RDOU">
          </iframe>
        </div>
      </div>
      <div class="column">
        <h3>Wave II: Connectionism</h3>
        <div class="embed">
          <iframe src="https://www.youtube.com/embed/1dBLLB2qasM">
          </iframe>
          </div>
      </div>
      <div class="column">
        <h3>Wave III: Artificial General Intelligence</h3>
        <div class="embed">
          <iframe src="https://www.youtube.com/embed/LikxFZZO2sk">
          </iframe>
          </div>
      </div>
    </div>
  </div>
</section>


In the 1980s Rule Based Engines started to be applied manifesting the first wave of AI introduction. In this example you see a system that performs highway trajectory planning. A combination of cleverly designed rules does work and offers real time performance but cannot *generalize* and therefore have acceptable performance in other environments.

Wave II srarted soon after 2010 - we started to apply a different philosophy in solving intelligent tasks such as object classification. The philosophy of connectionism and the so called deep neural network architectures, dominate today relative simple (and mostly self-contained) tasks.

Wave III is at present an active research area driven primarily from our inability to implement with just deep neural networks things like long-term goal planning, causality, extract meaning from text like humans do, explain the decisions of neural networks, transfer the learnings from one task to another, even similar, task. Artificial General Intelligence is the term usually associated with such capabilities.

Further, we will see a fusion of disciplines such as real world modeling and simulation with representation learning to help deep neural structures learn without having as requirement difficult and expensive to acquire training datasets.

![heartflow.com](images/heartflow.png)
*Reveal the stenosis: generative augmented physical (CFD) modeling from CT Scans*

For example in the picture above a CFD simulation is used to augment ML algorithms that predict **and explain** those predictions.  I mission critical systems (such as medical diagnostic systems) everything must be  **explainable**.


## AI - A Systems Approach

Artificial Intelligence is the multidisciplinary science that aim to create agents that can think and act humanly or rationally. This course starts the new decade filled with the promises of the previous one. AI is not around the corner as many people predicted, but our purpose here is to (a) understand and appreciate the significant progress that certain components of AI have made over the last few years. (b) to be able to synthesize such elements into AI systems.  

We also need to appreciate that AI systems are right now engineered to perform well within a domain and this trend may continue into the 20s. We need a domain that we can use as an application theme. Given the importance of the mission critical industries in the economy of every country, we have selected self-driving cars as the application domain. This domain requires the design of advanced agents that perceive the environment using noisy sensors, make decisions under uncertainty, actuate many drive-by-wire electronics to execute decisions, communicate with humans in natural language or be able to sense driver psychological state and many more.  

As you already know, a huge component of AI is machine learning (ML) and that component alone is worth of at least a couple of semesters. ML nowadays is used to process the visual sensing (computer vision), verbal commands (speech to text) and many other front-end functions using structures known as Deep Neural Networks (DNNs). These functions are usually effective in modeling the reflexive part of human brain. Their performance sometimes hides the enormous efforts by R&D teams to create carefully curated dataset for the task at hand. When supervised datasets are not enough for the design of reflexive agents policies we need additional tools that build on DNNs and offer the possibility to learn control policies from world models that in many instances take the shape of simulated environments. Deep Reinforcement Learning is another subset of learning that can go beyond reflexive models but at the same time it requires a model of the world and this in turn significant effort in building simulation engines.  

At the end of the day, AI is a system with the ability to represent the world and abstract concepts at multiple levels. If we are to draw the architecture of such system, it will have the ability to quickly change depending on the domain and task at hand. Just like origami, AI systems will morph into an architecture, facilitated by high speed interconnections between its subsystems. The controller that controls such changes must be topology aware i.e. knowing the functional decomposition of the AI system and what support for representations and abstractions each subsystem can offer. How these can be combined and ultimately used, is something that needs to be learned. To generalize, such morphic control agents must be designed to be able to perform across task domains.    

In a limited demonstration of such ability, closed worlds such as games, we have agents that can process reflexive DNN outputs or DRL policies and can create abstractions at the symbolic level. Are they able to generalize ? Doubtful. Which brings us to the very interesting problem. For the vast majority of mission critical industries that have to do with the control of machines, we may reach in this decade a good enough performance level. The internet didn't have 1 Gbps at each household even 5 years ago.  But the tens of kbps at the hands of innovators managed to change the world as we know it despite connectivity outages. The internet does not kill, many people will argue but if anyone believes this analogy, AI seems to be at the same silo as the before internet era of the early 90s. The protocol and controls that will allow siloed AI systems to communicate and by doing so demonstrate an ability to synthesize a first glimpse of general intelligence is one of the missing links. 

Lets now go over the course [syllabus](../..) to understand what elements of Wave II/III we will cover in this semester.



