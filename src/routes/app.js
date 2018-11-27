import HomePage from '../views/Home';

const appRoutes = [
    {
        path: '/home',
        navbarName: 'Home',
        sidebarName: 'Home',
        component: HomePage
    },
    {
        path: '/',
        to: '/home',
        redirect: true,
        navbarName: 'Redirect'
    }
];

export default appRoutes;