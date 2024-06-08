import { createRouter, createWebHistory } from 'vue-router'
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
                component: Activities
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
                component: Location
            },
            {
                path: 'wineRegion',
                name: 'WineRegion',
                component: WineRegion
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router
