import * as S from "./styled";
import { useMoveonStarP } from "../../hooks/useStar";
import shareIcon from "../../assets/shareIcon.svg";
import ClearStarPIcon from "../../assets/ClearStarPIcon.svg";

const ClearStarP = () => {
  const { starP } = useMoveonStarP();
  const starData = starP && starP.data ? starP.data : null;
  if (!starData) {
    return <p>데이터를 불러오는 중입니다...</p>; // theme이 null인 경우 처리
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.BannerImage src={starData.photo} alt={starData.name} />
        <S.BannerTitle>
          <div>{starData.name}</div>
          <div className="profession">{starData.profession}</div>
        </S.BannerTitle>
      </S.Header>
      <S.ClearCantainr>
        <S.ClearMain>
          <div className="imgContainr">
            <img src={ClearStarPIcon} />
            <div className="textOverlay">{starData.routines_added_count}회</div>
          </div>
          <div>루틴 완료 달성!</div>
        </S.ClearMain>
        <S.shareBtn>
          <button>
            공유하기
            <img src={shareIcon} />
          </button>
        </S.shareBtn>
      </S.ClearCantainr>
    </S.Wrapper>
  );
};
export default ClearStarP;
