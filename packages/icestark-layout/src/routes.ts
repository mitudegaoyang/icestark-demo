import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

console.log(process.env.NODE_ENV);

const routes = [{
  path: (process.env.NODE_ENV === "development" ? "" : "/icestark-demo") + '/about',
  component: About,
}, {
  path: (process.env.NODE_ENV === "development" ? "" : "/icestark-demo") + '/login',
  component: Login,
}, {
  path: (process.env.NODE_ENV === "development" ? "" : "/icestark-demo") + '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;
