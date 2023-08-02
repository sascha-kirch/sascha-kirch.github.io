---
title: Conditional Denoising Diffusion Models for AR/VR Applications
order: 1
image: depth_diffusion.png
---

We present RGB-D-Fusion, a multi-modal conditional denoising diffusion probabilistic model to generate high resolution depth maps from low-resolution monocular RGB images of humanoid subjects. RGB-D-Fusion first generates a low-resolution depth map using an image conditioned denoising diffusion probabilistic model and then upsamples the depth map using a second denoising diffusion probabilistic model conditioned on a low-resolution RGB-D image. We further introduce a novel augmentation technique, depth noise augmentation, to increase the robustness of our super-resolution model.

**Paper**: <a href="https://arxiv.org/abs/2307.15988" target="_blank">RGB-D-Fusion: Image Conditioned Depth Diffusion of Humanoid Subjects</a>