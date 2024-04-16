import { routerType } from '../types/router.types';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));

export const routes: routerType[] = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Projects',
    path: 'projects',
    element: <Projects />,
  },
];
