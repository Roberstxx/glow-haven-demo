import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const Policies = () => {
  useEffect(() => { setDocumentMeta({ title: 'Políticas | Estudio Elegante' }); }, []);
  return (<div className="page-wrapper"><Header /><WhatsAppFloat /><main className="container py-8"><h1 className="page-title mb-8">Políticas</h1><div className="card"><p>Anticipo requerido. Cancelaciones 24h antes. Tu tiempo es valioso, el nuestro también.</p></div></main><Footer /></div>);
};

export default Policies;
