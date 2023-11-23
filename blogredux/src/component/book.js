import { useState } from 'react'
import {addBook,sellBook} from '../js/action/action'
import { connect } from 'react-redux'
const Book =(props)=>{
    const [number,setNumber]= useState(1)
    return (
        <>
        <h1> Number of books - {props.books} </h1>
        <input type ="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>props.addBook(number)}> buy  {number}book </button>
        <button onClick={()=>props.sellBook(number)}> sell  {number}book </button>

        </>
    )
}
 const mapStateToProps = (state)=>{

    return {
        books:state.book.count 
    }

 }
const mapDispatchToProps = (dispatch)=>{
    return {
       addBook : (number)=>dispatch(addBook(number)),
       sellBook : (number)=>dispatch(sellBook(number)),

    }
 }
export default connect(mapStateToProps,mapDispatchToProps) (Book);
