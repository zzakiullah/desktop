<template>
    <nav class="navigation" aria-label="navigation">
        <button class="navigation__btn navigation__btn--back"
                :class="(history.back.disabled ? '' : 'enabled')"
                :style="{ cursor: history.back.disabled ? 'auto' : 'pointer' }"
                :disabled="history.back.disabled"
                @click="updateHistory(history.back, history.forward)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <button class="navigation__btn navigation__btn--forward"
                :class="(history.forward.disabled ? '' : 'enabled')"
                :style="{ cursor: history.forward.disabled ? 'auto' : 'pointer' }"
                :disabled="history.forward.disabled"
                @click="updateHistory(history.forward, history.back)">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
        <ul class="navigation__items-wrapper">
            <li class="navigation__item" v-for="item in items" :key="item.title">
                <a class="navigation__link" :href="item.link">
                    {{ item.title }}
                </a>
                <button class="navigation__branch" :key="item.title">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="chevron" />
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data: function() {
        return {
            current: "",
            history: {
                back: { disabled: false, stack: [] },
                forward: { disabled: false, stack: [] }
            }
        }
    },
    methods: {
        updateHistory: function(to, from) {
            from.stack.push(this.current);
            this.current = to.stack.pop();
            from.disabled = (from.stack.length == 0);
            to.disabled = (to.stack.length == 0);
        }
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__btn {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        outline: none;
        margin: 0 2px;
        background-color: #dedede;
        transition: background-color 0.35s;

        &.enabled {
            &:hover {
                background-color: darken(#dedede, 10%);
                transition: none;
            }
        }

        &--back {

        }

        &--forward {

        }
    }

    &__items-wrapper {
        display: inline-block;
        flex-grow: 1;
        text-align: left;
        padding: 10px 16px;
        list-style: none;
        background-color: #eeeeee;
    }

    &__item {
        display: inline;
        font-size: 18px;
    }

    &__link {
        color: #0275d8;
        text-decoration: none;

        &:hover {
            color: #01447e;
            text-decoration: none;
        }
    }

    &__branch {
        border: none;
        outline: none;
        cursor: pointer;

        .chevron {
            transition: transform 0.3s;
        }

        &:hover > .chevron {
            transform: rotate(90deg);
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
