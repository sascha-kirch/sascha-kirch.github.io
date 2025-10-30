---
title: Multi-Sensor 360° Data Collection and Ground Truth Generation for Autonomous Driving
order: 10
image: gt.png
hidden: false
---

High‑quality labeled and unlabeled data is still the limiting resource in autonomous driving. A vehicle has to perceive not only “what is where” now, but how objects are moving and how rare edge cases look under different weather, lighting and traffic patterns. Ground truth is the reference we use to train models, benchmark perception quality, validate safety cases, seed simulation, and evaluate domain shift when the stack or environment changes. A single modality or manual labeling approach cannot scale to the fidelity required.

## Why Ground Truth Matters (Beyond Supervised Labels)

High‑quality ground truth is not just a box or a mask for supervised training. The same curated corpus powers motion prediction, tracking, segmentation, map refinement, unsupervised representation learning, simulation seeded with real distributions (not guesses), repeatable regression (rerun a new stack on identical sequences and measure deltas), and fair benchmarking across sensor or algorithm generations. It’s also where we mine near misses, unusual maneuvers and weather transitions, and where we validate calibration or inject faults safely. One investment, many uses. The fleet image below is a small glimpse of the capture backbone behind that idea.

<figure>
    <img src="{{site.baseurl}}/assets/images/gt_cars1.png" alt="Fleet vehicles" width="70%" style="border-radius:5px;">
    <figcaption>Fleet vehicles used for 360° multi‑modal, multi‑view data collection.</figcaption>
</figure>

## Automated + Hybrid Approach

Purely manual 360° annotation does not scale; purely end‑to‑end deep learning that tries to “learn everything” from scratch wastes the physics, geometry and traffic knowledge we already possess. A hybrid approach is faster and more stable: deep networks propose dense primitives; classical multi‑view geometry and tracking enforce physical and temporal consistency; fusion blends complementary sensor strengths (LiDAR: structure, camera: appearance, radar: velocity, IMU/GPS: motion); domain rules bring map and traffic context; offline batch processing lets us move freely forward and backward in time and run global optimization passes without real‑time constraints. Horizontal scaling in the compute cluster turns heavy refinement into routine processing. Human effort focuses on uncertainty review and edge cases instead of drawing thousands of boxes. Result: higher consistency, lower manual cost, less drift.

<figure>
    <img src="{{site.baseurl}}/assets/images/gt_cars2.png" alt="Fleet vehicles" width="70%" style="border-radius:5px;">
    <figcaption>Complementary sensors across the fleet make occlusion handling and temporal consistency possible.</figcaption>
</figure>

## System Overview

The rig surrounds the vehicle with cameras, LiDARs, radars and motion sensors. We make sure everything stays precisely aligned in space and time; otherwise fusion becomes guesswork. Data rolls onto reliable high‑throughput storage with metadata (weather, time of day, scenario tags) that later helps us sample or search. Processing happens offline in clear stages—ingest, initial perception, fusion, refinement, selective human review, packaging. That’s as deep as I can go publicly; the internal specifics are proprietary.

## Key Challenges

Scale is real: capturing multi‑modal streams in real time, storing them reliably, then pushing them through offline refinement at cluster scale. Each modality has its own noise and cadence: radar’s sparse velocity pulses, LiDAR’s dense geometry, cameras’ rich texture. Rare edge cases hide in the long tail and need targeted mining rather than blind accumulation. Objective quality metrics (consistency of trajectories, residual alignment error, stability over time) allow automated acceptance instead of gut feel. And many disciplines intersect: sensor physics, calibration, computer vision, machine learning, software & data engineering, HPC, safety and privacy. Getting them to cooperate smoothly is half the challenge and half the fun.

## Why It Is Interesting

I get to work across almost the entire stack: great instrumented cars, dense camera + LiDAR + radar + inertial sensor suites, low‑level calibration and timing, classical geometry (triangulation, pose refinement, tracking filters), modern deep learning (segmentation, detection, self‑supervised embeddings, foundation model adaptation), and the unglamorous but critical data engineering—designing storage layouts and binary data structures for high throughput, low latency and petabyte cost efficiency. One day is C++ for a performance‑critical fusion routine or a custom CUDA kernel; the next is Python for rapid model experimentation; another might be shell orchestration or building small utilities to automate complex installations and package compilations. Parallel computing, data structure trade‑offs, precision vs recall dashboards, new algorithms, and finally generating a new output video to inspect the latest results.

The variety is the point: physics and signal level details, algorithm research, production software, scalable infrastructure, and human‑in‑the‑loop tooling all feed into a single feedback cycle. Small wins (a lighter data format, a faster alignment pass, a smarter radar + vision association, a clearer quality metric) ripple through training, validation, simulation and future research direction. Ground truth evolves from “label cost” into a living asset that keeps getting better and opens endlessly many possibilities. I’m an engineer; being able to span that breadth  -hardware to data to algorithms— and see concrete impact never gets old.
