import styles from './Slider.module.scss';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper';
import RecipeCard from '../RecipeCard/RecipeCard';

SwiperCore.use([EffectCoverflow, Pagination]);

const Slider = ({recipes}) => {
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

                {
                    recipes.map(recipe => (
                        <SwiperSlide className={styles.slide} key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Slider;