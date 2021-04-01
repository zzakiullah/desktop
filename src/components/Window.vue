<template>
    <div class="window"
         :class="(closed ? 'closed' : 'open') + ((action == 'dragging' || action == 'resizing') ? ' drag-resize' : '')"
         :style="{ left: position.current.x + 'px', top: position.current.y + 'px',
                   width: size.current.w + 'px', height: size.current.h + 'px',
                   padding: padding + 'px', cursor: ((action == 'dragging') ? 'grabbing' : resizeType) }"
         @mousedown="startResize()">
        <div class="window__title-bar"
             :style="{ cursor: ((action == 'dragging') ? 'grabbing' : ((action == 'resizing') ? resizeType : 'grab')) }"
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
             :style="{ cursor: ((action == 'dragging') ? 'grabbing !important' : ((action == 'resizing') ? (resizeType + ' !important') : 'auto')),
                             userSelect: ((action == 'dragging' || action == 'resizing') ? 'none !important' : 'auto') }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Window",
    data: function() {
        return {
            position: {
                current: { x: 0, y: 0 },
                restore: { x: 0, y: 0 }
            },
            size: {
                current: { w: 550, h: 550 },
                restore: { w: 550, h: 550 }
            },
            offset: { x: 0, y: 0 },
            padding: 5,
            minimized: false,
            maximized: false,
            closed: false,
            action: "none",
            resizeType: "auto"
        }
    },
    methods: {
        minimize: function() {
            this.minimized = true;
        },
        toggleMaximized: function() {
            if (this.maximized) {
                this.position.current.x = this.position.restore.x;
                this.position.current.y = this.position.restore.y;
                this.size.current.w = this.size.restore.w;
                this.size.current.h = this.size.restore.h;
            } else {
                this.position.restore.x = this.position.current.x;
                this.position.restore.y = this.position.current.y;
                this.size.restore.w = this.size.current.w;
                this.size.restore.h = this.size.current.h;
                this.position.current.x = 0;
                this.position.current.y = 0;
                this.size.current.w = window.innerWidth;
                this.size.current.h = window.innerHeight;
            }
            this.maximized = !this.maximized;
        },
        open: function() {
            this.$el.style.display = "inline-block";
            this.closed = false;
        },
        close: function() {
            this.minimized = false;
            this.closed = true;
            this.action = "none"
            setTimeout(function() {
                this.$el.style.display = "none";
            }.bind(this), 150);
        },
        startDrag: function() {
            this.action = "dragging";
            document.body.style.cursor = "grabbing";
            this.offset.x = event.clientX - this.position.current.x;
            this.offset.y = event.clientY - this.position.current.y;
        },
        startResize: function() {
            if (this.resizeType != "auto") {
                this.action = "resizing";
                document.body.style.cursor = this.resizeType;
                this.offset.x = event.clientX - this.position.current.x;
                this.offset.y = event.clientY - this.position.current.y;
            }
        },
        doDragOrResize: function() {
            var mouseX = (event.clientX < 0) ? 0 : ((event.clientX > window.innerWidth) ? window.innerWidth : event.clientX),
                mouseY = (event.clientY < 0) ? 0 : ((event.clientY > window.innerHeight) ? window.innerHeight : event.clientY);
            switch (this.action) {
                case "dragging":
                    var x = event.clientX - this.offset.x,
                        y = event.clientY - this.offset.y,
                        w = this.size.current.w,
                        h = this.size.current.h;
                    this.position.current.x = (x < 0) ? 0 : ((x + w > window.innerWidth) ? (window.innerWidth - w) : x);
                    this.position.current.y = (y < 0) ? 0 : ((y + h > window.innerHeight) ? (window.innerHeight - h) : y);
                    break;
                case "resizing":
                    switch (this.resizeType) {
                        case "ne-resize":
                            this.size.current.w = mouseX - this.position.current.x;
                            this.size.current.h += this.position.current.y - mouseY;
                            this.position.current.y = mouseY;
                            break;
                        case "nw-resize":
                            this.size.current.w += this.position.current.x - mouseX;
                            this.size.current.h +=  this.position.current.y - mouseY;
                            this.position.current.x = mouseX;
                            this.position.current.y = mouseY;
                            break;
                        case "se-resize":
                            this.size.current.w = mouseX - this.position.current.x;
                            this.size.current.h = mouseY - this.position.current.y;
                            break;
                        case "sw-resize":
                            this.size.current.w += this.position.current.x - mouseX;
                            this.size.current.h = mouseY - this.position.current.y;
                            this.position.current.x = mouseX;
                            break;
                        case "n-resize":
                            this.size.current.h +=  this.position.current.y - mouseY;
                            this.position.current.y = mouseY;
                            break;
                        case "s-resize":
                            this.size.current.h = mouseY - this.position.current.y;
                            break;
                        case "e-resize":
                            this.size.current.w = mouseX - this.position.current.x;
                            break;
                        case "w-resize":
                            this.size.current.w += this.position.current.x - mouseX;
                            this.position.current.x = mouseX;
                    }
                    break;
                default:
                    var xInnerLeft = this.position.current.x + this.padding,
                    xInnerRight = this.position.current.x + this.size.current.w - this.padding,
                    yInnerTop = this.position.current.y + this.padding,
                    yInnerBottom = this.position.current.y + this.size.current.h - this.padding;
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
            this.action = "none";
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

$openCloseTime: 0.15s;
$maxRestoreTime: 0.35s;

.window {
    display: inline-block;
    position: absolute;
    box-shadow: 0px 0px 10px 4px #cccccc;
    transform: scale(0.95);
    transition: opacity $openCloseTime, transform $openCloseTime,
                left $maxRestoreTime, top $maxRestoreTime,
                width $maxRestoreTime, height $maxRestoreTime;

    &.open {
        opacity: 1;
        transform: scale(1);
    }

    &.closed {
        opacity: 0;
    }

    &.drag-resize {
        transition: opacity $openCloseTime, transform $openCloseTime,
                    left 0s, top 0s, width 0s, height 0s;
    }

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
