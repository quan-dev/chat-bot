import Flow from './screens/Flow';
import FormikExample from './screens/FormikExample';
import Home from './screens/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flow',
    name: 'Flow',
    component: Flow
  },
  {
    path: '/formik-example',
    name: 'FormikExample',
    component: FormikExample
  },
];

export default routes;
