import fs from 'fs';

interface Challenge {
  part1: (data: string[]) => void
  part2: (data: string[]) => void
}

async function main() {
  const args = process.argv
  if (args.length < 3) {
    console.log("Missing challenge path")
    process.exit(1)
  }

  const challengePath = args[2]
  console.log("Challenge: ", challengePath)
  const challenge: Challenge = await import(`${__dirname}/${challengePath}.ts`)

  const input = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/)
  console.log('Part One:')
  challenge.part1(input)
  console.log('Part Two:')
  challenge.part2(input)
}

main()
