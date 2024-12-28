import Button from "./Button"
import leftarrow from '../assets/left-arrow-png.png'
import rightarrow from '../assets/right-arrow.jpeg'
import Basket from "./Basket"
function CounterApp() {
    let firstCount = 0;
    let secondCount = 10;
    const leftCount = () =>{
        if(secondCount>0){
            firstCount = ++firstCount 
            secondCount = --secondCount 
            console.log(firstCount,secondCount)
        }
    }
    const rightCount = () =>{
        if(firstCount>0){
            firstCount = --firstCount
            secondCount = ++secondCount
            console.log(firstCount,secondCount)
        }
    }
    

  return (
    <div className="d-flex justify-content-between p-5">
        <Basket count={firstCount} basketName='Basket 1'/>
        <Button imgUrl={leftarrow}  ClassName='left' handleClick={leftCount} title={"left-arrow"}/>
        <Button imgUrl={rightarrow} ClassName='right' handleClick={rightCount} title={"right-arrow"}/>
        <Basket count={secondCount} basketName='Basket 2'/>
    </div>
  )
}

export default CounterApp