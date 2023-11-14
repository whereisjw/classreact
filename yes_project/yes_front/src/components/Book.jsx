import React from "react";
import BookAvata from "./BookAvata";
import BookContent from "./BookContent";
import BookBuy from "./BookBuy";
import BookList from "./BookList";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function Book({filename}){
const [bookList, setBookList] = useState([]);
 

useEffect(()=>{
axios.get(`http://127.0.0.1:8080/${filename}`)
.then(result=>setBookList(result.data))
.catch(err=>console.log(err))
}, []);

  return(
    <BookList>
      {bookList.map((book,i)=>
        <div key={i} className="book">
          <BookAvata image={book.image}/>
          <BookContent 
              top_tag={book.top_tag}
              kind={book.kind}
              title={book.title}
              comment={book.comment}
              author = {book.author}
              company = {book.company}
              pdate = {book.pdate}
              price = {book.price}
              point = {book.point}
              sale_index = {book.sale_index}
              review = {book.review}
              de_date = {book.de_date}
              goods = {book.goods}
          />
          <BookBuy />
        </div>
      )}      
    </BookList>
  );
}