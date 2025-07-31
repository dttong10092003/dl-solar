import Cart from '../components/Cart';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const CartPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <Cart />
            <Footer />
        </>
    );
};

export default CartPage;
