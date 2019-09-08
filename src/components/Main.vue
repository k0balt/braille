<template>
  <main>
    &nbsp; index:
    <span class="index" v-for="i in symbols.length-1" :key="i">{{i}}</span>
    <br />&nbsp;&nbsp;&nbsp; rus:
    <char v-for="(v, i) in get(p => p.rus)" :key="`rus-${i+v}`" :content="v" />
    <br />&nbsp;&nbsp;&nbsp; eng:
    <char v-for="(v, i) in get(p => p.eng)" :key="`eng-${i+v}`" :content="v" />
    <br />&nbsp;&nbsp;&nbsp; num:
    <char v-for="(v, i) in get(p => p.num)" :key="`num-${i+v}`" :content="v" />
    <br />inv rus:
    <char v-for="(v, i) in get(p => p.invRus)" :key="`invRus-${i+v}`" :content="v" />
    <br />inv eng:
    <char v-for="(v, i) in get(p => p.invEng)" :key="`invEng-${i+v}`" :content="v" />
    <br />inv num:
    <char v-for="(v, i) in get(p => p.invNum)" :key="`invNum-${i+v}`" :content="v" />
    <hr />
    <symb
      v-for="(s, i) in symbols"
      :key="`s-${s.Uid}`"
      :id="i"
      @value-changed="onValueChanged"
      @dispose="onDispose(i)"
      @insert="onInsert(i)"
    />
    <img
      class="footer left"
      svg-inline
      src="../../resources/trash.svg"
      @click="symbols = [ getNewSymbol() ]"
      alt="clear"
    />
    <img
      class="footer right"
      svg-inline
      src="../../resources/github.svg"
      @click="goToGitHub"
      alt="GitHub"
    />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Symb from "./Symbol.vue";
import GetValue, { Value } from "../dict";
import Char from "./Char.vue";

@Component({ components: { Symb, Char } })
export default class MainDecorator extends Vue {
  private counter = 1;
  private symbols = [this.getNewSymbol()];

  get(f: (p: Value) => string[]) {
    return this.values.slice(0, -1).map(f);
  }

  onValueChanged(id: number, value: string) {
    this.symbols[id].value = value;
    if (id === this.symbols.length - 1) {
      this.symbols.push(this.getNewSymbol());
    }
  }

  get values() {
    this.counter;
    return this.symbols.map(p => GetValue(p.value));
  }

  onDispose(id: number) {
    if (id !== this.symbols.length - 1) this.symbols.splice(id, 1);
    this.counter++;
  }

  onInsert(id: number) {
    this.symbols.splice(id, 0, this.getNewSymbol());
  }

  goToGitHub() {
    window.open("https://github.com/k0balt/braille/", "_blank");
  }

  getNewSymbol() {
    return { Uid: this.counter++, value: "000000" };
  }
}
</script>

<style>
.index {
  width: 1.875em;
  font-size: 0.8em;
  display: inline-block;
  text-align: center;
}

.left {
  left: 8px;
}

.right {
  right: 8px;
}

.footer {
  vertical-align: bottom;
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: fixed;
  bottom: 8px;
}
</style>