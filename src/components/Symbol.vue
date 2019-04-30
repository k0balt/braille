<template>
  <div class="symbol">
    <div
      :class="{plus: true, big: isBigPlus}"
      @mouseenter="isBigPlus = true"
      @mouseleave="isBigPlus = false"
      @click="insert"
    >
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="6"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        :width="plusSize"
        :height="plusSize"
        :stroke="plusColor"
        :color="plusColor"
        style="vertical-align: middle;"
      >
        <path d="M20 12L4 12M12 4L12 20"></path>
      </svg>
    </div>
    <div>
      <div class="title" @dblclick="$emit('dispose')">{{id+1}}</div>
      <div class="block">
        <dot v-for="i in 6" :key="i" :id="i-1" @active-changed="onActiveChanged"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import DotComponent from "./Dot.vue";

@Component({ components: { dot: DotComponent } })
export default class SymbolDecorator extends Vue {
  @Prop() id!: number;
  isBigPlus = false;

  get plusSize() {
    return this.isBigPlus ? "24px" : "12px";
  }

  get plusColor() {
    return this.isBigPlus ? "#bbb" : "#888";
  }
  dots = [false, false, false, false, false, false];

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
  align-self: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}

.big {
  padding-left: 4px;
  padding-right: 4px;
}

.title {
  text-align: center;
  font-size: 0.5em;
  cursor: pointer;
}

.block {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
}
</style>