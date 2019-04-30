<template>
  <span :class="{char: true, und: isUndefined}">{{content}}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { und } from "../dict";
@Component
export default class CharDecorator extends Vue {
  @Prop() content!: string;

  isUndefined = this.content === und;
}
</script>

<style>
.char {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}

.und {
  color: indianred;
}
</style>