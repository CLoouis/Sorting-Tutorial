<template>
  <div class="hello">
    <b-alert v-model="showError" variant="danger" dismissible>
      {{ errorMsg }}
    </b-alert>
    <h2>Bubble Sort</h2>
    <span>Kompleksitas: O( n<sup>2</sup> ) </span>
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
    <div :key="id" v-for="(step, id) in steps" class="steps">
      <div v-if="id == currentStep">
        <span :key="idx" v-for="(o, idx) in step.arr" :class=" idx == step.firstElement ? 'selected1' : (idx == step.secondElement ? 'selected2' : null) " >{{ o.value }}</span>
        <div>
          <p>{{ step.status }}</p>
        </div>
      </div>
    </div>
    <button v-if="steps.length > 0" :disabled="currentStep == 0" @click="currentStep--">Prev</button>
    <button v-if="steps.length > 0" :disabled="currentStep == steps.length - 1" @click="currentStep++">Next</button>

    <footer class="mt-4 mb-4">
      Made with <BIconHeartFill />
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ilhamsyahids/"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon size="lg" :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a
            href="https://ilhamsyahids.codes/"
            target="_blank"
            rel="noopener"
          >
            <b-icon-person-fill />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { BIconPersonFill, BIconHeartFill } from 'bootstrap-vue'
import Step from '../utils/Step'

export default {
  name: "BubbleSort",
  components: {
    BIconPersonFill,
    BIconHeartFill
  },
  data() {
    return {
      value: '',
      numArray: [],
      steps: [],
      showError: false,
      errorMsg: '',
      currentStep: 0
    };
  },
  methods: {
    bubbleSort() {
      let swap;
      let end = 0
      do {
        swap = false;
        for (let i = 1; i < this.numArray.length - end; i++) {
          this.steps.push(
            new Step(
              this.numArray.map(e => e),
              i-1,
              i,
              `Bandingkan element ke-${i} (${this.numArray[i-1].value}) dengan element ke-${i+1} (${this.numArray[i].value})`
            )
          )
          if (this.numArray[i-1].value > this.numArray[i].value) {
            const temp = this.numArray[i-1]
            this.numArray[i-1] = this.numArray[i]
            this.numArray[i] = temp
            swap = true
            this.steps.push(
              new Step(
                this.numArray.map(e => e),
                i,
                i-1,
                `Karena ${this.numArray[i-1].value} < ${this.numArray[i].value}, maka swap`
              )
            )
          }
        }
        end++
      } while (swap)
      this.steps.push(
        new Step(
          this.numArray.map(e => e),
          -1,
          -1,
          'List sudah terurut'
        )
      )
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

      this.numArray = numArray.map(el => {
        return {
          value: el,
          code: 0
        }
      })
    },
    go() {
      this.steps = []
      this.currentStep = 0
      this.createList()
      this.bubbleSort()
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

.selected1 {
  color: red;
}

.selected2 {
  color: blue;
}

.steps {
  margin: 10px auto;
}

</style>
