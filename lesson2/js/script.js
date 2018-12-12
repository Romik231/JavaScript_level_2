
function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
};

Container.prototype.render = function () {
    return this.htmlCode;
};

// Метод remove
Container.prototype.remove = function () {
    let elemForRemove = document.getElementById(this.id);
    return elemForRemove.remove();

};


function Menu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
};



function SubMenu(my_href, my_name) {
    Container.call(this);
    this.className = "sub-item";
    this.href = my_href;
    this.name = my_name

};


SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;
SubMenu.prototype.render = function () {
    //let result = '<ul id="' + this.id + '" class="' + this.className + '">';
    return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
};
    /*for (let item in this.items) {
        if (this.items[item] instanceof Menu) {
            result += this.items[item].render();
            result += '</ul>';
        } else {
            for (let i in this.items[item]) {
                result += this.items[item][i].render();
            }
        }
    }
    result += '</ul>';
    return result;
};*/


Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
    let result = '<ul class="' + this.className + '" id="' + this.id + '">';

    for (let item in this.items){
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        } else if (this.items[item] instanceof SubMenu) {
            result += '<ul>' + this.items[item].render() + '</ul>';
        }
    }
    result += '</ul>';
    return result;
};


function MenuItem(my_href, my_name, my_id) {
    Container.call(this);
    this.id = my_id;
    this.className = "menu-item";
    this.href = my_href;
    this.name = my_name;
};

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function () {
    return '<li class=' + this.className + '><a href="'+this.href+'">' + this.name + '</a></li>';
};

/*let m_item1 = new MenuItem("/", "Главная");
let m_item2 = new MenuItem("/catalogue", "Каталог");
let m_item3 = new MenuItem("/gallery", "Галерея");
let m_items = {0: m_item1, 1: m_item2, 2: m_item3};


let menu = new Menu("my_menu", "menu_class", m_items);
let submenu = new SubMenu("main_menu", "sub_menu", [m_items, menu]);

document.write(submenu.render());
*/


function fillMenuContents(xhr) {
    let m_items = {};
    if ( xhr.readyState == 4) {
        if ( xhr.status == 200 ) {/*
            let items = JSON.parse( xhr.responseText );

            for ( let currentitem of items.menu_items ) {
                m_items[currentitem.title] = new MenuItem(currentitem.href, currentitem.title);
            }
            let menu = new Menu("my_menu", "menu_class", m_items);
            let submenu = new SubMenu("main_menu", "sub_menu", [m_items, menu]);
            document.write(submenu.render());*/
            let items = [];
            let subItems;
            let myItems = JSON.parse(xhr.responseText);
            for (let i = 0; i < myItems.length; i++) {
                items.push(new MenuItem(myItems[i].href, myItems[i].title));
                if (myItems[i].submenu) {
                    for (let j = 0; j < myItems[i].submenu.length; j++) {
                        subItems = myItems[i].submenu[j];
                        items.push(new SubMenu(subItems.href, subItems.title));
                    }
                }
            }

            let menuNew = new Menu('first', 'shop', items);
            document.write(menuNew.render())
        }
    } else {
        console.log('Ошибка выполнения запроса');
    }
};

let xhr;


if ( window.XMLHttpRequest ) {
    xhr = new XMLHttpRequest();
    if ( window.overrideMimeType ) {
        xhr.overrideMimeType('application/json'); //FireFox
    }
} else if ( window.ActiveXObject ) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP'); // IE
}
if ( !xhr ) {
    console.log('Невозможно создать запрос');
}

xhr.onreadystatechange = function () { fillMenuContents(xhr); };
xhr.ontimeout = function () { console.log('Превышено время ожидания запроса!') };
xhr.open('GET', 'menu.json', true);
xhr.send(null);