import SliderComponent from './SliderComponent'
import trending1 from '../../assets/trending1.png';
import trending2 from '../../assets/trending2.png';
import trending3 from '../../assets/trending3.png';
import trending4 from '../../assets/trending4.png';
import trending5 from '../../assets/trending5.png';
import trending6 from '../../assets/trending6.png';
import trending7 from '../../assets/trending7.png';
import trendingMobile1 from '../../assets/trendingMobile1.png';
//import trendingMobile2 from '../../assets/trendingMobile2.png';
//import trendingMobile3 from '../../assets/trendingMobile3.png';
//import trendingMobile4 from '../../assets/trendingMobile4.png';
//import trendingMobile5 from '../../assets/trendingMobile5.png';
//import trendingMobile6 from '../../assets/trendingMobile6.png';


const mySlides = [
  {
    id: 1,
    desktopImage: trending1,
    mobileImage: trendingMobile1,
    title: 'Slide 1',
  },
  {
    id: 2,
    desktopImage: trending2,
    mobileImage: "",
    title: 'Slide 2',
  },
  {
    id: 3,
    desktopImage: trending3,
    mobileImage: "",
    title: 'Slide 3',
  },
  {
    id: 4,
    desktopImage: trending4,
    mobileImage: "",
    title: 'Slide 4',
  },
  {
    id: 5,
    desktopImage: trending5,
    mobileImage: "",
    title: 'Slide 5',
  },
  {
    id: 6,
    desktopImage: trending6,
    mobileImage: "",
    title: 'Slide 6',
  },
  {
    id: 7,
    desktopImage: trending7,
    mobileImage: "",
    title: 'Slide 7',
  },
  
];

const TrendingSlider: React.FC = () => {
    return (
        <div className='bg-[#0f0f0f] lg:container mx-auto px-4 py-4 md:py-8'>
          <h2 className="text-lg lg:text-[24px] mt-0 md:mt-0 font-bold text-left md:text-center">What's Trending</h2>
           <SliderComponent
                slides={mySlides}
                desktopWidth="w-[1020px]"
                desktopHeight="h-[238.21px]"
                mobileWidth=""
                mobileHeight="h-[200px]"
                imageClassName=" "
            />
            <br/>
            <br/>
        </div>
    );
  };
  
export default TrendingSlider;


