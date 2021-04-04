<template>
    <nav class="taskbar" aria-label="taskbar">
        <ul class="taskbar__items-wrapper">

        </ul>
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

    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.taskbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    border: 1px solid blue;

    &__items-wrapper {

    }

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
