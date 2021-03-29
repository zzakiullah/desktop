<template>
    <div class="window">
        <div class="title-bar">
            {{ title }}
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Window",
    data: function () {
        return {

        }
    },
    props: {
        title: String,
        isMaximized: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.window {

    &__title-bar {

    }

    &__content {

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
</style>
