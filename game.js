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

const trapDoor = 't'

const floor = 'f'

const dirt = 'd'

const tree = '+'

const stone = 's'

const portal = 'e'

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
CC............CC`],
  [trapDoor, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC....CC....CCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC....CC....CCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC....CC....CCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC....CC....CCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCC....CC....CCC
CCCCCCCCCCCCCCCC`],
  [floor, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [dirt, bitmap`
CCCCCCCCDCCCCCCC
CCCCCCCCCCCCCCCC
CCCDCCCCCCCCCCCC
CC1CCCCCCCDCCCC1
CCCCCCC1CCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCC1CCCCC
CCCDCCCCCCCCCCCC
CCCCCCCDCCCCCDCC
CCCCC1CCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCDCCCC1CCCCCC
C1CCCCCCCCCCCC1C
CCCCCCCCCCCDCCCC
CCCCCCCCCCCCCCCC`],
  [tree, bitmap`
.......DDDD.....
.....DDDDDDD....
...DDDDDDDDDDD..
...DDDDDDDDDDD..
...DDDDDDDDDDD..
...DDDDCCCDDDD..
....DDDCCCDDD...
......DCCC......
.......CCCC.....
.......CCC......
......CCCC......
.......CCC......
.......CCCC.....
......CCCC......
.......CCCC.....
......CCCCCC....`],
  [stone, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [portal, bitmap`
..000000000000..
.00000000000000.
00HH00000000H000
0000HH000000HH00
00000HH000000H00
000000HH00000H00
0000000H0000HH00
0000000HH00HH000
0000HHHHHHHH0000
000HH000H0000000
00HH0000HH000000
00HH00000H000000
000H00000HH0H000
000HH00000HH0000
.000HH000000000.
..000000000000..`]
)

setSolids([player, wall, tree])

let level = 0
const levels = [
  map`
wwwwwwww
wffffffw
wf-ffffw
wffffffw
wffffffw
wffffffw
wpfffffw
wwwwwwww`,
  map`
wwwwwwwwwwwwwwww
wwwwwwwwwwfffffw
wffffffffwffwfww
wfwwwwwwfwffwfww
wfww_wfwfwftwfww
wfwwpwfwfwwwwfww
wfwwfwffffffffww
wfwwfwwwwwwwwfww
wfwwffffffwfwfww
wfwwwwwwwfwfwfww
wfwdddddwfwfwfww
wfwwwwwwwfwfwfww
wfffffffffwfffww
wwwwwwwwwwffffww
weffffffffffwwww
wwwwwwwwwwwwwwww`,
  map`
sssssssssssss
............p
sssssssssssss`,
  map`
dddddd+ddddddddd+dddd
ddd+dddd+dddd+ddddddd
ddddddddddddddd+ddddd
ddddd+dddddd+dddddddp
ddddddddd+ddddddddddd
dd+dddddddd+dddd+dddd
+dddddd+dddddd+dddd+d`,
  map`
..........s................
s........ss................
ss.......s.................
.s......ss..ssss....s.....s
..s....ss..s...sss..s.....s
..ss..ss..s.....ss..s.....s
...ssss..s......s...s.....s
.....s...s......s...s.....s
.....s..s......s....s.....s
.....s..s......s....s.....s
....s..........s....s.....s
....s...s.....s.....s....s.
...ss...s.....s.....sss.ss.
...s....ssssss.........ss..
..ss.......................
..s........................
.ss........................
.s.........................
...........................
...........................
...........................`,
  map`
.eee.......................
.e..ee...eeeeeeeeee..ee....
.e...ee......e.......e.ee..
.e....e......e......e...ee.
.e.....e.....e......e....ee
e......ee....e......e.....e
e.......e...e......e......e
e.......e...e......e......e
e.......e...e.............e
e.......e...e......e.......
e.......e....e.....e......e
e.......e....e.....e......e
e......ee....e.....e......e
e......e.....e.....e.....e.
e......e....ee.....e....ee.
e......e.e..e......eee.ee..
e.....e..eeeeeeee....eee...
.e.eee..........eee........
.eee.......................
...........................
...........................`,
  map`
...........................
...........................
..dddddddd..wwwwwwwww......
.....+........._...........
.....+........._...........
.....+........._...........
.....+........__...........
......+.......__...........
......+.......__...........
......+......._............
......+......._............
......+......._............
.....++......._............
.....+........_............
.....+........_............
.....+........_............
.....+........_............
..ssssssss...._............
.............._............
...........................
...........................`
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
  if (level == 0) {
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
37.5: E4~37.5 + B5/37.5`, 2)
      setTimeout(() => {
        level += 1
        setMap(levels[level])
      }, 2400)
    }
  } else if (level == 1) {
    if ((getFirst(player).x == getFirst(trapDoor).x) && (getFirst(player).y == getFirst(trapDoor).y)) {
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
  37.5: E4~37.5 + B5/37.5`, 2)
      setTimeout(() => {
        level += 1
        setMap(levels[level])
      }, 2400)
    } else if ((getFirst(player).x == getFirst(portal).x) && (getFirst(player).y == getFirst(portal).y)) {
      playTune(tune`
500: D5^500 + C5^500 + G4-500,
500: G5^500 + F5^500 + E5^500 + C5^500 + G4-500,
500: F4~500 + E4~500 + D4~500 + A5^500 + B4^500,
500: G4~500 + D4~500 + G5^500 + A5^500 + B4^500,
500: A4^500 + D4~500 + E5^500 + F5^500 + G4-500,
500: B4~500 + D4~500 + C5^500 + D5^500 + A4^500,
500: B4^500 + D4~500 + A4^500 + F4/500 + F5/500,
500: B4^500 + D4~500 + G4^500 + F4/500 + F5/500,
500: C5~500 + C4~500 + A4^500 + G4^500 + F4-500,
500: F5~500 + C5~500 + C4~500 + A4^500 + F4-500,
500: C5~500 + C4~500 + G4^500 + F4-500 + E4/500,
500: B5~500 + D5~500 + C4~500 + G4^500 + F4-500,
500: B5~500 + D5~500 + C4~500 + G4-500 + E4/500,
500: D5~500 + C4~500 + G4^500 + A4-500 + D4/500,
500: D5~500 + D4/500 + G4^500 + B4-500 + F5/500,
500: D5~500 + D4/500 + A4^500 + B4-500 + E5/500,
500: B5~500 + D5~500 + D4~500 + A4^500 + C5-500,
500: E5~500 + E4~500 + A4^500 + D5-500 + D4/500,
500: E5-500 + E4~500 + B4^500 + D4/500 + D5/500,
500: B5~500 + E5~500 + E4~500 + B4^500 + F5-500,
500: F5~500 + F4~500 + C5/500 + G5-500,
500: F4~500 + C5^500 + A5-500 + B4/500,
500: F4~500 + D5^500 + A5-500 + B4/500,
500: G4~500 + D5^500 + A5-500 + A4/500,
500: G4~500 + D5^500 + A5-500 + A4/500,
500: G4~500 + D5^500 + A5-500 + A4/500,
500: A4/500 + G5-500,
500: A4~500 + G5-500 + G4/500,
500: F5-500 + G4/500,
500: D5-500 + E5-500,
500: F4-500 + G4-500 + A4-500 + B4-500 + C5-500,
500`, 1)
      setMap(levels[4])
      setTimeout(() => { setMap(levels[5]) }, 5333)
      setTimeout(() => { setMap(levels[6]) }, 10666)
    }
  } else if (level == 2) {
    if ((getFirst(player).x == 0) && (getFirst(player).y == 1)) {
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
  37.5: E4~37.5 + B5/37.5`, 1)
      level += 1
      setMap(levels[level])
    }
  }
  playTune(tune`
95.84664536741214: C4/95.84664536741214 + D4~95.84664536741214 + E4^95.84664536741214 + F4-95.84664536741214,
95.84664536741214: D4/95.84664536741214 + E4~95.84664536741214 + F4^95.84664536741214 + G4-95.84664536741214,
95.84664536741214: C4/95.84664536741214 + D4~95.84664536741214 + E4^95.84664536741214 + F4-95.84664536741214,
2779.552715654952`)
})
