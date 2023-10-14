import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    }= useForm(); 

    const onSubmit = async (e: any) => {
        const isValid= await trigger(); 
         if (!isValid) {
            e.preventDefault()
        }
    }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
            <motion.div 
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration: 1}}
                variants={{
                hidden: {opacity:0, x:-100},
                visible: {opacity:1, x: 0}
                     }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        laying out print, graphic or web designs. The passage is attributed to an unknown ipsum, or lipsum as it is sometimes known, is dummy text used in  ...
                    </p>

            </motion.div>
            {/* FORM AND IMAGE */}
                     <div className="mt-10 justify-between gap-8 md:flex ">
                        <motion.div
                             className="mt-10 basis-3/5 md:mt-0"
                             initial="hidden"
                             whileInView="visible"
                             viewport={{once: true, amount:0.5}}
                             transition={{duration: 1}}
                             variants={{
                             hidden: {opacity:0, y:100},
                             visible: {opacity:1, y: 0},
                     }}>
                        <form 
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/el/cevawo"
                            method="POST"
                        >
                            <input 
                                type="text" 
                                className={inputStyles}
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })} 
                                />
                                {errors.name && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.name.type === "required" && "This field is required."},
                                        {errors.name.type === "maxLenght" && "Max lenght is 100 character."}

                                    </p>
                                )}

                                <input 
                                type="text" 
                                className={inputStyles}
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} 
                                />
                                {errors.email && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.email.type === "required" && "This field is required."},
                                        {errors.email.type === "pattern" && "Invalid email address."}

                                    </p>
                                )}

                                <textarea 
                                // type="text" 
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })} 
                                />
                                {errors.message && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.message.type === "required" && "This field is required."},
                                        {errors.message.type === "maxLenght" && "Max lenght is 2000 character."}

                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                                        SUBMIT
                                </button>
                        </form>
                        </motion.div>
                        <motion.div
                            className="relative mt-16 basis-2/5 md:mt-0"
                             initial="hidden"
                             whileInView="visible"
                             viewport={{once: true, amount:0.5}}
                             transition={{delay:0.2, duration: 1}}
                             variants={{
                             hidden: {opacity:0, y:100},
                             visible: {opacity:1, y: 0},
                     }}>
                            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                                <img
                                src={ContactUsPageGraphic}
                                alt="contact-us-page-graphic "
                                className="w-full"
                                />
                            </div>
                        </motion.div>
                     </div>
        </motion.div>
    </section>
  )
}

export default ContactUs