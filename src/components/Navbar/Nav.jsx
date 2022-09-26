import React from "react";
import Bag from "../Bag/Bag";
import Home from "../Home/Home";
import Notebook from "../Notebook/Notebook";
import Sanitizer from "../Sanitizer/Sanitizer";
import "./Nav.css";
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { bag, book, sanitizer } from "../../Demodata";


export default function Nav() {
  const navigate = useNavigate()
  const n = () => {
    navigate('/cart')
  }
  

  ///Auto -search section//
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (bag) => {
    // the item selected
    console.log(bag)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (bag) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {bag.name}</span>
      </>
    )
  }
  return (
    <>
      <div className="d">
        <nav id="nav" class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h3>
                <b>BLR.</b>
              </h3>
            </a>
            <button
              id="btn"
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="ul" class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#Bag-section">
                    Bag
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#Sanitizer-section">Sanitizer</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Book-section">Books</a>
                </li>
                <li class="nav-item" onClick={n}>
                  <a class="nav-link" aria-current="page" href="">
                    Cart
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                {/* <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input> */}
                <div className="App">
                  <header className="App-header">
                    <div style={{ width: 400 }}>
                      <ReactSearchAutocomplete
                        items={bag}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                      />
                    </div>
                  </header>
                </div>
                <button style={{borderRadius:"10px",border:"none"}} onClick={n} class="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <br />
      <Home />
      <center>
        <div className="div" id="Bag-section"></div>
        <h3 id="bag">
          <b >Treanding</b>
          <span id="span">Bags</span>
        </h3>
      </center>
      <Bag />
      <center>
        <div className="div" id="Sanitizer-section"></div>
        <h3 id="bag">
          <b >Budget</b>
          <span id="span">Buys</span>
        </h3>
      </center>
      <Sanitizer />
      <center>
        <div className="div" id="Book-section"></div>
        <h3 id="bag">
          <b>Best of</b>
          <span id="span">BLR</span>
        </h3>
      </center>
      <Notebook /><br />

      <center><span id="designed">Designed by athull</span></center>
      {/* <Footer/> */}
    </>
  );
}
