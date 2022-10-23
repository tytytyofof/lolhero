import './skins.css'
import { useRef, useState } from 'react'

const Skins = ({champ}) => {


    const [skinsImg, setSkins] = useState(champ[0].img)
    const skinsRef = useRef([])
    const carouselRef = useRef()

    // let offset = 0;

    
    
  const focusOnItem = (id) => {
    skinsRef.current.forEach(item => item.classList.remove('carousel-active'));
    skinsRef.current[id].classList.add('carousel-active')
  }


  const changeBackgroundImg = (key) => {
    setSkins(champ[key].img)

  }


//   const move = () => {

//     offset = offset + 10
//     carouselRef.current.style.top = offset + "px";
//     console.log(offset);
//   }
    

    const skinsButton = champ && champ.map((item,i) => {

     
        let active = i ? "carousel__item": "carousel__item carousel-active"
        
        return(
            <button className={active} key={i} ref={el => skinsRef.current[i] = el} onClick={() => {focusOnItem(i); changeBackgroundImg(i)}}>
                 <img className='carousel__img ' src={item.img} alt=""/>
                <span>{item.name}</span>
           </button>
        )
            
    })

    return (
        <>
            <div className="skins">
                <div className="skins__inner">
                    
                        <div className="skins__image">
                            <img className="skins__img" src={skinsImg} alt="" />
                            <div className="skins__carousel">
                                <div className="corousel__title">
                                AVAILABLE SKINS
                                </div>


                                <div className="carousel">
                                    <ul className="carousel__inner" ref={el => carouselRef.current = el}>
                                        {skinsButton}
                                    </ul>

                                </div>
                            

                            </div>
                        </div>


                        

                </div>
            </div>

        </>
    )
}

export default Skins