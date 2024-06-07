import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Housing from "@/views/Housing.vue";
import Activities from "@/views/Activities.vue";
import Contact from "@/views/Contact.vue";
import Gallery from "@/views/Gallery.vue";
import WineRegion from "@/views/WineRegion.vue";
import Location from "@/views/Location.vue"; // Ensure this import is here

const routes = [
    {
        path: '/:lang(en|fr|de)?',
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
                component: Housing
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
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL), // Use import.meta.env
    routes
})

export default router