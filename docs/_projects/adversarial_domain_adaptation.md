---
title: Adversarial Domain Adaptation of Synthetic 3D Data to Train a Volumetric Video Generator Model
order: 1
image: domain_adaptation_1.png
---

In cooperation with the Irish company <a href="https://www.volograms.com/" target="_blank">Volograms</a> we synthetically generated 
training data from an existing (similar but different) data distribution by performing adversarial domain adaptation using an improved CycleGAN 
to train a single-view reconstruction model for VR/AR applications. 

Both data domains consist of RGBD images with the dimensions 512x512x4. Images from the first domain are generated using photogrammetry and 
images from the second domain are generated from a mobile phone using a LiDAR scanner. The objective of this work has been to translate RGBD images generated using 
photogrammetry to images that appear to be from the domain generated by the LiDAR scan. 

<div class="column is-half is-offset-one-quarter">
<figure class="image">
<img src="{{site.baseurl}}/assets/images/domain_adaptation_2.png" >
</figure>
</div>

Training a machine learning model requires representative training data of the target application. In some cases, data is either not available in the required amount 
or only similar data from another data domain is available. Data can be synthetically generated by translating data from one domain into another domain. Adversarial 
domain adaption is the process of translating data from a source domain into a target domain using adversarial learning approaches. Since none of the samples is 
available in both domains, adversarial domain adaptation is an unsupervised learning problem. The CycleGAN framework is a generative adversarial network that is 
used for unpaired data-to-data translation tasks. It is built from one generator and one discriminator for each domain that are trained simultaneously. 
The challenge of training CycleGANs lies primarily in the high amount of hyperparameters and the difference in complexity between the discriminator and the generator. 
Furthermore, the learning objective is qualitatively more complex for the generator than for the discriminator. In addition, especially for convolutional networks 
that translate high resolution multi-channel images, models become complex and require many resources to train.

<div class="column is-half is-offset-one-quarter">
<figure class="image">
<img src="{{site.baseurl}}/assets/images/{{page.image}}" >
</figure>
</div>
