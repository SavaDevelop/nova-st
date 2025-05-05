block('pushy')(
  tag()('nav'),
  content()(function() {
    return [
      {
      block: 'pushy-content', mix: {block: "content"}, 
      content:[
          {
            block: 'pushy-list',
            mods:{ 'level': 1},
            attrs: {'itemscope': true, itemtype:'http://www.schema.org/SiteNavigationElement'},
            tag:'ul',
            content:[
              { elem: 'item', tag: 'li', mods:{ 'level': 1, active: true}, attrs: { itemprop: "name" },  content: { block: 'link', mods: {theme: "main"}, url:'#', content:'Главная'} },

              { elem: 'item', tag: 'li', mods:{ 'level': 1}, attrs: { itemprop: "name" },  content: [
                { elem: 'submenu-button', content: ['Аренда', {block: 'icon', mods: { size: 'm'}, attrs: {'data-icon': "mark"}}]},
                {elem: "submenu", content: [
                  {elem: "submenu-title", tag: "button", content: [
                    {block: 'icon', mods: { size: 'l'}, attrs: {'data-icon': "mark"}},
                    {elem: "text", tag: "h4", content: 'Аренда'}
                  ]},
                  {elem: "submenu-list", mix: {block: "content"}, tag: 'ul', content: [
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Автокраны'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Автовышки'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Манипуляторы'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Самосвалы'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Погрузчики'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: ['Вся аренда', {block: 'icon', mods: { size: 'm'}, attrs: {'data-icon': "mark"}}]
                        }
                    },
                  ]}
                ]},
              ] },

              { elem: 'item', tag: 'li', mods:{ 'level': 1}, attrs: { itemprop: "name" },  content: [
                { elem: 'submenu-button', content: ['Услуги', {block: 'icon', mods: { size: 'm'}, attrs: {'data-icon': "mark"}}]},
                {elem: "submenu", content: [
                  {elem: "submenu-title", tag: "button", content: [
                    {block: 'icon', mods: { size: 'l'}, attrs: {'data-icon': "mark"}},
                    {elem: "text", tag: "h4", content: 'Услуги'}
                  ]},
                  {elem: "submenu-list", mix: {block: "content"}, tag: 'ul', content: [
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Услуги'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Услуги'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Услуги'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Услуги'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Услуги'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: ['Все услуги', {block: 'icon', mods: { size: 'm'}, attrs: {'data-icon': "mark"}}]
                        }
                    },
                  ]}
                ]},
              ] },
              { elem: 'item', tag: 'li', mods:{ 'level': 1}, attrs: { itemprop: "name" },  content: { block: 'link', mods: {theme: "main"}, url:'#', content:'О компании'} },

              { elem: 'item', tag: 'li', mods:{ 'level': 1}, attrs: { itemprop: "name" },  content: [
                { elem: 'submenu-button', content: ['Информация', {block: 'icon', mods: { size: 'm'}, attrs: {'data-icon': "mark"}}]},
                {elem: "submenu", content: [
                  {elem: "submenu-title", tag: "button", content: [
                    {block: 'icon', mods: { size: 'l'}, attrs: {'data-icon': "mark"}},
                    {elem: "text", tag: "h4", content: 'Информация'}
                  ]},
                  {elem: "submenu-list", mix: {block: "content"}, tag: 'ul', content: [
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Отзывы'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Блог'
                        }
                    },
                    {
                      elem: 'submenu-item', tag: 'li', content:
                        {
                          block: 'link', mods: {theme: "main"},
                          url:'#',
                          content: 'Часто задаваемые вопросы'
                        }
                    }
                  ]}
                ]},
              ] },
              { elem: 'item', tag: 'li', mods:{ 'level': 1}, attrs: { itemprop: "name" },  content: { block: 'link', mods: {theme: "main"}, url:'#', content:'Контакты'} },
            ]
          },
        ]
      }
    ]
  })
);
