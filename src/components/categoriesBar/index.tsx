import { ButtonIcon, Category, Container, Slider, SliderButton, SliderContent } from "./style";

import { useContext, useEffect, useRef, useState } from "react";

import ButtonNext from '../../assets/button-next.png';
import ButtonBack from '../../assets/button-back.png';
import { InterfaceContext } from "../../contexts/interfaceContext";

interface IProps {
    categoriesList?: {name: string, id: string}[]
}


function CategoriesBar({ categoriesList }: IProps) {
    const { openMenu } = useContext(InterfaceContext);
    
    const sliderContentRef = useRef(undefined as any);
    
    const [sliderLimit, setSliderLimit] = useState(undefined as any);

    const [sliderPosition, setSliderPosition] = useState(0);

    useEffect(() => {
        if (!sliderContentRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            setSliderLimit(sliderContentRef.current.scrollWidth - sliderContentRef.current.clientWidth);
        });

        resizeObserver.observe(sliderContentRef.current);

        return () => resizeObserver.disconnect(); // clean up
    }, []);
    
    const handleBackButton = () => {
        sliderContentRef.current.scrollLeft -= 100;
    };
    
    const handleNextButton = () => {
        sliderContentRef.current.scrollLeft += 100;
    };
    
    const handleCategory = () => {
        
    };

    return (
        <Container $openMenu={openMenu}>
            <Slider>
                {
                    sliderPosition > 0 ?
                        <SliderButton onClick={() => handleBackButton()}>
                            <ButtonIcon src={ButtonBack} />
                        </SliderButton>
                    :
                        undefined
                } 

                <SliderContent ref={sliderContentRef} onScroll={() => setSliderPosition(sliderContentRef.current.scrollLeft)} >
                    {
                        categoriesList ?
                            categoriesList.map((item, index) => (
                                <Category key={index}>
                                    {item.name}
                                </Category>
                            ))
                        :
                            [...Array(30)].map((item, index) => (
                                <Category key={index}>
                                    example
                                </Category>
                            ))
                    }
                </SliderContent>

                {
                    sliderPosition >= sliderLimit ?
                        ''
                    :
                        <SliderButton onClick={() => handleNextButton()}>
                            <ButtonIcon src={ButtonNext} />
                        </SliderButton>
                }

            </Slider>
        </Container>
    )
}

export default CategoriesBar;
