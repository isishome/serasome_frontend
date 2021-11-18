export default {
  "en": {
    skillsData: {
      amazon: [],
      assassin: [],
      necromancer: [
        {
          id: "sm",
          name: 'Summoning',
          src: 'back.jpg',
          skills: [
            {
              id: 'skeletonmastery',
              top: '3.6',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'raiseskeleton' },
                { treeId: 'sm', skillId: 'raiseskeletalmage' },
                { treeId: 'sm', skillId: 'revive' }
              ],
              required: [{ treeId: 'sm', skillId: 'raiseskeleton' }],
              name: 'Skeleton Mastery',
              desc: ['Passive - Increases Life And Damage', 'Of Raised Skeletons And Revived Creatures'],
              level: '1',
              stat: [
                { text: 'Skeletons: Life: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: 'Skeletons: Damage: +{0}', value: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40] },
                { text: 'Magi: Life: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: 'Magi: Improved Missile Damage' },
                { text: 'Monsters: Life: +{0}%', value: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] },
                { text: 'Monsters: Damage: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] }
              ]
            },
            {
              id: 'golemmastery',
              top: '35.8',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'claygolem' }],
              name: 'Golem Mastery',
              desc: ['Enhances Speed And Life Of All Your Golems'],
              level: '12',
              stat: [
                { text: 'Life: +{0}%', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: 'Attack Rating: {0}', value: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500] },
                { text: 'Run/Walk Speed: +{0}%', value: [0, 6, 10, 14, 17, 20, 22, 23, 24, 26, 27, 28, 29, 30, 30, 31, 32, 32, 32, 33, 33] }
              ]
            },
            {
              id: 'summonresist',
              top: '68.5',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' },
                { treeId: 'sm', skillId: 'raiseskeleton' },
                { treeId: 'sm', skillId: 'raiseskeletalmage' },
                { treeId: 'sm', skillId: 'revive' }
              ],
              required: [{ treeId: 'sm', skillId: 'golemmastery' }],
              name: 'Summon Resist',
              desc: ['Passive - Increases The Resistances', 'Of All Summoned Creatures'],
              level: '24',
              stat: [
                { text: 'Resist All: +{0}%', value: [0, 28, 34, 39, 44, 47, 50, 52, 54, 56, 57, 59, 60, 61, 62, 62, 64, 64, 65, 65, 66] }
              ]
            },
            {
              id: 'claygolem',
              top: '19.8',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              name: 'Clay Golem',
              desc: ['Creates A Golem From The Earth', 'To Fight By Your Side'],
              level: '6',
              add: [
                { text: 'Attack Rating: {0}', value: [60, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440] },
                { text: 'Defense: {0}', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 275, 371, 467, 563, 660, 756, 852, 948, 1045, 1141, 1237, 1333, 1430, 1526, 1622, 1718, 1815, 1911, 2007, 2103] },
                { text: 'Attack Rating: +{0}', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: 'Damage: {0}-{1}', value: [0, [3, 7], [4, 9], [5, 11], [6, 14], [7, 16], [8, 19], [9, 21], [10, 24], [11, 26], [12, 29], [13, 31], [14, 33], [15, 36], [16, 38], [17, 41], [18, 43], [19, 46], [20, 48], [21, 51], [22, 53]] },
                { text: 'Slows Enemies: {0}%', value: [0, 11, 20, 27, 33, 37, 41, 44, 46, 49, 51, 53, 54, 56, 57, 58, 60, 60, 61, 62, 63] },
                { text: 'Mana Cost: {0}', value: [0, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0], value: [25], type: ['sum'] },
                { treeId: 'sm', skillId: 'golemmastery', statIdx: [1], value: [20], type: ['sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'bloodgolem', statIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [1], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [2], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'bloodgolem',
              top: '52.3',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'irongolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'claygolem' }],
              name: 'Blood Golem',
              desc: ['Creates A Golem That Shares With You The Life', 'It Steals'],
              level: '18',
              add: [
                { text: 'Life: {0}', value: [637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120] }
              ],
              stat: [
                { text: 'Converts {0}% Damage To Life', value: [0, 86, 95, 102, 108, 112, 116, 119, 121, 124, 126, 128, 129, 131, 132, 133, 135, 135, 136, 137, 138] },
                { text: 'Damage: {0}-{1}', value: [0, [10, 27], [13, 36], [17, 45], [20, 55], [24, 64], [27, 74], [31, 83], [34, 93], [38, 102], [41, 112], [45, 121], [48, 130], [52, 140], [55, 149], [59, 159], [62, 168], [66, 178], [69, 187], [73, 197], [76, 206]] },
                { text: 'Mana Cost: {0}', value: [0, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'irongolem',
              top: '68.5',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'firegolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'bloodgolem' }],
              name: 'Iron Golem',
              desc: ['Transforms A Metallic Item Into A Golem That Gains', 'The Properties Of The Item'],
              level: '24',
              add: [
                { text: 'Life: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: 'Damage: {0}-{1}', value: [[12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33]] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] },
                { text: 'Mana Cost: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: 'Thorns Damage' },
                { text: '{0}% Damage Returned', value: [0, 150, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420] },
                { text: 'Defense: +{0}', value: [0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490, 525, 560, 595, 630, 665, 700] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [2], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Life Per Level' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: +{0}% Damage Per Level' }
              ]
            },
            {
              id: 'firegolem',
              top: '84.4',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'sm', skillId: 'claygolem' },
                { treeId: 'sm', skillId: 'bloodgolem' },
                { treeId: 'sm', skillId: 'irongolem' }
              ],
              required: [{ treeId: 'sm', skillId: 'irongolem' }],
              name: 'Fire Golem',
              desc: ['Creates A Golem That Converts The Damage', 'It Receives From Fire Into Life'],
              level: '30',
              add: [
                { text: 'Life: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: 'Attack Rating: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: 'Defense: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] }
              ],
              stat: [
                { text: 'Absorbs {0}% Fire Damage', value: [0, 36, 45, 52, 58, 62, 66, 69, 71, 74, 76, 78, 79, 81, 82, 83, 85, 85, 86, 87, 88] },
                { text: 'Fire Damage: {0}-{1}', value: [0, [52, 110], [67, 126], [82, 142], [97, 158], [112, 174], [127, 190], [142, 206], [157, 222], [173, 239], [195, 262], [211, 279], [233, 302], [249, 319], [271, 342], [287, 359], [315, 388], [338, 412], [367, 442], [390, 466], [419, 496]] },
                { text: 'Holy Fire: {0}-{1}', value: [0, [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [14, 16], [15, 17], [17, 19], [18, 20], [20, 22], [21, 23], [24, 26], [26, 28], [29, 31], [31, 33], [34, 36]] },
                { text: 'Mana Cost: {0}', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0} Attack Rating Per Level' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: +{0} Life Per Level' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: +{0} Defense Per Level' }
              ]
            },
            {
              id: 'raiseskeleton',
              top: '3.6',
              left: '72.2',
              tooltip: 'right',
              name: 'Raise Skeleton',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'This Raises A Skeleton Warrior That', 'Fights For You'],
              level: '1',
              add: [
                { text: 'Damage: {0}-{1}', value: [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [2, 4], [4, 5], [6, 7], [8, 9], [10, 11], [12, 14], [14, 16], [17, 19], [21, 23], [26, 28], [31, 33], [37, 39], [37, 39]] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 21, 21, 21, 31, 42, 52, 63, 73, 84, 94, 105, 115, 126, 136, 147, 157, 168, 178, 189, 199] },
                { text: 'Attack Rating: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119] },
                { text: 'Defense: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: '{0} Skeletons Total', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: 'Mana Cost: {0}', value: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', addIdx: [0], value: [20], type: ['rate'] },
                { treeId: 'sm', skillId: 'skeletonmastery', statIdx: [0, 1, 3], value: [8, 15, 15], type: ['sum', 'sum', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            },
            {
              id: 'raiseskeletalmage',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'raiseskeleton' }],
              name: 'Raise Skeletal Mage',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'This Raises A Skeleton Mage That', 'Fights For You'],
              level: '12',
              add: [
                { text: 'Life: {0}', value: [123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123] }
              ],
              stat: [
                { text: 'Defense: {0}', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
                { text: '{0} Skeleton Magi', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: 'Mana Cost: {0}', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', statIdx: [0], value: [8], type: ['sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            },
            {
              id: 'revive',
              top: '84.5',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'sm', skillId: 'irongolem' }, { treeId: 'sm', skillId: 'raiseskeletalmage' }],
              name: 'Revive',
              desc: ['Returns A Monster To Life', 'To Fight By Your Side'],
              level: '30',
              add: [
                { text: 'Life: +{0}%', value: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200] },
                { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: 'Duration: {0} Seconds', value: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180] },
                { text: 'Mana Cost: {0}', value: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45] }
              ],
              stat: [
                { text: 'Monsters: {0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'skeletonmastery', addIdx: [0, 1], value: [5, 10], type: ['sum', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' }
              ]
            }
          ]
        },
        {
          id: "pb",
          name: 'Poison And Bone',
          src: 'back.jpg',
          skills: [
            {
              id: 'poisondagger',
              top: '19.7',
              left: '12.9',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisonexplosion' },
                { treeId: 'pb', skillId: 'poisonnova' }
              ],
              name: 'Poison Dagger',
              desc: ['Adds Poison To Your Dagger Attacks'],
              level: '6',
              stat: [
                { text: 'Attack Rating: +{0}%', value: [0, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410] },
                { text: 'Poison Damage: {0}-{1}', value: [0, [7, 15], [13, 23], [20, 32], [30, 43], [40, 56], [53, 70], [67, 85], [82, 103], [104, 126], [129, 153], [155, 181], [185, 212], [216, 245], [250, 281], [286, 319], [325, 359], [374, 410], [426, 464], [481, 521], [540, 581]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.2, 3.5, 3.7, 4.0, 4.2, 4.5, 4.7, 5.0, 5.2, 5.5, 5.7, 6.0, 6.2, 6.5, 6.7, 7.0, 7.2, 7.5, 7.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [1], value: [20], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [1], value: [20], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'poisonexplosion',
              top: '52',
              left: '12.9',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisondagger' },
                { treeId: 'pb', skillId: 'poisonnova' }
              ],
              required: [{ treeId: 'pb', skillId: 'poisondagger' }, { treeId: 'pb', skillId: 'corpse' }],
              name: 'Poison Explosion',
              desc: ['Cast On The Corpse Of A Slain Monster', 'Toxic Gas Is Released', 'That Poisons Nearby Monsters'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
              ],
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [25, 75], [37, 97], [52, 122], [70, 150], [90, 180], [112, 212], [137, 247], [165, 285], [211, 341], [262, 402], [318, 468], [380, 540], [446, 616], [517, 697], [593, 783], [675, 875], [787, 997], [907, 1127], [1035, 1265], [1170, 1410]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'poisonnova',
              top: '84.3',
              left: '13',
              tooltip: 'left',
              affected: [
                { treeId: 'pb', skillId: 'poisondagger' },
                { treeId: 'pb', skillId: 'poisonexplosion' }
              ],
              required: [{ treeId: 'pb', skillId: 'poisonexplosion' }],
              name: 'Poison Nova',
              desc: ['Emits An Expanding Ring Of Concentrated Poison'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: 'Poison Damage: {0}-{1}', value: [0, [50, 90], [62.5, 102.5], [74.2, 115], [87.5, 127.5], [100, 140], [112.5, 152.5], [125, 165], [137.5, 177.5], [155.8, 196.7], [174.2, 215], [193.3, 234.2], [211.7, 252.5], [230.8, 271.7], [250, 290], [268.3, 309.2], [286.7, 327.5], [315, 355.8], [343.3, 384.2], [371.67, 412.5], [400, 440]] },
                { text: 'Over {0} Seconds', value: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' },
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Poison Damage Per Level' }
              ]
            },
            {
              id: 'teeth',
              top: '3.4',
              left: '42.6',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' }
              ],
              name: 'Teeth',
              desc: ['Fires A Barrage Of Summoned Barbed Teeth'],
              level: '1',
              stat: [
                { text: '{0} Teeth', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: 'Magic Damage: {0}-{1}', value: [0, [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 14], [12, 15], [13, 17], [14, 18], [15, 20], [16, 21], [17, 23], [18, 25], [20, 27], [21, 29], [23, 31]] },
                { text: 'Mana Cost: {0}', value: [0, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [0], value: [15], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'corpse',
              top: '19.7',
              left: '42.6',
              tooltip: 'middle',
              required: [{ treeId: 'pb', skillId: 'teeth' }],
              name: 'Corpse Explosion',
              desc: ['Cast On The Corpse Of A Slain Monster,', 'It Explodes, Damaging Nearby Enemies'],
              level: '6',
              add: [
                { text: 'Damage: {0}-{1}% Of Corpse Life', value: [[70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120]] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3, 3.3, 3.6, 4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.3, 6.6, 7, 7.3, 7.6, 8, 8.3, 8.6, 9] },
                { text: 'Mana Cost: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
              ]
            },
            {
              id: 'bonespear',
              top: '52',
              left: '42.6',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespirit' }
              ],
              required: [{ treeId: 'pb', skillId: 'corpse' }],
              name: 'Bone Spear',
              desc: ['Summons A Deadly Spike Of Bone To Impale Your Enemies'],
              level: '18',
              stat: [
                { text: 'Magic Damage: {0}-{1}', value: [0, [12, 18], [19, 25], [26, 32], [33, 39], [40, 46], [47, 53], [54, 60], [61, 67], [70, 76], [79, 85], [88, 94], [97, 103], [106, 112], [115, 121], [124, 130], [133, 139], [145, 152], [157, 165], [169, 178], [181, 191]] },
                { text: 'Mana Cost: {0}', value: [0, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7, 10, 10.2, 10.5, 10.7, 11, 11.2, 11.5, 11.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'bonespirit',
              top: '84.3',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonespear' }],
              name: 'Bone Spirit',
              desc: ['Releases A Spirit Of The Restless Undead That', 'Tracks Its Target Or Finds One Of Its Own'],
              level: '30',
              stat: [
                { text: 'Magic Damage: {0}-{1}', value: [0, [20, 30], [36, 47], [52, 64], [68, 81], [84, 98], [100, 115], [116, 132], [132, 149], [149, 167], [166, 185], [183, 203], [200, 221], [217, 239], [234, 257], [251, 275], [268, 293], [286, 312], [304, 331], [322, 350], [340, 369]] },
                { text: 'Mana Cost: {0}', value: [0, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [6], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
              ]
            },
            {
              id: 'bonearmor',
              top: '3.4',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'bonewall' },
                { treeId: 'pb', skillId: 'boneprison' }
              ],
              name: 'Bone Armor',
              desc: ['Creates An Orbiting Shield Of Bone', 'That Absorbs Melee Damage'],
              level: '1',
              stat: [
                { text: 'Absorbs {0} Damage', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
                { text: 'Mana Cost: {0}', value: [0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [15], type: ['sum'], text: '{n}: +{0} Damage Absorbed Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [15], type: ['sum'], text: '{n}: +{0} Damage Absorbed Per Level' }
              ]
            },
            {
              id: 'bonewall',
              top: '35.6',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' },
                { treeId: 'pb', skillId: 'bonearmor' },
                { treeId: 'pb', skillId: 'boneprison' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonearmor' }],
              name: 'Bone Wall',
              desc: ['Creates An Impassable Barrier', 'Of Bone And Debris'],
              level: '12',
              add: [
                { text: 'Duration: {0} Seconds', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] },
                { text: 'Mana Cost: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [10], type: ['rate'], text: '{n}: +{0}% Life Per Level' }
              ]
            },
            {
              id: 'boneprison',
              top: '68.3',
              left: '72',
              tooltip: 'right',
              affected: [
                { treeId: 'pb', skillId: 'teeth' },
                { treeId: 'pb', skillId: 'bonespear' },
                { treeId: 'pb', skillId: 'bonespirit' },
                { treeId: 'pb', skillId: 'bonearmor' },
                { treeId: 'pb', skillId: 'bonewall' }
              ],
              required: [{ treeId: 'pb', skillId: 'bonespear' }, { treeId: 'pb', skillId: 'bonewall' }],
              name: 'Bone Prison',
              desc: ['Creates A Barrier Of Fossilized Bone Around Your Target'],
              level: '24',
              add: [
                { text: 'Duration: {0} Seconds', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] }
              ],
              stat: [
                { text: 'Life: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] },
                { text: 'Mana Cost: {0}', value: [0, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Life Per Level' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [8], type: ['rate'], text: '{n}: +{0}% Life Per Level' }
              ]
            }
          ]
        },
        {
          id: "cs",
          name: 'Curses',
          src: 'back.jpg',
          skills: [
            {
              id: 'dimvision',
              top: '19.8',
              left: '13.2',
              tooltip: 'left',
              name: 'Dim Vision',
              desc: ['Curses A Group Of Monsters,', 'Reducing Their Vison Radius'],
              level: '6',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: 'Duration: {0} Seconds', value: [0, 1.7, 2.2, 2.7, 3.2, 3.7, 4.2, 4.7, 5.2, 5.7, 6.2, 6.7, 7.2, 7.7, 8.2, 8.7, 9.2, 9.7, 10.2, 10.7, 11.2] }
              ]
            },
            {
              id: 'confuse',
              top: '52.1',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'dimvision' }],
              name: 'Confuse',
              desc: ['Curses A Monster To Force It To Attack Random Targets'],
              level: '18',
              add: [
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] },
                { text: 'Duration: {0} Seconds', value: [0, 2.4, 3, 3.4, 4, 4.4, 5, 5.4, 6, 6.4, 7, 7.4, 8, 8.4, 9, 9.4, 10, 10.4, 11, 11.4, 12] }
              ]
            },
            {
              id: 'attract',
              top: '68.5',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'confuse' }],
              name: 'Attract',
              desc: ['Curses A Monster To Becom The', 'Target Of All Nearby Monsters', 'This Curse May Not Be Overridden By Another Curse'],
              level: '24',
              add: [
                { text: 'Radius: {0} Yards', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: 'Mana Cost: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 3, 3.8, 4.8, 5.6, 6.6, 7.4, 8.4, 9.2, 10.2, 11, 12, 12.8, 13.8, 14.6, 15.6, 16.4, 17.4, 18.2, 19.2, 20] }
              ]
            },
            {
              id: 'amplify',
              top: '3.6',
              left: '42.8',
              tooltip: 'middle',
              name: 'Amplify Damage',
              desc: ['Curses A Group Of Enemies, Increasing', 'The Non-Magic Damage They Receive'],
              level: '1',
              add: [
                { text: 'Damage Taken: +{0}%', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] },
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6] },
                { text: 'Duration: {0} Seconds', value: [0, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65] }
              ]
            },
            {
              id: 'ironmaiden',
              top: '35.8',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: 'Iron Maiden',
              desc: ['Curses A Group Of Enemies, Causing Them', 'To Damage Themselves When Damaging Others'],
              level: '12',
              add: [
                { text: 'Mana Cost: {0}', value: [4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6] }
              ],
              stat: [
                { text: '{0}% Damage Returned', value: [0, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675] },
                { text: 'Duration: {0} Seconds', value: [0, 12, 14.4, 16.8, 19.2, 21.6, 24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 55.2, 57.6] }
              ]
            },
            {
              id: 'lifetap',
              top: '52.2',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'ironmaiden' }],
              name: 'Life Tap',
              desc: ['Curses A Group Of Monsters So That', 'Damaging Them Gives The Attacker Life'],
              level: '18',
              add: [
                { text: 'Heals: {0}% Of Attack Damage', value: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
                { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: 'Duration: {0} Seconds', value: [0, 16, 18.4, 20.8, 23.2, 25.6, 28, 30.4, 32.8, 35.2, 37.6, 40, 42.4, 44.8, 47.2, 49.6, 52, 54.4, 56.8, 59.2, 61.6] }
              ]
            },
            {
              id: 'lowerresist',
              top: '84.6',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'lifetap' }, { treeId: 'cs', skillId: 'decrepify' }],
              name: 'Lower Resist',
              desc: ['Curses An Enemy To Take More Damage From All Magical Attacks', 'Lowers Resistances Of Monsters', 'Lowers Maximum Resistances Of Hostile Players'],
              level: '30',
              add: [
                { text: 'Mana Cost: {0}', value: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] }
              ],
              stat: [
                { text: 'Resist All: -{0}%', value: [0, 31, 37, 41, 44, 47, 49, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 61, 61, 62, 62] },
                { text: 'Radius: {0} Yards', value: [0, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3] },
                { text: 'Duration: {0} Seconds', value: [0, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58] }
              ]
            },
            {
              id: 'weaken',
              top: '19.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: 'Weaken',
              desc: ['Curses A Group Of Enemies,', 'Reducing The Amount Of Damage They Inflict'],
              level: '6',
              add: [
                { text: 'Enemy Damage: -{0}%', value: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33] },
                { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: 'Radius: {0} Yards', value: [0, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6] },
                { text: 'Duration: {0} Seconds', value: [0, 16.4, 18.8, 21.2, 23.6, 26, 28.4, 30.8, 33.2, 35.6, 38, 40.4, 42.8, 45.2, 47.6, 50, 52.4, 54.8, 57.2, 59.6] }
              ]
            },
            {
              id: 'terror',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'weaken' }],
              name: 'Terror',
              desc: ['Curses A Group Of Monsters,', 'Causing Them To Flee In Terror'],
              level: '12',
              add: [
                { text: 'Radius: {0} Yards', value: [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] },
                { text: 'Mana Cost: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ]
            },
            {
              id: 'decrepify',
              top: '68.5',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'terror' }],
              name: 'Decrepify',
              desc: ['Curses A Group Of Enemies To Make Them', 'Slow, Weak And Take Amplified Damage'],
              level: '24',
              add: [
                { text: 'Radius: {0} Yards', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: 'Mana Cost: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: 'Duration: {0} Seconds', value: [0, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13, 13.6, 14.2, 14.8, 15.4] }
              ]
            }
          ]
        }
      ],
      barbarian: [],
      paladin: [
        {
          id: "da",
          name: 'Defensive Auras',
          src: 'back.jpg',
          skills: [
            {
              id: 'prayer',
              top: '3.4',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'da', skillId: 'cleansing' },
                { treeId: 'da', skillId: 'meditation' },
                { treeId: 'cs', skillId: 'holybolt' }
              ],
              name: 'Prayer',
              desc: ['When Active, Aura Slowly Regenerates', 'The Life Of You And Your Party'],
              level: '1',
              stat: [
                { text: 'Heals: +{0}', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] },
                { text: 'Mana Cost: {0} Per Second', value: [0, 1, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.4, 2.5, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.1, 4.3, 4.5] }
              ]
            },
            {
              id: 'cleansing',
              top: '35.9',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'oa', skillId: 'sanctuary' }
              ],
              required: [{ treeId: 'da', skillId: 'prayer' }],
              name: 'Cleansing',
              desc: ['When Active, Aura Reduces The Length', 'Of Time You and Your Party', 'Will Remain Poisoned or Cursed'],
              level: '12',
              add: [
                { text: '{n}: +{0} Life Healed Every 2 Seconds', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: 'Duration Reduced By {0}%', value: [0, 39, 46, 51, 56, 60, 63, 65, 67, 69, 70, 72, 73, 75, 76, 76, 78, 78, 79, 79, 80] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ],
              bonus: [
                { treeId: 'da', skillId: 'prayer', addIdx: [0], value: [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21, 23]], type: ['array'] }
              ]
            },
            {
              id: 'meditation',
              top: '68.4',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'da', skillId: 'prayer' }, { treeId: 'da', skillId: 'cleansing' }],
              name: 'Meditation',
              desc: ['When Active, Aura Increases Mana Recovery', 'For You And Your Party'],
              level: '24',
              add: [
                { text: '{n}: +{0} Life Healed Every 2 Seconds', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
              ],
              stat: [
                { text: 'Mana Recovery Rate: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ],
              bonus: [
                { treeId: 'da', skillId: 'prayer', addIdx: [0], value: [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21, 23]], type: ['array'] }
              ]
            },
            {
              id: 'defiance',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'holyshield' }
              ],
              name: 'Defiance',
              desc: ['When Active, Aura Increases The Defense', 'Of You And Your Party'],
              level: '6',
              stat: [
                { text: 'Defense: +{0}%', value: [0, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'vigor',
              top: '52.2',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blessedhammer' },
                { treeId: 'cs', skillId: 'charge' }
              ],
              required: [{ treeId: 'da', skillId: 'cleansing' }, { treeId: 'da', skillId: 'defiance' }],
              name: 'Vigor',
              desc: ['When Active, Aura Increases Stamina Recovery Rate', 'Maximum Stamina', 'And Movement Speed For You And Your Party'],
              level: '18',
              stat: [
                { text: 'Run/Walk Speed: +{0}%', value: [0, 13, 18, 22, 25, 28, 30, 32, 33, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42, 42, 43] },
                { text: 'Max Stamina: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: 'Stamina Recovery Rate: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'redemption',
              top: '84.5',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'sacrifice' }
              ],
              required: [{ treeId: 'da', skillId: 'vigor' }],
              name: 'Redemption',
              desc: ['When Active, Aura Attempts to Redeem', 'The Souls Of Slain Enemies To Give', 'You Life And Mana'],
              level: '30',
              stat: [
                { text: 'Chance To Redeem Soul: {0}%', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] },
                { text: 'Life/Mana Recovered: {0}', value: [0, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120] }
              ]
            },
            {
              id: 'resistfire',
              top: '3.4',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfire' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Fire',
              desc: ['When Active, Aura Decreases Fire Damage', 'Done To You And Your Party'],
              level: '1',
              stat: [
                { text: 'Resist Fire: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'resistcold',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfreeze' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Cold',
              desc: ['When Active, Aura Decreases Cold Damage', 'Done To You And Your Party'],
              level: '6',
              stat: [
                { text: 'Resist Cold: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ]
            },
            {
              id: 'resistlightning',
              top: '35.9',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyshock' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Resist Lightning',
              desc: ['When Active, Aura Decreases Lightning Damage', 'Done To You And Your Party'],
              level: '12',
              stat: [
                { text: 'Resist Lightning: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'salvation',
              top: '84.5',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'oa', skillId: 'holyfire' },
                { treeId: 'oa', skillId: 'holyfreeze' },
                { treeId: 'oa', skillId: 'holyshock' },
                { treeId: 'cs', skillId: 'vengeance' }
              ],
              name: 'Salvation',
              desc: ['When Active, Aura Decreases Fire, Cold And Lightning', 'Damage', 'Done To You And Your Party'],
              level: '30',
              stat: [
                { text: 'Resist All: +{0}%', value: [0, 60, 68, 75, 80, 85, 88, 91, 93, 96, 97, 99, 101, 102, 103, 104, 106, 106, 107, 108, 108] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            }
          ]
        },
        {
          id: "oa",
          name: 'Offensive Auras',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'might',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'charge' }
            ],
            name: 'Might',
            desc: ['When Active, Aura Increases The Damage', 'Done By You And Your Party'],
            level: '1',
            stat: [
              { text: 'Damage: +{0}%', value: [0, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'blessedaim',
            top: '35.5',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'blessedhammer' }
            ],
            required: [{ treeId: 'oa', skillId: 'might' }],
            name: 'Blessed Aim',
            desc: ['When Active, Aura Increases The Attack Rating', 'For You and Your Party'],
            level: '12',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'concentration',
            top: '52',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'oa', skillId: 'blessedaim' }],
            name: 'Concentration',
            desc: ['When Active, Aura Increases The Damage And', 'Decreases The Chance', 'That The Attack Will Be Interrupted For You And', 'Your Party'],
            level: '18',
            add: [
              { text: 'Chance Uninterruptable: {0}%', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
            ],
            stat: [
              { text: 'Damage: +{0}%', value: [0, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'fanaticism',
            top: '84.3',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'sacrifice' }
            ],
            required: [{ treeId: 'oa', skillId: 'concentration' }],
            name: 'Fanaticism',
            desc: ['When Active, Aura Increases Damage, Attack Speed', 'And Attack Rating For You And Your Party'],
            level: '30',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135] },
              { text: 'Your Damage: +{0}%', value: [0, 50, 67, 84, 101, 118, 135, 152, 169, 186, 203, 220, 237, 254, 271, 288, 305, 322, 339, 356, 373] },
              { text: 'Party Damage: +{0}%', value: [0, 25, 33, 42, 50, 59, 67, 76, 84, 93, 101, 110, 118, 127, 135, 144, 152, 161, 169, 178, 186] },
              { text: 'Attack Speed: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: 'Radius: {0} Yards', value: [0, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6, 19.3, 20] }
            ]
          },
          {
            id: 'holyfire',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'might' }],
            name: 'Holy Fire',
            desc: ['When Active, Aura Damages Nearby Enemies', 'With Heavenly Flames', 'Adds Fire Damage To Your Attack'],
            level: '6',
            stat: [
              { text: 'Fire Damage: {0}-{1} To Your Attack', value: [0, [6, 18], [9, 21], [12, 24], [15, 27], [18, 30], [21, 33], [24, 36], [27, 39], [33, 45], [39, 51], [45, 57], [51, 63], [57, 69], [63, 75], [69, 81], [75, 87], [84, 96], [93, 105], [102, 114], [111, 123]] },
              { text: 'Fire Damage: {0}-{1}', value: [0, [1, 3], [1.5, 3.5], [2.5, 4.5], [3, 5], [4, 6], [4.5, 6.5], [5.5, 7.5], [6, 8], [7, 9], [8.5, 10.5], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 17], [16, 18], [17, 20], [18, 21]] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [0, 1], value: [18, 18], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [6, 6], type: ['rate', 'rate'], text: '{n}: +{0}% Fire Damage Per Level' }
            ]
          },
          {
            id: 'holyfreeze',
            top: '52.1',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'holyfire' }],
            name: 'Holy Freeze',
            desc: ['When Active, Aura Freezes Nearby Monsters', 'Adds Cold Damage To Your Attack'],
            level: '18',
            stat: [
              { text: 'Cold Damage: {0}-{1} To Your Attack', value: [0, [10, 15], [15, 20], [20, 25], [25, 30], [30, 35], [35, 40], [40, 45], [45, 50], [55, 60], [65, 70], [75, 80], [85, 90], [95, 100], [105, 110], [115, 120], [125, 130], [140, 145], [155, 160], [170, 175], [185, 190]] },
              { text: 'Cold Damage: {0}-{1}', value: [0, [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [28, 29], [31, 32], [34, 35], [37, 38]] },
              { text: 'Enemies Slowed {0}%', value: [0, 30, 34, 37, 40, 42, 44, 45, 46, 48, 48, 49, 50, 51, 51, 52, 53, 53, 53, 54, 54] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistcold', statIdx: [0, 1], value: [15, 15], type: ['rate', 'rate'], text: '{n}: +{0}% Cold Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [7, 7], type: ['rate', 'rate'], text: '{n}: +{0}% Cold Damage Per Level' }
            ]
          },
          {
            id: 'holyshock',
            top: '68.1',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'fistoftheheavens' }
            ],
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }],
            name: 'Holy Shock',
            desc: ['When Active, Aura Causes Pulses Of Electricity', 'To Damage Nearby Enemies', 'Adds Lightning Damage To Your Attack'],
            level: '24',
            stat: [
              { text: 'Lightning Damage: {0}-{1} To Your Attack', value: [0, [1, 60], [1, 96], [1, 132], [1, 168], [1, 204], [1, 240], [1, 276], [1, 312], [1, 360], [1, 408], [1, 456], [1, 504], [1, 552], [1, 600], [1, 648], [1, 696], [1, 756], [1, 816], [1, 876], [1, 936]] },
              { text: 'Lightning Damage: {0}-{1}', value: [0, [1, 10], [1, 16], [1, 22], [1, 28], [1, 34], [1, 40], [1, 46], [1, 52], [1, 60], [1, 68], [1, 76], [1, 84], [1, 92], [1, 100], [1, 108], [1, 116], [1, 126], [1, 136], [1, 146], [1, 156]] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistcold', statIdx: [0, 1], value: [12, 12], type: ['rate', 'rate'], text: '{n}: +{0}% Lightning Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [4, 4], type: ['rate', 'rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
            ]
          },
          {
            id: 'thorns',
            top: '19.7',
            left: '72.2',
            tooltip: 'right',
            name: 'Thorns',
            desc: ['When Active, Reflects Damage Done To You', 'Back At Your Attacker'],
            level: '6',
            stat: [
              { text: '{0}% Damage Returned', value: [0, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650, 690, 730, 770, 810, 850, 890, 930, 970, 1010] },
              { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'sanctuary',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }, { treeId: 'oa', skillId: 'thorns' }],
            name: 'Sanctuary',
            desc: ['When Active, Aura Damages The Undead', 'And Knocks Them Back'],
            level: '24',
            stat: [
              { text: 'Damage To Undead: +{0}%', value: [0, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720] },
              { text: 'Magic Damage: {0}-{1}', value: [0, [8, 16], [12, 20], [16, 24], [20, 28], [24, 32], [28, 36], [32, 40], [36, 44], [40, 49], [44, 54], [48, 59], [52, 64], [56, 69], [60, 74], [64, 79], [68, 84], [73, 90], [78, 96], [83, 102], [88, 108]] },
              { text: 'Radius: {0} Yards', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'cleansing', statIdx: [1], value: [7], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
            ]
          },
          {
            id: 'conviction',
            top: '84.5',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'sanctuary' }],
            name: 'Conviction',
            desc: ['When Active, Aura Reduces The Defenses', 'And Resistances Of Nearby Enemies'],
            level: '30',
            add: [
              { text: 'Radius: {0} Yards', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] }
            ],
            stat: [
              { text: 'Defense: -{0}%', value: [0, 49, 56, 61, 66, 70, 73, 75, 77, 79, 80, 82, 83, 85, 86, 86, 88, 88, 89, 89, 90] },
              { text: 'Resist All: -{0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] }
            ]
          }]
        },
        {
          id: "cs",
          name: 'Combat Skills',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'sacrifice',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'zeal' }
            ],
            name: 'Sacrifice',
            desc: ['Increased Accuracy And Damage', 'At The Cost Of Life'],
            level: '1',
            add: [
              { text: '{0}% Damage To Self', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
            ],
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125, 132, 139, 146, 153] },
              { text: 'Damage: +{0}%', value: [0, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 465] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'redemption', statIdx: [1], value: [15], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
              { treeId: 'oa', skillId: 'fanaticism', statIdx: [1], value: [5], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'zeal',
            top: '35.9',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'sacrifice' }],
            name: 'Zeal',
            desc: ['Allows You To Attack Multiple Adjacent Enemies', 'With A Single Attack'],
            level: '12',
            add: [
              { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: '{0} Hits', value: [0, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
              { text: 'Attack Rating: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
              { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'sacrifice', statIdx: [2], value: [12], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'vengeance',
            top: '52.2',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'zeal' }],
            name: 'Vengeance',
            desc: ['Fire, Lightning And Cold Damage Are Added', 'To Each Successful Attack'],
            level: '18',
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
              { text: 'Fire Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Cold Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Cold Length: +{0} Seconds', value: [0, 1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2, 7.8, 8.4, 9.0, 9.6, 10.2, 10.8, 11.4, 12.0, 12.6] },
              { text: 'Lightning Damage: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: 'Mana Cost: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [1], value: [10], type: ['sum'], text: '{n}: +{0}% Fire Damage Per Level' },
              { treeId: 'da', skillId: 'resistcold', statIdx: [2], value: [10], type: ['sum'], text: '{n}: +{0}% Cold Damage Per Level' },
              { treeId: 'da', skillId: 'resistlightning', statIdx: [4], value: [10], type: ['sum'], text: '{n}: +{0}% Lightning Damage Per Level' },
              { treeId: 'da', skillId: 'salvation', statIdx: [1, 2, 4], value: [2, 2, 2], type: ['sum', 'sum', 'sum'], text: '{n}: +{0}% Elemental Damage Per Level' }
            ]
          },
          {
            id: 'conversion',
            top: '68.1',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'vengeance' }],
            name: 'Conversion',
            desc: ['Converts Monsters To Fight Against', 'Other Foul Demons And Beasts'],
            level: '24',
            add: [
              { text: 'Duration: {0} Seconds', value: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16] },
              { text: 'Mana Cost: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
            ],
            stat: [
              { text: 'Change To Convert: {0}%', value: [0, 7, 13, 18, 22, 25, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42] }
            ]
          },
          {
            id: 'holybolt',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'fistoftheheavens' }
            ],
            name: 'Holy Bolt',
            desc: ['A Bolt Of Divine Energy', 'That Damages Undead Enemies'],
            level: '6',
            stat: [
              { text: 'Magic Damage: {0}-{1}', value: [0, [8, 16], [16, 24], [24, 32], [32, 40], [40, 48], [48, 56], [56, 64], [64, 72], [74, 83], [84, 94], [94, 105], [104, 116], [114, 127], [124, 138], [134, 149], [144, 160], [157, 175], [170, 190], [183, 205], [196, 220]] },
              { text: 'Heals: {0}-{1}', value: [0, [1, 6], [3, 10], [5, 14], [7, 18], [9, 22], [11, 26], [13, 30], [15, 34], [17, 38], [19, 42], [21, 46], [23, 50], [25, 54], [27, 58], [29, 62], [31, 66], [33, 70], [35, 74], [37, 78], [39, 82]] },
              { text: 'Mana Cost: {0}', value: [0, 2, 2, 2.1, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5, 2.5, 2.6, 2.6, 2.7, 2.8, 2.8, 2.9, 3, 3, 3.1, 3.1] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'blessedhammer', statIdx: [0], value: [50], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'cs', skillId: 'fistoftheheavens', statIdx: [0], value: [50], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'da', skillId: 'prayer', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Life Healed Per Level' }
            ]
          },
          {
            id: 'blessedhammer',
            top: '52.2',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'holybolt' }
            ],
            required: [{ treeId: 'cs', skillId: 'holybolt' }],
            name: 'Blessed Hammer',
            desc: ['Summons An Ethereal Hammer That', 'Spirals Outwards Damaging Enemies It Hits'],
            level: '18',
            add: [
              { text: 'Damage To Undead: +{0}%', value: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150] }
            ],
            stat: [
              { text: 'Magic Damage: {0}-{1}', value: [0, [12, 16], [20, 24], [28, 32], [36, 40], [44, 48], [52, 56], [60, 64], [68, 72], [78, 82], [88, 92], [98, 102], [108, 112], [118, 122], [128, 132], [138, 142], [148, 152], [160, 164], [172, 176], [184, 188], [196, 200]] },
              { text: 'Mana Cost: {0}', value: [0, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7] }
            ],
            bonus: [
              { treeId: 'oa', skillId: 'blessedaim', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' },
              { treeId: 'da', skillId: 'vigor', statIdx: [0], value: [14], type: ['rate'], text: '{n}: +{0}% Magic Damage Per Level' }
            ]
          },
          {
            id: 'fistoftheheavens',
            top: '84.5',
            left: '42.8',
            tooltip: 'middle',
            affected: [
              { treeId: 'cs', skillId: 'holybolt' }
            ],
            required: [{ treeId: 'cs', skillId: 'conversion' }, { treeId: 'cs', skillId: 'blessedhammer' }],
            name: 'Fist Of The Heavens',
            desc: ['Lightning Strikes Your Target As Holy Bolts', 'Seek Out Nearby Enemies'],
            level: '30',
            add: [
              { text: 'Mana Cost: {0}', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] }
            ],
            stat: [
              { text: 'Lightning Damage: {0}-{1}', value: [0, [150, 200], [165, 215], [180, 230], [195, 245], [210, 260], [225, 275], [240, 290], [255, 305], [285, 335], [315, 365], [345, 395], [375, 425], [405, 455], [435, 485], [465, 515], [495, 545], [540, 590], [585, 635], [630, 680], [675, 725]] },
              { text: 'Holy Bolt Damage: {0}-{1}', value: [0, [40, 50], [46, 56], [52, 62], [58, 68], [64, 74], [70, 80], [76, 86], [82, 92], [92, 102], [102, 112], [112, 122], [122, 132], [132, 142], [142, 152], [152, 162], [162, 172], [178, 188], [194, 204], [210, 220], [226, 236]] },
            ],
            bonus: [
              { treeId: 'cs', skillId: 'holybolt', statIdx: [1], value: [15], type: ['rate'], text: '{n}: +{0}% Holy Bolt Damage Per Level' },
              { treeId: 'oa', skillId: 'holyshock', statIdx: [0], value: [7], type: ['rate'], text: '{n}: +{0}% Lightning Damage Per Level' }
            ]
          },
          {
            id: 'smite',
            top: '3.4',
            left: '72.2',
            tooltip: 'right',
            name: 'Smite',
            desc: ['Temporarily Stun Your Enemy', 'By Bashing It With Your Shield'],
            level: '1',
            add: [
              { text: 'Mana Cost: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: 'Damage: +{0}%', value: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300] },
              { text: 'Stun Length: {0} seconds', value: [0, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4] }
            ]
          },
          {
            id: 'charge',
            top: '35.9',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'smite' }],
            name: 'Charge',
            desc: ['Charge Into Battle And Attack An Enemy'],
            level: '12',
            add: [
              { text: 'Mana Cost: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
            ],
            stat: [
              { text: 'Attack: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
              { text: 'Damage: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'vigor', statIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0}% Damage Per Level' },
              { treeId: 'oa', skillId: 'might', statIdx: [1], value: [20], type: ['sum'], text: '{n}: +{0}% Damage Per Level' }
            ]
          },
          {
            id: 'holyshield',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'blessedhammer' }, { treeId: 'cs', skillId: 'charge' }],
            name: 'Holy Shield',
            desc: ['When Active, Aura Decreases Fire, Cold And Lightning', 'Damage', 'Done To You And Your Party'],
            level: '30',
            add: [
              { text: 'Mana Cost: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
            ],
            stat: [
              { text: 'Smite Damage: {0}-{1}', value: [0, [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [17, 20], [20, 23], [23, 26], [26, 29], [29, 32], [32, 35], [35, 38], [38, 41], [41, 44], [45, 48], [49, 52], [53, 56], [57, 60]] },
              { text: 'Defense: +{0}%', value: [0, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310] },
              { text: 'Successful Blocking: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: 'Duration: {0} Seconds', value: [0, 30, 55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330, 355, 380, 405, 430, 455, 480, 505] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'defiance', statIdx: [1], value: [15], type: ['sum'], text: '{n}: +{0}% Defense Per Level' }
            ]
          }]
        }
      ],
      sorceress: [],
      druid: [],
      lang: {
        notLearned: 'You have not learned this skill yet',
        remain: 'Skill Choices Remaining',
        required: 'Required Level:',
        reached: 'Maximum Level Reached',
        first: 'First',
        next: 'Next',
        level: 'Level',
        current: 'Current Skill Level',
        bonus: 'Receives Bonuses From',
        max: 'Max',
        back: 'Back',
        info: 'Info',
        reset: 'Reset'
      },
      desc: {
        desktop: [
          { img: ['left-click.png'], text: 'Add skill points' },
          { img: ['right-click.png'], text: 'Back skill points' },
          { key: ['Shift Key'], img: ['left-click.png', 'right-click.png'], text: 'additionally or returns the maximum possible skill' }
        ],
        mobile: [
          { text: '- Max check : When skill is added/back, the maximum value is applied' },
          { text: '- Back check : Back skill points' },
          { text: '- Info check : View skill information' }
        ]
      }
    }
  }
}