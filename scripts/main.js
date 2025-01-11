//clear form before unload
window.onebeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};