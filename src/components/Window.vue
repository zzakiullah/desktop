<template>
    <div class="window"
         v-bind:style="{ top: top + 'px', left: left + 'px' }">
        <div class="window__title-bar"
             v-bind:class="{ grabbed: dragging }"
             v-on:mousedown="startDrag()"
             v-on:mouseup="stopDrag()"><!--v-on:mousemove="setOffset()"-->
            <div class="window__icon">
                <font-awesome-icon :icon="[this.iconType, this.iconName]" />
            </div>
            <div class="window__title">
                {{ title }}
            </div>
            <button class="window__btn window__btn--minimize"
                    v-on:click="minimize()">
                <font-awesome-icon :icon="['far', 'window-minimize']" />
            </button>
            <button class="window__btn window__btn--resize"
                    v-on:click="toggleMaximized()">
                <font-awesome-icon :icon="['far', 'window-maximize']" />
                <!--<font-awesome-icon :icon="['far', 'window-restore']" />-->
            </button>
            <button class="window__btn window__btn--close"
                    v-on:click="close()">
                <font-awesome-icon :icon="['fas', 'times']" />
            </button>
        </div>
        <div class="window__content">
            <HelloWorld msg="Window component"/>
        </div>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld';

export default {
    name: "Window",
    components: {
        HelloWorld
    },
    data: function() {
        return {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            offsetX: 0,
            offsetY: 0,
            minimized: false,
            maximized: false,
            closed: false,
            dragging: false
        }
    },
    methods: {
        minimize: function() {
            this.minimized = true;
        },
        toggleMaximized: function() {
            this.maximized = !this.maximized;
        },
        close: function() {
            this.minimized = false;
            this.closed = true;
            this.dragging = false;
        },
        startDrag: function() {
            this.dragging = true;
            this.offsetX = event.clientX - this.left;
            this.offsetY = event.clientY - this.top;
        },
        stopDrag: function() {
            this.dragging = false;
        },
        doDrag: function() {
            if (this.dragging) {
                this.left = event.clientX - this.offsetX;
                this.top = event.clientY - this.offsetY;
            }
        },
        setOffset: function() {
            if (!this.dragging) {
                this.offsetX = event.clientX - this.left;
                this.offsetY = event.clientY - this.top;
            }
        }
    },
    mounted: function() {
        window.addEventListener('mousemove', this.doDrag());
        window.addEventListener('mouseup', this.stopDrag());
    },
    props: {
        title: String,
        iconName: String,
        iconType: String
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

$minimizeBtnColor: #dedede;
$resizeBtnColor: #dedede;
$closeBtnColor: #ff605c;

$titleBarHeight: 25px;
$btnOffset: 2px;

.window {
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 4px #cccccc;
    border: 1px solid black;

    &__title-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: $titleBarHeight;

        &.grabbed {
            &:hover {
                cursor: grabbing;
            }
        }

        &:hover {
            cursor: grab;
        }
    }

    &__icon {

    }

    &__title {
        flex-grow: 1;
        text-align: left;
    }

    &__btn {
        width: $titleBarHeight - $btnOffset;
        height: $titleBarHeight - $btnOffset;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }

        &--minimize {
            background-color: $minimizeBtnColor;

            &:hover {
                background-color: darken($minimizeBtnColor, 10%);
            }
        }

        &--resize {
            background-color: $resizeBtnColor;

            &:hover {
                background-color: darken($resizeBtnColor, 10%);
            }
        }

        &--close {
            background-color: $closeBtnColor;

            &:hover {
                background-color: darken($closeBtnColor, 10%);
            }
        }
    }

    &__content {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
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
