import product_1 from '../images/image-product-1.jpg';
import product_2 from '../images/image-product-2.jpg';
import product_3 from '../images/image-product-3.jpg';
import product_4 from '../images/image-product-4.jpg';
import product_1_small from '../images/image-product-1-thumbnail.jpg';
import product_2_small from '../images/image-product-2-thumbnail.jpg';
import product_3_small from '../images/image-product-3-thumbnail.jpg';
import product_4_small from '../images/image-product-4-thumbnail.jpg';
import { useState ,useRef} from 'react';
import style from '../index.module.scss';
import {AiOutlineLeft , AiOutlineRight , AiOutlineClose} from 'react-icons/ai';


export default function DetailedSlider({closeSlider}){
    const picArray = [product_1,product_2,product_3,product_4]
    const [currentPic, setCurrentPic] = useState(picArray[0]);
    const [activeIndex,setActiveIndex] = useState(0)
    let picIndex = useRef(0)
    const forwardButton = ()=>{
        if(picIndex.current < 3){
            picIndex.current++;
        } else {
            picIndex.current = 0;
        }
        setCurrentPic(picArray[picIndex.current]);
        
        setActiveIndex(picIndex.current)
    }
    const backButton = ()=>{
        if(picIndex.current > 0){
            picIndex.current--;
        } else {
            picIndex.current = 3;
        }
        setCurrentPic(picArray[picIndex.current]);
        setActiveIndex(picIndex.current)
    }
    
   
   
    const selectProduct = (index)=> {
     setActiveIndex(index)
     setCurrentPic(picArray[index])
    }

return(
    <div className={style.detailedSlider}>
        <div>
            <div className={style.currentPic}> 
                    <img src={currentPic} alt="pic" />
                    <div onClick={closeSlider} className={style.closeBtn}><AiOutlineClose/></div>
                    <div onClick={backButton} className={style.back}><AiOutlineLeft/></div>
                    <div onClick={forwardButton} className={style.forward}><AiOutlineRight/></div>
            </div>
            <div className={style.pickablePic}>
                <div  onClick={()=>selectProduct(0)} className={style.imgContainer}>
                        <img  src={product_1_small}  alt="pic" />
                        <div style={{opacity:activeIndex === 0 ? 0.7: 0 }} id="imgDiv0" className={style.img}></div>
                    </div>
                    <div onClick={()=>selectProduct(1)} className={style.imgContainer}>
                        <img  src={product_2_small}  alt="pic" />
                        <div style={{opacity:activeIndex === 1 ? 0.7: 0 }}  id="imgDiv1" className={style.img}></div>
                    </div>
                    <div onClick={()=>selectProduct(2)} className={style.imgContainer}>
                        <img  src={product_3_small}  alt="pic" />
                        <div style={{opacity:activeIndex === 2 ? 0.7: 0 }}  id="imgDiv2" className={style.img}></div>
                    </div>
                    <div onClick={()=>selectProduct(3)} className={style.imgContainer}>
                        <img  src={product_4_small}  alt="pic" />
                        <div style={{opacity:activeIndex === 3 ? 0.7: 0 }}  id="imgDiv3" className={style.img}></div>
                    </div>
            </div>
        </div>
    </div>
)

}