// 세자리마다 콤마 찍어주는 함수
export const numberWithComma = (number: number) => {
  return new Intl.NumberFormat().format(number);
};
