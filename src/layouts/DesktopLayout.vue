<template>
    <div class="desktop-layout">
        <div class="desktop-layout__screen">

        </div>
        <Taskbar />
    </div>
</template>

<script>
import { Taskbar } from '../components/Taskbar.vue';

export default {
    name: "DesktopLayout",
    components: {

    },
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

.desktop-layout {
    display: flex;
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
