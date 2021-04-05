<template>
    <nav class="taskbar" aria-label="taskbar">
        <Launcher title="About" showTitle=true windowId="AboutWindow" iconName="user-circle" iconType="fas" />
    </nav>
</template>

<script>
import { Launcher } from "./index";

export default {
    name: "Taskbar",
    components: {
        Launcher
    },
    data: function() {
        return {

        }
    },
    methods: {
        
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.taskbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    border: 1px solid blue;

    &__item {

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
