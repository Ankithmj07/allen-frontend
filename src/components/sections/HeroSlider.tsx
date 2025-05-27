import SliderComponent from './SliderComponent'
import heroSlide1 from '../../assets/heroSlide1.png';
import heroSlide2 from '../../assets/heroSlide2.png';
import heroSlide3 from '../../assets/heroSlide3.png';
import heroSlide4 from '../../assets/heroSlide4.jpg';
import heroSlide5 from '../../assets/heroSlide5.png';


const HeroSlides = [
  {
    id: 1,
    desktopImage: heroSlide1,
    title: 'Slide 1',
  },
  {
    id: 2,
    desktopImage: heroSlide2,
    title: 'Slide 2',
  },
  {
    id: 3,
    desktopImage: heroSlide3,
    title: 'Slide 3',
  },
  {
    id: 4,
    desktopImage: heroSlide4,
    title: 'Slide 4',
  },
  {
    id: 5,
    desktopImage: heroSlide5,
    title: 'Slide 5',
  },
];

const HeroSlider: React.FC = () => {
    return (
       
           <SliderComponent
                slides={HeroSlides}
                desktopWidth="w-[400px]"
                desktopHeight="h-[225px]"
                mobileWidth="w-[358px]"
                mobileHeight="h-[201px]"
                tabletWidth='w-[400px]'
                tabletHeight='h-[224.71px]'
                imageClassName=" "
            />
    );
  };
  
export default HeroSlider;


