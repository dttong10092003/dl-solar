import AuthenticationForm from '../components/Auth/AuthenticationForm';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Auth = () => {

    return (
        <>
            <Header />
            <Breadcrumb />
            <AuthenticationForm />
            <Footer />
        </>
    );
};

export default Auth;
