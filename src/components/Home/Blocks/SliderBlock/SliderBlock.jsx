import Slider from "../../../../common/Slider/Slider"
import Title from "../../../../common/Title/Title"

const SliderBlock = ({title, recipes}) => {
    return (
        <>
            <Title>{title}</Title>
            <Slider recipes={recipes}/>
        </>
    )
}

export default SliderBlock;