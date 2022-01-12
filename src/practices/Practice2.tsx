export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    //[:number]で返却値型を明示している
    const total = num * 1.1;
    return total;
  };

  const onclickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onclickPractice}>練習問題2を実行</button>
    </div>
  );
};
