import ReactStars from "react-rating-stars-component"
import All from "../asset/images/anh2.png"
import chocolate from "../asset/images/icons8-chocolate-60.png"
export const filterFood = [
  {
    image: All,
    title: "All",
    category: "all"
  },
  {
    image: "https://food-g-app.web.app/static/media/burger.e4646d9c.svg",
    title: "Hamburger",
    category: "hamburger"
  },
  {
    image: "https://food-g-app.web.app/static/media/pizza.42d0ea1b.svg",
    title: "Pizzas",
    category: "pizzas"
  },
  {
    image: chocolate,
    title: "Chocolate",
    category: "chocolate"
  },
  {
    image: "https://food-g-app.web.app/static/media/bread.3829698f.svg",
    title: "Breads",
    category: "breads"
  },
  {
    image: "https://food-g-app.web.app/static/media/sandwich.2e9ee917.svg",
    title: "Sandwiches",
    category: "sandwiches"
  },
];

export const filterRate = [
  {
    id: 1,
    rate: 5,
    title: <ReactStars
    count={5}
    size={24}
    color="yellow" />,
    desc: "reviews"

  },
  {
    id: 2,
    rate: 4,
    title: <ReactStars
    count={4}
    size={24}
    color="yellow" />,
    desc: "reviews"

  },
  {
    id: 3,
    rate: 3,
    title: <ReactStars
    count={3}
    size={24}
    color="yellow" />,
    desc: "reviews"

  },

]


