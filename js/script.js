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



function SubMenu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;

};


SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;
SubMenu.prototype.render = function () {
    let result = '<ul id="' + this.id + '" class="' + this.className + '">';
        for (let item in this.items) {
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
};


Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
    let result = '<ul class="' + this.className + '" id="' + this.id + '">';

    for (let item in this.items){
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
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
let m_items = {0: m_item1, 1: m_item2, 2: m_item3};


let menu = new Menu("my_menu", "menu_class", m_items);
let submenu = new SubMenu("main_menu", "sub_menu", [m_items, menu]);

document.write(submenu.render());

