function save_options() {
    var select = document.getElementById("hotkey");
    var hotkey = select.children[select.selectedIndex].value;
    localStorage["hotkey"] = hotkey;
    console.log(hotkey);
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

function addOption(key,keyName){
            $("<option/>", {
            value: key,
            html: keyName
        }).appendTo("#hotkey");
}

function populate_options(){
    //Alphabets
    for (i = 65 ; i <= 90 ; ++i){
        addOption(i, String.fromCharCode(i));
    }
    
    //Space key
    addOption(32,"Space");
    addOption(190," . ");

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
