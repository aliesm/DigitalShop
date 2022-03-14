import React from 'react';
import "./SearchBox.css";

const SearchBox = () => {


    const searchBtn = document.querySelector(".search-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const searchBox = document.querySelector(".search-box");


    const searchBoxhandl = () => {
        searchBtn.onclick = () => {
            searchBox.classList.add("active");
        }
    }

    const cancelBtnhandl = () => {
        cancelBtn.onclick = () => {
            searchBox.classList.remove("active");
        }
    }

    return (
        <div>
            <div class="search-box">
                <input type="text" placeholder="Type to search...&#x270D;" />

                <div onClick={searchBoxhandl} className="search-btn">
                    <i class="fa fa-search"></i>
                </div>

                <div onClick={cancelBtnhandl} className="cancel-btn">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;