import Products from '../components/Products';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ProductPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <Products />
            <Footer />
        </>
    );
};

export default ProductPage;
