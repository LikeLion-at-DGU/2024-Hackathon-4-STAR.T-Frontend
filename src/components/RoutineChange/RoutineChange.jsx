import BACKGROUND from "../../assets/background.svg";
import { ROUTINE_CATEGORY, TITLE } from "../../constants/Category/data";
import { useNavigate } from "react-router-dom";
import { Box } from "../common/Box/Box";
import { patchroutineCategory, getRoutineCategory } from "../../apis/mypage";
const ChangeRoutine = () => {
  const navigate = useNavigate();
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);
  const [categoryStatus, setCategoryStatus] = useState([]);

  const initialCategory = async () => {
    try {
      const getData = await getRoutineCategory();
      console.log("getData:", getData);
      setCategoryStatus(getData.prefer_routine);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    initialCategory();
  }, []);

  const handleClick = (index) => {
    setCategoryStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? !status : status))
    );
  };

  const handleSubmit = async () => {
    const selectedCategories = categoryStatus
      .map((status, i) => (status ? i + 1 : null))
      .filter((id) => id !== null);
    const isSuccess = await patchroutineCategory(selectedCategories);
    if (isSuccess) {
      navigate("/mypage");
    }
  };
  useEffect(() => {
    setIsAnyCategorySelected(categoryStatus.some((status) => status));
  }, [categoryStatus]);

  return (
    <S.RoutineLayout $url={BACKGROUND}>
      <S.TitleView>
        <S.CutomTitle>{TITLE[0]}</S.CutomTitle>
      </S.TitleView>
      <S.CategoryView>
        {ROUTINE_CATEGORY.map((category, index) => (
          <Box
            onClick={() => handleClick(index)}
            $select={categoryStatus[index]}
            key={index}
          >
            {category}
          </Box>
        ))}
      </S.CategoryView>
      <S.SelectView>
        <Button
          width="50%"
          height="40px"
          $radius="15px"
          $background="rgba(196, 217, 226, 0.50)"
          onClick={handleSubmit}
          $isDisabled={!isAnyCategorySelected}
        >
          <S.CustomP color="white">확인</S.CustomP>
        </Button>
      </S.SelectView>
    </S.RoutineLayout>
  );
};
export default ChangeRoutine;
