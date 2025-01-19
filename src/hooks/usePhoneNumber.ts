import { useCallback } from 'react';

// 필드에 숫자가 입력될 때마다 동적으로 하이픈을 추가하는 훅입니다.
const usePhoneNumber = (setValue: (field: string, value: string) => void) => {
  const formatPhoneNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
      let value = e.target.value.replace(/\D/g, ''); // 숫자만 남기기

      // 하이픈 추가하는 정규식
      if (value.length <= 3) {
        value = value;
      } else if (value.length <= 7) {
        value = value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
      } else {
        value = value.replace(/(\d{3})(\d{3,4})(\d{1,4})/, '$1-$2-$3');
      }

      // 최대 13자리까지만 허용 (하이픈 포함)
      value = value.slice(0, 13);

      setValue(inputId, value); // 인자로 넘어온 setValue, inputId, value 실행
    },
    [setValue]
  );

  return formatPhoneNumber;
};

export default usePhoneNumber;
