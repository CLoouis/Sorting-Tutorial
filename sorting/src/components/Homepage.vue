<template>
  <div class="hello">
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" style="text-align:left">
            Sorting Tutorial
          </h1>
          <h2 class="subtitle">
            A Simple Sorting Simulation
          </h2>
        </div>
      </div>
    </section>
    <div class="columns">
      <!-- First Column : Form -->
      <div class="column">
        <div class="boxes">
          <div class="box">
            <p id="sort-opt" style="text-align:left; margin-bottom:10px">
              Sorting
            </p>

            <b-field>
              <b-radio-button
                v-model="radioButton"
                native-value="Bubble Sort"
                name="option"
                @click.native="giveDesc('bubble')"
              >
                <span>Bubble Sort</span>
              </b-radio-button>

              <b-radio-button
                v-model="radioButton"
                native-value="Merge Sort"
                name="option"
                @click.native="giveDesc('merge')"
              >
                <span>Merge Sort</span>
              </b-radio-button>
            </b-field>

            <b-field label="Values" style="display:block; text-align:left">
              <b-input
                v-model="text"
                placeholder="Comma delimited (max 10 values)"
                id="arr"
                required
                validation-message="Invalid input"
                pattern="\d+(?:,\d+)*"
              >
              </b-input>
            </b-field>

            <b-button
              type="is-primary"
              native-type="submit"
              value="submit"
              @click="processInput"
            >
              Sort!
            </b-button>
          </div>
        </div>
      </div>

      <!-- Second Column : Explanation -->
      <div class="column">
        <div class="boxes">
          <div class="box">
            <h2>{{ radioButton }}</h2>
            <hr />
            <p id="desc">Your Sorting Method Here</p>
            <h3 id="compl"></h3>
          </div>
        </div>
      </div>
    </div>

    <div class="sorting">
      <div class="box">
        <h2>Sorting Steps</h2>
        <p id="stepdesc"></p>
        <div class="steps">
          <b-field id="show" style="display: inline-block">
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >1</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >2</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >3</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >4</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >5</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >6</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >7</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >8</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >9</b-button
            >
            <b-button
              size="is-medium"
              class="array"
              name="array"
              style="margin:5px"
              >10</b-button
            >
          </b-field>
          <br />
          <b-button
            type="is-primary"
            name="nav"
            style="margin-right:20px"
            @click="stepBack"
            disabled
          >
            <b-icon pack="fas" icon="chevron-left"></b-icon>
          </b-button>
          <label id="curr"></label>
          <b-button
            type="is-primary"
            name="nav"
            style="margin-left:20px"
            @click="stepNext"
            disabled
          >
            <b-icon pack="fas" icon="chevron-right"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bubble from "./bubble.js";
import * as merge from "./merge.js";
export default {
  name: "homepage",
  methods: {
    processInput() {
      this.sort_method = this.radioButton;
      if (this.isInputValid()) {
        var arr_string = document.getElementById("arr").value;
        var arr = this.convertToArray(arr_string);
        this.steps = [];
        if (this.sort_method == "Merge Sort") {
          merge.sort(arr, 0, arr.length - 1);
          this.steps = merge.steps;
        } else {
          bubble.sort(arr);
          this.steps = bubble.steps;
        }
        this.initArray();
      }
    },
    initArray() {
      this.current = 0;
      console.log(this.steps);
      var array_btn = document.getElementsByName("array");
      for (var i = 0; i < 10; ++i) {
        array_btn[i].innerHTML = " ";
        array_btn[i].disabled = true;
        array_btn[i].style.backgroundColor = "white";
        array_btn[i].style.borderColor = "lightgray";
        array_btn[i].style.color = "lightgray";
      }
      var first_step = this.steps[0].stats;
      for (i = 0; i < first_step.length; ++i) {
        array_btn[i].disabled = false;
        array_btn[i].innerHTML = first_step[i];
        array_btn[i].style.borderColor = "black";
        array_btn[i].style.color = "black";
      }

      var navig = document.getElementsByName("nav");
      for (i = 0; i < navig.length; ++i) navig[i].disabled = false;
      this.updateArray();
    },
    isFilled() {
      var filled = false;
      var options = document.getElementsByName("option");
      var arr = document.getElementById("arr").value;
      for (var i = 0; i < options.length; ++i) {
        if (options[i].checked) {
          filled = true;
        }
      }
      if (filled && arr.length > 0) {
        return true;
      }
      return false;
    },
    isInputValid() {
      if (this.isFilled()) {
        var arr = document.getElementById("arr").value;
        // Checks if values are comma delimited
        if (!arr.match(/\d+(?:,\d+)*$/)) {
          this.giveWarning("Invalid input");
          return false;
        } else {
          var temp = this.convertToArray(arr);
          if (temp.length > 10) {
            this.giveWarning("Input too long!");
            return false;
          }
          return true;
        }
      } else {
        // Warning: fields not filled
        this.giveWarning("Please fill out all fields!");
        return false;
      }
    },
    giveWarning(msg) {
      this.$buefy.toast.open({
        message: msg,
        duration: 1500,
        type: "is-danger"
      });
    },
    giveDesc(value) {
      // var content = document.getElementById("desc").innerHTML;
      if (value == "bubble") {
        document.getElementById("desc").innerHTML =
          "Cycles through a list, " +
          "analyzing pairs of elements from " +
          "beginning to end. If the leftmost element in the " +
          "pair is less than the rightmost element, the pair " +
          "will remain in that order. If the rightmost " +
          "element is less than the leftmost element, then" +
          "the two elements will be switched. ";
        document.getElementById("compl").innerHTML =
          "Complexity: O(n<sup>2</sup>)";
      } else {
        document.getElementById("desc").innerHTML =
          " Repeatedly divides the data in half, sorts each half," +
          " and combines the sorted halves into a sorted whole. " +
          "This divide and conquer algorithm is often implemented recursively" +
          "and on average, has a better time complexity than other brute-force sorting method";
        document.getElementById("compl").innerHTML = "Complexity: O(n log n)";
      }
    },
    convertToArray(arr) {
      return arr.split`,`.map(x => +x);
    },
    stepBack() {
      if (this.current > 0) {
        this.current--;
        this.updateArray();
      }
    },
    stepNext() {
      if (this.current < this.steps.length - 1) {
        this.current++;
        this.updateArray();
      }
    },
    updateArray() {
      var this_step = this.steps[this.current];
      var array_btn = document.getElementsByName("array");
      if (this.sort_method == "Bubble Sort") {
        bubble.update(this_step, array_btn);
      } else {
        merge.update(
          this_step,
          array_btn,
          this.current == this.steps.length - 1
        );
      }
      document.getElementById("curr").innerHTML =
        this.current + 1 + "/" + this.steps.length;
    }
  },
  data() {
    return {
      radioButton: "Your Sorting Method Here",
      text: "",
      current: 0,
      sort_method: "",
      steps: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 26px;
  font-weight: 700px;
}
h2 {
  font-size: 22px;
  font-weight: 600;
  text-align: left;
}
.array {
  background-color: white;
  border-color: lightgray;
  color: lightgray;
}
.boxes {
  width: 97.5%;
  height: 60%;
  margin: auto;
  padding-top: 20px;
}
.hello {
  // padding: 50px;
  padding-bottom: 100px;
  // padding-left: 20px;
  // padding-right: 20px;
  background-color: #ebe2f9;
}
.sorting {
  width: 98.75%;
  margin: auto;
}
.steps {
  text-align: center;
}
#sort-opt {
  text-align: left;
  margin-bottom: 10px;
  font-weight: 600;
}
#desc {
  text-align: left;
}
#stepdesc {
  text-align: left;
}
#compl {
  text-align: left;
  font-weight: 600;
}
</style>
