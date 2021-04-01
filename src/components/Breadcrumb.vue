<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb__item" v-for="item in items" :key="item.title">
                <a class="breadcrumb__link">

                </a>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: "Breadcrumb",
    data: function() {
        return {

        }
    },
    methods: {

    },
    props: {
        items: Array,
        separator: String
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.breadcrumb {

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
