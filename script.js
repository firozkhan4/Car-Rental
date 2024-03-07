
function Car(price,model,mark,year,doors,ac,transmission,fuel,img){
    this.price = price;
    this.model = model;
    this.mark = mark;
    this.year = year;
    this.doors = doors;
    this.ac = ac;
    this.transmission = transmission;
    this.fuel = fuel
    this.img = img
}

let audi_img = '/Car-rental/Assets/audi-car.jpg'
let vm_car_img = '/Car-rental/Assets/vw-car.jpg'
let bmw_img = '/Car-rental/Assets/bmw-car.jpg'
let mer_img = '/Car-rental/Assets/mer-car.jpg'
let toyota_img = '/Car-rental/Assets/toyota-car.jpg'
let vm_car2_img = '/Car-rental/Assets/vw-car2.jpg'

const audi = new Car(400,"Audi","A1",2012,"4/5","Yes","Manual","Gasoline", audi_img)
const vw_1 = new Car(300,"Golf 6","Volkswagen",2008,"4/5","Yes","Manual","Diesel", vm_car_img)
const toyota = new Car(450,"Camry","Toyota",2006,"4/5","Yes","Automatic","Hybrid", toyota_img)
const bmw = new Car(560,320,"BMW",2012,"4/5","Yes","Manual","Diesel", bmw_img)
const mercedes = new Car(430,"Benz GLK","Mercedes",2006,"4/5","Yes","Manual","Diesel",mer_img)
const vw_2 = new Car(340,"Passat CC","Volkswagen",2008,"4/5","Yes","Automatic","Gasoline", vm_car2_img)


let val = document.getElementsByClassName("field-input")
let car_img = document.getElementById("car-img-box")


 


const input_val = (obj)=>{
    car_img.src = obj.img;
    val[0].innerHTML = obj.price;
    val[1].innerHTML = obj.model;
    val[2].innerHTML = obj.mark;
    val[3].innerHTML = obj.year;
    val[4].innerHTML = obj.doors;
    val[5].innerHTML = obj.ac;
    val[6].innerHTML = obj.transmission;
    val[7].innerHTML = obj.fuel;
}

const color_btn = document.getElementById("first-btn")

color_btn.addEventListener("load",input_val(audi))


