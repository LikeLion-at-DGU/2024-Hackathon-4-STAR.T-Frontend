import * as S from "./styled";
//서브카테고리페이지 헤더
const SearchCategoryBox = ({
  src,
  category,
  onClick,
  subCategoryId,
  sectionId,
}) => {
  return (
    <S.Container src={src} onClick={() => onClick(sectionId, subCategoryId)}>
      <div>{category}</div>
      <svg
        className="Icon"
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.55354 2.18449L13.7965 9.44049C13.8617 9.50279 13.9135 9.57779 13.9486 9.66086C13.9836 9.74393 14.0013 9.83331 14.0005 9.92349C14.0009 10.0157 13.9831 10.107 13.9481 10.1923C13.9131 10.2776 13.8616 10.3552 13.7965 10.4205C11.1765 12.9765 8.65154 15.4435 6.22154 17.8215C6.09654 17.9385 5.59654 18.2295 5.21054 17.7975C4.82454 17.3645 5.05854 16.9875 5.21054 16.8315L12.2785 9.92349L5.53154 3.16449C5.28554 2.82515 5.30554 2.51215 5.59154 2.22549C5.87821 1.93882 6.19887 1.92449 6.55354 2.18449Z"
          fill="#2A2A2A"
        />
      </svg>
    </S.Container>
  );
};

export default SearchCategoryBox;
