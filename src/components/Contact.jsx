import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


//template_kq3gv5j  service_ql0bp24 4JJ0xb8PB7G1_QkIz
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setForm ({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_ql0bp24','template_kq3gv5j',
    {
      from_name: form.name,
      to_name : 'Piyush',
      from_email: 'form.email',
      to_email: 'sonu788380@gmail.com',
      message: form.message,
    },
    '4JJ0xb8PB7G1_QkIz'
    )
    .then(() => {
      setLoading(false);
      alert  ('Thank you for contacting me .');

      setForm({
        name:'',
        email: '',
        message: '',
      })
    }, (error)=> {
      setLoading(false)
      console.log(error);
      alert ('something is wrong.')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">
                 Name
              </span>
              <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none 
              font-medium"
              />
            </label>
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">
                 Email
              </span>
              <input 
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none 
              font-medium"
              />
            </label>
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">
                Message
              </span>
              <textarea
              rows="7 "
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none 
              font-medium"
              />
            </label>
            <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl">
              {loading ? 'Sending...' : 'Send'}
              </button>  
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[500px h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
