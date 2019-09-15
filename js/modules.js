const toggleModule = (ref) => {
    let mdl = document.getElementById("module-" + ref);
    if(event.target == mdl) {
        mdl.style.display == "none";
    }
    if(mdl.style.display == "none") {
        mdl.style.display = "flex";
    }
    else {
        mdl.style.display = "none";
    }
}