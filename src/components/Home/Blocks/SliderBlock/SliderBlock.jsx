import Slider from "../../../../common/Slider/Slider";
import Title from "../../../../common/Title/Title";
import { SwiperSlide } from 'swiper/react';
import RecipeCard from '../../../../common/RecipeCard/RecipeCard';
import styles from '../../../../common/Slider/Slider.module.scss';

const SliderBlock = ({title, recipes}) => {
    return (
        <>
            <Title>{title}</Title>
            <Slider>
                {
                    recipes.map((recipe, index) => (
                        <SwiperSlide className={styles.slide} key={recipe.id}>
                            <RecipeCard recipe={recipe} index={index}/>
                        </SwiperSlide>
                    ))
                }
            </Slider>
        </>
    )
}

export default SliderBlock;