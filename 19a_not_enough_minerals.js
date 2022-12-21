function parse_blueprint(description) {
    let id = Number.parseInt(description.split("Blueprint ")[1].split(": Each")[0])
    let recepies = description.split(":")[1].split(".")
    recepies.pop()

    recepies = recepies.map((des) => {
        return {
            result: des.split(" Each ")[1].split(" robot")[0],
            requirements: des.split("costs ")[1].split(" and ").map(cost => {
                return {
                    qty: Number.parseInt(cost.split(" ")[0]),
                    name: cost.split(" ")[1]
                }
            })
        }
    }).reverse().reduce((ret, elm) => {
        ret[elm.result] = elm.requirements.reduce((ret, elm) => {
            ret[elm.name] = elm.qty
            return ret;
        }, {});
        return ret
    }, {})

    return {
        id,
        recepies
    }
}

function afordeable(recepie, owned_materials) {
    // console.log("can i afford ", recepie, " with materials ", owned_materials + "?")
    for (const resource in recepie) {
        const quantity = recepie[resource];
        if (owned_materials[resource] < quantity) return false
    }

    return true;
}

function wastefull(robots, max_spendeable) {
    for (const robot in robots) { // wastefull robot creation
        if (max_spendeable[robot] && max_spendeable[robot] < robots[robot]) {
            return true
        }
    }
    return false;
}

function prunable(robots, owned_materials, blueprint, time_left, current_best) {
    if (owned_materials.geode + robots.geode * time_left + time_left * (time_left - 1) / 3 <= current_best) {
        // console.log("pruned at ", time_left, "s left")
        return true;
    }
    return false;
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const MAX_TIME = 25;


function decide_next_purchase(robots, owned_materials, blueprint, max_spendeable, time_left, current_best, history) {


    let ret = [-1, ""];

    for (const resulting_robot in blueprint) {

        if (!wastefull(robots, max_spendeable)) {
            let purchase_return = perform_purchase(copy(robots), copy(owned_materials), blueprint, max_spendeable, time_left, current_best, copy(history), resulting_robot)
            if (ret[0] < purchase_return[0]) {
                ret = purchase_return;
            }

            current_best = Math.max(current_best, ret[0])
        }

    }

    return ret;
}

function perform_purchase(robots, owned_materials, blueprint, max_spendeable, time_left, current_best, history, new_robot) {


    do {
        time_left--
        history += "tick " + (MAX_TIME - time_left) + " situation: robots " + Object.values(robots) + " materials " + Object.values(owned_materials) + "\n";

        if (time_left == 0) {
            history += "time runned out\n"
            return [owned_materials.geode, history]
        }

        for (const robot in robots) {
            if (robots[robot] != 0) {
                history += "    the " + robots[robot] + " " + robot + " robots produce " + robots[robot] + " " + robot + "\n"
                owned_materials[robot] += robots[robot];
            }
        }

        if (prunable(robots, owned_materials, blueprint, time_left, current_best)) {
            return [current_best, history]
        }

    } while (!afordeable(blueprint[new_robot], owned_materials))
    time_left--

    history += "tick " + (MAX_TIME - time_left) + " situation: robots " + Object.values(robots) + " materials " + Object.values(owned_materials) + "\n";
    history += "    starting to build " + new_robot + " robot \n"

    for (const resource in blueprint[new_robot]) {
        owned_materials[resource] -= blueprint[new_robot][resource];
    }


    if (time_left == 0) {
        history += "time runned out\n"
        return [owned_materials.geode, history]
    }

    for (const robot in robots) {
        if (robots[robot] != 0) {
            history += "    the " + robots[robot] + " " + robot + " robots produce " + robots[robot] + " " + robot + "\n"
            owned_materials[robot] += robots[robot];
        }
    }

    if (prunable(robots, owned_materials, blueprint, time_left, current_best)) {
        return [current_best, history]
    }


    robots[new_robot]++
    history += "    constructing " + new_robot + " robot \n"


    return decide_next_purchase(robots, owned_materials, blueprint, max_spendeable, time_left, current_best, history)
}

function optimal_geode_count(blueprint) {
    console.log("optimal_geode_count blueprint: ", blueprint)

    let robots = {};
    let owned_materials = {};
    let max_spendeable = {};

    for (const resulting_robot in blueprint) {
        const requirements = blueprint[resulting_robot]

        robots[resulting_robot] = resulting_robot == "ore" ? 1 : 0;
        owned_materials[resulting_robot] = 0;

        for (const resource in requirements) {
            const qty = requirements[resource]
            // console.log({ name, qty })

            if (max_spendeable[resource]) {
                max_spendeable[resource] = Math.max(max_spendeable[resource], qty);
            } else {
                max_spendeable[resource] = qty;
            }

        }
    }

    // console.log("blueprint: " + JSON.stringify(blueprint))
    // console.log("robots: " + JSON.stringify(robots))
    // console.log("materials: " + JSON.stringify(owned_materials))
    // console.log("max_spendeable: " + JSON.stringify(max_spendeable))

    let optimal = decide_next_purchase(robots, owned_materials, blueprint, max_spendeable, MAX_TIME, 0, "");

    console.log("optimal: ", optimal)

    return optimal

}

function main(input) {
    let blueprints = input.split("\n").map(parse_blueprint).reduce((ret, { id, recepies }) => {
        ret[id] = recepies;
        return ret
    }, {});

    // console.log(optimal_geode_count(blueprints[1]))
    let results = Object.values(blueprints).map(optimal_geode_count)
    // console.log(results)
    console.log(results.reduce((res, geode, id) => {
        console.log(geode[0])
        return res + (geode[0] * (id + 1))
    }, 0))
}

let input = `Blueprint 1: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 2: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 3: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 4: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 5: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 7 clay. Each geode robot costs 2 ore and 16 obsidian.
Blueprint 7: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 8: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 12: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 13: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 2 ore and 13 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 15: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 16: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 19: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 20: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 21: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 22: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 23: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.
Blueprint 24: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 16 obsidian.
Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 27: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 20 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 3 ore and 13 obsidian.
Blueprint 30: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.`

input = `Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`

main(input);