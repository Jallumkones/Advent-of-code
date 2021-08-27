const puzzleThreeInput = ['.#......#..####.....#..#.......',
'#.#...#...#..#.#...#.#...##.##.',
'#.#....#..........#...##.....##',
'#.#.#.....##......#.#.......###',
'..#..###....#.#....#.#.#..#....',
'.......#.#....##..##...#...#...',
'..#..#..#..###.......#.....#.#.',
'.#.......#...##...##.##......##',
'#.#.##..##.#..#....#..###..#.#.',
'#.....#.#.........#.....##.#.#.',
'..#.#....##..#...#...##........',
'......#....#..##.#.#......###..',
'.......#.......#......##...#...',
'.##.....#.......#...###.....##.',
'.#...#.##..##.#..##....#.......',
'..#......##...#..#...#.#.##.###',
'.##.##.....##....#..#......#.#.',
'.#.....#..###..#.##.#.....##.#.',
'......##..........#..........#.',
'.##....#.....#..##.#..#.#..###.',
'..##.......#....#...##...#..#..',
'.##...#.....#.###.#.#..#...#.#.',
'.....##.#.##..##...#...........',
'..#..###.##.#.#.###...###..#.#.',
'.#........#..#.#........#.#...#',
'....##.......#....#.#.##.#.....',
'....##........######..###..#.#.',
'#.#.#............#.......#..#..',
'...##...#.##.....#.#..#......#.',
'......#.##.#....##..#.#..###...',
'##.....#.#....#....#.##.#.###..',
'#..#..#..##.#..##.##.##.#.##...',
'.###.####..#..#........#.....##',
'.......##..#.......#...........',
'.##...#............#.#.##...#..',
'....##.....#...##..#..#.#..###.',
'...#.....#####.#..#...##....##.',
'#.....#.#.#....##.......##.#.#.',
'......#.#..#.##.#######......#.',
'#.##...##....#..###.#.......#..',
'.....##...#....#...#....##.##.#',
'....###......#...###..#......##',
'..#...##..##.######..#.#......#',
'......##....#....##..#......##.',
'.#...#..##..#.###.#......#....#',
'##....##..#..####.#.....#...#..',
'.#.......#...#.......##......#.',
'......#...#...#........#.......',
'.#........#.###...#..####.#..#.',
'##...#.#............#.....###..',
'.....###.#.##...........###..#.',
'.#.#...#.....#.#.##..##...####.',
'..##.......#..#.##.#....#.....#',
'.#..#.#..####.....###.#.....#..',
'..#..###.....####..#.##.#.#.##.',
'.###..#.....#......#...####....',
'...#.#..#.#..#...#...#....##.##',
'..###....#.##.....#..........#.',
'###...#####......##............',
'..###.....#........##.#...#..#.',
'..##.##.#.....##........##..#.#',
'##..#.#...#.#..#..###.#....#..#',
'....#..#.#.....#..#####...#....',
'....#.........#......##.##.....',
'.#...####.##......##..##.#..#.#',
'...#...#.##..#...##..###...#...',
'###...#.....#.##.###.###..#.#..',
'..#......#.###.....#..##.#...#.',
'#.....##.########...#####....#.',
'........##..#..##..##.#........',
'....#.######....##..#..#.##..#.',
'#.......#..##..#..#.#.#..##.##.',
'...#.#..#..#.......#......###.#',
'.#.#..#.#..#.##.#.............#',
'#....#.##.#.#.....#..#.#..#....',
'...###..#...#....#.........#.#.',
'.#..#.....##..#.#..#.#.......#.',
'..#...##...#......#......####..',
'....#..#.......#.......#.#..#..',
'#...#..#...........#.#..#.....#',
'#...#.#.......#...#....###....#',
'.#..#.#.##....#......#........#',
'..#...#..##..#..#..#..#...#.#..',
'..#.#.........#....#....##.....',
'##.....##.#.#.#.........##.....',
'.##...#.##...........#...#...##',
'.##..##.#.#..........##..##....',
'#....#....#.#...#.#..#....#.#..',
'####....##.....#..##.###.......',
'#..#....#......##.#.#....#.....',
'.....#....#.###.##.........###.',
'#.......#.####..#..#..##.......',
'##.#.......#..##..#....#..#.#..',
'..###...#.#...#.....##.##.####.',
'....#...#.#....#..#..#.....#.##',
'#.....##.#.#..#.##..#..##......',
'................###..#....##...',
'..#.##.....#..........##.#...#.',
'..#.#..#.#....#.#.#..#..#..#.#.',
'#...#..##.#.#...#..#...#..#....',
'#..#.#.........#..###........#.',
'.#...#.............#..###..#..#',
'#.........#.#..#...#.#.....#..#',
'....#..#..#.#.#...#...#.....##.',
'##...###.#.####..#......#...#..',
'..#..##...#.#......#.#.......#.',
'#......###....##.#.##..........',
'#####....###..#...............#',
'##.#...####....#....#...#....#.',
'.#.......#..#.....#...#.....###',
'...#..#.#.#....##......##...#..',
'...#.....#...#.##.#..#.#....#..',
'#...###....#...#.#....#........',
'.#.......#........#...##.##.##.',
'.....#....#...##.....##...###.#',
'....#....#.#..#...##.##.##.....',
'.......#............#...#.#..#.',
'.#............#.....##.......#.',
'........#....#....##......##.##',
'.......##..#.#..#.##..###..##.#',
'#..##..##.........####.#.###...',
'#....#..#...##...#.............',
'#...#...###..........##..#..#..',
'....#...#..#.....##...#........',
'#.....#......#.#.....#...#..#..',
'..#.....#.....#....#..#........',
'..#..#.....#.#.........#..###..',
'................###..#.#....#..',
'#.....#.....#.#.#.#.#..#...#.#.',
'#....#....#.#..........#.#....#',
'....#..#......#..##.#...##.....',
'..#.#...#.####....#.#..#.#..#..',
'.........##......#.....##......',
'##.#.###.#.....#.....####.#..#.',
'.....#.....#..#....#..###.#....',
'##..#.#...#.##....#....#.......',
'.....#......#.#...##..#.#......',
'....##..#...#...##..##.#....#.#',
'............#..........##.#....',
'##..#..#.##..##..#.#....#.#.#..',
'.......#.#...#...#.#...#..#....',
'#....#.#...#...#........#..#...',
'...........#.......#...##..###.',
'.#..##......#.##.........##..#.',
'...#...#...###.#.##....##.#..#.',
'#...#..#.#.#.....##..#.......#.',
'.##..#.###.##......#.#....#.#.#',
'..#....#.......#..#..#.#.#.##..',
'#...#...###...###.........#....',
'.#.#...#.....##.#.#..#....#.##.',
'.........#.#.##.....#.#.###....',
'...#.#...#......#...####......#',
'...##..##....##......##...###..',
'###...#..#.......##.....#....#.',
'...#..#..#..###...##.##..#..#..',
'...#......#......##..#.#.##..#.',
'...#.........#....#.#....#.#...',
'##................#..#.#.....#.',
'....#.##...#..#.##...##.#.....#',
'......#..##.##..###.#..#.##.##.',
'.#.#...###.....###.....##...###',
'.##.....#.#.#..#..###..#..#..#.',
'#.......#..#..#....##.....#....',
'...#.#.##..#..#......##.##...#.',
'....##.#......#...#..#..#......',
'.####.#..#.....#..##.#...##..##',
'..#..#...#..........###..#....#',
'.#.#.##.##...#............#....',
'........##..##......#.##..#.###',
'...#.#....###......##.......#..',
'..##...#...#.#..#.....#.....#..',
'##..#...###..#..#.#.#...#...#..',
'.....#..#....##.....##.....###.',
'....##...###.#..#.#....##..#..#',
'#......#...#....#......#...##..',
'....#.##...#.#......#.#.##...#.',
'.......#.....#...#####...#.#...',
'...#.....##.#............#.....',
'...#.#........#.#.#..#.........',
'....###......#.#.#..#.####.#..#',
'#.....#.#.#.....#.#.#.....#..#.',
'..##.##......#...#.#...........',
'###..###....#.#####......###...',
'..##..............##.#.#....#.#',
'#..#...#..........#..#.#.#..###',
'##.###............#....#.#...#.',
'#.#..#.#..##.#.#....#...#......',
'#....#...#..##.....#..#.#..###.',
'..#.....#.#....#.#..#.##.#..##.',
'...##...#.#.##...#....###....#.',
'......###.####.......#..#.#.#.#',
'.#..............##........#....',
'...##.##...##....#..#.......#..',
'.....#.....#....###...#..#..#.#',
'.#.....#..#.....#......#.....##',
'#.#.##.#..#..#.....#.##..###...',
'..#......#...##.###..#.#...#..#',
'......#.....#...##......#......',
'##.#........#..........#.....#.',
'#........##.#............##....',
'...#......##...#.#.....##......',
'...##.......#....#.#..#.#.###..',
'..#....##..##.##.....###....#..',
'..#...#.#...#.....#..........#.',
'......#...#...#.#.##.#...#.#.#.',
'.#...#......#.##........#......',
'.##.##..#....#...#.#...##......',
'#..#......#.#...........#....#.',
'....##.#....#...#..#....#.#..##',
'#....##.##....#.#..##.#........',
'.##.##.#....##.....#..#....#..#',
'...#...#.....###.#.##..........',
'....#...#....##.......###......',
'#.........#......#.#.......#...',
'#..........#..##..#.#..........',
'.....#.......#..##.##....##...#',
'........................#.#....',
'#..#.........#.............#..#',
'#..#.....#.......#....#....#.#.',
'..##..##.......##....#...#.....',
'.##......#..##......#.###......',
'...#.#........#.......##..###..',
'..##...###.###......#...#....##',
'#...#...#.....###.#.#.#..#.....',
'#....#.........#..##...#...##..',
'#..###..#.#.#.##.#..#.#....#.##',
'#...#.#.....#.###.#.......#....',
'..##..#..#....#.#...........#.#',
'#.........#.#......#...##......',
'.######......#..#....#.#.#....#',
'##..#.#..####.###.........#....',
'###########.....##.##...#..#...',
'#...##.#.#....#.#....#......#..',
'...#..##..#..##..#......#....#.',
'.#....#...#....#.#..##....##...',
'#..#.#............#....#.#...#.',
'...#...#..#.#.##......#..#.#...',
'#.#...##.....#..#.##......####.',
'.#.#..##..#.....#.#..#.##......',
'#.#.##......##.....#..#.#..#...',
'#..##...#.##.#.......#.##......',
'..#.......#.#.#...##..##...#...',
'.#...#..#..#.#.........#..##...',
'#..#.......#....#.#...#.###...#',
'.......#..#.......##.#.#...#.#.',
'.#.................###.#..###..',
'..........#.#.....##..#####...#',
'#......#.#..##.#.#...#.##.#....',
'#......#.#..##.##.#...#....#...',
'....#..#......#....#....#######',
'.#...#......#....###......#.###',
'#.#....#.#...#.###......#..#..#',
'.###......#.#...#.####.#..####.',
'######.#.....###.#...#.#.....#.',
'.#.###....#..#.#.....#.....####',
'.......###.#.........#..#......',
'#...#.....##.#......####.......',
'..#.#..##.#.#...#...#..##..##..',
'.....#...##.....#...##......##.',
'##..#..#.##..#.#......#.....#..',
'##.........#.#.##.#..#.#....#.#',
'.#........###...#.........#....',
'...#..#.#..#....####...........',
'#.#....#..##..####.#...#.##....',
'.#.....#.......#..........#..##',
'...#.......#...###..#.....#..##',
'.........#.###.#..##...#.##...#',
'.#..........##..####...#..#.#.#',
'.#...##...#............##...#.#',
'...#....#.#..........#.#..#.#..',
'.#.#...##....##.#.#.#....#.....',
'....#..#.....#.#..#.#..#.##.###',
'.....#.#.....#..#......#.#.#...',
'.....#.#.#..###..#.#..###...#..',
'#.......####...#.#..#......##.#',
'....#..#..###......###.##....#.',
'##.....#.....#.............#..#',
'#..#..#...##.....##..#..#.#....',
'.....#.#.###...#...............',
'#.#.#.....#.#..#.#...#.......#.',
'..##.##............#....#..##..',
'#....##...#.....#.###...#.#....',
'#...##.#.........#...#....#....',
'##.##.#...#.#...###..#....##..#',
'....#....##..#..#.......#...##.',
'.#...#...#..#.....#..###.#..#.#',
'....#..###......#....##....#...',
'#.#.....#....##.#..#.#...###...',
'.......#............#......#...',
'.##..#.###.#.............###...',
'..##...##.#.#.#.....#........##',
'....#.###....#..#..#...#...#..#',
'.....#...#...#..#....#.....##..',
'###.#.#.....#......####.....#..',
'#.#.###............#......#....',
'..#.....#..#..#..#....#......#.',
'#...######...#....#.##...##.#.#',
'##.#.#.#..##......##.#..#.#...#',
'............#.#..#.##....#.....',
'......#............#.#...#..#.#',
'.#..##...##..#.#.#..###.....##.',
'#.###.#...........#...#....#...',
'....##.....#...##...#...###.#.#',
'.####.#.#.....#.#..#.#.##......',
'.#...##......###...#..##..#.#..',
'.#......#...#....##.....##..#..',
'..........##.....###.##.#...#.#',
'.#........##.#..............#..',
'#...###..#...#.....#....#.....#',
'...#......#..#...#...#..###.#..',
'.#...##..#........#.......#.#..',
'.#.#.##.........##.##......#..#',
'#...#.#.#...#.....#.#...#.#..#.',
'#.#..#...#...#...##..........#.',
'.#...........#....#..#.#..#.#..',
'#.......#......#..#...#........',
'.....#..#...##..###..##........',
'......#...#.....#..#.#.#....##.',
'....##..##..##....###.##.......',
'.#........##.#.#...#..#........',
'.....##...##...#......#..#...#.',
'..#.....#....###.#..##....#..#.',
'......#..#...####.#.....##.####']

module.exports = puzzleThreeInput;