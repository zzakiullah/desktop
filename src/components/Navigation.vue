<template>
    <nav class="navigation" aria-label="navigation">
        <button class="navigation__btn navigation__btn--back"
                :class="(history.back.disabled ? '' : 'enabled')"
                :disabled="history.back.disabled"
                @click="updateHistory(history.back, history.forward)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <button class="navigation__btn navigation__btn--forward"
                :class="(history.forward.disabled ? '' : 'enabled')"
                :disabled="history.forward.disabled"
                @click="updateHistory(history.forward, history.back)">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
        <ul class="navigation__items-wrapper">
            <li class="navigation__item" v-for="(item, index) in items" :key="item.title">
                <a class="navigation__link"
                   :id="'NavLink' + index"
                   :href="item.url">
                    {{ item.title }}
                </a>
                <button class="navigation__link navigation__link--chevron"
                        :id="'NavDropdownBtn' + index"
                        @click="openDropdown(index)"
                        @blur="closeDropdown(index)">
                    <span class="navigation__chevron" :id="'NavChevron' + index">
                        <font-awesome-icon :icon="['fas', 'chevron-right']"/>
                    </span>
                </button>
                <ul class="navigation__dropdown" :id="'NavDropdown' + index">

                </ul>
            </li>
        </ul>
        <button class="navigation__btn navigation__btn--settings"
                @click="openSettings()">
            <font-awesome-icon :icon="['fas', 'cog']" />
        </button>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data: function() {
        return {
            current: "",
            history: {
                back: { disabled: true, stack: [] },
                forward: { disabled: true, stack: [] }
            }
        }
    },
    methods: {
        updateHistory: function(to, from) {
            from.stack.push(this.current);
            this.current = to.stack.pop();
            from.disabled = (from.stack.length == 0);
            to.disabled = (to.stack.length == 0);
        },
        openDropdown: function(index) {
            document.getElementById("NavDropdownBtn" + index).style.transition = "none";
            document.getElementById("NavDropdown" + index).className = "navigation__dropdown show";
            document.getElementById("NavChevron" + index).className = "navigation__chevron down";
        },
        closeDropdown: function(index) {
            document.getElementById("NavDropdown" + index).className = "navigation__dropdown";
            document.getElementById("NavChevron" + index).className = "navigation__chevron";
            setTimeout(function() {
                document.getElementById("NavDropdownBtn" + index).style.transition = "0.3s all";
            }.bind(this), 100);
        },
        openSettings: function() {

        }
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

$navBtnColor: #dedede;

.navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 12px 0;

    &__btn {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        outline: none;
        margin: 0 2px;
        background-color: $navBtnColor;
        font-size: 14px;
        cursor: auto;
        transition: background-color 0.35s;

        &.enabled {
            cursor: pointer;

            &:hover {
                background-color: darken($navBtnColor, 10%);
                transition: none;
            }

            &:focus {
                box-shadow: 0 0 0 2px darken($navBtnColor, 20%);
            }
        }

        &--back {

        }

        &--forward {

        }

        &--settings {
            font-size: 16px;
            cursor: pointer;

            &:hover {
                background-color: darken($navBtnColor, 10%);
                transition: none;
            }

            &:focus {
                box-shadow: 0 0 0 2px darken($navBtnColor, 20%);
            }
        }
    }

    &__items-wrapper {
        display: flex;
        flex-grow: 1;
        text-align: left;
        padding: 0 10px;
        margin: 0 4px;
        list-style: none;
        border: 2px solid #dedede;
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        padding: 0;
        margin: 0;
        height: 27px;
    }

    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: black;
        border: 2px solid #ffffff;
        text-decoration: none;
        padding: 0 4px;
        margin: 0;
        height: 28px;
        outline: none;
        cursor: pointer;
        transition: background-color 0.3s, border 0.3s;

        &:hover {
            text-decoration: none;
            background-color: #e5f3ff;
            border: 2px solid #cce8ff;
            transition: background-color 0.3s, border 0.3s;
        }

        &:focus {
            text-decoration: none;
            background-color: #cce8ff;
            border: 2px solid #99d1ff;
            transition: background-color 0.3s, border 0.3s;
        }
    }

    &__chevron {
        display: flex;

        &.down {
            transform: rotate(90deg);
        }
    }

    &__dropdown {
        display: none;
        position: absolute;
        right: -80%;
        top: 100%;
        z-index: 2;
        width: 100px;
        height: 100px;
        transition: height 0.3s;
        border: 1px solid blue;

        &.show {
            display: inline-block;
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
