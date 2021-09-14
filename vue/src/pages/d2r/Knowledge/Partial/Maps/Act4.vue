<template>
  <div class="knowledge">
    <template v-if="$i18n.locale === 'ko'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="grey-8" class="text-title" side="left" icon="fab fa-fort-awesome">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Pandemonium Fortress</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act4/PandemoniumFortress.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" class="text-title" side="right" icon="border_outer">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Outer Steppes</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act4/OuterSteppes.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo" class="text-title" side="left" icon="fas fa-campground">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Plains of Despair</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act4/PlainsofDespair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Izual</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" class="text-title" side="right" icon="stairs">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">City of the Damned</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act4/CityoftheDamned.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-8" class="text-title" side="left" icon="local_fire_department">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">River of Flame</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act4/RiverofFlames.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Hellforge</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" class="text-title" side="right" icon="fas fa-dice-d20">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Chaos Sanctuary</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act4/ChaosSanctuary.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Diablo</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 IV 완료
        </q-timeline-entry>
      </q-timeline>
      <p class="text-right text-grey-6">출처 : <a style="text-decoration: none;" class="text-title" target="_blank"
          href="http://classic.battle.net/diablo2exp/maps/act4.shtml">아리앗서밋</a></p>
    </template>
    <template v-if="$i18n.locale === 'en'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="grey-8" class="text-title" side="left" icon="fab fa-fort-awesome">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Pandemonium Fortress</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act4/PandemoniumFortress.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" class="text-title" side="right" icon="border_outer">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Outer Steppes</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act4/OuterSteppes.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo" class="text-title" side="left" icon="fas fa-campground">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Plains of Despair</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act4/PlainsofDespair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Izual</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" class="text-title" side="right" icon="stairs">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">City of the Damned</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act4/CityoftheDamned.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-8" class="text-title" side="left" icon="local_fire_department">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">River of Flame</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act4/RiverofFlames.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Hellforge</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" class="text-title" side="right" icon="fas fa-dice-d20">
          <div class="row">
            <q-card dark bordered class="map-card bg-knowledge text-grey-5 text-weight-bold"
              style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Chaos Sanctuary</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act4/ChaosSanctuary.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Diablo</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act IV Completed
        </q-timeline-entry>
      </q-timeline>
      <p class="text-right text-grey-6">Source : <a style="text-decoration: none;" class="text-title" target="_blank"
          href="http://classic.battle.net/diablo2exp/maps/act4.shtml">Arreat Summit</a></p>
    </template>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    computed: {
      layout() {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
      }
    },
    mounted() {
      this.injectImg()
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      injectImg() {
        let images = []
        let i = 0
        while (i < 200) {
          if (this.$refs[`img${i}`]) {
            images.push(this.$refs[`img${i}`])
            i++
          }
          else
            break

        }
        this.setImages(images.map(e => { return { 'element': e.$el, 'src': e.src } }))
      }
    }
  }
</script>
<style scoped>
  .map-card {
    width: 410px;
    max-width: 100%;
  }

  @media screen and (max-width:599px) {
    .map-card {
      font-size: 0.7em;
      word-break: keep-all;
      line-height: 1.4em;
    }
  }
</style>