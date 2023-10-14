import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefits from "./Benefits";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ex, a tincidunt elit."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Consectetur adipiscing elit. Aliquam tempor interdum ex, a tincidunt elit."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Express and pro Trainers",
        description: "Consectetur adipiscing elit. Aliquam tempor interdum ex, a tincidunt elit.Lorem ipsum dolor sit amet, c"
    },
];

const container = {
    hidden:{},
    visible:{
        transition: {
            staggerChildren: 0.2
        }
    },

}


type Props = {

    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefit"
        className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount:0.5}}
                     transition={{ duration: 1}}
                     variants={{
                     hidden: {opacity:0, x:-100},
                     visible: {opacity:1, x: 0}
                     }}
                    className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We Provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goal with ease. we provide true care into each and every menber.
                    </p>
                </motion.div>

                {/* BENEFITS */}

                <motion.div
                 className="md:flex items-center justify-between gap-8 mt-5"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once: true, amount: 1}}
                 variants={container}
                 
                 >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefits
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description= {benefit.description}
                            setSelectedPage={setSelectedPage}
                        /> 
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                        {/* GRAPHIC */}
                        <img src={BenefitPageGraphic} 
                            alt="benefits-page-graphic"
                            className="mx-auto"
                        />

                        {/* DESCRIPTION */}
                        <div>
                            {/* TITLE */}

                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{once: true, amount:0.5}}
                                        transition={{ duration: 1}}
                                        variants={{
                                        hidden: {opacity:0, x:100},
                                        visible: {opacity:1, x: 0}
                                        }}
                                        className="">
                                        <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "} 
                                        <span className="text-primary-500">FIT</span> </HText>
                                    </motion.div>
                                </div>
                            </div>

                            {/* DESCRIPTION */}

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount:0.5}}
                                    transition={{delay:0.2, duration: 1}}
                                    variants={{
                                    hidden: {opacity:0, x:100},
                                    visible: {opacity:1, x: 0}
                                    }}
                                >
                                    <p className="my-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ex, a tincidunt elit.Aliquam tempor interdum ex, a tincidunt elit.ipsum Dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <p className="mb-5">
                                        Aliquam tempor interdum ex, a tincidunt elit.ipsum Dolor sit amet, consectetur adipiscing elit
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam tempor interdum ex, a tincidunt. 
                                    </p>
                                </motion.div>
                            {/* BUTTON */}
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <ActionButton  setSelectedPage={setSelectedPage}>
                                        Join Now
                                    </ActionButton>
                                </div>
                            </div>

                        </div>
                    </div>
            </motion.div>

    </section>
  )
}

export default Benefit