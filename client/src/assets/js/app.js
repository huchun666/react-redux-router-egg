function appendEmByWidth() {
    let screenW = document.body.clientWidth;
    let size = screenW / 37.5; // 2为缩放比dpr
    document.documentElement.style.fontSize = size + 'px';
}

export default {
    appendEmByWidth: appendEmByWidth
}