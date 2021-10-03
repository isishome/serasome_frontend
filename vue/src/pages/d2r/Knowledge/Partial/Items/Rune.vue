<template>
  <div class="full-width">
    <div class="row justify-end fit">
      <q-btn dense icon="clear_all" class="text-weight-bold" padding="4px" :label="$t('d2r.knowledge.items.reset')"
        :size="$q.screen.gt.sm ? 'md' : 'sm'" @click="refresh" />
    </div>
    <div class="row justify-start text-center q-col-gutter-sm rune-wrap full-width non-selectable">
      <div v-for="rune in runes" :key="rune.no" class="rune">
        <q-btn no-caps dense class="row fit" :class="rune.selected ? 'selected' : ''" @click="selectedRune(rune)">
          <div class="col-12 full-width"><img :src="require(`@/assets/images/d2r/items/runes/${rune.file}.png`)"
              style="width: 100%;" /></div>
          <div class="col-1 full-height full-width word-keep rune-name text-body1 ellipsis">{{rune.name}}</div>
        </q-btn>
      </div>
    </div>
    <q-table class="bg-transparent" table-class="table-style" card-container-class="q-col-gutter-md justify-center"
      :grid="$q.screen.lt.lg" dark :data="filtering" :columns="columns" row-key="name" :filter="filter"
      :filter-method="customFilter" :pagination="{rowsPerPage :0}" :hide-header="$q.screen.lt.sm" hide-pagination>
      <template v-slot:no-data>
        <div class="row justify-center full-width text-body2">{{$t('d2r.knowledge.items.noData')}}</div>
      </template>
      <template v-slot:top>
        <div class="row justify-end full-width">
          <q-input dark dense debounce="400" :label="$t('btn.search')" color="grey-4 text-title" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" color="grey-4 text-title" />
            </template>
          </q-input>
        </div>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div class="text-h6 word-keep text-amber-6 column">
              <div class="col">{{props.row.name}}</div>
              <div class="col text-teal-4 text-subtitle2">clvl
                {{props.row.level}}
              </div>
              <div class="col q-gutter-x-xs">
                <q-badge color="red" v-if="props.row.hot === true">{{$t('d2r.knowledge.items.runewordTip.hot')}}
                </q-badge>
                <q-badge color="blue-9" v-if="props.row.mercenary === true">
                  {{$t('d2r.knowledge.items.runewordTip.mercenary')}}
                </q-badge>
              </div>
            </div>
          </q-td>
          <q-td key="material" :props="props">
            <div class="text-subtitle1 word-keep">{{props.row.material}}<span
                class="text-red-5">({{props.row.runeword.length}})</span>
            </div>
          </q-td>
          <q-td key="stats" :props="props">
            <ul class="column text-body2 stats">
              <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
              </li>
            </ul>
            <ul class="column text-body2 stats">
              <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
              </li>
            </ul>
          </q-td>
          <q-td key="runeword" :props="props">
            <div class="text-h6 word-keep text-grey-5" v-html="parsRuneWord(props.row.runeword)"></div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <div class="col-md-6 col-12">
          <q-card dark class="card text-center" bordered>
            <q-card-section class="text-grey-6 text-h6 word-keep">
              <div class="text-h6 word-keep text-amber-6 column">
                <div class="col">{{props.row.name}}</div>
                <div class="col text-teal-4 text-subtitle2">clvl
                  {{props.row.level}}
                </div>
                <div class="col q-gutter-x-xs">
                  <q-badge color="red" v-if="props.row.hot === true">{{$t('d2r.knowledge.items.runewordTip.hot')}}
                  </q-badge>
                  <q-badge color="blue-9" v-if="props.row.mercenary === true">
                    {{$t('d2r.knowledge.items.runewordTip.mercenary')}}
                  </q-badge>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-subtitle1 word-keep">{{props.row.material}}<span
                  class="text-red-5">({{props.row.runeword.length}})</span>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <ul class="column text-body2 stats">
                <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
                </li>
              </ul>
              <ul class="column text-body2 stats">
                <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
                </li>
              </ul>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-h6 word-keep text-grey-5" v-html="parsRuneWord(props.row.runeword)"></div>
            </q-card-section>
          </q-card>
        </div>
      </template>
      <template v-slot:top-right>
        <q-input dark borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%EB%A3%AC%EC%96%B4%20%EC%95%84%EC%9D%B4%ED%85%9C">{{$t('d2r.knowledge.namuWiki')}}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/runewords/">{{$t('d2r.knowledge.pureDiablo')}}</a>
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        filter: '',
        columns: [
          { name: 'name', label: this.$t('d2r.knowledge.items.runewordName'), align: 'center', style: 'width:20%' },
          { name: 'material', label: this.$t('d2r.knowledge.items.runewordMaterial'), align: 'center', style: 'width:10%' },
          { name: 'stats', label: this.$t('d2r.knowledge.items.runewordStats'), align: 'center' },
          { name: 'runeword', label: this.$t('d2r.knowledge.items.runeword'), align: 'center', style: 'width:30%' },
        ],
        runes: this.$t('d2r.knowledge.items.runeData').map(r => ({ ...r, selected: false })),
        runeWords: this.$t('d2r.knowledge.items.runeWords')
      }
    },
    computed: {
      filtering() {
        const selected = this.runes.filter(r => r.selected === true)

        if (selected.length > 0)
          return this.runeWords.filter(rw => selected.filter(r => !rw.runeword.includes(r.no)).length === 0)
        else
          return this.runeWords
      }
    },
    methods: {
      selectedRune(rune) {
        rune.selected = !rune.selected
      },
      refresh() {
        this.runes.filter(r => r.selected === true).forEach(r => { r.selected = false })
      },
      parsRuneWord(runeword) {
        return runeword.map(r => this.runes.find(rl => rl.no === r).name).join(' <span class="text-grey-7">+</span> ')
      },
      customFilter(rows, terms) {
        if (terms !== '') {
          terms = terms.toLowerCase().split(' ')
          const filter2 = this.filtering.filter(c => new RegExp(terms.join('|'), 'gi').test(c.name) || new RegExp(terms.join('|'), 'gi').test(c.stats.join('|')))
          return filter2
        }
        else
          return this.filtering
      }
    }
  }
</script>
<style>
  th {
    background-color: rgba(184, 156, 91, .2) !important;
    color: rgba(184, 156, 91, 1) !important;
    font-size: 1.4em !important;
    font-family: 'Kodia';
  }

  td {
    white-space: normal !important;
  }

  .card {
    background-color: rgba(20, 20, 20, 1) !important;
    border-color: rgba(184, 156, 91, .5) !important;
    border-radius: 4px;
  }

  .card hr {
    background-color: rgba(184, 156, 91, .5) !important;
  }

  .table-style table {
    box-shadow: inset 0 0 1px 1px rgba(184, 156, 91, .5) !important;
    background-color: rgba(10, 10, 10, 1) !important;
    border-radius: 4px;
  }

  .table-style td {
    border-color: rgba(184, 156, 91, .5) !important;
  }

  .text-underline {
    text-decoration: underline;
  }

  .stats {
    padding-left: 0;
    list-style: none;
  }

  .stats li {
    color: rgba(100, 100, 250, 1);
  }

  .stats li.part {
    color: rgba(150, 50, 0, 1);
  }

  .rune .selected {
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px rgba(184, 156, 91, 1);
    background-color: rgba(184, 156, 91, .2);
  }

  .rune .selected .rune-name {
    color: rgba(184, 106, 40, 1);
    font-weight: bold;
  }

  .rune {
    width: 7%;
  }

  @media screen and (max-width:1023px) {
    .rune-name {
      font-size: 0.7em;
      line-height: 1.2em;
    }

    .rune {
      min-width: 10% !important;
    }
  }

  @media screen and (max-width:599px) {
    .rune {
      min-width: 20% !important;
    }

    .rune .selected {
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px rgba(184, 156, 91, 1);
    }
  }
</style>