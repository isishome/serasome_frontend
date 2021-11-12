export default {
  "en": {
    skillsData: {
      amazon: [],
      assassin: [],
      necromancer: [],
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
                { treeId: 'da', skillId: 'meditation' }
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
              required: [{ treeId: 'da', skillId: 'prayer' }],
              name: 'Cleansing',
              desc: ['When Active, Aura Reduces The Length', 'Of Time You and Your Party', 'Will Remain Poisoned or Cursed'],
              level: '12',
              influence: [
                { id: 'prayer', text: '{n}: +{0} Life Healed Every 2 Seconds', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25] }
              ],
              stat: [
                { text: 'Duration Reduced By {0}%', value: [0, 39, 46, 51, 56, 60, 63, 65, 67, 69, 70, 72, 73, 75, 76, 76, 78, 78, 79, 79, 80] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ],
              bonus: ['Prayer']
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
              influence: [
                { id: 'prayer', text: '{n}: +{0} Life Healed Every 2 Seconds', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25] }
              ],
              stat: [
                { text: 'Mana Recovery Rate: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ],
              bonus: ['Prayer']
            },
            {
              id: 'defiance',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
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
              required: [{ treeId: 'da', skillId: 'vigor' }],
              name: 'Redemption',
              desc: ['When Active, Aura Attempts to Redeem', 'The Souls Of Slain Enemies To Give', 'You Life And Mana'],
              level: '30',
              fixed: ['Radius: 10.6 Yards'],
              stat: [
                { text: 'Chance To Redeem Soul: {0}%', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] },
                { text: 'Life/Mana Recovered: {0}', value: [0, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120] }
              ]
            },
            {
              id: 'registfire',
              top: '3.4',
              left: '72.2',
              tooltip: 'right',
              name: 'Regist Fire',
              desc: ['When Active, Aura Decreases Fire Damage', 'Done To You And Your Party'],
              level: '1',
              stat: [
                { text: 'Regist Fire: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'registcold',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              name: 'Regist Cold',
              desc: ['When Active, Aura Decreases Cold Damage', 'Done To You And Your Party'],
              level: '6',
              stat: [
                { text: 'Regist Cold: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
              ]
            },
            {
              id: 'registlightning',
              top: '35.9',
              left: '72.2',
              tooltip: 'right',
              name: 'Regist Lightning',
              desc: ['When Active, Aura Decreases Lightning Damage', 'Done To You And Your Party'],
              level: '12',
              stat: [
                { text: 'Regist Lightning: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: 'Radius: {0} Yards', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            },
            {
              id: 'salvation',
              top: '84.5',
              left: '72.2',
              tooltip: 'right',
              name: 'Salvation',
              desc: ['When Active, Aura Decreases Fire, Cold And Lightning', 'Damage', 'Done To You And Your Party'],
              level: '30',
              stat: [
                { text: 'Regist All: +{0}%', value: [0, 60, 68, 75, 80, 85, 88, 91, 93, 96, 97, 99, 101, 102, 103, 104, 106, 106, 107, 108, 108] },
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
            fixed: ['Chance Uninterruptable: 20%'],
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
              { text: 'Fire Damage: {0} To Your Attack', value: ['0', '6-18', '10-22', '15-27', '19-31', '24-36', '28-40', '33-45', '37-49', '43-55', '49-61', '55-67', '61-73', '67-79', '73-85', '79-91', '85-97', '91-105', '97-112', '103-120', '109-127'] },
              { text: 'Fire Damage: {0}', value: ['0', '1-3', '1.5-3.5', '2.5-4.5', '3-5', '4-6', '4.5-6.5', '5.5-7.5', '6-8', '7-9', '8.5-10.5', '9-11', '10-12', '11-13', '12-14', '13-15', '14-16', '15-17', '16-18', '17-20', '18-21'] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: ['Resist Fire: +18% Fire Damage Per Level', 'Salvation: +6% Fire Damage Per Level']
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
              { text: 'Cold Damage: {0} To Your Attack', value: ['0', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50', '55-60', '65-70', '75-80', '85-90', '95-100', '105-110', '115-120', '125-130', '140-145', '155-160', '170-175', '185-190'] },
              { text: 'Cold Damage: {0}', value: ['0', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '11-12', '13-14', '15-16', '17-18', '19-20', '21-22', '23-24', '25-26', '28-29', '31-32', '34-35', '37-38'] },
              { text: 'Enemies Slowed {0}%', value: [0, 30, 34, 37, 40, 42, 44, 45, 46, 48, 48, 49, 50, 51, 51, 52, 53, 53, 53, 54, 54] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: ['Resist Cold: +15% Fire Damage Per Level', 'Salvation: +7% Fire Damage Per Level']
          },
          {
            id: 'holyshock',
            top: '68.1',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }],
            name: 'Holy Shock',
            desc: ['When Active, Aura Causes Pulses Of Electricity', 'To Damage Nearby Enemies', 'Adds Lightning Damage To Your Attack'],
            level: '24',
            stat: [
              { text: 'Lightning Damage: {0} To Your Attack', value: ['0', '1-60', '1-96', '1-132', '1-168', '1-204', '1-240', '1-276', '1-312', '1-360', '1-408', '1-456', '1-504', '1-552', '1-600', '1-648', '1-696', '1-756', '1-816', '1-876', '1-936'] },
              { text: 'Lightning Damage: {0}', value: ['0', '1-10', '1-16', '1-22', '1-28', '1-34', '1-40', '1-46', '1-52', '1-60', '1-68', '1-76', '1-84', '1-92', '1-100', '1-108', '1-116', '1-126', '1-136', '1-146', '1-156'] },
              { text: 'Radius: {0} Yards', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: ['Resist Lightning: +12% Fire Damage Per Level', 'Salvation: +4% Fire Damage Per Level']
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
              { text: 'Magic Damage: {0}', value: ['0', '8-16', '12-20', '16-24', '20-28', '24-32', '28-36', '32-40', '36-44', '40-49', '44-54', '48-59', '52-64', '56-69', '60-74', '64-79', '68-84', '73-90', '78-96', '83-102', '88-108'] },
              { text: 'Radius: {0} Yards', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
            ],
            bonus: ['Cleansing: +7% Magic Damage Per Level']
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
            fixed: ['Radius: 13.3 Yards'],
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
            name: 'Sacrifice',
            desc: ['Increased Accuracy And Damage', 'At The Cost Of Life'],
            level: '1',
            fixed: ['8% Damage To Self'],
            stat: [
              { text: 'Attack Rating: +{0}%', value: [0, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125, 132, 139, 146, 153] },
              { text: 'Damage: +{0}%', value: [0, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 465] }
            ],
            bonus: ['Redemption: +15% Damage Per Level', 'Fanaticism: +5% Damage Per Level']
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
            fixed: ['Mana Cost: 2'],
            stat: [
              { text: '{0} Hits', value: [0, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
              { text: 'Attack Rating: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
              { text: 'Damage: +{0}%', value: [0, 0, 0, 0, 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96] }
            ],
            bonus: ['Sacrifice: +12% Damage Per Level']
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
            bonus: ['Resist Fire: +10% Fire Damage Per Level', 'Resist Cold: +10% Cold Damage Per Level', 'Resist Lightning: +10% Lightning Damage Per Level', 'Salvation: +2% Elemental Damage Per Level']
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
            fixed: ['Duration: 16 Seconds', 'Mana Cost: 4'],
            stat: [
              { text: 'Change To Convert: {0}%', value: [0, 7, 13, 18, 22, 25, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42] }
            ]
          },
          {
            id: 'holybolt',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            name: 'Holy Bolt',
            desc: ['A Bolt Of Divine Energy', 'That Damages Undead Enemies'],
            level: '6',
            stat: [
              { text: 'Magic Damage: {0}', value: ['0', '8-16', '16-24', '24-32', '32-40', '40-48', '48-56', '56-64', '64-72', '74-83', '84-94', '94-105', '104-116', '114-127', '124-138', '134-149', '144-160', '157-175', '170-190', '183-205', '196-220'] },
              { text: 'Heals: {0}', value: ['0', '1-6', '3-10', '5-14', '7-18', '9-22', '11-26', '13-30', '15-34', '17-38', '19-42', '21-46', '23-50', '25-54', '27-58', '29-62', '31-66', '33-70', '35-74', '37-78', '39-82'] },
              { text: 'Mana Cost: {0}', value: [0, 2, 2, 2.1, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5, 2.5, 2.6, 2.6, 2.7, 2.8, 2.8, 2.9, 3, 3, 3.1, 3.1] }
            ],
            bonus: ['Blessed Hammer: +50% Magic Damage Per Level', 'Fist of the Heavens: +50% Magic Damage Per Level', 'Prayer: +15% Life Healed Per Level']
          },
          {
            id: 'blessedhammer',
            top: '52.2',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'cs', skillId: 'holybolt' }],
            name: 'Blessed Hammer',
            desc: ['Summons An Ethereal Hammer That', 'Spirals Outwards Damaging Enemies It Hits'],
            level: '18',
            fixed: ['Damage To Undead: +50%'],
            stat: [
              { text: 'Magic Damage: {0}', value: ['0', '12-16', '20-24', '28-32', '36-40', '44-48', '52-56', '60-64', '68-72', '78-82', '88-92', '98-102', '108-112', '118-122', '128-132', '138-142', '148-152', '160-164', '172-176', '184-188', '196-200'] },
              { text: 'Mana Cost: {0}', value: [0, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7] }
            ],
            bonus: ['Blessed Aim: +14% Magic Damage Per Level', 'Vigor: +14% Magic Damage Per Level']
          },
          {
            id: 'fistoftheheavens',
            top: '84.5',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'cs', skillId: 'conversion' }, { treeId: 'cs', skillId: 'blessedhammer' }],
            name: 'Fist Of The Heavens',
            desc: ['Lightning Strikes Your Target As Holy Bolts', 'Seek Out Nearby Enemies'],
            level: '30',
            fixed: ['Mana Cost: 25'],
            stat: [
              { text: 'Lightning Damage: {0}', value: ['0', '150-200', '165-215', '180-230', '195-245', '210-260', '225-275', '240-290', '255-305', '285-335', '315-365', '345-395', '375-425', '405-455', '435-485', '465-515', '495-545', '540-590', '585-635', '630-680', '675-725'] },
              { text: 'Holy Bolt Damage: {0}', value: ['0', '40-50', '46-56', '52-62', '58-68', '64-74', '70-80', '76-86', '82-92', '92-102', '102-112', '112-122', '122-132', '132-142', '142-152', '152-162', '162-172', '178-188', '194-204', '210-220', '226-236'] },
            ],
            bonus: ['Holy Bolt: +15% Holy Bolt Damage Per Level', 'Holy Shock: +7% Lightning Damage Per Level']
          },
          {
            id: 'smite',
            top: '3.4',
            left: '72.2',
            tooltip: 'right',
            name: 'Smite',
            desc: ['Temporarily Stun Your Enemy', 'By Bashing It With Your Shield'],
            level: '1',
            fixed: ['Mana Cost: 2'],
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
            fixed: ['Mana Cost: 9'],
            stat: [
              { text: 'Attack: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
              { text: 'Damage: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] }
            ],
            bonus: ['Vigor: +20% Damage Per Level', 'Might: +20% Damage Per Level']
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
            fixed: ['Mana Cost: 35'],
            stat: [
              { text: 'Smite Damage: {0}', value: ['0', '3-6', '5-8', '7-10', '9-12', '11-14', '13-16', '15-18', '17-20', '20-23', '23-26', '26-29', '29-32', '32-35', '35-38', '38-41', '41-44', '45-48', '49-52', '53-56', '57-60'] },
              { text: 'Defense: +{0}%', value: [0, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310] },
              { text: 'Successful Blocking: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: 'Duration: {0} Seconds', value: [0, 30, 55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330, 355, 380, 405, 430, 455, 480, 505] }
            ],
            bonus: ['Defiance: +15% Defense Per Level']
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
        info: 'Info'
      },
      desc: {
        desktop: [
          'Left click : Add skill points',
          'Right click : Back skill points',
          'Shift key + left/right click : additionally returns the maximum possible skill'
        ],
        mobile: [
          'Max check : When skill is added/back, the maximum value is applied',
          'Back check : Back skill points',
          'Info check : View skill information'
        ]
      }
    }
  }
}