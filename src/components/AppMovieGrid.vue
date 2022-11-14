<script>
import {store} from "../store"

export default{
  data(){
    return{
      store
    }
  },
  methods:{

  },
}
</script>

<template>
    <div class="main-container">
        <div class="row">
            <div class="col">fgf</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 
.row{
    display: flex;
    justify-content: start;

        .col{
            width: calc(100% / 5);
        }
}

</style>