import * as S from "./styled";
import React, { useState } from "react";

const SearchBox = ({ onsearchResult }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onsearchResult(inputValue);
  };
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Search"
        className="SearchInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>
        <svg
          className="SearchIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1201 0.50293C9.34671 0.503081 7.5991 0.927313 6.02305 1.74023C4.447 2.55315 3.0882 3.73118 2.06002 5.17605C1.03184 6.62091 0.364097 8.2907 0.112499 10.0461C-0.139099 11.8015 0.0327432 13.5917 0.61369 15.2672C1.19464 16.9426 2.16784 18.4549 3.45211 19.6778C4.73638 20.9007 6.29446 21.7987 7.99638 22.297C9.6983 22.7952 11.4947 22.8792 13.2357 22.542C14.9767 22.2048 16.6118 21.4562 18.0046 20.3585L22.7827 25.1366C23.0295 25.3749 23.36 25.5068 23.703 25.5038C24.0461 25.5008 24.3742 25.3632 24.6168 25.1207C24.8594 24.8781 24.997 24.5499 25 24.2069C25.0029 23.8638 24.8711 23.5334 24.6327 23.2866L19.8546 18.5085C21.1473 16.8686 21.9521 14.898 22.1771 12.822C22.402 10.7461 22.038 8.64876 21.1266 6.77006C20.2153 4.89136 18.7934 3.3072 17.0237 2.19886C15.2541 1.09052 13.2081 0.50279 11.1201 0.50293ZM2.61576 11.6239C2.61576 9.36845 3.51175 7.20535 5.10661 5.61049C6.70148 4.01562 8.86458 3.11964 11.1201 3.11964C13.3755 3.11964 15.5386 4.01562 17.1335 5.61049C18.7284 7.20535 19.6244 9.36845 19.6244 11.6239C19.6244 13.8794 18.7284 16.0425 17.1335 17.6374C15.5386 19.2322 13.3755 20.1282 11.1201 20.1282C8.86458 20.1282 6.70148 19.2322 5.10661 17.6374C3.51175 16.0425 2.61576 13.8794 2.61576 11.6239Z"
            fill="#78A1B5"
            fillOpacity="0.7"
          />
        </svg>
      </button>
    </S.Container>
  );
};
export default SearchBox;
