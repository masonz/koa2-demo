function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}

var io = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
        var target = item.target;
        if (target.getAttribute('src') == '/public/images/loading.gif') {
            target.src = target.getAttribute('data-src');
        }
    })
});

query('img').forEach(function (item) {
    io.observe(item);
});