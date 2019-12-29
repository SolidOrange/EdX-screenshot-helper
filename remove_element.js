let target_node = document.getElementById("seq_content");
const config = {childList: true, characterData: true, subtree: true};

const callback = function() {
    let play_buttons = document.getElementsByClassName("btn-play fa fa-youtube-play fa-2x");
    if (play_buttons.length > 0){
        play_buttons[0].remove();
    }   
}

const observer = new MutationObserver(callback);
observer.observe(target_node, config);


