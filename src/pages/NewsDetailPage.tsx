import NewsDetail from "../components/NewsDetail"
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

export default function NewsDetailPage() {
    return (
        <>
            <Header />
            <Breadcrumb />
            <NewsDetail />
            <Footer />
        </>
    );
}
