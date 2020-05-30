# Axioms, Definitions, and Theorems

### Sean Prendi

### May 25, 2020

If you've ever cracked open a math textbook, you've probably seen the words **theorem** and **definition** thrown around, but it might not be immediately obvious how these things differ. And if you've ever done proofs, you may have heard someone reference the idea of an **axiom**, but it's not always obvious what these things are and how they differ. In this article, I will explore the definition of each of these terms, explain how I think about each of them, and explore how they're all connected but different through something called the Peano Axioms.



#### <u>Axioms</u>

Axioms are statements that are seen as self-evident, or are taken to be true without proof. If this is your first exposure to the concept of an axiom but you've done proof based math before, that definition might feel a bit odd. On some level, math is the study of what can be proved based on things that we already know to be true. So how can axioms be meaningful if they're not proved? Well, axioms are not statments whose truth value we want to evaluate but instead statements that we assume to be true, then use their truth to derive other truths<sup>1</sup>.

The beauty of math is that every idea that a mathematician proves follows logically from an idea someone else has proved. Unlike the natural sciences there is no concept of experiment, no one can say "I've tried this idea for a lot of examples, and it's worked every time, so it's true!" Rather, for something to be proven it has to follow from something else through a series of logical deductions. The bad news of this, however, is that there is no statement that can be proved without starting somewhere. Because everything follows from something, there is nothing that follows from nothing. So in order to meaningfully talk about anything, from the simplest arithmetic to the most complicated proofs, you have to start somewhere. The axioms are that "somewhere".

Another good way to think about this idea is to imagine math as a game. In this sense, axioms are the rules of the game. If you're playing chess, you don't have to justify the fact that white moves first, the fact that the bishops move diagonally, or the fact that the game is over when the king has no where to move. In fact, you can't justify them beyond the fact that everyone has agreed to play by the same rules. And just like the rules of a game, axioms are not a single, fixed thing. In much the same way as there are different games, each with different rules, there are different axiomatic systems, each with different axioms. One example is the Peano Axioms, which we explore at the end of this article. Another is called Zermelo-Fraenkel Set Theory, or ZF, which we will look into in the another blog post. Each of these has different axioms, and they differ in the statements they are capable of proving<sup>2</sup>.



#### <u>Definitions</u>

Definitions are statements that precisely encapsulate the meaning of a concept or symbol. Perhaps the most intuitive of these three concepts, definitions are mostly the same in math as they are in language. Similarly to axioms, we do not prove them to be true. However, unlike axioms their truth value is not what makes them useful. Instead, definitions are merely tools for communicating an idea more clearly. 

Looking back to the chess analogy, if an axiom looks like "pawns move by..." then a definition would look like "the pawn is the piece...". Neither of these statements is provable, but they serve different purposes. The rule is the foundation of the game, whereas the definition allows you to refer to pawns in a comfortable way.



#### <u>Theorems</u>

Theorems are statements that have been proven, either from previously proven theorems or directly from the axioms. Of course, if a theorem is being proven from previously proven theorems, then those theorems have to have been proven from somewhere. Follow this chain of proofs back long enough and you will always arrive at a statement proven directly from the axioms, because every theorem must follow from something. 

Most things that you've learned or heard of in math are theorems. Everything from simple statments like $a + b = b + a$ to incredibly deep ideas like Fermat's Last Theorem: no three positive integers $a, b, c$ satisfiy $a^n + b^n = c^n$ for any value of $n > 2$. Each of these statements has a proof in the standard axiom system, and a sufficiently motivated person could trace each of them back to the axioms. 

Statements that haven't been proven to be true or false are called conjectures. If a conjecture is proven then it is a theorem, otherwise its negation is a theorem. Any statment that has a truth value is called a proposition. We won't explore these terms further in this post, but may in the future. For now, it's probably enough to know that something that is true or false (e.g. 1+1 = 2) is a proposition, a proposition we don't know to be true or false is a conjecture, and a proposition we can prove to be true is a theorem. 



#### <u>The Peano Axioms</u>

So, we've covered a bit about what axioms, definitions, and theorems are, as well as how they're similar and different, and some ways to think about them. However, like all things in math, these ideas can still be hard to grasp until you've worked with them a bit. Even though anyone reading this has probably implicitly used axioms, seen something defined, and proven theorems, it will hopefully be hepful to go through an example of each. For this, we will use something called the Peano Axioms.

The Peano Axioms are a very simple axiomatic framework—far simpler than the axioms most mathematicians implicitly use—invented by a mathematician named Giuseppe Peano, designed to formalize arithmetic. Although Peano was not the first person to do this, and the Peano Axioms are not the only way to define arithmetic, they are the simplest. For this reason, they are a useful jumping off point for understanding axioms. 

One last note before we get into them, I think it's important to note that these are not *the* axioms of math. In fact, there is no such list. Instead, any axiomatic system, including the Peano Axioms, are just a collection of assumptions that we make and then use to prove things. These ones are good enough for the specific goal of formalizing arithmetic. [Euclid's Postulates](http://people.math.harvard.edu/~ctm/home/text/class/harvard/113/97/html/euclid.html) are good enough for formalizing geometry, [ZF](https://en.wikipedia.org/wiki/Zermelo–Fraenkel_set_theory) is good enough for formalizing most of modern math, and many more axiomatic systems are good enough for formalizing many other things. None of these choices can formalize all of math, and so none of them are *the* axioms. 

So, I am now going to ask you to do something rather unnatural: I would like you to forget everything you know about math. Or at least, forget about it for now. The Peano Axioms may feel very simple (they are) and in some other axiomatic system these are things that you can define or prove rather than axioms. However, right now we're *only* going to be working with these axioms. As simple as they may feel, we must assume them, and then we will make a definition and prove a theorem from them. 

Without further ado, the Peano Axioms<sup>3</sup> are as follows:

P1. Zero is a natural number

P2. If $x$ is a natural number, then $S(x)$ is a natural number ($S(x)$ is the successor function, a function mapping a natural number to another. You can think of it as a function mapping a natural number to "the next one". We will define addition below, and it will follow that $S(x) = x + 1$)

P3. There is no natural number $x$ such that $S(x) = 0$

P4. If $S(x) = S(y)$ then $x = y$.

P5. If a set, $X$, contains $0$ and the successor of every number is in $X$, then $X$ contains all of the natural numbers<sup>4</sup>

So, we've listed our axioms, now let's make some definitions. 

**Definition:** $1 = S(0)$

Essentially, this definition associates a symbol to a concept that we know exists because of the axioms (Specifically, axioms 1 and 2).

**Definition:** We recursively define the function *plus* (denoted $+$) mapping two natural numbers to another one as follows:

A1. $x + 0 = x$

A2. $x + S(y) = S(x + y)$

So for any natural number $x$, we have that $x+1 = x + S(0) = S(x + 0) = S(x)$. Similarly, if we define $2 = S(1)$, then we have that $x + 2 = x + S(1) = S(x + 1) = S(S(x))$, and so on. So really, we've used our definition of addition to simplify the way of saying repeated addition of the successor function. That is, instead of saying "apply the successor function to $x$ $y$ many times, we can instead just write $x + y$.

And now equipped with axioms and a definition of addition, we can prove the following (very simple) theorem. Remember, we have forgotten everything we know about math, so while this theorem might seem obvious or very basic, we only have our axioms and our definitions!

**Theorem:** Zero is the additive identity. That is, for any natural number $x$, we have that $x + 0 = 0 + x = x$.

**Proof:** The fact that $x + 0 = x$ is part of the definition of addition, so we only need to prove that $0 + x = x$. Let $X$ be the set of all natural numbers such that $0 + x = x$. Our technique will be as follows: if we can show that $0$ is an element of $X$, and we can show that for any element of $X$, the successor of that element is in $X$, then by P5 we will be able to conclude that $X$ contains every natural number, and we will be done<sup>5</sup>. 

First we will show that $0$ is an element of $X$. We know by definition A1 that $0 + 0 = 0$, so $0$ is indeed in $X$.

Next, let $x$ be a natural number in $X$. We want to show that $S(x)$ is in $X$ as well.
$$
\begin{align*}
	0 + S(X) &= S(0 + x) &&\text{By A2}\\
	&=S(x) &&\text{Because $x$ is in $X$}
\end{align*}
$$
So then we have that if $x$ is a natural number in $X$, then $S(x)$ is also in $X$. So as mentioned above, we can conclude from P5 that $X$ contains every natural number, and so we are done. 



So, we have stated all of our axioms, given a useful definition to help our notation, and proved a theorem. I hope that this wirlwind tour helped to clarify the difference between axioms, definitions, and theorems, as well as gave some intuition for how we use each of these terms, and why they're all important. This will be the first post on this blog in a long-running series about foundations of math and set theory. I hope you enjoy, and feel free to email me if you found this helpful or found inaccuracies.



***

###### 1. In many cases, their truth value cannot be determined from the axioms. This is an idea called independence, which we will explore in a later post.

###### 2.  Every sufficiently strong axiomatic systems has statements it cannot prove. This is called being incomplete, which will explore in a later post.

###### 3. This is actually just one way to formulate the Peano Axioms. There are many equivalent ways to state them, and Wikipedia provides a different statement of them. I chose this one as it's the shortest statement of the Peano Axioms I know of.

###### 4. If you've seen induction before, the fifth axiom is actually a way of formalizing that concept. We will explore this in a later post.

###### 5. This is the formaliztion of induction that is mentioned below the statement of the axioms.