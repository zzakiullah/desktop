<template>
    <div class="window"
         :style="{ top: top + 'px', left: left + 'px',
                         width: width + 'px', height: height + 'px',
                         padding: padding + 'px', cursor: (dragging ? 'grabbing' : resizeType) }"
         @mousedown="startResize()">
        <div class="window__title-bar"
             :style="{ cursor: (dragging ? 'grabbing' : (resizing ? resizeType : 'grab')) }"
             @mousedown="startDrag()">
            <div class="window__icon">
                <font-awesome-icon :icon="[this.iconType, this.iconName]" />
            </div>
            <div class="window__title">
                {{ title }}
            </div>
            <button class="window__btn window__btn--minimize"
                    @click="minimize()">
                <font-awesome-icon :icon="['far', 'window-minimize']" />
            </button>
            <button class="window__btn window__btn--resize"
                    @click="toggleMaximized()">
                <font-awesome-icon :icon="['far', 'window-maximize']"
                                   :style="{ display: (maximized ? 'none' : 'inline-block') }" />
                <font-awesome-icon :icon="['far', 'window-restore']"
                                   :style="{ display: (maximized ? 'inline-block' : 'none') }" />
            </button>
            <button class="window__btn window__btn--close"
                    @click="close()">
                <font-awesome-icon :icon="['fas', 'times']" />
            </button>
        </div>
        <div class="window__content"
             :style="{ cursor: (dragging ? 'grabbing !important' : (resizing ? (resizeType + ' !important') : 'auto')),
                             userSelect: ((dragging || resizing) ? 'none !important' : 'auto') }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Window",
    data: function() {
        return {
            top: 0,
            left: 0,
            width: 550,
            height: 550,
            padding: 5,
            offsetX: 0,
            offsetY: 0,
            minimized: false,
            maximized: false,
            closed: false,
            dragging: false,
            resizing: false,
            resizeType: "auto"
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
            this.resizing = false;
        },
        startDrag: function() {
            this.dragging = true;
            document.body.style.cursor = "grabbing";
            this.offsetX = event.clientX - this.left;
            this.offsetY = event.clientY - this.top;
        },
        startResize: function() {
            if (this.resizeType != "auto") {
                this.resizing = true;
                document.body.style.cursor = this.resizeType;
                this.offsetX = event.clientX - this.left;
                this.offsetY = event.clientY - this.top;
            }
        },
        doDragOrResize: function() {
            var mouseX = (event.clientX < 0) ? 0 : ((event.clientX > window.innerWidth) ? window.innerWidth : event.clientX),
                mouseY = (event.clientY < 0) ? 0 : ((event.clientY > window.innerHeight) ? window.innerHeight : event.clientY);
            if (this.dragging) {
                this.left = event.clientX - this.offsetX;
                this.top = event.clientY - this.offsetY;
                this.left = (this.left < 0) ? 0 : ((this.left + this.width > window.innerWidth) ? (window.innerWidth - this.width) : this.left);
                this.top = (this.top < 0) ? 0 : ((this.top + this.height > window.innerHeight) ? (window.innerHeight - this.height) : this.top);
            } else if (this.resizing) {
                switch (this.resizeType) {
                    case "ne-resize":
                        this.width = mouseX - this.left;
                        this.height += this.top - mouseY;
                        this.top = mouseY;
                        break;
                    case "nw-resize":
                        this.width += this.left - mouseX;
                        this.height +=  this.top - mouseY;
                        this.left = mouseX;
                        this.top = mouseY;
                        break;
                    case "se-resize":
                        this.width = mouseX - this.left;
                        this.height = mouseY - this.top;
                        break;
                    case "sw-resize":
                        this.width += this.left - mouseX;
                        this.height = mouseY - this.top;
                        this.left = mouseX;
                        break;
                    case "n-resize":
                        this.height +=  this.top - mouseY;
                        this.top = mouseY;
                        break;
                    case "s-resize":
                        this.height = mouseY - this.top;
                        break;
                    case "e-resize":
                        this.width = mouseX - this.left;
                        break;
                    case "w-resize":
                        this.width += this.left - mouseX;
                        this.left = mouseX;
                }
            } else {
                var xInnerLeft = this.left + this.padding,
                    xInnerRight = this.left + this.width - this.padding,
                    yInnerTop = this.top + this.padding,
                    yInnerBottom = this.top + this.height - this.padding;
                if (mouseX >= xInnerRight && mouseY <= yInnerTop) {
                    this.resizeType = "ne-resize";
                } else if (mouseX <= xInnerLeft && mouseY <= yInnerTop) {
                    this.resizeType = "nw-resize";
                } else if (mouseX >= xInnerRight && mouseY >= yInnerBottom) {
                    this.resizeType = "se-resize";
                } else if (mouseX <= xInnerLeft && mouseY >= yInnerBottom) {
                    this.resizeType = "sw-resize";
                } else if (mouseY <= yInnerTop) {
                    this.resizeType = "n-resize";
                } else if (mouseY >= yInnerBottom) {
                    this.resizeType = "s-resize";
                } else if (mouseX >= xInnerRight) {
                    this.resizeType = "e-resize";
                } else if (mouseX <= xInnerLeft) {
                    this.resizeType = "w-resize";
                } else {
                    this.resizeType = "auto";
                }
            }
        },
        stopDragAndResize: function() {
            this.dragging = false;
            this.resizing = false;
            document.body.style.cursor = "auto";
        }
    },
    mounted: function() {
        window.addEventListener('mousemove', function() {
            this.doDragOrResize();
        }.bind(this));
        window.addEventListener('mouseup', function() {
            this.stopDragAndResize();
        }.bind(this));
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
    box-shadow: 0px 0px 10px 4px #cccccc;
    border: 1px solid black;

    &__title-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: $titleBarHeight;
    }

    &__icon {
        user-select: none;
    }

    &__title {
        flex-grow: 1;
        text-align: left;
        user-select: none;
    }

    &__btn {
        width: $titleBarHeight - $btnOffset;
        height: $titleBarHeight - $btnOffset;
        border-radius: 50%;
        outline: none;
        cursor: pointer;

        &:focus, &:active {
            outline: none;
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
