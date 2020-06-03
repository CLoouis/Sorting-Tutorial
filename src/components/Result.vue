<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Step</th>
                <th scope="col">Array Condition</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, index) in currentStep" v-bind:key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{entry.idx}}</td>
                <td>{{entry.val}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        step: Function
    },
    data : function(){
        return {
            currentStep: [
                {idx : 1, val : 2},
                {idx : 2, val : 3}, 
                {idx : 3, val : 4},  
            ]
        }
    }
}
</script>