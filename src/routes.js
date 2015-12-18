import Home from 'views/home';
import About from 'views/about';

const routes = [
  {
    name     : 'Home',
    route    : '/home',
    icon     : 'home',
    component: Home,
    default  : true
  },
  {
    name     : 'About',
    route    : '/about',
    icon     : 'info',
    component: About
  }
];

export default routes;