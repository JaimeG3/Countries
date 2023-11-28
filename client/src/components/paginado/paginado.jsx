import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const Paginado = ({currentPage,totalPage,setCurrentPage }) => {
   
    const nextHandler = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <div>

        <button  onClick={prevHandler} disabled={currentPage === 0}>Prev</button>
        <span style={{ color: 'white' }}> pagina: {currentPage + 1} de {totalPage}</span>
        <button  onClick={nextHandler} disabled={currentPage === totalPage - 1}>Next</button>
    </div>
    )
}

export default Paginado