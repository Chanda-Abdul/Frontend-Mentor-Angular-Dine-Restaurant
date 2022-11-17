import { MenuItem } from "./menu-item.model";


export const MENU: MenuItem[] = [
  {
    id: 1,
    title: "Seared Salmon Fillet",
    description: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    imageTitle: "salmon",
    mobileImage: "/assets/images/homepage/salmon-mobile.jpg",
    tabletDesktopImage: "/assets/images/homepage/salmon-desktop-tablet.jpg"
  },
  {
    id: 2,
    title: "Rosemary Filet Mignon",
    description: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    imageTitle: "beef",
    mobileImage: "/assets/images/homepage/beef-mobile.jpg",
    tabletDesktopImage: "/assets/images/homepage/beef-desktop-tablet.jpg"

  },
  {
    id: 3,
    title: "Summer Fruit Chocolate Mousse",
    description: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    imageTitle: "chocolate",
    mobileImage: "/assets/images/homepage/chocolate-mobile.jpg",
    tabletDesktopImage: "/assets/images/homepage/chocolate-desktop-tablet.jpg"

  }
]

// for db.json and json-server
// {
//   "MenuItem ": [
//     {
//       "id": 1,
//       title: "Summer Fruit Chocolate Mousse",
//         description: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
//         mobileImage: "/assets/images/homepage/chocolate-mobile.jpg",
//         tabletDesktopImage: "/assets/images/homepage/chocolate-desktop-tablet.jpg"
//    },
//     {
//       "id": 2,
//       .
//     },
//     {
//       "id": 3,
//       .
//     },
//   ]
// }
