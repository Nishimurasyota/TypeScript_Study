/*eslint-disable @typescript-eslint/no-unused-vars */

/**TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number
let num: number = 0;

//string
let str: string = "aaa";

//Array
let arr: Array<string> = ["a", "s", "f"];
let arr2: string[] = ["A", "A", "A"];
//string型の配列arrを定義

//tuple
let tuple: [number, string] = [0, "A"];

//any　何を入れても成立する
let any1: any = false;

//void 関数が何も返さない時に使用する
const funcA = (): void => {
  const text = "TEXT";
};

//null
let null1: null = null;

//undifined
let undifined: undefined = undefined;

//object
let obj1: object = {};
let obj2: { age: number; name: string } = { age: 28, name: "syota" };
//↑propsに関する記述でよくある形式
