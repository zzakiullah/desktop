<template>
    <button class="shortcut"
            :title="title"
            @click="openWindow()">
        <span class="shortcut__icon">
            <font-awesome-icon :icon="[this.iconType, this.iconName]" />
        </span>
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
            windowsOpen: 0
        }
    },
    methods: {
        openWindow: function() {
            bus.$emit("open" + this.windowId);
        }
    },
    props: {
        windowId: String,
        title: String,
        iconName: String,
        iconType: String
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
    height: 100%;

    &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__title {
        
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
