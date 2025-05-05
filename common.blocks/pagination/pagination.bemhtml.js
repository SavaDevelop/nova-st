block('pagination').content()(function() {
    return[
      { elem:'container',
        content: [
          {elem: 'page-prev', content: [
            {block: 'button', mods: {view: "arrow", theme: "arrow-primary", direction: "left", size: "m", type: "link", disabled: true}, url:"#"},
          ]},
          {elem: 'page-num', tag: 'a', attrs: { 'href': '#'}, content: '3'},
          {elem: 'page-num', tag: 'a', attrs: { 'href': '#'}, content: '4'},
          {elem: 'page-num', tag: 'a', attrs: { 'href': '#'}, elemMods:{'active': true}, content: '5'},
          {elem: 'page-num', tag: 'a', attrs: { 'href': '#'}, content: '6'},
          {elem: 'page-dots', tag: 'span', content: '...'},
          {elem: 'page-next',content: [
            {block: 'button', mods: {view: "arrow", theme: "arrow-primary", direction: "right", size: "m", type: "link"}, url:"#"},
          ]}
        ]
      }
      ]
});
