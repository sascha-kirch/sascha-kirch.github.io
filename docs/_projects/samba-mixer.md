---
title: SambaMixer - State of Health Prediction of Li-ion Batteries using Mamba State Space Models
order: 8
image: samba_mixer_architecture.png
hidden: false
---
The state of health (SOH) of a Li-ion battery is determined by complex interactions among its internal components and external factors. Approaches leveraging deep learning architectures have been proposed to predict the SOH using convolutional networks, recurrent networks, and transformers. Recently, Mamba selective state space models have emerged as a new sequence model that combines fast parallel training with data efficiency and fast sampling. In this paper, we propose SambaMixer, a Mamba-based model for predicting the SOH of Li-ion batteries using multivariate time signals measured during the battery’s discharge cycle. Our model is designed to handle analog signals with irregular sampling rates and recuperation effects of Li-ion batteries. We introduce a novel anchor-based resampling method as an augmentation technique. Additionally, we improve performance and learn recuperation effects by conditioning the prediction on the sample time and cycle time difference using positional encodings. We evaluate our model on the NASA battery discharge dataset, reporting MAE, RMSE, and MAPE. Our model outperforms previous methods based on CNNs and recurrent networks, reducing MAE by 52%, RMSE by 43%, and MAPE by 7%.

**Authors:** <br>
[Sascha Kirch](https://sascha-kirch.github.io/), [José Ignacio Olalde-Verano](https://orcid.org/0000-0001-8058-156X) , [Sergio Martín](https://orcid.org/0000-0002-4118-0234) & [Clara Pérez-Molina](https://orcid.org/0000-0001-8260-4155)

[![](https://img.shields.io/badge/IEEE_Access-doi:10.1109/ACCESS.2024.3524321-blue)](https://ieeexplore.ieee.org/document/10818656) [![arXiv](https://img.shields.io/badge/arXiv-2411.00233-b31b1b.svg)](https://arxiv.org/abs/2411.00233) 

[<a href="https://github.com/sascha-kirch/samba-mixer" target="_blank">`Code`</a>]
[[`BibTex`](#black_nib-citation)]

## Contribution

1. Introducing **Mamba state space models** to the problem of **Li-Ion battery SOH prediction**.
2. Using an **anchor-based resampling** scheme to resample time signals to have the same number of samples while serving as a data augmentation method.
3. Applying a **sample time-based positional encoding** scheme to the input sequence to tackle sample jitter, time signals of varying length and recuperation effects of Li-ion batteries.


## Framework

<figure>
<img src="{{site.baseurl}}/assets/images/samba_mixer_architecture.png" alt="SambaMixer Architecture" width="80%">
<figcaption>SambaMixer architecture. We input a multivariate time series of current, voltage, temperature, and sample time.
First, we resample the time signals using our anchor-based resampling technique. Then, we feed the resampled sample
time into the sample time positional encoding layer. Additionally, we feed the time difference between two discharge
cycles in hours into the cycle time difference positional encoding layer. The other signals, namely current, voltage, and
temperature, are fed into the input projection. The projected signals are added to the sample time embeddings and the
cycle time difference embeddings. Optionally, a class (CLS) token can be inserted at any position. The embedded tokens are
then fed into the SambaMixer Encoder, which consists of M stacked SambaMixer Encoder blocks. Finally, the output of the
encoder is fed into the head, which predicts the state of health of the current cycle k for battery bψ.</figcaption>
</figure>


## Results

<table>
  <tr>
    <td> <img src="{{site.baseurl}}/assets/images/samba_mixer_soh_prediction_bat6.png"  alt="soh_prediction_bat6" width = "100%" ></td>
    <td><img src="{{site.baseurl}}/assets/images/samba_mixer_soh_prediction_bat7.png" alt="soh_prediction_bat7" width = "100%"></td>
    <td><img src="{{site.baseurl}}/assets/images/samba_mixer_soh_prediction_bat47.png" alt="soh_prediction_bat47" width = "100%"></td>
   </tr>
</table>

| Battery           |  Model                | MAE   | RMSE  | MAPE  |
| :---------------- | :------------------- | ----: |-----: |-----: |
| #06               |   [Mazzi et al. (2024)](https://www.sciencedirect.com/science/article/abs/pii/S0952197623013830) | 2.448 | 3.177 | 1.579 |
|                   |   SambaMixer (ours)        | **1.173** | **2.068** | **1.406** |
| #07               |   [Mazzi et al. (2024)](https://www.sciencedirect.com/science/article/abs/pii/S0952197623013830) | 1.861 | 2.252 | 1.114 |
|                   |   SambaMixer (ours)        | **1.197** | **1.285** | **1.498** |
| #47               |   [Mazzi et al. (2024)](https://www.sciencedirect.com/science/article/abs/pii/S0952197623013830) | 2.549 | 3.094 | 1.969 |
|                   |   SambaMixer (ours)        | **0.512** | **0.645** | **0.822** |


## Never heard of Mamba Selective State Space models?

Here we provide free access to Sascha's series: **Towards Mamba State Space Models Images, Videos and Time Series**.
- [Part 1: Towards Mamba State Space Models for Images, Videos and Time Series](https://medium.com/towards-data-science/towards-mamba-state-space-models-for-images-videos-and-time-series-1e0bfdb5933a?sk=8aaecd0fc979e1e95ac2a8e62946064b)
- [Part 2: Structured State Space Models Visually Explained](https://medium.com/towards-data-science/structured-state-space-models-visually-explained-86cfe2757386?sk=479768bd75ecf8d410f902b7ad8c0836)
- [Part 3: Here Comes Mamba: The Selective State Space Model](https://medium.com/towards-data-science/here-comes-mamba-the-selective-state-space-model-435e5d17a451?sk=602b692eda48c19b2b2f4b0a7198bbcb)
- [Part 4: Vision Mamba: Like a Vision Transformer but Better](https://medium.com/towards-data-science/vision-mamba-like-a-vision-transformer-but-better-3b2660c35848?sk=2a84edececf20d69284ea5b03c058fa9)
- Part 5: VideoMamba
- Part 6: MambaMixer
- Part 7: Mamba-2

And here [free access to all his other articles](https://sascha-kirch.github.io/blog_friend_links.html)

## Citation

If you find our work helpful for your research, please consider citing the following BibTeX entry.

```bibtex
@ARTICLE{olalde_kirch_sambamixer_2025,
  author={Olalde-Verano, José Ignacio and Kirch, Sascha and Pérez-Molina, Clara and Martín, Sergio},
  journal={IEEE Access}, 
  title={SambaMixer: State of Health Prediction of Li-Ion Batteries Using Mamba State Space Models}, 
  year={2025},
  volume={13},
  number={},
  pages={2313-2327},
  keywords={Lithium-ion batteries;Predictive models;Transformers;Temperature measurement;Discharges (electric);Voltage measurement;Lithium;Battery charge measurement;State of charge;NASA;Li-ion battery;mamba;state space model;state of health prediction;multivariate time series;deep learning},
  doi={10.1109/ACCESS.2024.3524321}}


```
