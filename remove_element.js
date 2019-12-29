const remove_button = function() {
    play_button = document.querySelector(".btn-play");
    if (play_button != null) {
        play_button.remove();
    }    
}
const observer = new MutationObserver(remove_button);
observer.observe(document.getElementById("seq_content"), {childList: true, characterData: true, subtree: true});