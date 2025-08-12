import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gallery-bg text-text-primary w-full">
      <Header />
      <main className="flex-grow bg-gallery-bg w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;