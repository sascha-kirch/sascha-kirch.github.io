document.getElementsByTagName("body")[0].setAttribute("onload","rl()")

function rl(){
    v = document.querySelectorAll("spline-viewer")
    for(viewer of v){
        viewer._canvas.style.borderRadius="12px"
        viewer._logo.style.visibility="hidden"
    }
}
