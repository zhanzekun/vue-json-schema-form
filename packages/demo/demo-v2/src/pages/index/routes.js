/**
 * Created by Liu.Jun on 2020/5/13 8:47 下午.
 */

const routes = [
    {
        path: '/demo',
        name: 'demo',
        meta: {
            title: 'Demo'
        },
        component: () => import('./views/Demo/index'),
    },
    {
        path: '/zekun',
        name: 'zekun',
        meta: {
            title: 'Zekun'
        },
        component: () => import('./views/ZekunDemo/index'),
    },
    {
        path: '*',
        hidden: true,
        redirect: {
            name: 'demo',
            query: {
                type: 'Simple'
            }
        }
    }
];

export default routes;
