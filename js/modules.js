function toggleModule(ref) {
    var mdl = document.getElementById("module-" + ref);
    if(mdl.style.display == "none") {
        mdl.style.display = "block";
    }
    else {
        mdl.style.display = "none";
    }
}