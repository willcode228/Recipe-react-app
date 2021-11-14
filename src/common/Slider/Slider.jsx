import styles from './Slider.module.scss';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import { Swiper } from "swiper/react";
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

const Slider = (props) => {
    return (
        <>
            <Swiper effect={'coverflow'} 
                grabCursor={true} 
                centeredSlides={true} 
                slidesPerView={'auto'} 
                coverflowEffect={{
                    rotate: 50,
                    stretch: 100,
                    depth: 100,
                    modifier: 1,
                    scale: 0.8,
                    slideShadows: false
                }} 
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }} 
                className={styles.slider}
            >

                {props.children}
            </Swiper>
        </>
    )
}

export default Slider;