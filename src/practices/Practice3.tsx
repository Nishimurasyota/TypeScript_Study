/*eslint-disable @typescript-eslint/no-unused-vars */

export const Practice3 = () => {
  const getTotalFee = (num: string) => {
    //[:number]で返却値型を明示している
    const total = num + "AA";
    return total.toString();
  };

  const onclickPractice = () => {
    let total: string = "";
    total = getTotalFee("a");
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onclickPractice}>練習問題3を実行</button>
    </div>
  );
};
