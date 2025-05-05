block("cart")(
    tag()("a"),
    attrs()({href: "#"}),
    content()(function () {
        return [
            {block: "icon", mods: {size: "l"}, attrs: {"data-icon": "cart"}},
            {elem: "counter",  tag: "span", content: "0"}
        ]
    })
);