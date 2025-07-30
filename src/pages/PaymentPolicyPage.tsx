import PaymentPolicy from '../components/Policy/PaymentPolicy';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const PaymentPolicyPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <PaymentPolicy />
            <Footer />
        </>
    );
};

export default PaymentPolicyPage;
