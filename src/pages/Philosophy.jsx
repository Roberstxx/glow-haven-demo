import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const Philosophy = () => {
  useEffect(() => { setDocumentMeta({ title: 'Filosofía | Estudio Elegante' }); }, []);
  return (<div className="page-wrapper"><Header /><WhatsAppFloat /><main className="container py-8"><h1 className="page-title mb-8">Nuestra Filosofía</h1><div className="card"><p>No competimos en precio; competimos en calidad y seguridad.</p></div></main><Footer /></div>);
};

export default Philosophy;
