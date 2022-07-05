import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./Loader";


const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("relevance");
  const [ isLoading, setIsLoading]= useState(false)

  useEffect(() => {
    const fetchingData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=all&orderBy=${sort}&key=AIzaSyA2_uuiBekok0qln-jZmm3qTUYXIs9C6qo&maxResults=40`
        )
        .then((res) => {
          setData(res.data.items);
        })
        .catch((err) => console.error(err));
         setIsLoading(true)
    };
    fetchingData();
  }, [sort]);

  const searchBook = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sort}&key=AIzaSyA2_uuiBekok0qln-jZmm3qTUYXIs9C6qo&maxResults=40`
      )
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.error(err));
  };
  

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Google Books Api</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <form onSubmit={searchBook}>
              <input
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={onsubmit}
              />
              <button onClick={onsubmit}>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <label htmlFor="sort">Sorting by </label>
          <select defaultValue={sort} onChange={(e) => {
            e.preventDefault()
            setSort(e.target.value)
            }}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>

      <div className="container">
        { isLoading ?  <Card book={data} /> : <Loader /> }
        </div>
    </>
  );
};
export default Main;
