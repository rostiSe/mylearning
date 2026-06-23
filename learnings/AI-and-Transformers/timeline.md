# AI timeline — how we got to now

A running timeline. Each entry should answer: **what problem did this solve**,
**what did it still get wrong**, and **what did that failure set up next**. Fill
as I research; depth over coverage.

> Scaffold below is just era buckets to hang entries on — reorder, split, or
> rewrite freely.

## Foundations (≈1940s–1960s)

### 1943 — McCulloch & Pitts neuron
**Problem solved:** No mathematical model of how a neuron computes.
**What it did:** Abstracted the biological neuron to a weighted sum + threshold.
Proved that networks of such neurons can compute any logical formula.
**What it couldn't do:** Nothing learned. Weights were hand-set by a programmer.
**What it set up:** The idea that a brain might be a logical computing machine —
and that you only need the voting structure, not the full biology.

### 1958 — Rosenblatt's Perceptron
**Problem solved:** McCulloch–Pitts neurons couldn't learn; weights were manual.
**What it did:** Added a learning rule — adjust weights toward correct output after
each mistake. Proved the Perceptron Convergence Theorem: if data is linearly separable,
it finds a solution in finite steps.
**What it couldn't do:** Non-linearly separable data (e.g. XOR). Any single-layer
Perceptron draws a linear decision boundary and cannot go beyond that.
**What it set up:** The core idea of "adjust weights by mistakes" — the ancestor of
all gradient-based learning. Also: the first wave of hype and its consequences.

### 1969 — Minsky & Papert, *Perceptrons* — First AI winter
**Problem solved:** (A critique, not a solution.) Rigorously proved the XOR limitation.
**What it did:** Collapsed funding for neural networks. Showed that for connectedness
properties (like parity), single-layer networks need exponentially many units.
**What it couldn't do:** The critique was correct but narrowly scoped to single layers.
Multi-layer networks could solve XOR; the real blocker was no known efficient training algorithm.
**What it set up:** Nearly a decade of reduced neural-network research. Forces attention
back to symbolic AI and later to statistical methods. Set the stage for backpropagation
to be received as a decisive answer when it arrived.

<!-- Lesson: lessons/0001-the-birth-of-the-artificial-neuron.html -->

## Symbolic era & the first winters (≈1960s–1980s)
<!-- expert systems, limits, why funding/interest collapsed... -->

## Connectionism returns (≈1980s–1990s)
<!-- backpropagation, MLPs, what was still out of reach... -->

## Statistical & deep learning ramp (≈2000s–2012)
<!-- compute + data, imagenet/AlexNet 2012... -->

## Sequence models (≈2013–2016)
<!-- word2vec, RNN/LSTM, seq2seq, the bottleneck that motivated attention... -->

## Attention & transformers (2017–)
<!-- "Attention Is All You Need", why attention beat recurrence... -->

## Scaling & foundation models (2018–)
<!-- BERT/GPT line, scaling laws, emergence debates... -->

## Now → next
<!-- where the trajectory points; my own predictions to pressure-test later -->
