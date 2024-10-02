import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Housing from '@/views/Housing.vue'
import Activities from '@/views/Activities.vue'
import Contact from '@/views/Contact.vue'
import Gallery from '@/views/Gallery.vue'
import WineRegion from '@/views/WineRegion.vue'
import Location from '@/views/Location.vue'
import Rooms from '@/views/Rooms.vue'
import Pricing from '@/views/Pricing.vue'
import ExtraServices from '@/views/ExtraServices.vue'
import BookingPolicies from '@/views/BookingPolicies.vue'
import BiggestWineProducers from "@/views/BiggestWineProducers.vue";
import SmallWineProducers from "@/views/SmallWineProducers.vue";
import OurFavourites from "@/views/OurFavourites.vue";
import Hiking from "@/views/Hiking.vue";
import Cycling from "@/views/Cycling.vue";
import LakeBalaton from "@/views/LakeBalaton.vue";
import NearbyCities from "@/views/NearbyCities.vue";
import BadacsonyEvents from "@/views/BadacsonyEvents.vue";
import HowToGetHere from "@/views/HowToGetHere.vue";
import Layout from '@/views/Layout.vue'
import HouseLocation from "@/views/HouseLocation.vue";
import TallinnBadacsony from "@/views/TallinnBadacsony.vue";
import LakeHeviz from "@/views/LakeHévíz.vue";

const routes = [
    {
        path: '/:lang(en|et)?',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'housing',
                name: 'Housing',
                component: Housing,
                children: [
                    {
                        path: 'layout',
                        name: 'Layout',
                        component: Layout
                    },
                    {
                        path: 'rooms',
                        name: 'Rooms',
                        component: Rooms
                    },
                    {
                        path: 'pricing',
                        name: 'Pricing',
                        component: Pricing
                    },
                    {
                        path: 'extra-services',
                        name: 'ExtraServices',
                        component: ExtraServices
                    },
                    {
                        path: 'booking-policies',
                        name: 'BookingPolicies',
                        component: BookingPolicies
                    }
                ]
            },
            {
                path: 'activities',
                name: 'Activities',
                component: Activities,
                children: [
                    {
                        path: 'hiking',
                        name: 'Hiking',
                        component: Hiking
                    },
                    {
                        path: 'cycling',
                        name: 'Cycling',
                        component: Cycling
                    },
                    {
                        path: 'lakeBalaton',
                        name: 'LakeBalaton',
                        component: LakeBalaton
                    },
                    {
                        path: 'nearby-cities',
                        name: 'NearbyCities',
                        component: NearbyCities
                    },
                    {
                        path: 'lakeHeviz',
                        name: 'LakeHeviz',
                        component: LakeHeviz
                    },
                    {
                        path: 'badacsonyEvents',
                        name: 'BadacsonyEvents',
                        component: BadacsonyEvents
                    },
                ]
            },
            {
                path: 'contact',
                name: 'Contact',
                component: Contact
            },
            {
                path: 'gallery',
                name: 'Gallery',
                component: Gallery
            },
            {
                path: 'location',
                name: 'Location',
                component: Location,
                children: [
                    {
                        path: 'house-location',
                        name: 'HouseLocation',
                        component: HouseLocation
                    },
                    {
                        path: 'how-To-Get-Here',
                        name: 'HowToGetHere',
                        component: HowToGetHere
                    },
                    {
                        path: 'tallinn-badacsony',
                        name: 'TallinnBadacsony',
                        component: TallinnBadacsony
                    },
                ]
            },
            {
                path: 'wineRegion',
                name: 'WineRegion',
                component: WineRegion,
                children: [
                    {
                        path: 'biggest-Wine-Producers',
                        name: 'BiggestWineProducers',
                        component: BiggestWineProducers
                    },
                    {
                        path: 'small-Wine-Producers',
                        name: 'SmallWineProducers',
                        component: SmallWineProducers
                    },
                    {
                        path: 'our-Favourites',
                        name: 'OurFavourites',
                        component: OurFavourites
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // if there is a saved position, return it (usually when navigating back/forward)
        if (savedPosition) {
            return savedPosition;
        } else {
            // otherwise, scroll to the top of the page
            return { top: 0 };
        }
    }
});

export default router;
