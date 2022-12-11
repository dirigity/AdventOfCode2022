function main(input) {

    let common_mod = 1;

    let text_monkeys = input.split("\n\n");
    let monkey_list = text_monkeys.map((text_mokey) => {

        let monkey_lines = text_mokey.split("\n")
        const mod = Number.parseInt(monkey_lines[3].split("divisible by ")[1])
        common_mod *= mod;
        return {
            monkey_name: monkey_lines[0].split(":")[0],
            data: {
                inspected_total: 0,
                items: monkey_lines[1].split(":")[1].split(",").map((e) => {

                    return e.trim()
                }).map((e) => Number.parseInt(e)),
                inspection: (old) => {
                    let ret = -1;
                    eval("ret = " + monkey_lines[2].split(":")[1].split("=")[1])
                    // console.log(ret);
                    return ret;
                },
                next_monkey: (value) => {
                    if (value % mod == 0) {
                        return (monkey_lines[4].split("throw to ")[1]).toUpperCase();
                    } else {
                        return (monkey_lines[5].split("throw to ")[1]).toUpperCase();
                    }
                }
            }
        }

    })

    let monkeys = {}
    monkey_list.forEach(({ monkey_name, data }) => {
        monkeys[monkey_name.toUpperCase()] = data;
    });
    // console.log(monkeys)

    function turn_of(name) {

        monkeys[name].items.map((item) => {
            let new_item_value = monkeys[name].inspection(item);
            monkeys[name].inspected_total++;
            // new_item_value = Math.floor(new_item_value / 3)
            new_item_value = new_item_value % common_mod;
            let next_monkey = monkeys[name].next_monkey(new_item_value);
            // console.log(next_monkey);
            monkeys[next_monkey].items.push(new_item_value);

            return false;
        })
        monkeys[name].items = [];
    }

    const rounds = 10000;
    for (const i in Array.from({ length: rounds }, (i) => i)) {
        console.log("round:", i)
        for (const name in monkeys) {
            turn_of(name);
        }
    }

    console.log(Object.values(monkeys).map(e => e.inspected_total).sort((a, b) => b - a).slice(0, 2).reduce((mul, cur) => cur * mul, 1))

}

main(`Monkey 0:
  Starting items: 56, 56, 92, 65, 71, 61, 79
  Operation: new = old * 7
  Test: divisible by 3
    If true: throw to monkey 3
    If false: throw to monkey 7

Monkey 1:
  Starting items: 61, 85
  Operation: new = old + 5
  Test: divisible by 11
    If true: throw to monkey 6
    If false: throw to monkey 4

Monkey 2:
  Starting items: 54, 96, 82, 78, 69
  Operation: new = old * old
  Test: divisible by 7
    If true: throw to monkey 0
    If false: throw to monkey 7

Monkey 3:
  Starting items: 57, 59, 65, 95
  Operation: new = old + 4
  Test: divisible by 2
    If true: throw to monkey 5
    If false: throw to monkey 1

Monkey 4:
  Starting items: 62, 67, 80
  Operation: new = old * 17
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 6

Monkey 5:
  Starting items: 91
  Operation: new = old + 7
  Test: divisible by 5
    If true: throw to monkey 1
    If false: throw to monkey 4

Monkey 6:
  Starting items: 79, 83, 64, 52, 77, 56, 63, 92
  Operation: new = old + 6
  Test: divisible by 17
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 7:
  Starting items: 50, 97, 76, 96, 80, 56
  Operation: new = old + 3
  Test: divisible by 13
    If true: throw to monkey 3
    If false: throw to monkey 5
`)