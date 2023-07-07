import product_1 from '../images/image-product-1.jpg';
import product_2 from '../images/image-product-2.jpg';
import product_3 from '../images/image-product-3.jpg';
import product_4 from '../images/image-product-4.jpg';
import product_1_small from '../images/image-product-1-thumbnail.jpg';
import product_2_small from '../images/image-product-2-thumbnail.jpg';
import product_3_small from '../images/image-product-3-thumbnail.jpg';
import product_4_small from '../images/image-product-4-thumbnail.jpg';
import { useState} from 'react';
import style from '../index.module.scss';

export default function ShoppingSlider({openSlider}){
    const picArray = [product_1,product_2,product_3,product_4]
    const [currentPic, setCurrentPic] = useState(picArray[0]);

    const [activeIndex,setActiveIndex] = useState(0)

   
   
    const selectProduct = (index)=> {
     setActiveIndex(index)
     setCurrentPic(picArray[index])
    }
  

    

    return (<div className={style.slider}>
           <div onClick={openSlider} className={style.currentPic}> 
                <img src={currentPic} alt="pic" />
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
           
    </div>)
}

