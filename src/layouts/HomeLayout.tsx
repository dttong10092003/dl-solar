import { Outlet } from 'react-router-dom';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
