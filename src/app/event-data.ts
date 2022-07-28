import { EventItem } from "./components/event-slider/event-slider.component"

export const EVENTS: EventItem[] = [
    {
        id: 1,
        title: "Family Gathering",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        mobileImage: "../assets/images/homepage/family-gathering-mobile.jpg",
        tabletImage: "../assets/images/homepage/family-gathering-tablet.jpg",
        desktopImage: "../assets/images/homepage/family-gathering-desktop.jpg"
    },
    {
        id: 2,
        title: "Special Events",
        description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        mobileImage: "../assets/images/homepage/special-events-mobile.jpg",
        tabletImage: "../assets/images/homepage/special-events-tablet.jpg",
        desktopImage: "../assets/images/homepage/special-events-desktop.jpg"
     },
    {
        id: 3,
        title: "Social Events",
        description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
        mobileImage: "../assets/images/homepage/social-events-mobile.jpg",
        tabletImage: "../assets/images/homepage/social-events-tablet.jpg",
        desktopImage: "../assets/images/homepage/social-events-desktop.jpg"
    }
]

// for db.json and json-server
// {
//   "tasks": [
//     {
//       "id": 1,
//       ...
//     },
//     {
//       "id": 2,
//       ...
//     },
//     {
//       "id": 3,
//      ...
//     }
//   ]
// }