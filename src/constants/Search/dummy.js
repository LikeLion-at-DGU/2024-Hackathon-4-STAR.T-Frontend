import BaseBall from "@/assets/baseball.svg";
import Soccer from "@/assets/soccer.svg";
import BasketBall from "@/assets/basketball.svg";
import Kpop from "@/assets/k-pop.svg";
import Animation from "@/assets/animation.svg";
import Pop from "@/assets/pop.svg";
import Rapper from "@/assets/rapper.svg";
import actor from "@/assets/actor.svg";
import movieChar from "@/assets/movieChar.svg";

export const categories = [
  {
    title: "스포츠",
    sectionId: "1",
    items: [
      { src: Soccer, category: "축구", subCategoryId: "1", sectionId: "1" },
      { src: BaseBall, category: "야구", subCategoryId: "2", sectionId: "1" },
      { src: BasketBall, category: "농구", subCategoryId: "3", sectionId: "1" },
    ],
  },
  {
    title: "가수",
    sectionId: "2",
    items: [
      { src: Kpop, category: "K-pop", subCategoryId: "1", sectionId: "2" },
      { src: Pop, category: "Pop", subCategoryId: "2", sectionId: "2" },
      { src: Rapper, category: "래퍼", subCategoryId: "3", sectionId: "2" },
    ],
  },
  {
    title: "Entertainment",
    sectionId: "3",
    items: [
      { src: actor, category: "배우", subCategoryId: "1", sectionId: "3" },
      {
        src: Animation,
        category: "애니메이션",
        subCategoryId: "2",
        sectionId: "3",
      },
      {
        src: movieChar,
        category: "영화캐릭터",
        subCategoryId: "3",
        sectionId: "3",
      },
    ],
  },
];
