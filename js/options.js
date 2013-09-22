function save_options() {
    var select = document.getElementById("hotkey");
    var hotkey = select.children[select.selectedIndex].value;
    localStorage["hotkey"] = hotkey;

    noty({
        text: "Setting Saved",
        layout: "top",
        type: "success",
        textAlign: "center",
        easing: "swing",
        animateOpen: {"height":"toggle"},
        animateClose: {"height":"toggle"},
        speed: 500,
        timeout: 10000,
        closable: true,
        closeOnSelfClick: true
    });
    
}

function populate_options(){
    for (i = 65 ; i <= 90 ; ++i){
        $("<option/>", {
            value: i,
            html: String.fromCharCode(i)
        }).appendTo("#hotkey");
    }
    restore_options();
}

function restore_options() {
    var hotkey = localStorage["hotkey"];
    if (!hotkey) {
        return;
    }
    var select = document.getElementById("hotkey");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == hotkey) {
            child.selected = "true";
            break;
        }
    }
}
document.addEventListener('DOMContentLoaded', populate_options);
document.querySelector('#save').addEventListener('click', save_options);
