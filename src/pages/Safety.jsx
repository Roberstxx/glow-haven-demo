import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';

const Safety = () => {
  useEffect(() => { setDocumentMeta({ title: 'Seguridad e Higiene | Estudio Elegante' }); }, []);
  return (<div className="page-wrapper"><Header /><WhatsAppFloat /><main className="container py-8"><h1 className="page-title mb-8">Seguridad e Higiene</h1><div className="card"><p>Protocolos estrictos de bioseguridad. La belleza empieza por la salud.</p></div></main><Footer /></div>);
};

export default Safety;
