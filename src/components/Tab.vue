<template>
    <button class="tab">
        <img class="tab__icon" :src="iconSrc">
        <span class="tab__title">{{ title }}</span>
    </button>
</template>

<script>
import { bus } from "../main";

export default {
    name: "Tab",
    data: function() {
        return {
            focused: true
        }
    },
    methods: {

    },
    props: {
        title: String
        iconSrc: String
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;

    &.focused {

    }

    &-icon {
        width: 30px;
        height: auto;
    }

    &-title {
        margin-left: 3px;
    }
}
</style>
