import ProductDetail from '../components/ProductDetail';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ProductDetailPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <ProductDetail />
            <Footer />
        </>
    );
};

export default ProductDetailPage;
