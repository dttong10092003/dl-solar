import {
    Banner, AboutMe, Why, InstallationProcess, SolarBenefitsInfographic,
    SolarProductsCatalog, SolarHeroBanner, SolarProjectsShowcase, BlogNewsSection,
    CustomerTestimonials, PartnersSection
} from "../components/Home";

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <Why />
            <InstallationProcess />
            <SolarBenefitsInfographic />
            <SolarProductsCatalog />
            <SolarHeroBanner />
            <SolarProjectsShowcase />
            <BlogNewsSection />
            <CustomerTestimonials />
            <PartnersSection />
        </>
    );
};

export default Home;