import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import feedbackImage1 from '../assets/company/C1.jpg';
import feedbackImage2 from '../assets/company/C2.jpg';
import feedbackImage3 from '../assets/company/C3.jpg';
import feedbackImage4 from '../assets/company/C5.jpg';
import feedbackImage5 from '../assets/company/C6.jpg';
import feedbackImage6 from '../assets/company/C7.jpg';
import feedbackImage7 from '../assets/company/C8.jpg';
import feedbackImage8 from '../assets/company/C10.jpg';
import feedbackImage9 from '../assets/company/C11.jpg';
import feedbackImage10 from '../assets/company/IBM.jpg';
import feedbackImage11 from '../assets/company/accenture.jpg';

const testimonials = [
  {
    image: feedbackImage1,
  },
  {
    image: feedbackImage2,
  },
  {
    image: feedbackImage3,
  },
  {
    image: feedbackImage4,
  },
  {
    image: feedbackImage5,
  },
  {
    image: feedbackImage6,
  },
  {
    image: feedbackImage7,
  },
  {
    image: feedbackImage8,
  },
  {
    image: feedbackImage9,
  },
  {
    image: feedbackImage10,
  },
  {
    image: feedbackImage11,
  },
  
  // Add more testimonials with image URLs here
];

const ImageGallery = ({ images, showAll }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.slice(0, showAll ? images.length : 3).map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`feedback-image-${index}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setSelectedImage(image)}
        />
      ))}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Feedback"
              className="max-h-full max-w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Feedbacks = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Certificates</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <ImageGallery images={testimonials.map((testimonial) => testimonial.image)} showAll={showAll} />
        {!showAll && (
          <button
            onClick={handleShowMore}
            className="py-2 px-4 bg-[#915eff] text-white rounded-md mt-4"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
