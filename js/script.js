/*let audi = {
    color: red,
    wheels: 4,
    engine: {
        volume: 2.0,
        power: 225,
    },
};
*/
/*unction Car(color, wheels, engine) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
};

let audi = new Car ('red', 4, {volume:2.0, power: 225 });
let bmw = new Car ('white', 4, {volume:2.5, power: 250 });*/

/*function Vehicle() {
  this.x = 0,
  this.y = 0,
  this.z = 0,
  this.color = 'white'

};

Vehicle.prototype.move = function (x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z,
};

function Car() {
    Vehicle.call(this);
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let audi = new Car();

*/


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



function SubMenu(sub_id, sub_name, sub_class) {
    Menu.call(this);
    this.id = sub_id;
    this.className = sub_class;
    this.name = sub_name;
};


SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;
SubMenu.prototype.render = function () {
    return '<li id=' + this.id + ' class=' + this.className + '>' + this.name + '</li>'
};





Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
    let result = '<ul class="' + this.className + '" id="' + this.id + '">';

    for (let item in this.items){
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        } if(this.items[item] instanceof SubMenu) {
            result += '<li>' + this.items[item].render() + '</li>';
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
    return '<li class=' + this.className + '>' + this.name + '</li>';
};

let m_item1 = new MenuItem("/", "Главная");
let m_item2 = new MenuItem("/catalogue", "Каталог");
let m_item3 = new MenuItem("/gallery", "Галерея");

let sub_menu1 = new SubMenu("sub_item", "Контакты", "submenu");
let sub_menu2 = new SubMenu("about us", "О нас", "submenu");
let sub_menu3 = new SubMenu("Read_more", "Подробнее", "submenu");

let m_items = {0: m_item1, 1: m_item2, 2: m_item3, 3: sub_menu1, 4: sub_menu2, 5: sub_menu3};




let menu = new Menu("my_menu", "menu_class", m_items);

document.write(menu.render());

