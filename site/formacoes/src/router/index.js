import { createRouter, createWebHistory } from 'vue-router'

import CourseDetails from '../views/CourseDetails.vue'
import CourseListAdm from '../views/CourseListAdm.vue'
import Courses from '../views/Courses.vue'
import Creator from '../views/Creator.vue'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import MyCourses from '../views/MyCourses.vue'
import MyDiplomas from '../views/MyDiplomas.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import Settings from '../views/Settings.vue'
import UserListAdm from '../views/UserListAdm.vue'
import VideoPlayer from '../views/VideoPlayer.vue'
import Workshop from '../views/Workshop.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Landing
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/courses/:id',
            component: CourseDetails
        },
        {
            path: '/courselist',
            component: CourseListAdm
        },
        {
            path: '/courses',
            component: Courses
        },
        {
            path: '/creators/:id',
            component: Creator
        },
        {
            path: '/workshop',
            component: Workshop
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/users/:id',
            component: Profile
        },
        {
            path: '/users/:id/courses',
            component: MyCourses
        },
        {
            path: '/users/:id/diplomas',
            component: MyDiplomas
        },
        {
            path: '/settings',
            component: Settings
        },
        {
            path: '/courses/:id/videos/:id',
            component: VideoPlayer
        },
        {
            path: '/users',
            component: UserListAdm
        }
    ]
})

export default router