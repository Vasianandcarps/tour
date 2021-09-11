let price;
let a = prompt("Введите страну:");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    price = 200;
    price = hot ? price * 0.8 : price;
    break;
  case "Грузия":
    price = 250;
    price = hot ? price * 0.8 : price;
    break;
  case "США":
    price = 100;
    price = hot ? price * 0.8 : price;
    break;
  case "Китай":
    price = 140;
    price = hot ? price * 0.8 : price;
    break;
  case "Австрия":
    price = 300;
    price = hot ? price * 0.8 : price;
    break;
  default:
    price = "Тур не найден";
}
alert(price);
