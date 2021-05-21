import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('@/views/MainPage')
const Website = () => import('@/views/Website')
const Requests = () => import('@/views/Requests')
const Settings = () => import('@/views/SettingsPage')

// Settings
const UsersGroups = () => import('@/views/UsersGroups')
const Users = () => import('@/views/Users')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            breadcrumb: [{name: 'Главная'}],
            name: 'Главная',
        },
    },
    {
        path: '/website',
        name: 'Website',
        component: Website,
        meta: {
            breadcrumb: [{name: 'Главная', link: '/'}, {name: 'Сайт'}],
            name: 'Сайт',
        },
    },
    {
        path: '/requests',
        name: 'Requests',
        component: Requests,
        meta: {
            breadcrumb: [{name: 'Главная', link: '/'}, {name: 'Заявки'}],
            name: 'Заявки',
        },
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            name: 'Настройки',
        },
        children: [
            {
                path: 'users-groups',
                name: 'UsersGroups',
                component: UsersGroups,
                meta: {
                    name: 'Группа пользователй',
                },
            },
            {
                path: 'users',
                name: 'Users',
                component: Users,
                meta: {
                    name: 'Пользователи',
                },
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
