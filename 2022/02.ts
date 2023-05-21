// A -> Rock / B -> Paper / C -> Scissors
// X -> Rock / Y -> Paper / Z -> Scissors
//
const typeMap: {
  [key: string]: number
} = {
  'A': 1,
  'B': 2,
  'C': 3,
  'X': 1,
  'Y': 2,
  'Z': 3,
}

function getResult(a: number, b: number): 0 | 3 | 6 {
  if (a === b) return 3;
  if ((a-b<0 && Math.abs(a-b) !== 2) || (b<a && a-b == 2)) return 6;
  return 0;
}

export function part1(data: string[]): void {
  const strategy: [number, number][] = data
    .filter(line => line.length > 0)
    .map(line => {
      const t = line.split(' ')
      return [typeMap[t[0]], typeMap[t[1]]]
    });
  const result: number = strategy.reduce((total, game) => {
    total += game[1]
    total += getResult(...game)
    return total
  }, 0)

  console.log(result)
}

export function part2(data: string[]): void {
  const strategy: [number, number][] = data
    .filter(line => line.length > 0)
    .map(line => {
      const t = line.split(' ')
      return [typeMap[t[0]], typeMap[t[1]]]
    });

  const result = strategy.reduce((total, game) => {
    let res = 1
    let control = 0;
    switch (game[1]) {
      case 1:
        control = 0
        break;
      case 2:
        control = 3
        break;
      case 3:
        control = 6
        break;
    }

    total += control
    let play = -1
    while (play != control) {
      play = getResult(game[0], res)
      if (play != control) ++res;
    }
    total += res
    return total
  }, 0)

  console.log(result)
}
