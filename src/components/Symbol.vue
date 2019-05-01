<template>
  <div class="symbol">
    <div class="table">
      <div class="row">
        <div class="cell"/>
        <div class="cell title" @dblclick="$emit('dispose')">{{id+1}}</div>
      </div>
      <div class="row">
        <div class="cell">
          <svg
            class="plus"
            viewBox="0 0 32 32"
            @mouseleave="isBigPlus = false"
            @mouseenter="isBigPlus = true"
            @click="insert"
          >
            <path
              stroke-linecap="square"
              :stroke="plus.color"
              :stroke-width="plus.width"
              :d="plus.path"
            ></path>
          </svg>
        </div>
        <div class="dots">
          <dot v-for="i in 6" :key="i" :id="i-1" @active-changed="onActiveChanged"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import DotComponent from "./Dot.vue";

@Component({ components: { dot: DotComponent } })
export default class BlockDecorator extends Vue {
  @Prop() id!: number;
  isBigPlus = false;
  dots = [false, false, false, false, false, false];

  get plus() {
    return {
      color: this.isBigPlus ? "#bbb" : "#888",
      width: this.isBigPlus ? 6 : 4,
      path: this.isBigPlus
        ? "M24 16L8 16M16 8L16 24"
        : "M20 16L12 16M16 12L16 20"
    };
  }

  onActiveChanged(isActive: boolean, id: number) {
    this.dots[id] = isActive;
    this.$emit("value-changed", this.id, this.getValue());
  }

  insert() {
    this.$emit("insert");
    this.isBigPlus = false;
  }

  getValue(): string {
    return this.dots.map(d => (d ? "1" : "0")).join("");
  }
}
</script>

<style>
.table {
  display: table;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  vertical-align: middle;
}
.symbol {
  display: inline-flex;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.plus {
  cursor: pointer;
  width: 32px;
  height: 32px;
}

.title {
  text-align: center;
  font-size: 0.5em;
  cursor: pointer;
}

.dots {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
}
</style>