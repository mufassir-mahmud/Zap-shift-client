
import Banner from './Banner/Banner';
import Works from './Works/Works';
import Services from './Services/Services';
import Brands from './Brands/Brands';
import WhyUs from './WhyUs/WhyUs';
import Review from './Review/Review';
const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className='bg-#EAECED'>
            <Banner></Banner>
            <Works/>
            <Services/>
            <Brands/>
            <WhyUs/>
            <Review reviewsPromise={reviewsPromise}></Review>
        </div>
    );
};

export default Home;
