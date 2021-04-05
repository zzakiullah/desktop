<template>
    <div class="main-page">
        <div class="main-page__content-wrapper">

        </div>
        <div class="main-page__taskbar-wrapper">

        </div>
    </div>
</template>

<script>
import { Window, Taskbar } from "../../components/index";

export default {
    name: "MainPage",
    components: {
        Window, Taskbar
    },
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

.main-page {
    display: flex;

    &__content-wrapper {

    }

    &__taskbar-wrapper {

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
