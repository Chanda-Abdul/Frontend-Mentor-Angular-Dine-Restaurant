import { MenuItem } from "./components/menu-preview/menu-preview.component";


export const MENU: MenuItem[] = [
    {
        id: 1,
        title: "Seared Salmon Fillet",
        description: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        mobileImage: "../assets/images/homepage/salmon-mobile.jpg",
        tabletDesktopImage: "../assets/images/homepage/salmon-desktop-tablet.jpg"


    },
    {
        id: 2,
        title: "Rosemary Filet Mignon",
        description: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        mobileImage: "../assets/images/homepage/beef-mobile.jpg",
        tabletDesktopImage: "../assets/images/homepage/beef-desktop-tablet.jpg"

    },
    {
        id: 3,
        title: "Summer Fruit Chocolate Mousse",
        description: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
        mobileImage: "../assets/images/homepage/chocolate-mobile.jpg",
        tabletDesktopImage: "../assets/images/homepage/chocolate-desktop-tablet.jpg"

    }
]

// for db.json and json-server
// {
//   "tasks": [
//     {
//       "id": 1,
//       "text": "Doctors Appointment",
//       "day": "May 5th at 2:30pm",
//       "reminder": true
//     },
//     {
//       "id": 2,
//       "text": "Meeting at School",
//       "day": "May 6th at 2:30pm",
//       "reminder": true
//     },
//     {
//       "id": 3,
//       "text": "Food Shopping",
//       "day": "May 7th at 12:30pm",
//       "reminder": false
//     }
//   ]
// }