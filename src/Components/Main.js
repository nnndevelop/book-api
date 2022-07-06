import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./Loader";

const Main = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest&key=AIzaSyA2_uuiBekok0qln-jZmm3qTUYXIs9C6qo&maxResults=40`
        )
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => console.error(err));
      setIsLoading(true);
    };
    fetchingData();
  }, [sort]);

  const searchBook = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.error(err));
  };
  console.log(books);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

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
                onChange={handleSearch}
                onKeyPress={onsubmit}
              />
              <button onClick={onsubmit}>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <select defaultValue="Sort" onChange={handleSort}>
            <option disabled value="Sort">
              Sort
            </option>
            <option value="Relevance">relevance</option>
            <option value="Newest">newest</option>
          </select>
        </div>
      </div>

      <div className="container">
        {isLoading ? <Card books={sortedBooks} /> : <Loader />}
      </div>
    </>
  );
};
export default Main;
