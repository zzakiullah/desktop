<template>
    <div class="window">
        <div class="window__title-bar">
            {{ title }}
        </div>
        <div>

        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
    name: "Window",
    components: {
        HelloWorld
    },
    data: function () {
        return {
            isMaximized: false
        }
    },
    methods: {
        greet: function (event) {
            event.preventDefault()
            alert(this.isMaximized)
        }
    },
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.window {

    &__title-bar {
        display: block;
        width: 100%;
    }

    &__content {
        display: block;
        width: 100%;
    }

    &__minimize-btn {

    }

    &__maximize-btn {

    }

    &__restore-btn {

    }

    &__close-btn {

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
