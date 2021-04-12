<template>
    <div class="about">
        <img class="about__img">
        <div class="about__description">

        </div>
        <div class="about__skills">

        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    data: function() {
        return {

        }
    },
    methods: {

    },
    props: {
        imgSrc: ""
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/_mixins.scss";
@import "../../../styles/_variables.scss";

.about {
    display: flex;

    &__img {

    }
}
</style>
