import { styled } from "styled-components";

export const Header = styled.div`
  position: relative;
  width: 100%;
`;
export const Bannerimage = styled.img`
  display: block;
  width: 100%;
  height: 282px;
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  position: relative;
`;
export const BannerTitle = styled.div`
  position: absolute;
  bottom: 70px;
  left: 10px;
  z-index: 2;
  font-size: 1.8rem;
  color: white;
  font-weight: 600;
`;

export const descriptionContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 90%;
  align-items: flex-start;
`;
