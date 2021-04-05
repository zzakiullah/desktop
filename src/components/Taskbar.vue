<template>
    <nav class="taskbar" aria-label="taskbar">
        <span class="taskbar__icon-bar">
            <slot></slot>
        </span>
        <span class="taskbar__system-tray">

        </span>
    </nav>
</template>

<script>

export default {
    name: "Taskbar",
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    border: 1px solid blue;

    &__icon-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-grow: 1;
        border: 1px solid red;
    }

    &__system-tray {

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
