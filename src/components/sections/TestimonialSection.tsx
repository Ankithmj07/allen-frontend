import React, { useEffect, useState } from 'react';
import QuotesImg from '../../assets/quotes.svg'

interface Testimonial {
  data: string;
  author: string;
  imageURL: string;
  exam: string;
  year: number;
  score?: number;
  totalScore?: number;
  AIR?: number;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://allen-backend.onrender.com/api";


  useEffect(() => {
    fetch('https://allen-backend.onrender.com/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch testimonials:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className='bg-[#0f0f0f] lg:container mx-auto lg:px-[224px] mt-0 pt-0'>
    <section className="text-white py-12 px-4">
      <h2 className="text-lg md:text-[24px] mt-0 lg:mt-5 font-bold text-left lg:text-center">Testimonials from our students</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 min-w-[800px] mt-9 lg:mt-15">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[288px] h-[218px] lg:w-[320px] lg:h-[302px] bg-[#1d1d1d] rounded-2xl p-6 lg:pt-12 shadow-md"
            >
            <div className="absolute -top-6 left-6  ">
              <img className="w-10 h-10 lg:w-15 lg:h-15" src={QuotesImg} alt='Quotes' />
            </div>
            <p className="text-[0.75rem] lg:text-[14px] mb-6 mt-0 text-[#bcbdbd]">{item.data}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={item.imageURL}
                alt={item.author}
                className="w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-bold text-[0.75rem] lg:text-[16px] text-white">{item.author}</p>
                        <p className="text-[0.75rem] lg:text-[16px] text-gray-400">
                            {item.exam} {item.year},{' '} 
                            {item.score && item.totalScore
                              ? `Score ${item.score}/${item.totalScore}`
                              : item.AIR
                              ? `AIR ${item.AIR}`
                              : ''}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      
    </section>
</div>
  );
};

export default Testimonials;







