import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrPaintingsService {

  constructor() { 

  }
  paintings = [
    {
      id:1,
      title: "Автопортрет Леонардо",
      year: 1512,
      author: "Леонардо да Вінчі",
      dimensions: "80x60",
      location: "Турин, Італія",
      img: "./assets/pic/Portret_Leonardo.jpg"
    },
    {
      id:2,
      title: "Мона Ліза",
      year: 1503,
      author: "Леонардо да Вінчі",
      dimensions: "77x53",
      location: "Лувр, Париж",
      img: "/assets/pic/Mona_Lisa.jpg"
    },
    {
      id:3,
      title: "Поклоніння волхвів",
      year: 1481,
      author: "Леонардо да Вінчі",
      dimensions: "246 × 243",
      location: "Галерея Уффіці (Флоренція, Італія Італія)",
      img: "/assets/pic/Pocolinna_volhiv.jpg"
    },
    {
      id:4,
      title: "Перше причастя",
      year: 1895,
      author: "Пабло Пікассо",
      dimensions: "100x70",
      location: "Приватна колекція, Львів",
      img: "./assets/pic/Pershe_Primera_Comunión_1895.jpg"
    },
    {
      id:5,
      title: "Життя",
      year: 1903,
      author: "Пабло Пікассо",
      dimensions: "44x39",
      location: "Музей історії мистецтва, Відень",
      img: "./assets/pic/Pocolinna_volhiv.jpg"
    },
    {
      id:6,
      title: "Родина вуличних циркачів",
      year: 1905,
      author: "Пабло Пікассо",
      dimensions: "65x92",
      location: "Музей Орсе, Париж",
      img: "./assets/pic/Stter_picasso.jpg"
    },
    {
      id:7,
      title: "Скрипка та гітара",
      year: 1913,
      author: "Пабло Пікассо",
      dimensions: "220x390",
      location: "Музей Прадо, Мадрид",
      img: "./assets/pic/Gitara_picasso.jpg"
    },
    {
      id:8,
      title: "Задній двір в Антверпені",
      year: 1885,
      author: "Ван Гог",
      dimensions: "81x175",
      location: "Королівська галерея, Лондон",
      img: "./assets/pic/VanGogh-Houses_Seen_from_the_Back.jpg"
    },
    {
      id:9,
      title: "Краєвид з вікна майстерні в Гаазі",
      year: 1882,
      author: "Ван Гог",
      dimensions: "66x82",
      location: "Музей д'Орсе, Париж",
      img: "./assets/pic/Window.jpg"
    },
    {
      id:10,
      title: "Осінь. Пейзаж із чотирма деревами",
      year: 1885,
      author: "Ван Гог",
      dimensions: "460x880",
      location: "Санта Марія делле Граціє, Мілан",
      img: "/assets/pic/autumn.jpg"
    }
  ];
}
