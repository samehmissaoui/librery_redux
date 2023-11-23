import { useState } from 'react'
import {addPen, removePen} from '../js/toolkitSlicer'
import { connect } from 'react-redux'
const Pen =(props)=>{
    console.log('jjjjj',props);
    const [number,setNumber]= useState(1)
    return (
        <>
        <h1> Number of pen - {props.Pen} </h1>
        <input type ="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>props.addPen(number)}> buy  {number} pen </button>
        <button onClick={()=>props.removePen(number)}> sell  {number} pen </button>
        </>
    )
}
 const mapStateToProps = (state)=>{
console.log(state);
    return {
        Pen:state.pen.penCount
    }

 }
const mapDispatchToProps = (dispatch)=>{
    return {
       addPen : (number)=>dispatch(addPen(number)),
       removePen : (number)=>dispatch(removePen(number)),
       
    }
 }
export default connect(mapStateToProps,mapDispatchToProps) (Pen);
