import React from "react";
import { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();

    console.log(book)
    return (
        <>
            {
                book.map((item, etag) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    // let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    
                    if(thumbnail != undefined  )
                    {
                        return (
                            <div key={item.etag} >
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <p className="categories">{item.volumeInfo.categories}</p>
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p>Published: {item.volumeInfo.publishedDate}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;