<template>
    <nav class="taskbar"
         aria-label="taskbar"
         tabindex="-1"
         @blur="closeStartMenu()">
        <span class="taskbar__start-menu"
              :class="{ open: startMenuOpen }">
            <button class="taskbar__start-menu-item">
                <font-awesome-icon :icon="['fas', 'undo']"
                                   class="taskbar__start-menu-icon" />
               Restart
            </button>
            <button class="taskbar__start-menu-item">
                <font-awesome-icon :icon="['fas', 'power-off']"
                                   class="taskbar__start-menu-icon" />
                Power Off
            </button>
        </span>
        <span class="taskbar__icon-bar">
            <button class="taskbar__launcher"
                    @click="openStartMenu()">
                <span class="taskbar__launcher-icon">
                    <font-awesome-icon :icon="['fas', 'rocket']" />
                </span>
                <span class="taskbar__launcher-text">
                    Start
                </span>
            </button>
            <!--<span class="taskbar__search-wrapper">
                <font-awesome-icon :icon="['fas', 'search']"
                                   class="taskbar__search-icon" />
                <input class="taskbar__search-bar"
                       type="text"
                       placeholder="Type here to search">
            </span>-->
        </span>
        <span class="taskbar__system-tray">
            <span class="taskbar__tray-item" title="Internet access">
                <font-awesome-icon :icon="['fas', 'wifi']" />
            </span>
            <span class="taskbar__tray-item" title="Bluetooth Devices">
                <font-awesome-icon :icon="['fab', 'bluetooth']" />
            </span>
            <span class="taskbar__tray-item" title="Speakers: 20%">
                <font-awesome-icon :icon="['fas', 'volume-down']" />
            </span>
            <span class="taskbar__tray-item" title="2 hr 1 min (87%) remaining">
                <font-awesome-icon :icon="['fas', 'battery-three-quarters']" />
            </span>
            <span class="taskbar__date-time-display" :title="fullDate">
                {{ time }}<br>{{ date }}
            </span>
            <span class="taskbar__notifications" title="No new notifications">
                <font-awesome-icon :icon="['far', 'comment-alt']" />
            </span>
        </span>
    </nav>
</template>

<script>
export default {
    name: "Taskbar",
    data: function() {
        return {
            tabs: [],
            startMenuOpen: false,
            timer: null,
            fullDate: 0,
            date: 0,
            time: 0
        }
    },
    methods: {
        openStartMenu: function() {
            this.startMenuOpen = true;
            this.$el.focus();
        },
        closeStartMenu: function() {
            this.startMenuOpen = false;
        },
        updateDateTime: function() {
            var dt = new Date(),
                month = (dt.getMonth() < 9 ? "0" : "") + (dt.getMonth() + 1),
                date = (dt.getDate() < 10 ? "0" : "") + dt.getDate(),
                hours = (dt.getHours() % 12),
                minutes = (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes(),
                period = (dt.getHours() < 13 ? "AM" : "PM");
            this.fullDate = dt;
            this.date = dt.getFullYear() + "-" + month + "-" + date;
            this.time = hours + ":" + minutes + " " + period;
        }
    },
    created: function() {
        this.updateDateTime();
        this.timer = setInterval(this.updateDateTime, 1000);
    },
    destroyed: function() {
        clearInterval(this.timer);
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.taskbar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #eeeeee;
    z-index: 100;

    &:focus {
        outline: none;
    }

    &__start-menu {
        display: none;
        position: absolute;
        bottom: 100%;
        left: 0;
        padding: 1rem;
        border: 1px solid blue;

        &.open {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        &-item {
            display: flex;
        }

        &-icon {
            margin-right: 0.5rem;
        }
    }

    &__icon-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-grow: 1;
        height: 100%;
    }

    &__launcher {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;

        &-icon {
            margin: 0 3px;
            font-size: 1rem;
        }

        &-text {
            margin: 0 3px;
            font-size: 0.85rem;
        }
    }

    &__search {
        &-wrapper {
            position: relative;
            height: 100%;
        }

        &-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 10px;
            height: 100%;
        }

        &-bar {
            padding-left: 30px;
            height: 100%;
        }
    }

    &__system-tray {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }

    &__tray-item {
        margin: 0 6px;
    }

    &__date-time-display {
        margin: 0 6px;
        user-select: none;
        font-size: 0.85rem;
    }

    &__notifications {
        margin-left: 10px;
        margin-right: 16px;
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
