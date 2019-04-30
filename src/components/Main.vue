<template>
  <div class="wrapper">
    <main>
      &nbsp; index:
      <span class="index" v-for="i in symbols.length-1" :key="i">{{i}}</span>
      <br>&nbsp;&nbsp;&nbsp; rus:
      <char v-for="(v, i) in get(p => p.rus)" :key="`rus-${i+v}`" :content="v"/>
      <br>&nbsp;&nbsp;&nbsp; eng:
      <char v-for="(v, i) in get(p => p.eng)" :key="`eng-${i+v}`" :content="v"/>
      <br>&nbsp;&nbsp;&nbsp; num:
      <char v-for="(v, i) in get(p => p.num)" :key="`num-${i+v}`" :content="v"/>
      <br>inv rus:
      <char v-for="(v, i) in get(p => p.invRus)" :key="`invRus-${i+v}`" :content="v"/>
      <br>inv eng:
      <char v-for="(v, i) in get(p => p.invEng)" :key="`invEng-${i+v}`" :content="v"/>
      <br>inv num:
      <char v-for="(v, i) in get(p => p.invNum)" :key="`invNum-${i+v}`" :content="v"/>
      <hr>
      <symbol-component
        v-for="(s, index) in symbols"
        :key="`s-${s.Uid}`"
        :id="index"
        @value-changed="onValueChanged"
        @dispose="onDispose(index)"
        @insert="onInsert(index)"
      />
    </main>
    <footer>
      <a class="left" @click="symbols = [{ Uid: counter++, value: '000000' }]">clear</a>
      <a class="right" href="https://github.com/k0balt/braille/" target="blank">source</a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SymbolComponent from "./Symbol.vue";
import GetValue, { Value } from "../dict";
import CharComponent from "./Char.vue";

@Component({ components: { SymbolComponent, Char: CharComponent } })
export default class MainDecorator extends Vue {
  private counter = 1;
  private symbols = [{ Uid: 0, value: "000000" }];

  get(f: (p: Value) => string[]) {
    return this.values.slice(0, -1).map(f);
  }

  onValueChanged(id: number, value: string) {
    this.symbols[id].value = value;
    if (id === this.symbols.length - 1) {
      this.symbols.push({ Uid: this.counter++, value: "000000" });
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
    this.symbols.splice(id, 0, { Uid: this.counter++, value: "000000" });
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
  cursor: pointer;
}

.right {
  float: right;
  color: #333;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Roboto Mono", monospace;
}

main {
  flex: 1 0 auto;
  font-size: 2em;
  margin: 12px;
}

footer {
  flex: 0 0 auto;
  margin: 12px;
}

hr {
  margin: 12px 0;
}
</style>