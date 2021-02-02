import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

const baseUrl = localStorage.baseUrl

const routes = [{
  path: baseUrl + '/about',
  component: About,
}, {
  path: baseUrl + '/login',
  component: Login,
}, {
  path: baseUrl + '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;
