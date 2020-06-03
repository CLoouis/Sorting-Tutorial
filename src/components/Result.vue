<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Step</th>
                <th scope="col">Array</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, index) in currentStep" v-bind:key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{entry}}</td>
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
            currentStep: [1, 2, 3]
        }
    }
}
</script>