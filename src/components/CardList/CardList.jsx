import React from 'react'
import style from "./CardList.module.css";
import Pagination from "../Pagination/Pagination";

const CardList = () => {
  return (
    <div className={style.container}>
        <pagination />
    </div>
  )
}

export default CardList
