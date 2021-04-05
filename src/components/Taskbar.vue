<template>
    <nav class="taskbar" aria-label="taskbar">
        <span class="taskbar__icon-bar">
            <button class="taskbar__launcher" title="Start">
                <font-awesome-icon :icon="['fas', 'rocket']" />
            </button>
            <span class="taskbar__search-wrapper">
                <font-awesome-icon :icon="['fas', 'search']"
                                   class="taskbar__search-icon" />
                <input class="taskbar__search-bar"
                       type="text"
                       placeholder="Type here to search">
            </span>
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
        justify-content: flex-start;
        flex-grow: 1;
        height: 100%;
    }

    &__launcher {
        height: 100%;
    }

    &__search {
        &-wrapper {
            position: relative;
            height: 100%;
        }

        &-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            height: 100%;
        }

        &-bar {
            padding-left: 20px;
            height: 100%;
        }
    }

    &__system-tray {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
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
