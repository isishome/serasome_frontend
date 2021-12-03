export default {
  "ko": {
    skillsData: {
      amazon: [
        {
          id: "js",
          name: '투창과 창',
          src: 'back.jpg',
          skills: [
            {
              id: 'jab',
              top: '3.3',
              left: '13.2',
              tooltip: 'left',
              name: '찌르기',
              desc: ['투창 또는 창 유형의 무기를', '빠르게 연속으로 찔러 공격합니다.'],
              level: '1',
              add: [
                { text: '다중 적중' }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                {
                  text: '공격력: +{0}%', value: [0, -15, -12, -9, -6, -3, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42
                  ]
                },
                { text: '마나 소모: {0}', value: [0, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ]
            },
            {
              id: 'impale',
              top: '35.7',
              left: '13.2',
              tooltip: 'left',
              required: [
                { treeId: 'js', skillId: 'jab' }
              ],
              name: '꿰뚫기',
              desc: ['공격력이 증가하지만 무기가 빠르게 손상됩니다.'],
              level: '12',
              add: [
                { text: '마나 소모: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] },
                { text: '공격력: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: '내구도 감소 확률: {0}%', value: [0, 46, 42, 40, 37, 35, 34, 33, 32, 31, 30, 29, 29, 28, 27, 27, 26, 26, 26, 26, 25] }
              ]
            },
            {
              id: 'fend',
              top: '68.4',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'js', skillId: 'impale' }],
              name: '난격',
              desc: ['인접한 대상을 모두 공격합니다.'],
              level: '24',
              add: [
                { text: '마나 소모: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230] },
                { text: '공격력: +{0}%', value: [0, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] }
              ]
            },
            {
              id: 'powerstrike',
              top: '19.7',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'jab' }],
              name: '전기의 일격',
              desc: ['투창 및 창 유형의 무기에', '번개 피해를 추가합니다.'],
              level: '6',
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 32, 44, 56, 68, 80, 92, 104, 116, 128, 140, 152, 164, 176, 188, 200, 212, 224, 236, 248] },
                { text: '번개 피해: {0}-{1}', value: [0, [1, 16], [1, 34], [1, 52], [1, 70], [1, 88], [1, 106], [1, 124], [1, 142], [1, 178], [1, 214], [1, 250], [1, 286], [1, 322], [1, 358], [1, 394], [1, 430], [1, 484], [1, 538], [1, 592], [1, 646]] },
                { text: '마나 소모: {0}', value: [0, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
              ]
            },
            {
              id: 'chargedstrike',
              top: '52.2',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'powerstrike' }, { treeId: 'js', skillId: 'lightningbolt' }],
              name: '전류의 일격',
              desc: ['투창 및 창 유형의 무기에 번개 피해를 추가하고,', '적중 시 번개 줄기를 방출하게 합니다.'],
              level: '18',
              stat: [
                { text: '번개 줄기{0}개 방출', value: [0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7] },
                { text: '번개 피해: {0}-{1}', value: [0, [1, 30], [1, 42], [1, 54], [1, 66], [1, 78], [1, 90], [1, 102], [1, 114], [1, 130], [1, 146], [1, 162], [1, 178], [1, 194], [1, 210], [1, 226], [1, 242], [1, 262], [1, 282], [1, 302], [1, 322]] },
                { text: '마나 소모: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
              ]
            },
            {
              id: 'lightningstrike',
              top: '84.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningbolt' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'chargedstrike' }],
              name: '번개의 일격',
              desc: ['투창 및 창 유형의 무기에 번개 피해를 추가하고,', '적중 시 연쇄 번개를 방출하게 합니다.'],
              level: '30',
              add: [
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                {
                  text: '{0}회 적중', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
                  ]
                },
                { text: '번개 피해: {0}-{1}', value: [0, [1, 25], [1, 35], [1, 45], [1, 55], [1, 65], [1, 75], [1, 85], [1, 95], [1, 110], [1, 125], [1, 140], [1, 155], [1, 170], [1, 185], [1, 200], [1, 215], [1, 235], [1, 255], [1, 275], [1, 295]] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [1], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
              ]
            },
            {
              id: 'poisonjavelin',
              top: '19.7',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'plaguejavelin' }
              ],
              name: '맹독 투창',
              desc: ['마법으로 투창을 강화하여', '독 구름의 흔적을 남기게 합니다.'],
              level: '6',
              stat: [
                { text: '독 피해: {0}-{1}', value: [0, [25, 37], [46, 62], [75, 93], [109, 131], [150, 175], [196, 225], [250, 281], [309, 343], [412, 459], [528, 589], [656, 732], [796, 890], [950, 1062], [1115, 1248], [1293, 1448], [1484, 1662], [1750, 1953], [2034, 2264], [2337, 2595], [2659, 2946]] },
                { text: '{0}초에 걸쳐', value: [0, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46] },
                { text: '마나 소모: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'plaguejavelin', statIdx: [0], value: [12], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' }
              ]
            },
            {
              id: 'lightningbolt',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningfury' }
              ],
              required: [{ treeId: 'js', skillId: 'poisonjavelin' }],
              name: '번갯불',
              desc: ['마법으로 투창을 번개의 창으로 전환합니다.'],
              level: '12',
              add: [
                { text: '무기 공격력 {0}%', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: '{0}%의 물리 피해를 원소 피해로 전환', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }
              ],
              stat: [
                { text: '번개 피해: {0}-{1}', value: [0, [1, 40], [1, 52], [1, 64], [1, 76], [1, 88], [1, 100], [1, 112], [1, 124], [1, 142], [1, 160], [1, 178], [1, 196], [1, 214], [1, 232], [1, 250], [1, 268], [1, 296], [1, 324], [1, 352], [1, 380]] },
                { text: '마나 소모: {0}', value: [0, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7, 10, 10.2, 10.5, 10.7] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [0], value: [3], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningfury', statIdx: [0], value: [3], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
              ]
            },
            {
              id: 'plaguejavelin',
              top: '52.2',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'poisonjavelin' }
              ],
              required: [{ treeId: 'js', skillId: 'lightningbolt' }],
              name: '역병 투창',
              desc: ['마법으로 투창을 강화하여 적중 시', '점점 커지는 독 구름을 방출하게 합니다.'],
              level: '18',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192, 201] },
                { text: '독 피해: {0}-{1}', value: [0, [23, 37], [42, 58], [65, 83], [91, 111], [122, 143], [156, 179], [194, 219], [235, 262], [310, 339], [391, 422], [481, 514], [578, 612], [682, 718], [794, 833], [913, 953], [1040, 1082], [1233, 1277], [1439, 1485], [1657, 1705], [1888, 1937]] },
                { text: '{0}초에 걸쳐', value: [0, 3, 3.4, 3.8, 4.2, 4.6, 5, 5.4, 5.8, 6.2, 6.6, 7, 7.4, 7.8, 8.2, 8.6, 9, 9.4, 9.8, 10.2, 10.6] },
                { text: '마나 소모: {0}', value: [0, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 13, 13, 14, 14.5, 15, 15.5, 16, 16.5] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'poisonjavelin', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' }
              ]
            },
            {
              id: 'lightningfury',
              top: '84.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'js', skillId: 'powerstrike' },
                { treeId: 'js', skillId: 'chargedstrike' },
                { treeId: 'js', skillId: 'lightningstrike' },
                { treeId: 'js', skillId: 'lightningbolt' }
              ],
              required: [{ treeId: 'js', skillId: 'plaguejavelin' }],
              name: '번개의 격노',
              desc: ['투척한 투창을 강력한 번개의 창으로 변형하고', '적중 시 여러 개로 분열시킵니다.'],
              level: '30',
              stat: [
                { text: '투사체 {0}개 방출', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: '번개 피해: {0}-{1}', value: [0, [1, 40], [1, 60], [1, 80], [1, 100], [1, 120], [1, 140], [1, 160], [1, 180], [1, 210], [1, 240], [1, 270], [1, 300], [1, 330], [1, 360], [1, 390], [1, 420], [1, 460], [1, 500], [1, 540], [1, 580]] },
                { text: '마나 소모: {0}', value: [0, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5] }
              ],
              bonus: [
                { treeId: 'js', skillId: 'powerstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningbolt', statIdx: [1], value: [1], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'chargedstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'js', skillId: 'lightningstrike', statIdx: [1], value: [1], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
              ]
            }
          ]
        },
        {
          id: "pm",
          name: '지속 효과와 마법',
          src: 'back.jpg',
          skills: [
            {
              id: 'innersight',
              top: '3.4',
              left: '13.2',
              tooltip: 'left',
              name: '내면의 시야',
              desc: ['주위의 적에게 빛을 비춰 자신과 파티원의', '적중률을 향상시킵니다.'],
              level: '1',
              add: [
                { text: '반경: {0}미터', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] },
                { text: '마나 소모: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                {
                  text: '적 방어력: -{0}', value: [0, 40, 65, 90, 115, 140, 165, 190, 215, 260, 305, 350, 395, 440, 485, 530, 575, 635, 695, 755, 815
                  ]
                },
                { text: '지속시간: {0}초', value: [0, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84] }
              ]
            },
            {
              id: 'slowmissiles',
              top: '35.6',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'pm', skillId: 'innersight' }],
              name: '투사체 감속',
              desc: ['주위의 적에게 빛을 비추고 대상의 투사체 속도를 감소시킵니다.'],
              level: '12',
              add: [
                { text: '투사체 속도가 {0}%로 감소', value: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33] },
                { text: '반경: {0}미터', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] },
                { text: '마나 소모: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: '지속시간: {0}초', value: [0, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126] }
              ]
            },
            {
              id: 'decoy',
              top: '68.3',
              left: '13.2',
              tooltip: 'left',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'slowmissiles' }],
              name: '미끼',
              desc: ['자신의 복제물을 만들어', '적의 공격을 유도합니다.'],
              level: '24',
              stat: [
                { text: '생명력: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
                { text: '지속시간: {0}초', value: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105] },
                { text: '마나 소모: {0}', value: [0, 19, 18, 17, 16, 16, 15, 14, 13, 13, 12, 11.5, 10.7, 10, 9.2, 8.5, 7.7, 7, 6.2, 5.5, 4.7] }
              ],
            },
            {
              id: 'valkyrie',
              top: '84.1',
              left: '13.2',
              tooltip: 'left',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'pm', skillId: 'slowmissiles' }, { treeId: 'pm', skillId: 'evade' }],
              name: '발키리',
              desc: ['강력한 발키리 동료를 소환합니다.'],
              level: '30',
              stat: [
                { text: '생명력: {0}', value: [0, 440, 514, 587, 660, 734, 807, 88, 5, 95, 4, 103, 2, 110, 0, 117, 7, 125, 5, 132, 4, 140, 2, 147, 0, 154, 7, 161, 5, 169, 4, 176, 2, 184, 0] },
                { text: '명중률: +{0}%', value: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800] },
                { text: '마나 소모: {0}', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] }
              ],
              bonus: [
                { treeId: 'pm', skillId: 'decoy', statIdx: [0], value: [20], type: ['rate'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'pm', skillId: 'penetrate', statIdx: [1], value: [40], type: ['rate'], text: '{n}: 레벨당 명중률 +{0}%' },
                { treeId: 'pm', skillId: 'criticalstrike' },
                { treeId: 'pm', skillId: 'dodge' },
                { treeId: 'pm', skillId: 'avoid' },
                { treeId: 'pm', skillId: 'evade' }
              ]
            },
            {
              id: 'dodge',
              top: '19.6',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              name: '흘리기',
              desc: ['지속 효과 - 공격하거나 가만히 서 있을 때', '일정 확률로 근접 공격을 흘려 냅니다.'],
              level: '6',
              stat: [
                { text: '{0}% 확률', value: [0, 18, 24, 29, 34, 37, 40, 42, 44, 46, 47, 49, 50, 51, 52, 52, 54, 54, 55, 55, 56] }
              ]
            },
            {
              id: 'avoid',
              top: '35.6',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'dodge' }],
              name: '회피',
              desc: ['지속 효과 - 공격하거나 가만히 서 있을 때', '일정 확률로 적의 투사체를 회피합니다.'],
              level: '12',
              stat: [
                { text: '{0}% 확률', value: [0, 24, 31, 36, 41, 45, 48, 50, 52, 54, 55, 57, 58, 60, 61, 61, 63, 63, 64, 64, 65] }
              ]
            },
            {
              id: 'evade',
              top: '68.3',
              left: '42.8',
              tooltip: 'middle',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'avoid' }],
              name: '피하기',
              desc: ['지속 효과 - 걷거나 뛰고 있을 때', '일정 확률로 근접 또는 투사체 공격을 회피합니다.'],
              level: '24',
              stat: [
                { text: '{0}% 확률', value: [0, 18, 24, 29, 34, 37, 40, 42, 44, 46, 47, 49, 50, 51, 52, 52, 54, 54, 55, 55, 56] }
              ]
            },
            {
              id: 'criticalstrike',
              top: '3.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              name: '치명타',
              desc: ['지속 효과 - 공격할 때 일정 확률로 2배의 피해를 줍니다.'],
              level: '1',
              stat: [
                { text: '{0}% 확률', value: [0, 16, 25, 32, 38, 42, 46, 49, 51, 54, 56, 58, 59, 61, 62, 63, 65, 65, 66, 67, 68] }
              ]
            },
            {
              id: 'penetrate',
              top: '52',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'pm', skillId: 'valkyrie' },
              ],
              required: [{ treeId: 'pm', skillId: 'criticalstrike' }],
              name: '간파',
              desc: ['지속 효과 - 명중률이 증가합니다.'],
              level: '18',
              stat: [
                { text: '명중률: +{0}%', value: [0, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225] }
              ]
            },
            {
              id: 'pierce',
              top: '84.1',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'pm', skillId: 'penetrate' }],
              name: '관통',
              desc: ['지속 효과 - 투사체가 일정 확률로', '적중한 적을 관통합니다.'],
              level: '30',
              stat: [
                { text: '{0}% 확률', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] }
              ]
            }
          ]
        },
        {
          id: "bc",
          name: '활과 쇠뇌',
          src: 'back.jpg',
          skills: [
            {
              id: 'coldarrow',
              top: '19.8',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'icearrow' },
                { treeId: 'bc', skillId: 'freezingarrow' }
              ],
              name: '냉기 화살',
              desc: ['마법으로 화살을 강화하여', '냉기 피해와 감속 효과를 추가합니다.', '냉기 화살은 일반 피해의 절반에 해당하는 피해를 줍니다.'],
              level: '6',
              stat: [
                { text: '{0}%의 물리 피해를 원소 피해로 전환', value: [0, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41] },
                { text: '명중률: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: '냉기 피해: {0}-{1}', value: [0, [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [22, 23], [24, 25], [27, 28], [29, 30], [32, 33], [34, 35], [37, 38], [41, 42], [45, 47], [49, 51], [53, 56]] },
                { text: '냉기 지속시간: {0}초', value: [0, 4, 5.2, 6.4, 7.6, 8.8, 10, 11.2, 12.4, 13.6, 14.8, 16, 17.2, 18.4, 19.6, 20.8, 22, 23.2, 24.4, 25.6, 26.8] },
                { text: '마나 소모: {0}', value: [0, 3.5, 3.6, 3.7, 3.8, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.1, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'icearrow', statIdx: [2], value: [12], type: ['rate'], text: '{n}: 레벨당 냉기  피해 +{0}%' }
              ]
            },
            {
              id: 'icearrow',
              top: '52.4',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'coldarrow' },
                { treeId: 'bc', skillId: 'freezingarrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'coldarrow' }],
              name: '얼음 화살',
              desc: ['마법으로 화살을 강화하여', '적을 빙결시킵니다.'],
              level: '18',
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: '냉기 피해: {0}-{1}', value: [0, [6, 10], [12, 16], [18, 22], [24, 28], [30, 34], [36, 40], [42, 46], [48, 52], [60, 65], [72, 78], [84, 91], [96, 104], [108, 117], [120, 130], [132, 143], [144, 156], [162, 175], [180, 194], [198, 213], [216, 232]] },
                { text: '{0}초 동안 빙결', value: [0, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8] },
                { text: '마나 소모: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'coldarrow', statIdx: [1], value: [8], type: ['rate'], text: '{n}: 레벨당 냉기  피해 +{0}%' },
                { treeId: 'bc', skillId: 'freezingarrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' }
              ]
            },
            {
              id: 'freezingarrow',
              top: '84.6',
              left: '13.1',
              tooltip: 'left',
              affected: [
                { treeId: 'bc', skillId: 'coldarrow' },
                { treeId: 'bc', skillId: 'icearrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'icearrow' }],
              name: '빙결 화살',
              desc: ['마법으로 화살을 강화하여', '적 무리를 모두 빙결시킵니다.'],
              level: '30',
              add: [
                { text: '반경: {0}미터', value: [3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 40, 49, 58, 67, 76, 85, 94, 103, 112, 121, 130, 139, 148, 157, 166, 175, 184, 193, 202, 211] },
                { text: '냉기 피해: {0}-{1}', value: [0, [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100], [100, 110], [110, 120], [125, 135], [140, 150], [155, 165], [170, 180], [185, 195], [200, 210], [215, 225], [230, 240], [250, 260], [270, 280], [290, 300], [310, 320]] },
                { text: '{0}초 동안 빙결', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: '마나 소모: {0}', value: [0, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'coldarrow', statIdx: [1], value: [12], type: ['rate'], text: '{n}: 레벨당 냉기  피해 +{0}%' },
                { treeId: 'bc', skillId: 'icearrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' }
              ]
            },
            {
              id: 'magicarrow',
              top: '3.4',
              left: '42.7',
              tooltip: 'middle',
              name: '마법 화살',
              desc: ['추가 피해를 주는', '마법 화살을 생성합니다.'],
              level: '1',
              stat: [
                { text: '{0}%의 물리 피해를 마법 피해로 전환', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                { text: '명중률: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: '공격력: +{0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
                { text: '마나 소모: {0}', value: [0, 1.5, 1.3, 1.2, 1.1, 1.0, 0.8, 0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0] }
              ]
            },
            {
              id: 'multipleshot',
              top: '19.8',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'magicarrow' }],
              name: '다발 사격',
              desc: ['마법으로 하나의 화살을', '여러 개로 분열시킵니다.'],
              level: '6',
              add: [
                { text: '무기 공격력 {0}%', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] }
              ],
              stat: [
                { text: '화살 {0}개', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: '마나 소모: {0}', value: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] }
              ]
            },
            {
              id: 'guidedarrow',
              top: '52.3',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'coldarrow' }, { treeId: 'bc', skillId: 'magicarrow' }],
              name: '유도 화살',
              desc: ['화살을 강화하여 대상 또는 다른 적을', '추적하게 합니다.'],
              level: '18',
              add: [
                { text: '항상 적중' }
              ],
              stat: [
                { text: '공격력: +{0}%', value: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
                { text: '마나 소모: {0}', value: [0, 8, 7.7, 7.5, 7.2, 7, 6.7, 6.5, 6.2, 6, 5.7, 5.5, 5.2, 5, 4.7, 4.5, 4.2, 4, 3.7, 3.5, 3.2] }
              ]
            },
            {
              id: 'strafe',
              top: '68.6',
              left: '42.7',
              tooltip: 'middle',
              required: [{ treeId: 'bc', skillId: 'guidedarrow' }],
              name: '속사',
              desc: ['마법으로 하나의 화살을 여러 개로 분열시켜', '주위의 적 다수를 공격합니다.'],
              level: '24',
              add: [
                { text: '무기 공격력 {0}%', value: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75] },
                { text: '마나 소모: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: '최대 {0}명의 대상을 공격', value: [0, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
                { text: '공격력: +{0}%', value: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] }
              ]
            },
            {
              id: 'firearrow',
              top: '3.4',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'bc', skillId: 'explodingarrow' },
                { treeId: 'bc', skillId: 'immolationarrow' }
              ],
              name: '불꽃 화살',
              desc: ['마법으로 화살을 강화하여', '화염 피해를 줍니다.'],
              level: '1',
              stat: [
                { text: '{0}%의 물리 피해를 원소 피해로 전환', value: [0, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41] },
                { text: '명중률: +{0}%', value: [0, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181] },
                { text: '화염 피해: {0}-{1}', value: [0, [1, 4], [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [18, 21], [21, 24], [24, 27], [27, 30], [30, 33], [33, 36], [36, 39], [39, 42], [45, 49], [51, 56], [57, 63], [63, 70]] },
                { text: '마나 소모: {0}', value: [0, 3, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8, 4, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.1, 5.2, 5.3] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'explodingarrow', statIdx: [2], value: [12], type: ['rate'], text: '{n}: 레벨당 화염 피해 +{0}%' }
              ]
            },
            {
              id: 'explodingarrow',
              top: '35.9',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'bc', skillId: 'firearrow' },
                { treeId: 'bc', skillId: 'immolationarrow' }
              ],
              required: [{ treeId: 'bc', skillId: 'multipleshot' }, { treeId: 'bc', skillId: 'firearrow' }],
              name: '폭발 화살',
              desc: ['화살을 강화하여 접촉 시 폭발을 일으키고', '주위의 적에게 피해를 줍니다.'],
              level: '12',
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: '화염 피해: {0}-{1}', value: [0, [2, 6], [7, 11], [12, 16], [17, 21], [22, 26], [27, 31], [32, 36], [37, 41], [44, 49], [51, 57], [58, 65], [65, 73], [72, 81], [79, 89], [86, 97], [93, 105], [102, 116], [111, 127], [120, 138], [129, 149]] },
                { text: '마나 소모: {0}', value: [0, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'firearrow', statIdx: [1], value: [12], type: ['rate'], text: '{n}: 레벨당 화염 피해 +{0}%' }
              ]
            },
            {
              id: 'immolationarrow',
              top: '68.7',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'bc', skillId: 'explodingarrow' }],
              name: '점화 화살',
              desc: ['화살을 강화하여', '큰 화염 피해를 주고', '적중 시 거대한 불길을 생성합니다.'],
              level: '24',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192, 201] },
                { text: '화염 폭발 피해: {0}-{1}', value: [0, [12, 23], [24, 35], [36, 47], [48, 59], [60, 71], [72, 83], [84, 95], [96, 107], [119, 130], [142, 153], [165, 176], [188, 199], [211, 222], [234, 245], [257, 268], [280, 291], [314, 325], [348, 359], [382, 393], [416, 427]] },
                { text: '평균 화염 피해: 초당 {0}-{1}', value: [0, [8, 10], [14, 16], [19, 22], [26, 29], [32, 35], [38, 41], [44, 46], [51, 53], [57, 59], [63, 65], [69, 71], [76, 78], [82, 84], [87, 90], [93, 96], [100, 103], [106, 108], [107, 110], [112, 114], [118, 120]] },
                { text: '화염 지속시간: {0}초', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: '마나 소모: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5] }
              ],
              bonus: [
                { treeId: 'bc', skillId: 'firearrow', statIdx: [2], value: [5], type: ['rate'], text: '{n}: 레벨당 평균 초당 화염 피해 +{0}%' },
                { treeId: 'bc', skillId: 'explodingarrow', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 화염 피해 +{0}%' }
              ]
            }
          ]
        }
      ],
      assassin: [],
      necromancer: [
        {
          id: "sm",
          name: '소환',
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
              name: '해골 숙련',
              desc: ['지속 효과 - 되살린 해골과 생물의', '생명력과 공격력이 증가합니다.'],
              level: '1',
              stat: [
                { text: '해골: 생명력: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: '해골: 공격력: +{0}', value: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40] },
                { text: '마법학자: 생명력: +{0}', value: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160] },
                { text: '마법학자: 원거리 공격력 향상' },
                { text: '괴물: 생명력: +{0}%', value: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] },
                { text: '괴물: 공격력: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] }
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
              name: '골렘 숙련',
              desc: ['모든 골렘의 속도와 생명력을 증가시킵니다.'],
              level: '12',
              stat: [
                { text: '생명력: +{0}%', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: '명중률: {0}', value: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500] },
                { text: '걷기/달리기 속도: +{0}%', value: [0, 6, 10, 14, 17, 20, 22, 23, 24, 26, 27, 28, 29, 30, 30, 31, 32, 32, 32, 33, 33] }
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
              name: '소환수 저항',
              desc: ['지속 효과 - 모든 소환수의', '저항을 증가시킵니다.'],
              level: '24',
              stat: [
                { text: '모든 저항: +{0}%', value: [0, 28, 34, 39, 44, 47, 50, 52, 54, 56, 57, 59, 60, 61, 62, 62, 64, 64, 65, 65, 66] }
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
              name: '점토 골렘',
              desc: ['땅에서 골렘을 생성하여', '전투를 돕게 합니다.'],
              level: '6',
              add: [
                { text: '명중률: {0}', value: [60, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440] },
                { text: '방어력: {0}', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }
              ],
              stat: [
                { text: '생명력: {0}', value: [0, 275, 371, 467, 563, 660, 756, 852, 948, 1045, 1141, 1237, 1333, 1430, 1526, 1622, 1718, 1815, 1911, 2007, 2103] },
                { text: '명중률: +{0}', value: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400] },
                { text: '공격력: {0}-{1}', value: [0, [3, 7], [4, 9], [5, 11], [6, 14], [7, 16], [8, 19], [9, 21], [10, 24], [11, 26], [12, 29], [13, 31], [14, 33], [15, 36], [16, 38], [17, 41], [18, 43], [19, 46], [20, 48], [21, 51], [22, 53]] },
                { text: '적 감속: {0}%', value: [0, 11, 20, 27, 33, 37, 41, 44, 46, 49, 51, 53, 54, 56, 57, 58, 60, 60, 61, 62, 63] },
                { text: '마나 소모: {0}', value: [0, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0], value: [25], type: ['sum'] },
                { treeId: 'sm', skillId: 'golemmastery', statIdx: [1], value: [20], type: ['sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'bloodgolem', statIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [1], value: [35], type: ['sum'], text: '{n}: 레벨당 방어력 +{0}' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [2], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' }
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
              name: '피 골렘',
              desc: ['피 골렘을 생성합니다. 피 골렘은', '적의 생명력을 훔쳐 주인과 공유합니다.'],
              level: '18',
              add: [
                { text: '생명력: {0}', value: [637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637] },
                { text: '명중률: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: '방어력: {0}', value: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120] }
              ],
              stat: [
                { text: '피해의 {0}%를 생명력으로 전환', value: [0, 86, 95, 102, 108, 112, 116, 119, 121, 124, 126, 128, 129, 131, 132, 133, 135, 135, 136, 137, 138] },
                { text: '공격력: {0}-{1}', value: [0, [10, 27], [13, 36], [17, 45], [20, 55], [24, 64], [27, 74], [31, 83], [34, 93], [38, 102], [41, 112], [45, 121], [48, 130], [52, 140], [55, 149], [59, 159], [62, 168], [66, 178], [69, 187], [73, 197], [76, 206]] },
                { text: '마나 소모: {0}', value: [0, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: 레벨당 명중률 +{0}' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: 레벨당 방어력 +{0}' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' }
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
              name: '강철 골렘',
              desc: ['금속 아이템을 해당 아이템의 속성을 계승하는', '골렘으로 변화시킵니다.'],
              level: '24',
              add: [
                { text: '생명력: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: '공격력: {0}-{1}', value: [[12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33], [12, 33]] },
                { text: '명중률: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: '방어력: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] },
                { text: '마나 소모: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: '가시 피해' },
                { text: '{0}%의 피해를 반사', value: [0, 150, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420] },
                { text: '방어력: +{0}', value: [0, 35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490, 525, 560, 595, 630, 665, 700] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [2], value: [20], type: ['sum'], text: '{n}: 레벨당 명중률 +{0}' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'sm', skillId: 'firegolem', statIdx: [1], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' }
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
              name: '화염 골렘',
              desc: ['받는 화염 피해를 생명력으로 전화하는', '골렘을 생성합니다.'],
              level: '30',
              add: [
                { text: '생명력: {0}', value: [1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029] },
                { text: '명중률: {0}', value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },
                { text: '방어력: {0}', value: [140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140] }
              ],
              stat: [
                { text: '{0}%의 화염 피해 흡수', value: [0, 36, 45, 52, 58, 62, 66, 69, 71, 74, 76, 78, 79, 81, 82, 83, 85, 85, 86, 87, 88] },
                { text: '화염 피해: {0}-{1}', value: [0, [52, 110], [67, 126], [82, 142], [97, 158], [112, 174], [127, 190], [142, 206], [157, 222], [173, 239], [195, 262], [211, 279], [233, 302], [249, 319], [271, 342], [287, 359], [315, 388], [338, 412], [367, 442], [390, 466], [419, 496]] },
                { text: '신성한 불꽃: {0}-{1}', value: [0, [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [14, 16], [15, 17], [17, 19], [18, 20], [20, 22], [21, 23], [24, 26], [26, 28], [29, 31], [31, 33], [34, 36]] },
                { text: '마나 소모: {0}', value: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240] }
              ],
              bonus: [
                { treeId: 'sm', skillId: 'golemmastery', addIdx: [0, 1], value: [20, 25], type: ['rate', 'sum'] },
                { treeId: 'sm', skillId: 'summonresist' },
                { treeId: 'sm', skillId: 'claygolem', addIdx: [1], value: [20], type: ['sum'], text: '{n}: 레벨당 명중률 +{0}' },
                { treeId: 'sm', skillId: 'bloodgolem', addIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'sm', skillId: 'irongolem', addIdx: [2], value: [35], type: ['sum'], text: '{n}: 레벨당 방어력 +{0}' }
              ]
            },
            {
              id: 'raiseskeleton',
              top: '3.6',
              left: '72.2',
              tooltip: 'right',
              name: '해골 되살리기',
              desc: ['처치한 괴물의 시체에 시전하여', '해골 전사로 되살리고', '전투를 돕게 합니다.'],
              level: '1',
              add: [
                { text: '공격력: {0}-{1}', value: [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [2, 4], [4, 5], [6, 7], [8, 9], [10, 11], [12, 14], [14, 16], [17, 19], [21, 23], [26, 28], [31, 33], [37, 39], [37, 39]] }
              ],
              stat: [
                { text: '생명력: {0}', value: [0, 21, 21, 21, 31, 42, 52, 63, 73, 84, 94, 105, 115, 126, 136, 147, 157, 168, 178, 189, 199] },
                { text: '명중률: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: '공격력: +{0}%', value: [0, 0, 0, 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119] },
                { text: '방어력: {0}', value: [0, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305] },
                { text: '해골 총 {0}마리', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: '마나 소모: {0}', value: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] }
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
              name: '해골 마법학자 되살리기',
              desc: ['처치한 괴물의 시체에 시전하여', '해골 마법학자로 되살리고', '전투를 돕게 합니다.'],
              level: '12',
              add: [
                { text: '생명력: {0}', value: [123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123] }
              ],
              stat: [
                { text: '방어력: {0}', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
                { text: '해골 마법학자 {0}마리', value: [0, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8] },
                { text: '마나 소모: {0}', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
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
              name: '부활',
              desc: ['괴물을 되살려', '전투를 돕게 합니다.'],
              level: '30',
              add: [
                { text: '생명력: +{0}%', value: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200] },
                { text: '공격력: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: '지속시간: {0}초', value: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180] },
                { text: '마나 소모: {0}', value: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45] }
              ],
              stat: [
                { text: '괴물: {0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
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
          name: '독과 뼈',
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
              name: '맹독 단도',
              desc: ['단도 공격에 독 피해를 추가합니다.'],
              level: '6',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410] },
                { text: '독 피해: {0}-{1}', value: [0, [7, 15], [13, 23], [20, 32], [30, 43], [40, 56], [53, 70], [67, 85], [82, 103], [104, 126], [129, 153], [155, 181], [185, 212], [216, 245], [250, 281], [286, 319], [325, 359], [374, 410], [426, 464], [481, 521], [540, 581]] },
                { text: '{0}초에 걸쳐', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] },
                { text: '마나 소모: {0}', value: [0, 3, 3.2, 3.5, 3.7, 4.0, 4.2, 4.5, 4.7, 5.0, 5.2, 5.5, 5.7, 6.0, 6.2, 6.5, 6.7, 7.0, 7.2, 7.5, 7.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [1], value: [20], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [1], value: [20], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' }
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
              name: '맹독 폭발',
              desc: ['처치한 괴물의 시체에 시전하여', '독성 가스를 방출시키고', '주위의 적을 중독시킵니다.'],
              level: '18',
              add: [
                { text: '마나 소모: {0}', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
              ],
              stat: [
                { text: '독 피해: {0}-{1}', value: [0, [25, 75], [37, 97], [52, 122], [70, 150], [90, 180], [112, 212], [137, 247], [165, 285], [211, 341], [262, 402], [318, 468], [380, 540], [446, 616], [517, 697], [593, 783], [675, 875], [787, 997], [907, 1127], [1035, 1265], [1170, 1410]] },
                { text: '{0}초에 걸쳐', value: [0, 2, 2.4, 2.8, 3.2, 3.6, 4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' },
                { treeId: 'pb', skillId: 'poisonnova', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' }
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
              name: '맹독 확산',
              desc: ['사방으로 퍼지는 맹독을 방출합니다.'],
              level: '30',
              add: [
                { text: '마나 소모: {0}', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
              ],
              stat: [
                { text: '독 피해: {0}-{1}', value: [0, [50, 90], [62.5, 102.5], [74.2, 115], [87.5, 127.5], [100, 140], [112.5, 152.5], [125, 165], [137.5, 177.5], [155.8, 196.7], [174.2, 215], [193.3, 234.2], [211.7, 252.5], [230.8, 271.7], [250, 290], [268.3, 309.2], [286.7, 327.5], [315, 355.8], [343.3, 384.2], [371.67, 412.5], [400, 440]] },
                { text: '{0}초에 걸쳐', value: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'poisondagger', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' },
                { treeId: 'pb', skillId: 'poisonexplosion', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 독 피해 +{0}%' }
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
              name: '이빨',
              desc: ['가시 이빨을 소환하여 연속으로 발사합니다.'],
              level: '1',
              stat: [
                { text: '이빨 {0}개', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
                { text: '마법 피해: {0}-{1}', value: [0, [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 14], [12, 15], [13, 17], [14, 18], [15, 20], [16, 21], [17, 23], [18, 25], [20, 27], [21, 29], [23, 31]] },
                { text: '마나 소모: {0}', value: [0, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' }
              ]
            },
            {
              id: 'corpse',
              top: '19.7',
              left: '42.6',
              tooltip: 'middle',
              required: [{ treeId: 'pb', skillId: 'teeth' }],
              name: '시체 폭발',
              desc: ['처치한 괴물의 시체에 시전하여', '폭발시키고 주위의 적에게 피해를 줍니다.'],
              level: '6',
              add: [
                { text: '시체 생명력의 {0}-{1}%', value: [[70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120], [70, 120]] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 2.6, 3, 3.3, 3.6, 4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.3, 6.6, 7, 7.3, 7.6, 8, 8.3, 8.6, 9] },
                { text: '마나 소모: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
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
              name: '뼈 창',
              desc: ['치명적인 뼈 쐐기를 소환하여 적을 관통합니다.'],
              level: '18',
              stat: [
                { text: '마법 피해: {0}-{1}', value: [0, [12, 18], [19, 25], [26, 32], [33, 39], [40, 46], [47, 53], [54, 60], [61, 67], [70, 76], [79, 85], [88, 94], [97, 103], [106, 112], [115, 121], [124, 130], [133, 139], [145, 152], [157, 165], [169, 178], [181, 191]] },
                { text: '마나 소모: {0}', value: [0, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7, 10, 10.2, 10.5, 10.7, 11, 11.2, 11.5, 11.7] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [7], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [7], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [7], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonespirit', statIdx: [0], value: [7], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' }
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
              name: '뼈 영혼',
              desc: ['안식을 찾지 못한 언데드 영혼을 내보내', '대상을 추적하거나 동족을 찾게 합니다.'],
              level: '30',
              stat: [
                { text: '마법 피해: {0}-{1}', value: [0, [20, 30], [36, 47], [52, 64], [68, 81], [84, 98], [100, 115], [116, 132], [132, 149], [149, 167], [166, 185], [183, 203], [200, 221], [217, 239], [234, 257], [251, 275], [268, 293], [286, 312], [304, 331], [322, 350], [340, 369]] },
                { text: '마나 소모: {0}', value: [0, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'teeth', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'bonespear', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' }
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
              name: '뼈 갑옷',
              desc: ['자신의 주위를 도는 뼈의 방패를 만들어', '근접 피해를 흡수합니다.'],
              level: '1',
              stat: [
                { text: '{0}의 피해 흡수', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
                { text: '마나 소모: {0}', value: [0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [15], type: ['sum'], text: '{n}: 레벨당 피해 흡수 +{0}' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [15], type: ['sum'], text: '{n}: 레벨당 피해 흡수 +{0}' }
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
              name: '뼈의 벽',
              desc: ['뼈와 잔해로 지나갈 수 없는', '방벽을 생성합니다.'],
              level: '12',
              add: [
                { text: '지속시간: {0}초', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] },
                { text: '마나 소모: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: '생명력: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'pb', skillId: 'boneprison', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 생명력 +{0}%' }
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
              name: '뼈 감옥',
              desc: ['대상 주위에 확석화된 뼈의 방벽을 생성합니다.'],
              level: '24',
              add: [
                { text: '지속시간: {0}초', value: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24] }
              ],
              stat: [
                { text: '생명력: {0}', value: [0, 431, 538, 646, 754, 862, 970, 1077, 1185, 1293, 1401, 1509, 1616, 1724, 1831, 1939, 2047, 2154, 2262, 2370, 2478] },
                { text: '마나 소모: {0}', value: [0, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8] }
              ],
              bonus: [
                { treeId: 'pb', skillId: 'bonearmor', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 생명력 +{0}%' },
                { treeId: 'pb', skillId: 'bonewall', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 생명력 +{0}%' }
              ]
            }
          ]
        },
        {
          id: "cs",
          name: '저주',
          src: 'back.jpg',
          skills: [
            {
              id: 'dimvision',
              top: '19.8',
              left: '13.2',
              tooltip: 'left',
              name: '시야 흐리기',
              desc: ['괴물 무리에 저주를 걸어', '대상의 시야 범위를 감소시킵니다.'],
              level: '6',
              add: [
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: '지속시간: {0}초', value: [0, 1.7, 2.2, 2.7, 3.2, 3.7, 4.2, 4.7, 5.2, 5.7, 6.2, 6.7, 7.2, 7.7, 8.2, 8.7, 9.2, 9.7, 10.2, 10.7, 11.2] }
              ]
            },
            {
              id: 'confuse',
              top: '52.1',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'dimvision' }],
              name: '혼란',
              desc: ['괴물 무리에 저주를 걸어 무작위 대상을 공격하게 합니다.'],
              level: '18',
              add: [
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] },
                { text: '지속시간: {0}초', value: [0, 2.4, 3, 3.4, 4, 4.4, 5, 5.4, 6, 6.4, 7, 7.4, 8, 8.4, 9, 9.4, 10, 10.4, 11, 11.4, 12] }
              ]
            },
            {
              id: 'attract',
              top: '68.5',
              left: '13.2',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'confuse' }],
              name: '유혹',
              desc: ['괴물에 저주를 걸어 주위 모든 괴물의', '공격 대상이 되게 합니다.', '이 저주는 다른 저주에 무효화될 수 없습니다.'],
              level: '24',
              add: [
                { text: '반경: {0}미터', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: '마나 소모: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: '지속시간: {0}초', value: [0, 3, 3.8, 4.8, 5.6, 6.6, 7.4, 8.4, 9.2, 10.2, 11, 12, 12.8, 13.8, 14.6, 15.6, 16.4, 17.4, 18.2, 19.2, 20] }
              ]
            },
            {
              id: 'amplify',
              top: '3.6',
              left: '42.8',
              tooltip: 'middle',
              name: '피해 증폭',
              desc: ['적 무리에 저주를 걸어 대상이', '받는 비마법 피해를 증가시킵니다.'],
              level: '1',
              add: [
                { text: '받는 피해: +{0}%', value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] },
                { text: '마나 소모: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 2, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6] },
                { text: '지속시간: {0}초', value: [0, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65] }
              ]
            },
            {
              id: 'ironmaiden',
              top: '35.8',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: '가시 박힌 철관',
              desc: ['적 무리에 저주를 걸어', '대상이 근접 공격으로 피해를 줄 때', '자신도 피해를 입게 합니다.'],
              level: '12',
              add: [
                { text: '마나 소모: {0}', value: [4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6, 4.6] }
              ],
              stat: [
                { text: '{0}%의 피해를 반사', value: [0, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675] },
                { text: '지속시간: {0}초', value: [0, 12, 14.4, 16.8, 19.2, 21.6, 24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 55.2, 57.6] }
              ]
            },
            {
              id: 'lifetap',
              top: '52.2',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'ironmaiden' }],
              name: '생명력 추출',
              desc: ['괴물 무리에 저주를 걸어', '대상을 공격하면 공격자가 생명력을 회복하게 합니다.'],
              level: '18',
              add: [
                { text: '치유: 공격 피해의 {0}%', value: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3] },
                { text: '지속시간: {0}초', value: [0, 16, 18.4, 20.8, 23.2, 25.6, 28, 30.4, 32.8, 35.2, 37.6, 40, 42.4, 44.8, 47.2, 49.6, 52, 54.4, 56.8, 59.2, 61.6] }
              ]
            },
            {
              id: 'lowerresist',
              top: '84.6',
              left: '42.8',
              tooltip: 'middle',
              required: [{ treeId: 'cs', skillId: 'lifetap' }, { treeId: 'cs', skillId: 'decrepify' }],
              name: '저항 감소',
              desc: ['적에 저주를 걸어 모든 마법 공격으로 받는 피해를 증가시킵니다.', '괴물들의 저항을 감소시킵니다.', '적대적 플레이어의 최대 저항을 감소시킵니다.'],
              level: '30',
              add: [
                { text: '마나 소모: {0}', value: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] }
              ],
              stat: [
                { text: '모든 저항: -{0}%', value: [0, 31, 37, 41, 44, 47, 49, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 61, 61, 62, 62] },
                { text: '반경: {0}미터', value: [0, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3] },
                { text: '지속시간: {0}초', value: [0, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58] }
              ]
            },
            {
              id: 'weaken',
              top: '19.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'amplify' }],
              name: '약화',
              desc: ['적 무리에 저주를 걸어', '대상이 주는 피해량을 감소시킵니다.'],
              level: '6',
              add: [
                { text: '적 공격력: -{0}%', value: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33] },
                { text: '마나 소모: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6] },
                { text: '지속시간: {0}초', value: [0, 16.4, 18.8, 21.2, 23.6, 26, 28.4, 30.8, 33.2, 35.6, 38, 40.4, 42.8, 45.2, 47.6, 50, 52.4, 54.8, 57.2, 59.6] }
              ]
            },
            {
              id: 'terror',
              top: '35.8',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'weaken' }],
              name: '공포',
              desc: ['괴물 무리에 저주를 걸어', '공포에 질려 달아나게 합니다.'],
              level: '12',
              add: [
                { text: '반경: {0}미터', value: [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] },
                { text: '마나 소모: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '지속시간: {0}초', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }
              ]
            },
            {
              id: 'decrepify',
              top: '68.5',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'terror' }],
              name: '노화',
              desc: ['적 무리에 저주를 걸어', '대상의 이동 속도를 감소시키고,', '약화시켜 받는 피해를 증가시킵니다.'],
              level: '24',
              add: [
                { text: '반경: {0}미터', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: '마나 소모: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: '지속시간: {0}초', value: [0, 4, 4.6, 5.2, 5.8, 6.4, 7, 7.6, 8.2, 8.8, 9.4, 10, 10.6, 11.2, 11.8, 12.4, 13, 13.6, 14.2, 14.8, 15.4] }
              ]
            }
          ]
        }
      ],
      barbarian: [
        {
          id: "wc",
          name: '함성',
          src: 'back.jpg',
          skills: [
            {
              id: 'howl',
              top: '3.7',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }, { treeId: 'cs', skillId: 'berserk' }],
              name: '포효',
              desc: ['주위의 괴물들이', '공포에 질려 도망치게 합니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [2, 2, 2.2, 2.5, 2.7, 3, 3.2, 3.5, 3.7, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7] }
              ],
              stat: [
                { text: '괴물 도망 거리 최대 {0}미터', value: [0, 16, 19.3, 22.6, 26, 29.3, 32.6, 36, 39.3, 42.6, 46, 49.3, 52.6, 56, 59.3, 62.6, 66, 69.3, 72.6, 76, 79.3] },
                { text: '지속시간: {0}초', value: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] }
              ]
            },
            {
              id: 'taunt',
              top: '19.8',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'wc', skillId: 'howl' }],
              name: '도발',
              desc: ['주위의 괴물을 격분시켜 맹렬히 공격하게 합니다.'],
              level: '6',
              add: [
                { text: '마나 소모: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: '대상의 명중률: -{0}%', value: [0, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43] },
                { text: '적 공격력: -{0}%', value: [0, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43] }
              ]
            },
            {
              id: 'battlecry',
              top: '52.2',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'wc', skillId: 'warcry' }],
              required: [{ treeId: 'wc', skillId: 'taunt' }],
              name: '전투의 함성',
              desc: ['공포의 외침으로 적의 방어력과 공격력을', '감소시킵니다.'],
              level: '18',
              add: [
                { text: '마나 소모: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: '적 공격력: -{0}%', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
                { text: '적 방어력: -{0}%', value: [0, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88] },
                { text: '지속시간: {0}초', value: [0, 12, 14.4, 16.8, 19.2, 21.6, 24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 55.2, 57.6] }
              ]
            },
            {
              id: 'warcry',
              top: '84.5',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'cs', skillId: 'stun' }],
              required: [{ treeId: 'wc', skillId: 'battlecry' }, { treeId: 'wc', skillId: 'battleorders' }],
              name: '전장의 함성',
              desc: ['주위의 모든 괴물에게 피해를 주고 기절시킵니다.'],
              level: '30',
              stat: [
                { text: '공격력: {0}-{1}', value: [0, [20, 30], [26, 32], [32, 42], [38, 48], [44, 54], [50, 60], [56, 66], [62, 72], [69, 79], [76, 86], [83, 93], [90, 100], [97, 107], [104, 114], [111, 121], [118, 128], [126, 136], [134, 144], [142, 152], [150, 160]] },
                { text: '기절 지속시간: {0}초', value: [0, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8] },
                { text: '마나 소모: {0}', value: [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'howl', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'wc', skillId: 'taunt', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'wc', skillId: 'battlecry', statIdx: [0], value: [6], type: ['rate'], text: '{n}: 레벨당 피해 +{0}%' },
              ]
            },
            {
              id: 'shout',
              top: '19.8',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'battleorders' }, { treeId: 'wc', skillId: 'battlecommand' }, { treeId: 'cs', skillId: 'berserk' }],
              required: [{ treeId: 'wc', skillId: 'howl' }],
              name: '외침',
              desc: ['임박한 위험을 경고하여', '자신과 파티원의 방어력을 증가시킵니다.'],
              level: '6',
              add: [
                { text: '마나 소모: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: '방어력: +{0}%', value: [0, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290] },
                { text: '지속시간: {0}초', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'battleorders', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'wc', skillId: 'battlecommand', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            },
            {
              id: 'battleorders',
              top: '68.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'shout' }, { treeId: 'wc', skillId: 'battlecommand' }, { treeId: 'cs', skillId: 'concentrate' }],
              required: [{ treeId: 'wc', skillId: 'shout' }],
              name: '전투 지시',
              desc: ['자신과 파티원의 최대 마나, 생명력,', '지구력이 증가합니다.'],
              level: '24',
              add: [
                { text: '마나 소모: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '최대 생명력: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: '최대 마나: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: '최대 지구력: +{0}%', value: [0, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92] },
                { text: '지속시간: {0}초', value: [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'shout', statIdx: [3], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'wc', skillId: 'battlecommand', statIdx: [3], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            },
            {
              id: 'battlecommand',
              top: '84.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [{ treeId: 'wc', skillId: 'shout' }, { treeId: 'wc', skillId: 'battleorders' }],
              required: [{ treeId: 'wc', skillId: 'battleorders' }],
              name: '전투 명령',
              desc: ['자신과 파티원의 현재 기술 레벨이 모두 증가합니다.'],
              level: '30',
              add: [
                { text: '마나 소모: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: '지속시간: {0}초', value: [0, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'shout', statIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'wc', skillId: 'battleorders', statIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            },
            {
              id: 'findpotion',
              top: '3.7',
              left: '72.2',
              tooltip: 'right',
              name: '물약 발견',
              desc: ['처치한 괴물의 시체에', '일정 확률로 물약을 발견합니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '{0}% 확률', value: [0, 15, 27, 36, 44, 50, 55, 59, 62, 66, 68, 71, 73, 75, 77, 78, 80, 81, 82, 83, 84] }
              ]
            },
            {
              id: 'finditem',
              top: '35.8',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'wc', skillId: 'findpotion' }],
              name: '아이템 발견',
              desc: ['처치한 괴물의 시체에 사용하여', '일정 확률로 숨겨진 보물을 발견합니다.'],
              level: '12',
              add: [
                { text: '마나 소모: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '{0}% 확률', value: [0, 13, 19, 24, 29, 32, 35, 37, 39, 41, 42, 44, 45, 46, 47, 47, 49, 49, 50, 50, 51] }
              ]
            },
            {
              id: 'grimward',
              top: '68.5',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'wc', skillId: 'finditem' }],
              name: '섬뜩한 호신부',
              desc: ['처치한 괴물의 시체에 사용하여', '주위의 괴물이 도망치게 하는', '섬뜩한 토템을 생성합니다.'],
              level: '24',
              add: [
                { text: '지속시간: {0}초', value: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
                { text: '마나 소모: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 2, 2.6, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6] }
              ]
            }
          ]
        },
        {
          id: "cm",
          name: '전투 숙련',
          src: 'back.jpg',
          skills: [
            {
              id: 'swordmastery',
              top: '3.4',
              left: '13.3',
              tooltip: 'left',
              name: '검 숙련',
              desc: ['지속효과 - 검 전투 숙련도가 향상됩니다.'],
              level: '1',
              stat: [
                { text: '명중률: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'polearmmastery',
              top: '19.7',
              left: '13.3',
              tooltip: 'left',
              name: '미늘창 숙련',
              desc: ['지속효과 - 미늘창 전투 숙련도가 향상됩니다.'],
              level: '6',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'increasedstamina',
              top: '35.6',
              left: '13.3',
              tooltip: 'left',
              name: '지구력 증가',
              desc: ['지속효과 - 지구력이 증가합니다.'],
              level: '12',
              stat: [
                { text: '최대 지구력: +{0}%', value: [0, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315] }
              ]
            },
            {
              id: 'increasedspeed',
              top: '68.3',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'cm', skillId: 'increasedstamina' }],
              name: '속도 증가',
              desc: ['지속효과 - 걷거나 달리는 속도가 증가합니다.'],
              level: '24',
              stat: [
                { text: '걷기/달리기 속도: +{0}%', value: [0, 13, 18, 22, 25, 28, 30, 32, 33, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42, 42, 43] }
              ]
            },
            {
              id: 'axemastery',
              top: '3.4',
              left: '42.8',
              tooltip: 'middle',
              name: '도끼 숙련',
              desc: ['지속효과 - 도끼 전투 숙련도가 향상됩니다.'],
              level: '1',
              stat: [
                { text: '명중률: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'throwingmastery',
              top: '19.7',
              left: '42.8',
              tooltip: 'middle',
              name: '투척 숙련',
              desc: ['지속효과 - 투척 무기 전투 숙련도가 향상됩니다.'],
              level: '6',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'macemastery',
              top: '3.4',
              left: '72.2',
              tooltip: 'right',
              name: '철퇴 숙련',
              desc: ['지속효과 - 철퇴 전투 숙련도가 향상됩니다.'],
              level: '1',
              stat: [
                { text: '명중률: +{0}%', value: [0, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'spearmastery',
              top: '19.7',
              left: '72.2',
              tooltip: 'right',
              name: '창 숙련',
              desc: ['지속효과 - 창 전투 숙련도가 향상됩니다.'],
              level: '6',
              stat: [
                { text: '명중률: +{0}%', value: [0, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182] },
                { text: '공격력: +{0}%', value: [0, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118, 123] },
                { text: '극대화 확률 {0}%', value: [0, 5, 9, 12, 15, 17, 19, 20, 21, 23, 23, 24, 25, 26, 26, 27, 28, 28, 28, 29, 29] }
              ]
            },
            {
              id: 'ironskin',
              top: '52',
              left: '72.2',
              tooltip: 'right',
              name: '철갑 피부',
              desc: ['지속효과 - 방어력이 향상됩니다.'],
              level: '18',
              stat: [
                { text: '방어력: +{0}%', value: [0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220] }
              ]
            },
            {
              id: 'naturalresistance',
              top: '84.4',
              left: '72.2',
              tooltip: 'right',
              required: [{ treeId: 'cm', skillId: 'ironskin' }],
              name: '타고난 저항',
              desc: ['지속효과 - 원소 및 독 피해에 대한', '타고난 저항이 증가합니다.'],
              level: '30',
              stat: [
                { text: '모든 저항: +{0}%', value: [0, 12, 21, 28, 35, 40, 44, 47, 49, 52, 54, 56, 58, 60, 61, 62, 64, 64, 65, 66, 67] }
              ]
            }
          ]
        },
        {
          id: "cs",
          name: '전투 기술',
          src: 'back.jpg',
          skills: [
            {
              id: 'leap',
              top: '19.7',
              left: '13.1',
              tooltip: 'left',
              affected: [{ treeId: 'cs', skillId: 'leapattack' }],
              name: '도약',
              desc: ['공중으로 도약한 후 착지하여', '주위의 적을 뒤로 밀쳐냅니다.'],
              level: '6',
              add: [
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 4.6, 7.3, 8.6, 10, 11.3, 12, 12.6, 13.3, 14, 14, 14.6, 14.6, 15.3, 16, 16, 16, 16.6, 16.6, 16.6, 16.6] }
              ]
            },
            {
              id: 'leapattack',
              top: '52.1',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'leap' }],
              name: '도약 공격',
              desc: ['대상 적에게 도약하여', '신속하게 공격합니다.'],
              level: '18',
              add: [
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 0, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
                { text: '공격력: +{0}%', value: [0, 100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490, 520, 550, 580, 610, 640, 670] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'leap', statIdx: [1], value: [10], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
              ]
            },
            {
              id: 'whirlwind',
              top: '84.5',
              left: '13.1',
              tooltip: 'left',
              required: [{ treeId: 'cs', skillId: 'leapattack' }, { treeId: 'cs', skillId: 'concentrate' }],
              name: '소용돌이',
              desc: ['소용돌이치는 죽음의 무도로', '적 군단을 돌파합니다.'],
              level: '30',
              stat: [
                { text: '명중률: +{0}%', value: [0, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
                { text: '공격력: {0}%', value: [0, -50, -42, -34, -26, -18, -10, -2, 6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102] },
                { text: '마나 소모: {0}', value: [0, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22] }
              ]
            },
            {
              id: 'bash',
              top: '3.4',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'stun' }, { treeId: 'cs', skillId: 'concentrate' }, { treeId: 'cs', skillId: 'doubleswing' }],
              name: '강격',
              desc: ['강력한 타격으로 적에게 주는 피해량이 증가하고', '적을 뒤로 밀쳐냅니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] },
                { text: '공격력: +{0}%', value: [0, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145] },
                { text: '공격력: +{0}', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'stun', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'cs', skillId: 'concentrate', statIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
              ]
            },
            {
              id: 'stun',
              top: '35.8',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'bash' }],
              required: [{ treeId: 'cs', skillId: 'bash' }],
              name: '기절',
              desc: ['대상을 잠시 동안 기절시키고', '자신의 명중률을 증가시킵니다.'],
              level: '12',
              add: [
                { text: '공격력: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110] },
                { text: '기절 지속시간: {0}초s', value: [0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.2, 4.3, 4.4, 4.5] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', addIdx: [0], value: [8], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'cs', skillId: 'concentrate', statIdx: [0], value: [5], type: ['sum'], text: '{n}: 레벨당 명중률 +{0}%' },
                { treeId: 'wc', skillId: 'warcry', statIdx: [1], value: [5], type: ['rate'], text: '{n}: 레벨당 지속시간 +{0}%' }
              ]
            },
            {
              id: 'concentrate',
              top: '52.1',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'bash' }, { treeId: 'cs', skillId: 'stun' }],
              required: [{ treeId: 'cs', skillId: 'stun' }],
              name: '집중 공격',
              desc: ['방해받지 않으며 명중률과 방어력을', '증가시키는 공격입니다.'],
              level: '18',
              add: [
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250] },
                { text: '공격력: +{0}%', value: [0, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160] },
                { text: '방어력: +{0}%', value: [0, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'wc', skillId: 'battleorders', statIdx: [1], value: [10], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'cs', skillId: 'berserk', statIdx: [1], value: [1], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
              ]
            },
            {
              id: 'berserk',
              top: '84.5',
              left: '42.9',
              tooltip: 'middle',
              affected: [{ treeId: 'cs', skillId: 'concentrate' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'cs', skillId: 'concentrate' }],
              name: '광폭화',
              desc: ['강력하지만 무모한 공격으로', '공격력과 명중률이 증가하지만', '방어력이 감소합니다.'],
              level: '30',
              add: [
                { text: '마나 소모: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 370, 385] },
                { text: '마법 피해: +{0}%', value: [0, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435] },
                { text: '지속시간: {0}초', value: [0, 2.7, 2.4, 2.2, 2.1, 2.0, 1.9, 1.8, 1.7, 1.6, 1.6, 1.6, 1.5, 1.5, 1.4, 1.4, 1.4, 1.4, 1.3, 1.3, 1.3] }
              ],
              bonus: [
                { treeId: 'wc', skillId: 'howl', statIdx: [1], value: [10], type: ['sum'], text: '{n}: 레벨당 마법 피해 +{0}%' },
                { treeId: 'wc', skillId: 'shout', statIdx: [1], value: [10], type: ['sum'], text: '{n}: 레벨당 마법 피해 +{0}%' },
              ]
            },
            {
              id: 'doubleswing',
              top: '19.7',
              left: '72.1',
              tooltip: 'right',
              affected: [{ treeId: 'cs', skillId: 'doublethrow' }, { treeId: 'cs', skillId: 'frenzy' }],
              required: [{ treeId: 'cs', skillId: 'bash' }],
              name: '이중 타격',
              desc: ['두 개의 무기를 장착하고 있을 때', '가능하면 두 명의 대상을 공격하며', '아니면 한 대상을 두 번 공격합니다.'],
              level: '6',
              add: [
                { text: '공격력: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110] },
                { text: '마나 소모: {0}', value: [0, 1.0, 0.8, 0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.5, -0.6, -0.7, -0.8, -1.0, -1.1, -1.2, -1.3] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'bash', addIdx: [0], value: [10], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
              ]
            },
            {
              id: 'doublethrow',
              top: '35.8',
              left: '72.1',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'doubleswing' }],
              name: '이중 투척',
              desc: ['서로 다른 투척 무기 두 개를', '동시에 투척할 수 있습니다.'],
              level: '12',
              add: [
                { text: '공격력: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'doubleswing', addIdx: [0], value: [8], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
              ]
            },
            {
              id: 'frenzy',
              top: '68.5',
              left: '72.1',
              tooltip: 'right',
              required: [{ treeId: 'cs', skillId: 'doublethrow' }],
              name: '광분',
              desc: ['두 개의 무기를 한번에 휘두릅니다.', '공격이 적중할 때마다 전체 속도가 증가합니다.', '두 개의 무기를 장착해야 합니다.'],
              level: '24',
              add: [
                { text: '마법 피해: +{0}%', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                { text: '지속시간: {0}초', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] },
                { text: '마나 소모: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: '명중률: +{0}%', value: [0, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163, 170, 177, 184, 191, 198, 205, 212, 219, 226, 233] },
                { text: '공격력: +{0}%', value: [0, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185] },
                { text: '공격 속도: +{0}-{1}%', value: [0, [7, 7], [7, 13], [7, 18], [7, 22], [7, 25], [7, 27], [7, 29], [7, 31], [7, 33], [7, 34], [7, 35], [7, 36], [7, 37], [7, 38], [7, 39], [7, 40], [7, 40], [7, 41], [7, 41], [7, 42]] },
                { text: '걷기/달리기 속도: +{0}-{1}%', value: [0, [47, 47], [47, 68], [47, 84], [47, 99], [47, 110], [47, 119], [47, 126], [47, 131], [47, 138], [47, 142], [47, 147], [47, 151], [47, 155], [47, 158], [47, 160], [47, 164], [47, 165], [47, 167], [47, 169], [47, 171]] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'doubleswing', statIdx: [1], value: [8], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'wc', skillId: 'taunt', statIdx: [1], value: [8], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
                { treeId: 'cs', skillId: 'berserk', addIdx: [0], value: [1], type: ['sum'], text: '{n}: 레벨당 마법 피해 +{0}%' }
              ]
            }
          ]
        }
      ],
      paladin: [
        {
          id: "da",
          name: '방어 오라',
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
              name: '기도',
              desc: ['오라를 활성화하면 자신과 파티원의', '생명력이 서서히 회복됩니다.'],
              level: '1',
              stat: [
                { text: '치유: +{0}', value: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 25] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] },
                { text: '마나 소모: 초당 {0}', value: [0, 1, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.4, 2.5, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.1, 4.3, 4.5] }
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
              name: '정화',
              desc: ['오라를 활성화하면', '자신과 파티원에게 걸린', '독 또는 저주의 지속시간이 감소합니다.'],
              level: '12',
              add: [
                { text: '{n}: 2초마다 생명력 치유 +{0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
              ],
              stat: [
                { text: '지속시간 {0}% 감소', value: [0, 39, 46, 51, 56, 60, 63, 65, 67, 69, 70, 72, 73, 75, 76, 76, 78, 78, 79, 79, 80] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
              name: '명상',
              desc: ['오라를 활성화하면 자신과 파티원의', '마나 회복 속도가 증가합니다.'],
              level: '24',
              add: [
                { text: '{n}: 2초마다 생명력 치유 +{0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
              ],
              stat: [
                { text: '마나 회복 속도: +{0}%', value: [0, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775] },
                { text: '반경: {0}미터', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
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
              name: '인내',
              desc: ['오라를 활성화하면 자신과 파티원의', '방어력이 증가합니다.'],
              level: '6',
              stat: [
                { text: '방어력: +{0}%', value: [0, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
              name: '원기',
              desc: ['오라를 활성화하면 자신과 파티원의 지구력 회복속도,', '최대 지구력, 이동 속도가 증가합니다.'],
              level: '18',
              stat: [
                { text: '걷기/달리기 속도: +{0}%', value: [0, 13, 18, 22, 25, 28, 30, 32, 33, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42, 42, 43] },
                { text: '최대 지구력: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: '지구력 회복 속도: +{0}%', value: [0, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
              name: '속죄',
              desc: ['오라를 활성화하면', '처치한 적의 영혼을 구원하여', '자신의 생명력과 마나를 회복합니다.'],
              level: '30',
              add: [
                { text: '반경: {0}미터', value: [10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6, 10.6] }
              ],
              stat: [
                { text: '영혼 속죄 확률: {0}%', value: [0, 23, 34, 42, 49, 55, 59, 63, 65, 69, 71, 73, 75, 77, 79, 80, 82, 82, 83, 84, 85] },
                { text: '생명력/마나 회복: {0}', value: [0, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120] }
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
              name: '화염 저항',
              desc: ['오라를 활성화하면 파티원이', '받는 화염 피해가 감소합니다.'],
              level: '1',
              stat: [
                { text: '화염 저항: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
              name: '냉기 저항',
              desc: ['오라를 활성화하면 파티원이', '받는 냉기 피해가 감소합니다.'],
              level: '6',
              stat: [
                { text: '냉기 저항: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: '반경: {0}미터', value: [0, 7.3, 8.6, 10, 11.3, 12.6, 14, 15.3, 16.6, 18, 19.3, 20.6, 22, 23.3, 24.6, 26, 27.3, 28.3, 30, 31.3, 32.6] }
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
              name: '번개 저항',
              desc: ['오라를 활성화하면 파티원이', '받는 번개 피해가 감소합니다.'],
              level: '12',
              stat: [
                { text: '번개 저항: +{0}%', value: [0, 52, 66, 76, 85, 92, 98, 102, 106, 110, 113, 116, 118, 121, 123, 124, 127, 128, 129, 130, 131] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
              name: '구원',
              desc: ['오라를 활성화하면 자신과 파티원이', '받는 화염, 냉기, 번개 피해가 감소합니다.'],
              level: '30',
              stat: [
                { text: '모든 저항: +{0}%', value: [0, 60, 68, 75, 80, 85, 88, 91, 93, 96, 97, 99, 101, 102, 103, 104, 106, 106, 107, 108, 108] },
                { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
              ]
            }
          ]
        },
        {
          id: "oa",
          name: '공격 오라',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'might',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'charge' }
            ],
            name: '위세',
            desc: ['오라를 활성화하면 자신과 파티원의', '공격력이 증가합니다.'],
            level: '1',
            stat: [
              { text: '공격력: +{0}%', value: [0, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230] },
              { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
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
            name: '축복받은 조준',
            desc: ['오라를 활성화하면 자신과 파티원의', '명중률이 증가합니다.'],
            level: '12',
            stat: [
              { text: '명중률: +{0}%', value: [0, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360] },
              { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'concentration',
            top: '52',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'oa', skillId: 'blessedaim' }],
            name: '집중',
            desc: ['오라를 활성화하면 자신과 파티원의 공격력이 증가하고', '공격이 방해받을 확률이 감소합니다.'],
            level: '18',
            add: [
              { text: '방해 불가 확률: {0}%', value: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] }
            ],
            stat: [
              { text: '공격력: +{0}%', value: [0, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345] },
              { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'fanaticism',
            top: '84.3',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'oa', skillId: 'concentration' }],
            name: '광신',
            desc: ['오라를 활성화하면 자신과 파티원의', '공격력, 공격 속도, 명중률이 증가합니다.'],
            level: '30',
            stat: [
              { text: '명중률: +{0}%', value: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135] },
              { text: '내 공격력: +{0}%', value: [0, 50, 67, 84, 101, 118, 135, 152, 169, 186, 203, 220, 237, 254, 271, 288, 305, 322, 339, 356, 373] },
              { text: '파티 공격력: +{0}%', value: [0, 25, 33, 42, 50, 59, 67, 76, 84, 93, 101, 110, 118, 127, 135, 144, 152, 161, 169, 178, 186] },
              { text: '공격 속도: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: '반경: {0}미터', value: [0, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6, 17.3, 18, 18.6, 19.3, 20] }
            ]
          },
          {
            id: 'holyfire',
            top: '19.7',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'might' }],
            name: '신성한 불꽃',
            desc: ['오라를 활성화하면 천상의 불길로', '주위의 적에게 피해를 주고', '공격에 화염 피해를 추가합니다.'],
            level: '6',
            stat: [
              { text: '화염 피해: 공격 시 {0}-{1}', value: [0, [6, 18], [9, 21], [12, 24], [15, 27], [18, 30], [21, 33], [24, 36], [27, 39], [33, 45], [39, 51], [45, 57], [51, 63], [57, 69], [63, 75], [69, 81], [75, 87], [84, 96], [93, 105], [102, 114], [111, 123]] },
              { text: '화염 피해: {0}-{1}', value: [0, [1, 3], [1.5, 3.5], [2.5, 4.5], [3, 5], [4, 6], [4.5, 6.5], [5.5, 7.5], [6, 8], [7, 9], [8.5, 10.5], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 17], [16, 18], [17, 20], [18, 21]] },
              { text: '반경: {0}미터', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [0, 1], value: [18, 18], type: ['rate', 'rate'], text: '{n}: 레벨당 화염 피해 +{0}%' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [6, 6], type: ['rate', 'rate'], text: '{n}: 레벨당 화염 피해 +{0}%' }
            ]
          },
          {
            id: 'holyfreeze',
            top: '52.1',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'holyfire' }],
            name: '신성한 빙결',
            desc: ['오라를 활성화하면 주위의 괴물을 빙결시키고', '공격에 냉기 피해를 추가합니다.'],
            level: '18',
            stat: [
              { text: '냉기 피해: 공격 시 {0}-{1}', value: [0, [10, 15], [15, 20], [20, 25], [25, 30], [30, 35], [35, 40], [40, 45], [45, 50], [55, 60], [65, 70], [75, 80], [85, 90], [95, 100], [105, 110], [115, 120], [125, 130], [140, 145], [155, 160], [170, 175], [185, 190]] },
              { text: '냉기 피해: {0}-{1}', value: [0, [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [28, 29], [31, 32], [34, 35], [37, 38]] },
              { text: '적의 이동 속도 {0}% 감소', value: [0, 30, 34, 37, 40, 42, 44, 45, 46, 48, 48, 49, 50, 51, 51, 52, 53, 53, 53, 54, 54] },
              { text: '반경: {0}미터', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistcold', statIdx: [0, 1], value: [15, 15], type: ['rate', 'rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [7, 7], type: ['rate', 'rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
            ]
          },
          {
            id: 'holyshock',
            top: '68.1',
            left: '42.8',
            tooltip: 'middle',
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }],
            name: '신성한 충격',
            desc: ['오라를 활성화하면 전기 파동을 방출하여', '주위의 적에게 피해를 주고', '공격에 번개 피해를 추가합니다.'],
            level: '24',
            stat: [
              { text: '번개 피해: 공격 시 {0}-{1}', value: [0, [1, 60], [1, 96], [1, 132], [1, 168], [1, 204], [1, 240], [1, 276], [1, 312], [1, 360], [1, 408], [1, 456], [1, 504], [1, 552], [1, 600], [1, 648], [1, 696], [1, 756], [1, 816], [1, 876], [1, 936]] },
              { text: '번개 피해: {0}-{1}', value: [0, [1, 10], [1, 16], [1, 22], [1, 28], [1, 34], [1, 40], [1, 46], [1, 52], [1, 60], [1, 68], [1, 76], [1, 84], [1, 92], [1, 100], [1, 108], [1, 116], [1, 126], [1, 136], [1, 146], [1, 156]] },
              { text: '반경: {0}미터', value: [0, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16, 16.6] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistcold', statIdx: [0, 1], value: [12, 12], type: ['rate', 'rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
              { treeId: 'da', skillId: 'salvation', statIdx: [0, 1], value: [4, 4], type: ['rate', 'rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
            ]
          },
          {
            id: 'thorns',
            top: '19.7',
            left: '72.2',
            tooltip: 'right',
            name: '가시',
            desc: ['오라를 활성화하면 자신이 받는 피해를', '공격자에게 반사합니다.'],
            level: '6',
            stat: [
              { text: '{0}%의 피해를 반사', value: [0, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650, 690, 730, 770, 810, 850, 890, 930, 970, 1010] },
              { text: '반경: {0}미터', value: [0, 10.6, 12, 13.3, 14.6, 16, 17.3, 18.6, 20, 21.3, 22.6, 24, 25.3, 26.6, 28, 29.3, 30.6, 32, 33.3, 34.6, 36] }
            ]
          },
          {
            id: 'sanctuary',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'holyfreeze' }, { treeId: 'oa', skillId: 'thorns' }],
            name: '성역',
            desc: ['오라를 활성화하면 언데드에게 피해를 주고', '뒤로 밀쳐냅니다.'],
            level: '24',
            stat: [
              { text: '언데드에게 주는 피해: +{0}%', value: [0, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720] },
              { text: '마법 피해: {0}-{1}', value: [0, [8, 16], [12, 20], [16, 24], [20, 28], [24, 32], [28, 36], [32, 40], [36, 44], [40, 49], [44, 54], [48, 59], [52, 64], [56, 69], [60, 74], [64, 79], [68, 84], [73, 90], [78, 96], [83, 102], [88, 108]] },
              { text: '반경: {0}미터', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'cleansing', statIdx: [1], value: [7], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' }
            ]
          },
          {
            id: 'conviction',
            top: '84.5',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'oa', skillId: 'sanctuary' }],
            name: '선고',
            desc: ['오라를 활성화하면 주위 적의', '방어력과 저항이 감소합니다.'],
            level: '30',
            add: [
              { text: '반경: {0}미터', value: [13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3] }
            ],
            stat: [
              { text: '방어력: -{0}%', value: [0, 49, 56, 61, 66, 70, 73, 75, 77, 79, 80, 82, 83, 85, 86, 86, 88, 88, 89, 89, 90] },
              { text: '모든 저항: -{0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] }
            ]
          }]
        },
        {
          id: "cs",
          name: '전투 기술',
          src: 'defensive_auras/back.jpg',
          skills: [{
            id: 'sacrifice',
            top: '3.4',
            left: '13.1',
            tooltip: 'left',
            affected: [
              { treeId: 'cs', skillId: 'zeal' }
            ],
            name: '희생',
            desc: ['생명력을 희생하여', '명중률과 공격력을 증가시킵니다.'],
            level: '1',
            add: [
              { text: '자신에게 {0}%의 피해', value: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] }
            ],
            stat: [
              { text: '명중률: +{0}%', value: [0, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125, 132, 139, 146, 153] },
              { text: '공격력: +{0}%', value: [0, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 465] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'redemption', statIdx: [1], value: [15], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
              { treeId: 'oa', skillId: 'fanaticism', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
            ]
          },
          {
            id: 'zeal',
            top: '35.9',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'sacrifice' }],
            name: '열의',
            desc: ['한 번의 공격으로', '인접한 다수의 적을 공격합니다.'],
            level: '12',
            add: [
              { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: '{0}회 적중', value: [0, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
              { text: '명중률: +{0}%', value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
              { text: '공격력: +{0}%', value: [0, 0, 0, 0, 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'sacrifice', statIdx: [2], value: [12], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
            ]
          },
          {
            id: 'vengeance',
            top: '52.2',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'zeal' }],
            name: '복수',
            desc: ['공격이 적중할 때마다', '화염, 번개, 냉기 피해가 추가됩니다.'],
            level: '18',
            stat: [
              { text: '명중률: +{0}%', value: [0, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210] },
              { text: '화염 피해: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: '냉기 피해: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: '냉기 지속시간: +{0}초', value: [0, 1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2, 7.8, 8.4, 9.0, 9.6, 10.2, 10.8, 11.4, 12.0, 12.6] },
              { text: '번개 피해: +{0}%', value: [0, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184] },
              { text: '마나 소모: {0}', value: [0, 4, 4.2, 4.5, 4.7, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'resistfire', statIdx: [1], value: [10], type: ['sum'], text: '{n}: 레벨당 화염 피해 + {0}%' },
              { treeId: 'da', skillId: 'resistcold', statIdx: [2], value: [10], type: ['sum'], text: '{n}: 레벨당 냉기 피해 + {0}%' },
              { treeId: 'da', skillId: 'resistlightning', statIdx: [4], value: [10], type: ['sum'], text: '{n}: 레벨당 번개 피해 + {0}%' },
              { treeId: 'da', skillId: 'salvation', statIdx: [1, 2, 4], type: ['sum', 'sum', 'sum'], value: [2, 2, 2], text: '{n}: 레벨당 원소 피해 + {0}%' }
            ]
          },
          {
            id: 'conversion',
            top: '68.1',
            left: '13.1',
            tooltip: 'left',
            required: [{ treeId: 'cs', skillId: 'vengeance' }],
            name: '전향',
            desc: ['괴물을 전향시켜 다른 사악한 악마외 야수에', '맞서 싸우게 합니다.'],
            level: '24',
            add: [
              { text: '지속시간: {0}초', value: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16] },
              { text: '마나 소모: {0}', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
            ],
            stat: [
              { text: '전향 확률: {0}%', value: [0, 7, 13, 18, 22, 25, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 40, 41, 41, 42] }
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
            name: '신성한 빛줄기',
            desc: ['신성한 마력으로', '언데드 적에게 피해를 주고', '아군을 치유합니다.'],
            level: '6',
            stat: [
              { text: '마법 피해: {0}-{1}', value: [0, [8, 16], [16, 24], [24, 32], [32, 40], [40, 48], [48, 56], [56, 64], [64, 72], [74, 83], [84, 94], [94, 105], [104, 116], [114, 127], [124, 138], [134, 149], [144, 160], [157, 175], [170, 190], [183, 205], [196, 220]] },
              { text: '치유: {0}-{1}', value: [0, [1, 6], [3, 10], [5, 14], [7, 18], [9, 22], [11, 26], [13, 30], [15, 34], [17, 38], [19, 42], [21, 46], [23, 50], [25, 54], [27, 58], [29, 62], [31, 66], [33, 70], [35, 74], [37, 78], [39, 82]] },
              { text: '마나 소모: {0}', value: [0, 2, 2, 2.1, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5, 2.5, 2.6, 2.6, 2.7, 2.8, 2.8, 2.9, 3, 3, 3.1, 3.1] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'blessedhammer', statIdx: [0], value: [50], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
              { treeId: 'cs', skillId: 'fistoftheheavens', statIdx: [0], value: [50], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
              { treeId: 'da', skillId: 'prayer', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 생명력 치유 +{0}%' }
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
            name: '축복받은 망치',
            desc: ['소용돌이를 그리며 뻗어 나가는', '무형의 망치를 소환하여 적중한 적에게 피해를 줍니다.'],
            level: '18',
            add: [
              { text: '언데드에게 주는 피해: +{0}%', value: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150] }
            ],
            stat: [
              { text: '마법 피해: {0}-{1}', value: [0, [12, 16], [20, 24], [28, 32], [36, 40], [44, 48], [52, 56], [60, 64], [68, 72], [78, 82], [88, 92], [98, 102], [108, 112], [118, 122], [128, 132], [138, 142], [148, 152], [160, 164], [172, 176], [184, 188], [196, 200]] },
              { text: '마나 소모: {0}', value: [0, 5, 5.2, 5.5, 5.7, 6, 6.2, 6.5, 6.7, 7, 7.2, 7.5, 7.7, 8, 8.2, 8.5, 8.7, 9, 9.2, 9.5, 9.7] }
            ],
            bonus: [
              { treeId: 'oa', skillId: 'blessedaim', statIdx: [0], value: [14], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' },
              { treeId: 'da', skillId: 'vigor', statIdx: [0], value: [14], type: ['rate'], text: '{n}: 레벨당 마법 피해 +{0}%' }
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
            name: '천상의 주먹',
            desc: ['번개로 대상을 강타하여 피해를 주고', '대상 주위의 적에게  신성한 빛줄기가 퍼져 나갑니다.'],
            level: '30',
            add: [
              { text: '마나 소모: {0}', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] }
            ],
            stat: [
              { text: '번개 피해: {0}-{1}', value: [0, [150, 200], [165, 215], [180, 230], [195, 245], [210, 260], [225, 275], [240, 290], [255, 305], [285, 335], [315, 365], [345, 395], [375, 425], [405, 455], [435, 485], [465, 515], [495, 545], [540, 590], [585, 635], [630, 680], [675, 725]] },
              { text: '신성한 빛줄기 피해: {0}-{1}', value: [0, [40, 50], [46, 56], [52, 62], [58, 68], [64, 74], [70, 80], [76, 86], [82, 92], [92, 102], [102, 112], [112, 122], [122, 132], [132, 142], [142, 152], [152, 162], [162, 172], [178, 188], [194, 204], [210, 220], [226, 236]] }
            ],
            bonus: [
              { treeId: 'cs', skillId: 'holybolt', statIdx: [1], value: [15], type: ['rate'], text: '{n}: 레벨당 신성한 빛줄기 피해 +{0}%' },
              { treeId: 'oa', skillId: 'holyshock', statIdx: [0], value: [7], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' }
            ]
          },
          {
            id: 'smite',
            top: '3.4',
            left: '72.2',
            tooltip: 'right',
            name: '강타',
            desc: ['적을 방패로 강타하여', '일시적으로 기절시킵니다.'],
            level: '1',
            add: [
              { text: '마나 소모: {0}', value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
            ],
            stat: [
              { text: '공격력: +{0}%', value: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300] },
              { text: '기절 지속시간: {0}초', value: [0, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4] }
            ]
          },
          {
            id: 'charge',
            top: '35.9',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'smite' }],
            name: '돌진',
            desc: ['적에게 돌진하여 공격합니다.'],
            level: '12',
            add: [
              { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
            ],
            stat: [
              { text: '명중률: +{0}%', value: [0, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245, 260, 275, 290, 305, 320, 335] },
              { text: '공격력: +{0}%', value: [0, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'vigor', statIdx: [1], value: [20], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' },
              { treeId: 'oa', skillId: 'might', statIdx: [1], value: [20], type: ['sum'], text: '{n}: 레벨당 피해 +{0}%' }
            ]
          },
          {
            id: 'holyshield',
            top: '68.1',
            left: '72.2',
            tooltip: 'right',
            required: [{ treeId: 'cs', skillId: 'blessedhammer' }, { treeId: 'cs', skillId: 'charge' }],
            name: '신성한 방패',
            desc: ['신성한 힘으로 방패를 강화합니다.'],
            level: '30',
            add: [
              { text: '마나 소모: {0}', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
            ],
            stat: [
              { text: '강타 피해: {0}-{1}', value: [0, [3, 6], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16], [15, 18], [17, 20], [20, 23], [23, 26], [26, 29], [29, 32], [32, 35], [35, 38], [38, 41], [41, 44], [45, 48], [49, 52], [53, 56], [57, 60]] },
              { text: '방어력: +{0}%', value: [0, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310] },
              { text: '막기 성공 확률: +{0}%', value: [0, 14, 18, 20, 23, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 33, 34, 34, 34, 34, 35] },
              { text: '지속시간: {0}초', value: [0, 30, 55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330, 355, 380, 405, 430, 455, 480, 505] }
            ],
            bonus: [
              { treeId: 'da', skillId: 'defiance', statIdx: [1], value: [15], type: ['sum'], text: '{n}: 레벨당 방어력 +{0}' }
            ]
          }]
        }
      ],
      sorceress: [
        {
          id: "cs",
          name: '냉기 주문',
          src: 'back.jpg',
          skills: [
            {
              id: 'frostnova',
              top: '20',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'icebolt' }
              ],
              name: '서릿발',
              desc: ['냉기 파장을 방출하여', '주위의 모든 적에게 피해를 주고', '이동 속도를 감소시킵니다.'],
              level: '6',
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [2, 4], [4, 6], [6, 9], [8, 11], [10, 14], [12, 16], [14, 19], [16, 21], [19, 25], [22, 28], [25, 32], [28, 35], [31, 39], [34, 42], [37, 46], [40, 49], [44, 54], [48, 58], [52, 63], [56, 67]] },
                { text: '냉기 지속시간: {0}초', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
                { text: '마나 소모: {0}', value: [0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [10], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'blizzard',
              top: '68.7',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              name: '눈보라',
              desc: ['거대한 얼음 조각들을 쏟아부어 적을 파괴합니다.'],
              level: '24',
              add: [
                { text: '지속시간: {0}초', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [45, 75], [60, 91], [75, 107, 90, 123], [105, 139], [120, 155], [135, 171], [150, 187], [180, 218], [210, 249], [240, 280], [270, 311], [300, 342], [330, 373], [360, 404], [390, 435], [435, 481], [480, 527], [525, 573], [570, 619]] },
                { text: '마나 소모: {0}', value: [0, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'frozenorb',
              top: '84.6',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'cs', skillId: 'frostnova' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [{ treeId: 'cs', skillId: 'blizzard' }],
              name: '얼음 보주',
              desc: ['얼음살을 퍼붓는 마법 구체를 생성하여', '적을 사멸시킵니다.'],
              level: '30',
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [40, 45], [50, 54], [59, 64], [69, 74], [79, 84], [89, 94], [99, 103], [108, 113], [120, 125], [132, 137], [144, 149], [155, 160], [167, 172], [179, 184], [191, 196], [202, 207], [216, 221], [230, 235], [244, 249], [257, 262]] },
                { text: '냉기 지속시간: {0}초', value: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
                { text: '마나 소모: {0}', value: [0, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [2], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'icebolt',
              top: '3.8',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'frozenorb' },
                { treeId: 'cs', skillId: 'iceblast' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              name: '얼음살',
              desc: ['마법 얼음 화살을 생성하여 적에게 피해를 주고', '이동 속도를 감소시킵니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] }
              ],
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [3, 5], [4, 6], [5, 8], [6, 9], [7, 11], [8, 12], [9, 14], [10, 15], [12, 18], [14, 20], [16, 23], [18, 25], [20, 28], [22, 30], [24, 33], [26, 36], [29, 39], [32, 42], [35, 46], [38, 49]] },
                { text: '냉기 지속시간: {0}초', value: [0, 6, 7.4, 8.8, 10.2, 11.6, 13, 14.4, 15.8, 17.2, 18.6, 20, 21, 22.8, 24.2, 25.6, 27, 28.4, 29.8, 31.2, 32.6] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frostnova', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [15], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'iceblast',
              top: '20',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'glacialspike' }
              ],
              required: [{ treeId: 'cs', skillId: 'icebolt' }],
              name: '얼음 작렬',
              desc: ['마법 얼음 구체를 생성하여', '적에게 피해를 주고 빙결시킵니다.'],
              level: '6',
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [8, 12], [15, 20], [22, 27], [29, 35], [36, 42], [43, 50], [50, 57], [57, 64], [71, 79], [85, 93], [99, 108], [113, 123], [127, 137], [141, 151], [155, 166], [169, 180], [190, 202], [211, 224], [232, 245], [253, 266]] },
                { text: '빙결 지속시간: {0}초', value: [0, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8] },
                { text: '마나 소모: {0}', value: [0, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'glacialspike', statIdx: [1], value: [10], type: ['rate'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'glacialspike',
              top: '52.5',
              left: '42.7',
              tooltip: 'middle',
              affected: [
                { treeId: 'cs', skillId: 'blizzard' },
                { treeId: 'cs', skillId: 'icebolt' },
                { treeId: 'cs', skillId: 'iceblast' }
              ],
              required: [{ treeId: 'cs', skillId: 'iceblast' }],
              name: '빙하 가시',
              desc: ['마법 얼음 혜성을 생성하여', '주위의 적을 빙결시키고 피해를 줍니다.'],
              level: '18',
              add: [
                { text: '반경: {0}미터', value: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35] }
              ],
              stat: [
                { text: '냉기 피해: {0}-{1}', value: [0, [16, 24], [23, 31], [30, 39], [37, 47], [44, 54], [51, 61], [58, 69], [65, 77], [78, 90], [91, 103], [104, 117], [117, 130], [130, 144], [143, 158], [156, 171], [169, 184], [183, 199], [197, 213], [211, 228], [225, 242]] },
                { text: '빙결 지속시간: {0}초', value: [0, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.7, 2.8, 2.9, 3, 3.2, 3.3, 3.4, 3.5, 3.6, 3.8, 3.9, 4, 4.1, 4.2] },
                { text: '마나 소모: {0}', value: [0, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'icebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'iceblast', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'blizzard', statIdx: [1], value: [3], type: ['rate'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' },
                { treeId: 'cs', skillId: 'frozenorb', statIdx: [0], value: [5], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' }
              ]
            },
            {
              id: 'coldmastery',
              top: '84.7',
              left: '42.8',
              tooltip: 'middle',
              name: '냉기 숙련',
              desc: ['지속효과 - 적의 냉기 저항을 감소시켜', '냉기 주문으로 주는 피해가 증가합니다.'],
              level: '30',
              stat: [
                { text: '적의 냉기 저항 -{0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] }
              ]
            },
            {
              id: 'frozenarmor',
              top: '3.7',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'shiverarmor' },
                { treeId: 'cs', skillId: 'chillingarmor' }
              ],
              name: '얼어붙은 갑옷',
              desc: ['자신의 방어력을 증가시키고', '자신을 공격한 적을 빙결시킵니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '방어력: {0}%', value: [0, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125] },
                { text: '{0}초 동안 빙결', value: [0, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 1.9, 2, 2.1, 2.2, 2.4, 2.5, 2.6, 2.7, 2.8, 3, 3.1, 3.2, 3.3, 3.4] },
                { text: '지속시간: {0}초', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [1], value: [5], type: ['sum'], text: '{n}: 레벨당 빙결 지속시간 +{0}%' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            },
            {
              id: 'shiverarmor',
              top: '35.9',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'frozenarmor' },
                { treeId: 'cs', skillId: 'chillingarmor' }
              ],
              required: [{ treeId: 'cs', skillId: 'frozenarmor' }],
              name: '오한 갑옷',
              desc: ['자신의 방어력을 증가시키고', '공격한 적에게 피해를 주고 빙결시킵니다.'],
              level: '12',
              add: [
                { text: '마나 소모: {0}', value: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11] }
              ],
              stat: [
                { text: '방어력: {0}%', value: [0, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123, 129, 135, 141, 147, 153, 159] },
                { text: '냉기 피해: {0}-{1}', value: [0, [6, 8], [8, 11], [10, 13], [12, 15], [14, 18], [16, 21], [18, 23], [20, 25], [23, 29], [26, 33], [29, 36], [32, 40], [35, 43], [38, 46], [41, 50], [44, 54], [48, 58], [52, 63], [56, 67], [60, 71]] },
                { text: '냉기 지속시간: {0}초', value: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
                { text: '지속시간: {0}초', value: [0, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [1], value: [9], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [3], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [1], value: [9], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'chillingarmor', statIdx: [3], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            },
            {
              id: 'chillingarmor',
              top: '68.6',
              left: '72.2',
              tooltip: 'right',
              affected: [
                { treeId: 'cs', skillId: 'frozenarmor' },
                { treeId: 'cs', skillId: 'shiverarmor' }
              ],
              required: [{ treeId: 'cs', skillId: 'shiverarmor' }],
              name: '냉기 갑옷',
              desc: ['방어력이 증가하고 원거리 공격자에게', '얼음살을 방출하여 보복합니다.'],
              level: '24',
              add: [
                { text: '마나 소모: {0}', value: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17] }
              ],
              stat: [
                { text: '방어력: {0}%', value: [0, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140] },
                { text: '냉기 피해: {0}-{1}', value: [0, [4, 6], [5, 8], [6, 9], [7, 10], [8, 12], [9, 14], [10, 15], [11, 16], [13, 19], [15, 22], [17, 24], [19, 27], [20, 29], [23, 31], [25, 34], [27, 36], [30, 40], [33, 43], [36, 47], [39, 51]] },
                { text: '지속시간: {0}초', value: [0, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258] }
              ],
              bonus: [
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [1], value: [7], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'frozenarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [1], value: [7], type: ['rate'], text: '{n}: 레벨당 냉기 피해 +{0}%' },
                { treeId: 'cs', skillId: 'shiverarmor', statIdx: [2], value: [10], type: ['sum'], text: '{n}: 레벨당 +{0}초' }
              ]
            }
          ]
        },
        {
          id: "ls",
          name: '번개 주문',
          src: 'back.jpg',
          skills: [
            {
              id: 'staticfield',
              top: '19.9',
              left: '13.4',
              tooltip: 'left',
              name: '전자기장',
              desc: ['전기장을 생성하여 주위 모든 적의', '생명력을 감소시킵니다.'],
              level: '6',
              add: [
                { text: '적을 {0}% 약화시킴', value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25] },
                { text: '마나 소모: {0}', value: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9] }
              ],
              stat: [
                { text: '반경: {0}미터', value: [0, 3.3, 4, 4.6, 5.3, 6, 6.6, 7.3, 8, 8.6, 9.3, 10, 10.6, 11.3, 12, 12.6, 13.3, 14, 14.6, 15.3, 16] }
              ]
            },
            {
              id: 'nova',
              top: '35.8',
              left: '13.4',
              tooltip: 'left',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'staticfield' }],
              name: '번개 파장',
              desc: ['번개 파장을 방출하여', '주위의 적에게 충격을 줍니다.'],
              level: '12',
              stat: [
                { text: '번개 피해: {0}-{1}', value: [0, [1, 20], [7, 28], [13, 36], [19, 44], [25, 52], [31, 60], [37, 68], [43, 76], [50, 85], [57, 94], [64, 103], [71, 112], [78, 121], [85, 130], [92, 139], [99, 148], [107, 158], [115, 168], [123, 178], [131, 188]] },
                { text: '마나 소모: {0}', value: [0, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'thunderstorm',
              top: '68.7',
              left: '13.4',
              tooltip: 'left',
              required: [{ treeId: 'ls', skillId: 'nova' }],
              name: '뇌우',
              desc: ['치명적인 뇌우를 소환하여', '적에게 벼락을 내리칩니다.'],
              level: '24',
              add: [
                { text: '마나 소모: {0}', value: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19] }
              ],
              stat: [
                { text: '번개 피해: {0}-{1}', value: [0, [1, 100], [11, 110], [21, 120], [31, 130], [41, 140], [51, 150], [61, 160], [71, 170], [81, 180], [91, 190], [101, 200], [111, 210], [121, 220], [131, 230], [141, 240], [151, 250], [162, 261], [173, 272], [184, 283], [195, 294]] },
                { text: '지속시간: {0}초', value: [0, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'chargedbolt',
              top: '3.6',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              name: '번개 줄기',
              desc: ['무작위 방향으로 날아가는', '전기 마력 줄기를 다수 생성합니다.'],
              level: '1',
              stat: [
                { text: '투사체 {0}개', value: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
                { text: '번개 피해: {0}-{1}', value: [0, [2, 4], [2, 4], [3, 5], [3, 5], [4, 6], [4, 6], [5, 7], [5, 7], [6, 8], [6, 8], [7, 9], [7, 9], [8, 10], [8, 10], [9, 11], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15]] },
                { text: '마나 소모: {0}', value: [0, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightning', statIdx: [1], value: [6], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'lightning',
              top: '35.8',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'chainlightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'chargedbolt' }],
              name: '번개',
              desc: ['강력한 번개를 생성하여', '적을 사멸시킵니다.'],
              level: '12',
              stat: [
                { text: '번개 피해: {0}-{1}', value: [0, [1, 40], [1, 48], [1, 56], [1, 64], [1, 72], [1, 80], [1, 88], [1, 96], [1, 108], [1, 120], [1, 132], [1, 144], [1, 156], [1, 168], [1, 180], [1, 192], [1, 212], [1, 232], [1, 252], [1, 272]] },
                { text: '마나 소모: {0}', value: [0, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'chargedbolt', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'nova', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'chainlightning', statIdx: [0], value: [8], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'chainlightning',
              top: '52.4',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'lightning' }
              ],
              required: [{ treeId: 'ls', skillId: 'lightning' }],
              name: '연쇄 번개',
              desc: ['다수의 대상에게 튕기는', '강력한 번개를 생성합니다.'],
              level: '18',
              stat: [
                { text: '{0}회 적중', value: [0, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9] },
                { text: '번개 피해: {0}-{1}', value: [0, [1, 38], [1, 48], [1, 58], [1, 68], [1, 78], [1, 88], [1, 99], [1, 109], [1, 121], [1, 133], [1, 145], [1, 157], [1, 169], [1, 181], [1, 193], [1, 205], [1, 219], [1, 233], [1, 247], [1, 261]] },
                { text: '마나 소모: {0}', value: [0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'chargedbolt', statIdx: [1], value: [4], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'nova', statIdx: [1], value: [4], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'lightning', statIdx: [1], value: [4], type: ['rate'], text: '{n}: 레벨당 번개 피해 +{0}%' },
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'lightningmastery',
              top: '84.5',
              left: '43.1',
              tooltip: 'middle',
              affected: [
                { treeId: 'ls', skillId: 'nova' },
                { treeId: 'ls', skillId: 'thunderstorm' },
                { treeId: 'ls', skillId: 'chargedbolt' },
                { treeId: 'ls', skillId: 'lightning' },
                { treeId: 'ls', skillId: 'chainlightning' },
                { treeId: 'ls', skillId: 'telekinesis' }
              ],
              name: '번개 숙련',
              desc: ['지속 효과 - 번개 주문으로 주는 모든 피해가 증가합니다.'],
              level: '30',
              stat: [
                { text: '번개 피해: +{0}%', value: [0, 50, 62, 74, 86, 98, 110, 122, 134, 146, 158, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278] }
              ]
            },
            {
              id: 'telekinesis',
              top: '19.8',
              left: '72.4',
              tooltip: 'right',
              affected: [
                { treeId: 'ls', skillId: 'energyshield' }
              ],
              name: '염력',
              desc: ['정신의 힘을 사용하여', '아이템을 줍거나, 물체를 사용하거나,', '적을 뒤로 밀쳐냅니다.'],
              level: '6',
              add: [
                { text: '마나 소모: {0}', value: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7] }
              ],
              stat: [
                { text: '번개 피해: {0}-{1}', value: [0, [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21]] },
              ],
              bonus: [
                { treeId: 'ls', skillId: 'lightningmastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'teleport',
              top: '52.3',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'ls', skillId: 'telekinesis' }],
              name: '순간이동',
              desc: ['시야 내의 목적지로 즉시 이동합니다.'],
              level: '18',
              stat: [
                { text: '마나 소모: {0}', value: [0, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5] }
              ]
            },
            {
              id: 'energyshield',
              top: '68.6',
              left: '72.4',
              tooltip: 'right',
              required: [{ treeId: 'ls', skillId: 'chainlightning' }, { treeId: 'ls', skillId: 'teleport' }],
              name: '마력 보호막',
              desc: ['마법 보호막을 생성하여 피해를 받을 때', '생명력 대신 마나를 소모합니다.'],
              level: '24',
              add: [
                { text: '마나 소모: {0}', value: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
              ],
              stat: [
                { text: '흡수 {0}%', value: [0, 20, 25, 30, 35, 40, 45, 50, 55, 57, 59, 61, 63, 65, 67, 69, 71, 72, 73, 74, 75] },
                { text: '지속시간: {0}초', value: [0, 144, 204, 264, 324, 384, 444, 504, 564, 624, 684, 744, 804, 864, 924, 984, 1044, 1104, 1164, 1224, 1284] }
              ],
              bonus: [
                { treeId: 'ls', skillId: 'telekinesis' }
              ]
            }
          ]
        },
        {
          id: "fs",
          name: '화염 주문',
          src: 'back.jpg',
          skills: [
            {
              id: 'inferno',
              top: '19.5',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'meteor' }
              ],
              name: '지옥불',
              desc: ['연속으로 불줄기를 방출하여', '적을 불태웁니다.'],
              level: '6',
              add: [
                { text: '시전에 필요한 최소 마나: {0}', value: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }
              ],
              stat: [
                { text: '평균 화염 피해: 초당 {0}-{1}', value: [0, [12, 25], [21, 34], [31, 43], [40, 53], [50, 62], [59, 71], [68, 81], [78, 90], [88, 101], [98, 111], [108, 122], [118, 132], [128, 143], [139, 153], [149, 164], [159, 175], [170, 186], [181, 197], [192, 208], [203, 220]] },
                { text: '범위: {0}미터', value: [0, 3.3, 3.3, 4, 4.6, 5.3, 5.3, 6, 6.6, 7.3, 7.3, 8, 8.6, 9.3, 9.3, 10, 10.6, 11.3, 11.3, 12, 12.6] },
                { text: '마나 소모: 초당 {0}', value: [0, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [13], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'blaze',
              top: '35.7',
              left: '13.3',
              tooltip: 'left',
              required: [{ treeId: 'fs', skillId: 'inferno' }],
              name: '불길',
              desc: ['지나간 자리에 불길을 남겨', '적을 불태웁니다.'],
              level: '12',
              stat: [
                { text: '평균 화염 피해: 초당 {0}-{1}', value: [0, [18, 37], [28, 46], [37, 56], [46, 65], [56, 75], [65, 84], [75, 93], [84, 103], [98, 117], [112, 131], [126, 145], [140, 159], [154, 173], [168, 187], [182, 201], [196, 215], [215, 234], [234, 253], [253, 271], [271, 290]] },
                { text: '화염 지속시간: {0}초', value: [0, 4.6, 5.6, 6.6, 7.6, 8.6, 9.6, 10.6, 11.6, 12.6, 13.6, 14.6, 15.6, 16.6, 17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6] },
                { text: '마나 소모: {0}', value: [0, 11, 11.5, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [4], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firewall', statIdx: [0], value: [1], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firewall',
              top: '52.1',
              left: '13.3',
              tooltip: 'left',
              affected: [
                { treeId: 'fs', skillId: 'blaze' }
              ],
              required: [{ treeId: 'fs', skillId: 'blaze' }],
              name: '화염벽',
              desc: ['화염벽을 생성하여', '주위의 적을 불태웁니다.'],
              level: '18',
              add: [
                { text: '화염 지속시간: {0}초', value: [3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6] }
              ],
              stat: [
                { text: '평균 화염 피해: 초당 {0}-{1}', value: [0, [70, 94], [112, 136], [155, 178], [197, 220], [239, 262], [281, 304], [320, 343], [366, 389], [431, 455], [497, 520], [563, 586], [628, 652], [694, 717], [759, 783], [825, 848], [891, 914], [989, 1012], [1088, 1110], [1186, 1209], [1284, 1307]] },
                { text: '범위: {0}미터', value: [0, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 20, 22, 23, 24, 26, 27, 28, 30] },
                { text: '마나 소모: {0}', value: [0, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [0], value: [4], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'inferno', statIdx: [0], value: [1], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firebolt',
              top: '3.3',
              left: '42.9',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'fireball' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              name: '화염탄',
              desc: ['불타오르는 마법 투사체를 생성합니다.'],
              level: '1',
              add: [
                { text: '마나 소모: {0}', value: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5] }
              ],
              stat: [
                { text: '화염 피해: {0}-{1}', value: [0, [3, 6], [4, 7], [6, 9], [7, 10], [9, 12], [10, 13], [12, 15], [13, 16], [15, 19], [17, 22], [19, 25], [21, 28], [23, 31], [25, 34], [27, 37], [29, 40], [33, 45], [37, 50], [41, 55], [45, 60]] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [16], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'meteor', statIdx: [0], value: [16], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'fireball',
              top: '35.7',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              required: [{ treeId: 'fs', skillId: 'firebolt' }],
              name: '화염구',
              desc: ['폭발하는 죽음의 화염 구체를 생성하여', '적을 덮칩니다.'],
              level: '12',
              add: [
                { text: '반경: {0}미터', value: [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6] }
              ],
              stat: [
                { text: '화염 피해: {0}-{1}', value: [0, [6, 14], [13, 22], [19, 29], [26, 36], [32, 44], [38, 51], [45, 59], [51, 66], [63, 79], [74, 92], [86, 104], [98, 116], [109, 129], [121, 142], [132, 154], [143, 166], [158, 181], [172, 197], [186, 212], [200, 227]] },
                { text: '마나 소모: {0}', value: [0, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [14], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'meteor', statIdx: [0], value: [14], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'meteor',
              top: '68.4',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'fireball' }
              ],
              required: [{ treeId: 'fs', skillId: 'firewall' }, { treeId: 'fs', skillId: 'fireball' }],
              name: '운석 낙하',
              desc: ['하늘에서 운석을 소환하여', '적을 으스러뜨리고 불태웁니다.'],
              level: '24',
              add: [
                { text: '반경: {0}미터', value: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] }
              ],
              stat: [
                { text: '화염 피해: {0}-{1}', value: [0, [80, 100], [103, 125], [126, 150], [149, 175], [172, 200], [195, 225], [218, 250], [241, 275], [280, 316], [319, 357], [358, 398], [397, 439], [436, 480], [475, 521], [514, 562], [553, 603], [633, 684], [711, 765], [790, 846], [869, 927]] },
                { text: '평균 화염 피해: 초당 {0}-{1}', value: [0, [34, 57], [43, 66], [52, 75], [62, 87], [70, 96], [82, 104], [91, 114], [100, 123], [111, 134], [123, 146], [134, 160], [146, 170], [160, 182], [170, 194], [182, 204], [194, 216], [207, 230], [221, 246], [236, 260], [250, 273]] },
                { text: '마나 소모: {0}', value: [0, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [5], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [5], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'inferno', statIdx: [1], value: [3], type: ['rate'], text: '{n}: 레벨당 평균 초당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0, 1], value: [[0], [0]], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'firemastery',
              top: '84.2',
              left: '43',
              tooltip: 'middle',
              affected: [
                { treeId: 'fs', skillId: 'inferno' },
                { treeId: 'fs', skillId: 'blaze' },
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'firebolt' },
                { treeId: 'fs', skillId: 'fireball' },
                { treeId: 'fs', skillId: 'meteor' },
                { treeId: 'fs', skillId: 'enchant' },
                { treeId: 'fs', skillId: 'hydra' }
              ],
              name: '화염 숙련',
              desc: ['지속 효과 - 화염 주문으로 주는 모든 피해가 증가합니다.'],
              level: '30',
              stat: [
                { text: '화염 피해: +{0}%', value: [0, 30, 37, 44, 51, 58, 65, 72, 79, 86, 93, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163] },
              ]
            },
            {
              id: 'warmth',
              top: '3.5',
              left: '72.3',
              tooltip: 'right',
              affected: [
                { treeId: 'fs', skillId: 'inferno' },
                { treeId: 'fs', skillId: 'blaze' },
                { treeId: 'fs', skillId: 'firewall' },
                { treeId: 'fs', skillId: 'enchant' }
              ],
              name: '온기',
              desc: ['지속 효과 - 마나 회복 속도가 증가합니다.'],
              level: '1',
              stat: [
                { text: '마나 회복 속도: +{0}%', value: [0, 30, 42, 54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186, 198, 210, 222, 234, 246, 258] }
              ]
            },
            {
              id: 'enchant',
              top: '52.1',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'fs', skillId: 'fireball' }, { treeId: 'fs', skillId: 'warmth' }],
              name: '마법부여',
              desc: ['대상 캐릭터 또는 하수인이 장착한 무기에 마법을 부여합니다.', '근접 무기에 화염 피해를 추가합니다.', '원거리 무기에는 1/3의 화염 피해를 추가합니다.'],
              level: '18',
              stat: [
                { text: '명중률: +{0}%', value: [0, 20, 29, 38, 47, 56, 65, 74, 83, 92, 101, 110, 119, 128, 137, 146, 155, 164, 173, 182, 191] },
                { text: '화염 피해: {0}-{1}', value: [0, [8, 10], [10, 12], [11, 15], [12, 18], [14, 20], [15, 23], [17, 25], [19, 27], [22, 32], [25, 36], [29, 41], [33, 45], [36, 50], [40, 55], [43, 59], [46, 64], [52, 70], [57, 77], [63, 83], [68, 89]] },
                { text: '지속시간: {0}초', value: [0, 144, 168, 192, 216, 240, 264, 288, 312, 336, 360, 384, 408, 432, 456, 480, 504, 528, 552, 576, 600] },
                { text: '마나 소모: {0}', value: [0, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'warmth', statIdx: [1], value: [9], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [1], value: [0], type: ['rate_array'], hide: true }
              ]
            },
            {
              id: 'hydra',
              top: '84.2',
              left: '72.3',
              tooltip: 'right',
              required: [{ treeId: 'fs', skillId: 'enchant' }],
              name: '히드라',
              desc: ['머리가 여러 개인 화염의 야수를 소환하여', '적을 잿더미로 만듭니다.'],
              level: '30',
              add: [
                { text: '지속시간: {0}초', value: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
              ],
              stat: [
                { text: '히드라 화염 피해: {0}-{1}', value: [0, [14, 18], [19, 26], [25, 33], [31, 39], [36, 46], [41, 52], [47, 59], [52, 65], [60, 73], [67, 82], [75, 90], [83, 99], [90, 107], [98, 116], [105, 124], [113, 133], [122, 144], [132, 154], [141, 165], [150, 175]] },
                { text: '마나 소모: {0}', value: [0, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29] }
              ],
              bonus: [
                { treeId: 'fs', skillId: 'firebolt', statIdx: [0], value: [3], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'fireball', statIdx: [0], value: [3], type: ['rate'], text: '{n}:레벨당 화염 피해 +{0}%' },
                { treeId: 'fs', skillId: 'firemastery', statIdx: [0], value: [0], type: ['rate_array'], hide: true }
              ]
            }
          ]
        }
      ],
      druid: [],
      lang: {
        notLearned: '아직 이 기술을 배우지 않았습니다.',
        remain: '남은 스킬 선택',
        required: '요구 레벨:',
        reached: '최대 레벨 도달',
        first: '처음',
        next: '다음',
        level: '레벨',
        current: '현재 스킬 레벨',
        bonus: '에 보너스 적용',
        max: '최대치',
        back: '반환',
        info: '정보보기',
        reset: '초기화'
      },
      desc: {
        desktop: [
          { img: ['left-click.png'], text: '스킬 추가' },
          { img: ['right-click.png'], text: '스킬 반환' },
          { key: ['시프트키'], img: ['left-click.png', 'right-click.png'], text: '가능한 스킬 최대치 추가 / 반환' }
        ],
        mobile: [
          { text: '- 최대치 체크 : 스킬 추가/반환시 최대치가 적용' },
          { text: '- 반환 체크 : 스킬 반환' },
          { text: '- 정보보기 체크 : 스킬 정보보기' }
        ]
      }
    }
  }
}