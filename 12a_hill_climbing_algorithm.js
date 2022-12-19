const char = (letter) => letter.charCodeAt(0)
const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
]

function can_go_from_A_to_B(x_a, y_a, x_b, y_b, map) {
    return map[y_a][x_a] + 1 >= map[y_b][x_b]
}

function inbounds(x, y, map) {
    return x >= 0 && y >= 0 && x < map[0].length && y < map.length
}

let length_map;


function calculate_pos(x, y, map) {
    let min = length_map[y][x];

    for (let [dx, dy] of dirs) {
        dx = Number.parseInt(dx)
        dy = Number.parseInt(dy)

        if (inbounds(x + dx, y + dy, map)) {
            let neighbour = length_map[y + dy][x + dx]
            if (neighbour != -1 &&
                can_go_from_A_to_B(x + dx, y + dy, x, y, map)) {

                if (min == -1) {
                    min = neighbour + 1
                } else {
                    min = Math.min(min, neighbour + 1)
                }
            }
        }
    }

    if (min != -1)
        length_map[y][x] = min;


}

function main(input) {
    let x_i = 0;
    let y_i = 0;

    

    let x_f = 0;
    let y_f = 0;

    let map = input.split("\n").map((row, y) => {

        return row.split("").map((c, x) => {
            if (c == "S") {
                x_i = x;
                y_i = y;
                return char("a");

            }
            if (c == "E") {
                x_f = x;
                y_f = y;
                return char("z");
            }

            return char(c);
        })

    })

    console.log(x_i, y_i, x_f, y_f)

    length_map = input.split("\n").map(row => new Array(row.length).fill(-1))

    length_map[y_i][x_i] = 0;

    const propagate = () => {
        for (let y in length_map) {
            y = Number.parseInt(y)
            // y = -y + length_map.length - 1
            for (let x in length_map[y]) {
                x = Number.parseInt(x)
                // x = -x + length_map[0].length - 1
                // console.log(x, y)
                calculate_pos(x, y, map)

            }
        }
    }

    let MAX = 10000;

    while (length_map[y_f][x_f] == -1) {
        if (MAX == 0) break
        MAX--

        // console.log("---")
        // console.log(length_map.map(row => row.map(p => p == -1 ? " " : "#")).map(row => row.join("")).join("\n"))
        // console.log(length_map.map(row => row.map(n => n.toString(10).padStart(3, " "))).map(row => row.join("")).join("\n"))
        // console.log(length_map.map(row => row.map(n => n.toString(36).padStart(3, " "))).map(row => row.join("")).join("\n"))
        propagate()
    }
    console.log("---")

    console.log(length_map.map(row => row.map(n => n.toString(10).padStart(3, " "))).map(row => row.join("")).join("\n"))
    // require("fs").writeFileSync("kk.csv", length_map.map(row => row.join(",")).join("\n"))

    console.log(length_map[y_f][x_f])


}


let input = `abccccccccccccccccccaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaa
abcccccccccccccccaaaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaaa
abcaaccaacccccccccaaaaaaaaaacccccccccccccccccccccaaacccccccccccccaaaaa
abcaaaaaaccccccccaaaaaaaaaaaaacccccccccccccccccccaacccccccccccccaaaaaa
abcaaaaaacccaaacccccaaaaaaaaaaaccccccccccccccccccaaaccccccccccccccccaa
abaaaaaaacccaaaaccccaaaaaacaaaacccccccccccaaaacjjjacccccccccccccccccca
abaaaaaaaaccaaaaccccaaaaaaccccccaccccccccccaajjjjjkkcccccccccccccccccc
abaaaaaaaaccaaacccccccaaaccccccaaccccccccccajjjjjjkkkaaacccaaaccaccccc
abccaaacccccccccccccccaaccccaaaaaaaacccccccjjjjoookkkkaacccaaaaaaccccc
abcccaacccccccccccccccccccccaaaaaaaaccccccjjjjoooookkkkcccccaaaaaccccc
abcccccccaacccccccccccccccccccaaaacccccccijjjoooooookkkkccaaaaaaaccccc
abccaaccaaaccccccccccccccccccaaaaacccccciijjooouuuoppkkkkkaaaaaaaacccc
abccaaaaaaaccccccccccaaaaacccaacaaaccciiiiiooouuuuupppkkklllaaaaaacccc
abccaaaaaacccccccccccaaaaacccacccaaciiiiiiqooouuuuuupppkllllllacaccccc
abcccaaaaaaaacccccccaaaaaaccccaacaiiiiiqqqqoouuuxuuupppppplllllccccccc
abccaaaaaaaaaccaaaccaaaaaaccccaaaaiiiiqqqqqqttuxxxuuuppppppplllccccccc
abccaaaaaaaacccaaaaaaaaaaacccaaaahiiiqqqttttttuxxxxuuuvvpppplllccccccc
abcaaaaaaacccaaaaaaaaaaacccccaaaahhhqqqqtttttttxxxxuuvvvvvqqlllccccccc
abcccccaaaccaaaaaaaaaccccccccacaahhhqqqttttxxxxxxxyyyyyvvvqqlllccccccc
abcccccaaaccaaaaaaaacccccccccccaahhhqqqtttxxxxxxxyyyyyyvvqqqlllccccccc
SbcccccccccccaaaaaaaaaccccccccccchhhqqqtttxxxxEzzzyyyyvvvqqqmmlccccccc
abcccccccccccaaaaaaaacccaacccccccchhhppptttxxxxyyyyyvvvvqqqmmmcccccccc
abccccccccccaaaaaaaaaaccaacccccccchhhpppptttsxxyyyyyvvvqqqmmmccccccccc
abcaacccccccaaaaaaacaaaaaaccccccccchhhppppsswwyyyyyyyvvqqmmmmccccccccc
abaaaacccccccaccaaaccaaaaaaacccccccchhhpppsswwyywwyyyvvqqmmmddcccccccc
abaaaaccccccccccaaaccaaaaaaacccccccchhhpppsswwwwwwwwwvvqqqmmdddccccccc
abaaaacccccccccaaaccaaaaaaccccccccccgggpppsswwwwrrwwwwvrqqmmdddccccccc
abccccccaaaaaccaaaacaaaaaaccccccaacccggpppssswwsrrrwwwvrrqmmdddacccccc
abccccccaaaaaccaaaacccccaaccccaaaaaacggpppssssssrrrrrrrrrnmmdddaaccccc
abcccccaaaaaaccaaaccccccccccccaaaaaacggppossssssoorrrrrrrnnmdddacccccc
abcccccaaaaaaccccccccaaaaccccccaaaaacgggoooossoooonnnrrnnnnmddaaaacccc
abccccccaaaaaccccccccaaaacccccaaaaaccgggoooooooooonnnnnnnnndddaaaacccc
abccccccaaaccccccccccaaaacccccaaaaacccgggoooooooffennnnnnnedddaaaacccc
abcccccccccccccccccccaaacccccccaacccccggggffffffffeeeeeeeeeedaaacccccc
abccccccccccccccccccaaacccccaccaaccccccggfffffffffeeeeeeeeeecaaacccccc
abccccccccccccccccccaaaacccaaaaaaaaaccccfffffffaaaaaeeeeeecccccccccccc
abccccccccaacaaccccaaaaaacaaaaaaaaaaccccccccccaaaccaaaaccccccccccccccc
abccccccccaaaaacccaaaaaaaaaaacaaaaccccccccccccaaaccccaaccccccccccaaaca
abcccccccaaaaaccccaaaaaaaaaaacaaaaacccccccccccaaaccccccccccccccccaaaaa
abcccccccaaaaaacccaaaaaaaaaacaaaaaacccccccccccaaccccccccccccccccccaaaa
abcccccccccaaaaccaaaaaaaaaaaaaaccaaccccccccccccccccccccccccccccccaaaaa`

// input = `Sabqponm
// abcryxxl
// accszExk
// acctuvwj
// abdefghi`

main(input);