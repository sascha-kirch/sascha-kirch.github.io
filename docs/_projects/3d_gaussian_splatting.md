---
title: 3D Gaussian Splatting
order: 3
image: 3d_splats.png
---
This project is ment to showcase some sublementary materials for <a href="https://medium.com/@SaschaKirch/turn-yourself-into-a-3d-gaussian-splat-3a2bc59a770f" target="_blank">my blog post on 3D Gaussian Splatting</a>.

<div class="columns is-multiline">
	<div class="column is-one-third">
		<spline-viewer
				class="is-centered"
				hint
				loading-anim-type="spinner-small-light"
				url="https://prod.spline.design/j5CFsJbZxqQSXIJM/scene.splinecode"
				background="rgba(78,55,56,0.2)">
		</spline-viewer>
	</div>
	<div class="column is-one-third">
		<spline-viewer
				hint
				loading-anim-type="spinner-small-light"
				url="https://prod.spline.design/j5CFsJbZxqQSXIJM/scene.splinecode"
				background="rgba(126,133,109,0.2)">
		</spline-viewer>
	</div>
	<div class="column is-one-third">
		<spline-viewer
				hint
				loading-anim-type="spinner-small-light"
				url="https://prod.spline.design/j5CFsJbZxqQSXIJM/scene.splinecode"
				background="rgba(49,69,108,0.2)">
		</spline-viewer>
	</div>
</div> 


<script>
    document.getElementsByTagName("body")[0].setAttribute("onload","rl()")
    function rl(){
        v = document.querySelectorAll("spline-viewer")
        for(viewer of v){
            viewer._canvas.style.borderRadius="12px"
            viewer._logo.style.visibility="hidden"
        }
    }
</script>
