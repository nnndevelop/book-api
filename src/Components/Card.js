import React from "react";
import { useState } from "react";
import Modal from "./Modal";


const Card = ({ books }) => {
    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();

    // console.log(book)
    return (
        <>
            {
                books.map((book, i) => {

                        return (
                            <div key={i} >
                            <div className="card" onClick={()=>{setShow(true);setItem(book)}}>
                                <img src={ book.volumeInfo.imageLinks.thumbnail} alt="" />
                                <div className="bottom">
                                    <p className="categories">{book.volumeInfo.categories}</p>
                                    <h3 className="title">{book.volumeInfo.title}</h3>
                                    <p>Published: {book.volumeInfo.publishedDate}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                        )
                
                    
                })
            }

        </>
    )
}
export default Card;