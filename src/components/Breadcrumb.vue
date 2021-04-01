<template>
    <nav aria-label="breadcrumb">
        <ul class="breadcrumb">
            <li class="breadcrumb__item" v-for="item in items" :key="item.title">
                <a class="breadcrumb__link" :href="item.link">
                    {{ item.title }}
                </a>
            </li>
        </ul>
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
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    background-color: #eeeeee;

    &__item {
        display: inline;
        font-size: 18px;

        &+.breadcrumb__item:before {
            padding: 8px;
            color: black;
            content: "/";
        }
    }

    &__link {
        color: #0275d8;
        text-decoration: none;

        &:hover {
            color: #01447e;
            text-decoration: none;
        }
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
