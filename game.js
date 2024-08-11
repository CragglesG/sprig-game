/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: The Knight
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

const wall = "w"

const ladderTop = "-"

const ladderBottom = "_"

setLegend(
  [player, bitmap`
................
................
................
................
................
.....11111......
.....15151..L...
......111...L...
......131...L...
.....1111111LL..
.....1111...L...
.....1111.......
......111.......
......1.1.......
......1.1.......
.....11.11......`],
  [wall, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111991111LLL
LLL1111991111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLL1111111111LLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ladderTop, bitmap`
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC`],
  [ladderBottom, bitmap`
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC
CCCCCCCCCCCCCCCC
CC............CC`]
)

setSolids([player, wall])

let level = 0
const levels = [
  map`
wwwwwwww
w......w
w.-....w
w......w
w......w
w......w
wp.....w
wwwwwwww`,
  map`
wwwwwwwwwwwwwwww
w..............w
w..............w
w..............w
w..._..........w
w...p..........w
w..............w
w..............w
w..............w
w..............w
w..............w
w..............w
w..............w
w..............w
w..............w
wwwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [player]: []
})

onInput("w", () => {
  getFirst(player).y -= 1
})

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

afterInput(() => {
  if ((getFirst(player).x == getFirst(ladderTop).x) && (getFirst(player).y == getFirst(ladderTop).y)) {
    playTune(tune`
37.5: C4~37.5 + B5^37.5,
37.5: D4~37.5 + B5^37.5,
37.5: E4~37.5 + B5^37.5,
37.5: F4~37.5 + B5^37.5,
37.5: G4~37.5 + B5^37.5,
37.5: A4~37.5 + B5^37.5,
37.5: B4~37.5 + B5^37.5,
37.5: C5~37.5 + B5^37.5,
37.5: D5~37.5 + B5^37.5,
37.5: E5~37.5 + B5^37.5,
37.5: F5~37.5 + B5^37.5,
37.5: G5~37.5 + B5^37.5,
37.5: A5~37.5 + B5^37.5,
37.5: B5~37.5,
37.5: B5^37.5,
37.5: B5^37.5,
37.5: B5^37.5,
37.5: B5^37.5,
37.5: B5/37.5,
37.5: B5/37.5,
37.5: B5/37.5,
37.5: A5~37.5 + B5/37.5,
37.5: G5~37.5 + B5/37.5,
37.5: F5~37.5 + B5/37.5,
37.5: E5~37.5 + B5/37.5,
37.5: D5~37.5 + B5/37.5,
37.5: C5~37.5 + B5/37.5,
37.5: B4~37.5 + B5/37.5,
37.5: A4~37.5 + B5/37.5,
37.5: G4~37.5 + B5/37.5,
37.5: F4~37.5 + B5/37.5,
37.5: E4~37.5 + B5/37.5`, 3)
    level +=1
  }
  playTune(tune`
95.84664536741214: C4/95.84664536741214 + D4~95.84664536741214 + E4^95.84664536741214 + F4-95.84664536741214,
95.84664536741214: D4/95.84664536741214 + E4~95.84664536741214 + F4^95.84664536741214 + G4-95.84664536741214,
95.84664536741214: C4/95.84664536741214 + D4~95.84664536741214 + E4^95.84664536741214 + F4-95.84664536741214,
2779.552715654952`)
})
