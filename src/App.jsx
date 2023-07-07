import Navbar from "./components/Navbar";
import Shopping from "./components/Shopping";
import { useState } from "react";
import DetailedSlider from "./components/DetailedSlider";
import style from './index.module.scss';

export default function App (){
    const [amount,setAmount] = useState(0);
    const [isProductVisible , SetIsProductVisible] = useState(false)
    const [currentAmount,setCurrentAmount] = useState(0)
    const [isCartVisible,setIsCartVisible] = useState(false)
    const [isDetailedOpen, setIsDetailedOpen] = useState(false)
    const IncreaseAmount = ()=> {
        setAmount(amount+1);
    }
    const DecreaseAmount = ()=> {
        if(amount > 0){
            setAmount(amount-1);
        } else{
            setAmount(0)
        }
    }
    const handleAddToCart = ()=>{
        SetIsProductVisible(true)
        setCurrentAmount(currentAmount+amount)
        setAmount(0);
        setIsCartVisible(true);

    }
    const handleDeleteFromCart = ()=>{
        setCurrentAmount(0)
        setIsCartVisible(false)
        SetIsProductVisible(false)
    }
    const handleCartVisible = ()=> {
        setIsCartVisible(!isCartVisible)
    }
    const openDetailedSlider = ()=>{
        setIsDetailedOpen(true)
    }
    const closeDetailedSlider =()=>{
        setIsDetailedOpen(false)
    }

return (
    <div className={style.app}>
    {isDetailedOpen ? <DetailedSlider closeSlider={closeDetailedSlider}/> : null}
    <Navbar isCartOpen={handleCartVisible} currentAmount={currentAmount}/>
    <Shopping openSlider={openDetailedSlider} isCartVisible={isCartVisible} deleteCart={handleDeleteFromCart} isVisible={isProductVisible} addToCart={handleAddToCart} increase={IncreaseAmount} decrease={DecreaseAmount} currentAmount={currentAmount} amount={amount}/>
    
    </div>
)

}