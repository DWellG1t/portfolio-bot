/* eslint-disable react/jsx-key */
import styles from "./sectionTech.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';

import { FaReact } from "react-icons/fa";

export default function SectionTech() {
    return (
        <section className={styles.sectionTech + " _section"}>
            <Swiper
                className={styles.sectionTech__slider}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={6}
                centeredSlides={false}
                allowTouchMove={false}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: true,

                }}
                loop={true}
            >	
                {
                [
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>, 
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                <FaReact/>,
                ].map((el, index) => {
                    return (
                        <SwiperSlide key={++index} className={styles.sectionTech__slide}>
                            {el}
                        </SwiperSlide>
                    )
                })}
	        </Swiper>
        </section>
    )
}