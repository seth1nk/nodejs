import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import JewelryList from './components/JewelryList.vue';
import OrdersList from './components/OrdersList.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import ViewJewelry from './components/ViewJewelry.vue';
import ViewOrders from './components/ViewOrders.vue';

const routes = [
  { path: '/', component: HomePage },          
  { path: '/about', component: AboutPage },    
  { path: '/contact', component: ContactPage },
  { path: '/jewelry', component: JewelryList },
  { path: '/orders', component: OrdersList },
  { path: '/login', component: LoginPage },    
  { path: '/register', component: RegisterPage }, 
  { path: '/view-jewelry/:id', component: ViewJewelry },
  { path: '/view-orders/:id', component: ViewOrders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;