

function expend(item) {
    var status = item.getAttribute("status");
    var sd = document.getElementById('sd_'+item.id);
    var ld = document.getElementById('ld_'+item.id);
    if(status == "off"){
        item.classList.remove("fa-plus-circle");
        item.classList.add("fa-minus-circle");
        sd.classList.replace("show", "hide");
        ld.classList.replace("hide", "show");
        item.setAttribute("status", "on");
    }else{
        item.classList.remove("fa-minus-circle");
        item.classList.add("fa-plus-circle");
        ld.classList.replace("show", "hide");
        sd.classList.replace("hide", "show");
        item.setAttribute("status", "off");
    }
}