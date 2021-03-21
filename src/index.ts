export default function declineWord(
  n: number,
  mainPart: string,
  endingForOne?: string,
  endingForTwo?: string,
  endingForFive?: string,
) {
  n = Math.abs(n % 100);
  const n1 = Math.floor(n / 10);
  const n2 = n % 10;

  if(!(mainPart || endingForOne || '').match(/[a-z]/i)) {
    endingForOne = endingForOne || '';
    endingForTwo = endingForTwo || '';
    endingForFive = endingForFive || '';
  } else {
    endingForOne = endingForOne != null ? endingForOne : '';
    endingForTwo = endingForTwo != null ? endingForTwo : 's';
    endingForFive = endingForFive != null ? endingForFive : endingForTwo;
  }

  if(n1 !== 1) {
    if(n2 === 1) {
      return `${mainPart}${endingForOne}`;
    }
    if(2 <= n2 && n2 <= 4) {
      return `${mainPart}${endingForTwo}`;
    }
  }
  return `${mainPart}${endingForFive}`;
}

export const wrap = (body: string, ...args: (string | undefined)[]) => (n: number) => declineWord(n, body, ...args);
export const declineWrapper = wrap;
