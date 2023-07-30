import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>주문 가능한 음식의 리스트 중에서 가장 좋아하는 음식을 선택해보세요!</p>
      <p>
        {" "}
        우리의 숙련된 요리사가 시간에 딱 맞게! 높은 품질의 재료를 사용해서
        요리를 만들어드립니다!
      </p>
    </section>
  );
};

export default MealsSummary;
