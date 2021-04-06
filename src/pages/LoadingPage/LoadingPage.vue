<template>
    <div class="loading-page">
        
    </div>
</template>

<script>
export default {
    name: "LoadingPage",
    data: function() {
        return {

        }
    },
    methods: function() {

    },
    props: {

    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";
@import "../../styles/_variables.scss";

.loading-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

@include media($SM_SCREEN) {

}

@include media($MD_SCREEN) {

}

@include media($LG_SCREEN) {

}

@include media($XL_SCREEN) {

}
</style>
