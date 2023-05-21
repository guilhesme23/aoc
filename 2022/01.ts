function getCalories(data: string[]): number[] {
  const result = [0]
  data.forEach(line => {
    if (line.length === 0) {
      result.push(0)
    }

    let len = result.length
    result[len-1] += +line
  })

  return result

}
export function part1(data: string[]): void {
  const result = getCalories(data)
  console.log(Math.max(...result))
}

export function part2(data: string[]): void {
  const result = getCalories(data)
  result.sort((a,b) => b-a)
  console.log(result.slice(0,3).reduce((total, item) => total + item, 0))
}
