<template>
  <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
    <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
      @dragstart="startDrag($event, item)">
      {{ item.title }}
    </div>
  </div>

   <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
      <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true"
        @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const items = ref([
      { id: 0, title: 'item a', list: 1 },
      { id: 1, title: 'item b', list: 1 },
      { id: 2, title: 'item c', list: 2 },
    ])
    const getList = (list) => {
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    }
    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id == itemID)
      item.list = list
    }
    return {
      getList,
      onDrop,
      startDrag
    }
  }
}
</script>
<style scoped>
 *{
  font-size: 32px;
  color: darkblue;
 }
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #42e14f;
  padding: 30px;
  min-height: 10px;
  border: 2px solid darkgreen;
  border-radius: 6px;
}

.drop-el {
  padding: 5px;
    margin-bottom: 10px;
  color: whitesmoke;
  margin: 10px;
}

.drag-el:nth-last-of-type(1){
  margin-bottom: 0;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}</style>
