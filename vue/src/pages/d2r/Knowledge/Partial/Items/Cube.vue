<template>
  <div>
    <template v-if="$i18n.locale === 'ko'">
      test
    </template>
    <template v-else>
      <q-table class="bg-transparent font-kodia" dark :grid="$q.screen.lt.md" :data="data" :columns="columns"
        row-key="name" :filter="filter" hide-header>
        <template #body="props">
          <q-tr :props="props">
            <q-td key="title" :props="props">
              <div class="text-h5">{{props.row.title}}</div>
            </q-td>
            <q-td key="items" :props="props">
              <div class="row justify-between items-center">
                <div class="col row justify-between items-center" v-for="(item, idx) in props.row.items" :key="idx">
                  <q-icon name="add" size="sm" v-if="idx !== 0" />
                  <q-img width="40px" :src="require(`@/assets/images/d2r/items/${item.img}`)" />
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
        <template #item="props">
          <q-card class="bg-black">
            <q-card-section class="text-h6">{{props.row.name}}</q-card-section>
            <q-separator />
            <q-card-section>{{props.row.calories}}</q-card-section>
          </q-card>
        </template>
        <template v-slot:top-right>
          <q-input dark borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        filter: '',
        columns: [
          { name: 'title', align: 'left' },
          { name: 'items', align: 'center' }
        ],
        data: [
          {
            title: 'Secret Cow Level',
            items: [{
              name: 'Wirt\'s Leg',
              img: 'quests/wirtsleg.png'
            }, {
              name: 'Tome of Town Portal',
              img: 'consumables/tomeoftownportal.png'
            }]
          }
        ]
      }
    }
  }
</script>
<style>

</style>