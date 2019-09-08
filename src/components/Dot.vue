<template>
  <div
    :class="{ dot: true, active: isActive, highlight: isHighlighted}"
    @click="onClick"
    @mouseenter="isHighlighted = true"
    @mouseleave="isHighlighted = false"
  >{{id+1}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DotDecorator extends Vue {
  @Prop() id!: number;

  isActive = false;
  isHighlighted = false;

  onClick() {
    this.isActive = !this.isActive;
    this.isHighlighted = false;
    this.$emit("active-changed", this.isActive, this.id);
  }
}
</script>

<style>
.dot {
  width: 42px;
  height: 42px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 0.4em;
  background-color: #333;
  color: #333;
  display: inline-flex;
  cursor: pointer;
}

.active {
  background-color: #bbb;
  color: #bbb;
}

.highlight {
  background-color: #888;
  color: #333;
}
</style>