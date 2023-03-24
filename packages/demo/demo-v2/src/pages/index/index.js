/**
 * Created by Liu.Jun on 2020/5/13 15:52.
 */

import 'demo-common/bootstrap.js';
import Vue from 'vue';
import VueRouter from 'VueRouter';
import elementUI from 'demo-common/components/ElementUi/index.js';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import routes from './routes';
// import VueForm from '@zekun/vue2-form-antdv';
import App from './App';

import './style.css';

Vue.use(VueRouter);
Vue.use(Antd);
// Ui
Vue.use(elementUI);
// Vue.use(VueForm)

Vue.config.devtools = true

new Vue({
    router: new VueRouter({
        mode: 'hash',
        routes,
        scrollBehavior() {
            return { x: 0, y: 0 };
        }
    }),
    render: h => h(App)
}).$mount('#app');