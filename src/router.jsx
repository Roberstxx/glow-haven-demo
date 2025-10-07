import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Experience from './pages/Experience';
import Safety from './pages/Safety';
import Policies from './pages/Policies';
import Philosophy from './pages/Philosophy';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/servicios',
    element: <Services />
  },
  {
    path: '/servicios/:slug',
    element: <ServiceDetail />
  },
  {
    path: '/experiencia',
    element: <Experience />
  },
  {
    path: '/seguridad',
    element: <Safety />
  },
  {
    path: '/politicas',
    element: <Policies />
  },
  {
    path: '/filosofia',
    element: <Philosophy />
  },
  {
    path: '/conocenos',
    element: <About />
  },
  {
    path: '/galeria',
    element: <Gallery />
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
