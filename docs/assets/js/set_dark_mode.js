function changeCSS(cssFile) {

    var oldlink = document.getElementById("mode");

	oldlink.setAttribute("href", cssFile);
    //var newlink = document.createElement("link");
    //newlink.setAttribute("rel", "stylesheet");
    //newlink.setAttribute("type", "text/css");
    //newlink.setAttribute("href", cssFile);

    //document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}
