import ShoppingPolicy from '../components/Policy/ShoppingPolicy';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const ShoppingPolicyPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <ShoppingPolicy />
            <Footer />
        </>
    );
};

export default ShoppingPolicyPage;
