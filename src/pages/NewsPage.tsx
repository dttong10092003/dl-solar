import News from '../components/News';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const NewsPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <News />
            <Footer />
        </>
    );
};

export default NewsPage;
