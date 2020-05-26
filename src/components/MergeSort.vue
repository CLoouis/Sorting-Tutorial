<template>
  <div class="hello">
    <b-alert v-model="showError" variant="danger" dismissible>
      {{ errorMsg }}
    </b-alert>
    <h2>Merge Sort</h2>
    <div>
      <b-form-input
        v-model="value"
        class="input"
        placeholder="List number, split by comma e.g. '5,2,3,4'"
      ></b-form-input>
      <h3>
        <b-button @click="go()" variant="success">SORT!</b-button>
      </h3>
    </div>
    <div :key="el" v-for="el in svg">
      <svg :height="maxHeight * 2" :width="barWidth * maxElements" id="canvas" />
    </div>
    <br />
  </div>
</template>

<script>
import d3 from "../modules/d3.min";

import { createNewState, copyState, updateCopyPush } from "../utils/List";
import { PRIMARY_POSITION, SECONDARY_POSITION } from "../utils/Constants";

export default {
  name: "MergeSort",
  data() {
    return {
      showError: false,
      errorMsg: '',
      svg: 0,
      animationTime: null,
      sortTime: null,
      currentStep: 0,
      transitionTime: 500,
      value: "",
      UtilList: null,
      stateList: [],
      secondaryStatelist: [],
      barsOffset: null,
      barWidth: 50,
      maxHeight: 100,
      maxElements: 10,
      scaler: null
    };
  },
  created() {
    this.scaler = d3.scale.linear().range([0, this.maxHeight]);
    let UtilList = new Object();
    UtilList.height = d => {
      let barHeight = this.scaler(d.value);
      return barHeight - 15;
    };
    UtilList.transform = d => {
      if (d.secondPosition == PRIMARY_POSITION)
        return (
          "translate(" +
          (this.barsOffset + d.position * this.barWidth) +
          ", " +
          (this.maxHeight - this.scaler(d.value)) +
          ")"
        );
      else if (d.secondPosition == SECONDARY_POSITION)
        return (
          "translate(" +
          (this.barsOffset + d.position * this.barWidth) +
          ", " +
          (this.maxHeight * 2 - this.scaler(d.value)) +
          ")"
        );
      else if (d.secondPosition >= 0)
        return (
          "translate(" +
          (this.barsOffset + d.secondPosition * this.barWidth) +
          ", " +
          (this.maxHeight * 2 - this.scaler(d.value)) +
          ")"
        );
      else if (d.secondPosition < 0)
        return (
          "translate(" +
          (d.secondPosition * -1 - 1) * this.barWidth +
          ", " +
          (this.maxHeight * 2 - this.scaler(d.value)) +
          ")"
        );
      else return "translation(0, 0)";
    };
    this.UtilList = UtilList;
  },
  methods: {
    reset() {
      window.location = "/";
    },
    createList() {
      let numArray = this.value.split(",");
      if (!this.value) {
        this.errorMsg = "Check input!";
        this.showError = true
        return false
      }
      if (numArray.length > this.maxElements) {
        this.errorMsg = "Only " + this.maxElements + "!";
        this.showError = true
        return false;
      }
      for (let i = 0; i < numArray.length; i++) {
        let temp = +numArray[i];
        if (isNaN(temp)) {
          this.errorMsg = "Invalid input!";
          this.showError = true
          return false;
        }
        numArray[i] = +numArray[i];
      }

      this.loadNumberList(numArray);
      return true
    },
    loadNumberList(numArray) {
      this.currentStep = 0;
      this.statelist = [];
      this.statelist = [createNewState(numArray)];
      this.secondaryStatelist = null;
      this.drawState(0);
    },
    go() {
      this.svg = 0;
      this.showError = false
      this.stop();
      if (this.createList()) {
        this.sortTime = setTimeout(() => {
          this.svg = 1;
          this.sort();
        }, 500);
      } else {
        this.stop();
      }
    },
    sort() {
      return this.mergeSort();
    },
    mergeSort() {
      let numElements = this.statelist[0].secondElement.length;
      let state = copyState(this.statelist[0]);

      this.mergeSortSplit(state, 0, numElements);

      this.play();
      return true;
    },
    mergeSortSplit(state, startIndex, endIndex) {
      if (endIndex - startIndex <= 1) return;

      let middleIndex = Math.ceil((startIndex + endIndex) / 2);
      this.mergeSortSplit(state, startIndex, middleIndex);
      this.mergeSortSplit(state, middleIndex, endIndex);
      this.mergeSortMerge(state, startIndex, middleIndex, endIndex);

      let temp = [];
      for (let i = startIndex; i < endIndex; i++) {
        let newPosition = state.secondElement[i].secondPosition;
        temp[newPosition] = state.secondElement[i];
      }

      for (let i = startIndex; i < endIndex; i++) {
        state.secondElement[i] = temp[i];
      }

      for (let i = startIndex; i < endIndex; i++) {
        state.secondElement[i].secondPosition = PRIMARY_POSITION;
      }
      updateCopyPush(this.statelist, state);
    },
    mergeSortMerge(state, startIndex, middleIndex, endIndex) {
      let leftIndex = startIndex;
      let rightIndex = middleIndex;

      for (let i = startIndex; i < endIndex; i++) {
        if (
          leftIndex < middleIndex &&
          (rightIndex >= endIndex ||
            state.secondElement[leftIndex].value <=
              state.secondElement[rightIndex].value)
        ) {
          state.secondElement[leftIndex].secondPosition = i;
          leftIndex++;
          updateCopyPush(this.statelist, state);
        } else {
          state.secondElement[rightIndex].secondPosition = i;

          rightIndex++;
          updateCopyPush(this.statelist, state);
        }
      }
    },
    drawState(stateIndex) {
      this.drawText(this.statelist[stateIndex]);
    },
    drawText(state) {
      this.scaler.domain([
        0,
        d3.max(state.element, d => {
          return d.value;
        })
      ]);

      this.barsOffset = ((this.maxElements - state.element.length) * this.barWidth) / 2;

      let canvas = d3.select("#canvas");
      let canvasData = canvas.selectAll("g").data(state.element);
      let newData = canvasData.enter().append("g");
      newData
        .append("text")
        .attr("y", this.UtilList.height)
        .text(d => {
          return d.value;
        });
      canvasData.transition().attr("transform", this.UtilList.transform);
    },
    drawCurrentState() {
      this.drawState(this.currentStep);
    },
    play() {
      this.drawCurrentState();
      this.animationTime = setInterval(() => {
        this.drawCurrentState();
        if (this.currentStep < this.statelist.length - 1) this.currentStep++;
        else {
          clearInterval(this.animationTime);
        }
      }, this.transitionTime);
    },
    stop() {
      clearInterval(this.animationTime);
      clearTimeout(this.sortTime);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4289b9;
}
</style>
