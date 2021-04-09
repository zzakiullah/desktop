<template>
    <button class="shortcut"
            :title="title"
            @click="openWindow()">
        <img class="shortcut__icon" :src="iconSrc" :alt="title">
        <span class="shortcut__title">
            {{ title }}
        </span>
    </button>
</template>

<script>
import { bus } from "../main";

export default {
    name: "Shortcut",
    data: function() {
        return {
            windowsOpened: 0,
            iconSrc: ""
        }
    },
    methods: {
        openWindow: function() {
            bus.$emit("openWindow", this.title, this.windowsOpened);
            this.windowsOpened++;
        }
    },
    created: function() {
        this.iconSrc = require("../assets/" + this.title.toLowerCase() + ".png");
    },
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.shortcut {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    background-color: transparent;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s, border 0.3s;

    &:hover {
        background-color: rgba(#e5f3ff, 0.6);
        border: 2px solid #e5f3ff;
    }

    &:focus {
        background-color: rgba(#cce8ff, 0.6);
        border: 2px solid #cce8ff;
        outline: none;
    }

    &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: auto;
    }

    &__title {
        font-size: 11pt;
    }
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
