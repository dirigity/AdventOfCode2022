function main(input) {
    let parsed_instructions = input.split("\n").flatMap((inst) => {
        if (inst.split(" ")[0] == "noop") {
            return [{ inst: "noop", d_x: 0 }]
        } else if (inst.split(" ")[0] == "addx") {
            return [{ inst: "addx1", d_x: 0 }, { inst: "addx2", d_x: Number.parseInt(inst.split(" ")[1]) }]
        }
        return [{ inst: "error", d_x: 0 }]

    })

    // console.log(parsed_instructions)


    let x = 1;

    const height = 6;
    const width = 40;

    let screen = Array.from({ length: height }, () => new Array(width).fill(" "));

    let t = 0;
    for (const inst of parsed_instructions) {
        let screen_x = t % width;
        let screen_y = Math.floor(t / width)
        t++;

        if (Math.abs(screen_x - x) < 2) {
            screen[screen_y][screen_x] = "#"
        }

        x += inst.d_x;
    }



    console.log(screen.map(row => row.join("")).join("\n"))
}

let input = `noop
noop
addx 15
addx -10
noop
noop
addx 3
noop
noop
addx 7
addx 1
addx 4
addx -1
addx 1
addx 5
addx 1
noop
noop
addx 5
addx -1
noop
addx 3
noop
addx 3
addx -38
noop
addx 3
addx 2
addx 5
addx 2
addx 26
addx -21
addx -2
addx 5
addx 2
addx -14
addx 15
noop
addx 7
noop
addx 2
addx -22
addx 23
addx 2
addx 5
addx -40
noop
noop
addx 3
addx 2
noop
addx 24
addx -19
noop
noop
noop
addx 5
addx 5
addx 2
noop
noop
noop
noop
addx 7
noop
addx 3
noop
addx 3
addx -2
addx 2
addx 5
addx -38
noop
noop
noop
addx 5
addx 2
addx -1
addx 2
addx 30
addx -23
noop
noop
noop
noop
addx 3
addx 5
addx -11
addx 12
noop
addx 6
addx 1
noop
addx 4
addx 3
noop
addx -40
addx 4
addx 28
addx -27
addx 5
addx 2
addx 5
noop
noop
addx -2
addx 2
addx 5
addx 3
noop
addx 2
addx -25
addx 30
noop
addx 3
addx -2
addx 2
addx 5
addx -39
addx 29
addx -27
addx 5
noop
noop
noop
addx 4
noop
addx 1
addx 2
addx 5
addx 2
noop
noop
noop
noop
addx 5
addx 1
noop
addx 2
addx 5
addx -32
addx 34
noop
noop
noop
noop
`

if (false)
    input = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`

main(input)