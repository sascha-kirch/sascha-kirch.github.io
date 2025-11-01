---
title: Automotive Radar Electronics
order: 3
image: radar_sensor.jpg
hidden: false
---
Automotive radar quietly solves problems that cameras, lidar and ultrasonic sensors cannot handle alone: seeing and measuring motion in rain, fog, snow, glare and darkness, at long range, with direct velocity information. It underpins Adaptive Cruise Control, Emergency Braking, Blind Spot detection, cross‑traffic alerts, and feeds higher‑level fusion in driver assistance stacks.

## Why Radar Matters

A camera gives semantics but can be blinded. Lidar gives fine 3D detail but is costly and weather‑sensitive. Ultrasonic is cheap but very short range. Radar adds all‑weather robustness and instant Doppler velocity. Its lower angular resolution and multipath artefacts mean it complements, not replaces, the other sensors; fusion uses radar early for velocity lock and stable tracking, then camera/lidar refine object shape and class.

## How Radar Extracts Motion and Position (High Level)

A radar sensor emits controlled frequency sweeps. Reflections come back slightly delayed (range information) and slightly shifted in frequency (Doppler velocity). Comparing phases across multiple antenna elements gives direction. From raw mixed signals the device builds a map of targets with distance, speed, and angle—even in poor visibility. That entire chain has to run continuously with tight timing budgets and low phase noise.

## Engineering Challenges

Building a multi‑generation radar platform means squeezing RF, digital, power, safety and thermal design into a small, low‑cost unit behind a plastic bumper. A few highlights:

Small antenna aperture limits angular resolution; you fight physics with array layout, phase calibration and signal processing. The bumper and housing shift antenna patterns and add detuning; simulation has to align with chamber measurements. Millimeter‑wave MMIC, radar SoC and microcontroller share supplies fed by a noisy car battery (crank, load dump, transients) so power integrity and EMI filtering must protect phase noise and spurious performance without blowing cost or space. Thermal gradients threaten frequency stability and lifetime; mechanical design and heat‑spreading has to work across –40 °C cold start to +125 °C hot soak. Mutual interference between adjacent vehicles’ radars requires chirp planning and randomization. Functional safety demands diagnostics and safe states; reliability demands vibration, humidity, ESD and aging robustness. All of it must pass automotive qualification while still meeting aggressive cost targets and manufacturing test time.

## Sensor Internals

Interestingly, while writing this small description I found public test reports for the Gen5 radar platform I worked on. I can't detail any design aspects, but here is how the sensor (this might not be the final design) looked:

<figure>
    <img src="{{site.baseurl}}/assets/images/radar_internal.png" alt="radar_internal" width="80%">
    <figcaption>Radar Gen5 Sensor Hardware [<a href="https://device.report/m/bc40fa47caa7ab5efece27c977fc2fca7f327c5901c39492aa167346ea56a1bbk" target="_blank">Public Test Report</a>].</figcaption>
</figure>


## Engineering Work

Started as a Hardware Engineer: designed, validated and tested electronic modules for the radar sensor platform. Owned schematics and layout constraints, performed bring‑up and lab measurements and worked directly with customers and suppliers to balance cost, safety, reliability and performance for high‑volume deployment.

Then evolved into the Technical Project Lead for the electronics platform project (Gen5 → Gen7): responsible for electronic module concepts and integration across microcontroller, MMIC radar ASIC, SystemASIC, radar SoC, power and clock architecture, safety and diagnostic strategy, thermal design, PCB stack‑up and layout rules, reliability and EMC. Led international cross‑discipline teams (6–18 experts) and steered platform evolution across multiple generations.

## Why It Was Interesting

Radar forces you to pay attention to details at many layers simultaneously: phase noise and spur cleanup for Doppler fidelity; antenna aperture limits and phase calibration for angle accuracy; power rail ripple that would smear weak targets; thermal drift that shifts frequency; safety mechanisms that must react deterministically; production test time that needs cuts without harming RF calibration. Every small improvement (a cleaner reference clock, better feed network symmetry, faster calibration routine) translates directly into more stable tracking in poor weather. The result was a platform shipping into volume driver assistance features generation after generation—not just a demo in a chamber.

<figure>
	<img src="{{site.baseurl}}/assets/images/radar_sensor.jpg" alt="Automotive radar sensor" width="70%" style="border-radius: 5px;">
	<figcaption>High‑integration automotive radar sensor platform (representative image).</figcaption>
</figure>
