<template>
    <nav class="taskbar" aria-label="taskbar">
        <span class="taskbar__icon-bar">
            <button class="taskbar__launcher" title="Start">
                <font-awesome-icon :icon="['fas', 'rocket']" />
            </button>
            <!--<span class="taskbar__search-wrapper">
                <font-awesome-icon :icon="['fas', 'search']"
                                   class="taskbar__search-icon" />
                <input class="taskbar__search-bar"
                       type="text"
                       placeholder="Type here to search">
            </span>-->
            <!--<shortcut title="Settings" windowId="SettingsWindow" iconName="cog" iconType="fas" />
            <shortcut title="About" windowId="AboutWindow" iconName="user-circle" iconType="fas" />
            <shortcut title="Education" windowId="EducationWindow" iconName="graduation-cap" iconType="fas" />
            <shortcut title="Skills" windowId="SkillsWindow" iconName="wrench" iconType="fas" />
            <shortcut title="Experience" windowId="ExperienceWindow" iconName="briefcase" iconType="fas" />
            <shortcut title="Projects" windowId="ProjectsWindow" iconName="lightbulb" iconType="fas" />
            <shortcut title="Contact" windowId="ContactWindow" iconName="comment-alt" iconType="fas" />-->
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
        </span>
    </nav>
</template>

<script>
export default {
    name: "Taskbar",
    data: function() {
        return {
            tabs: [],
            timer: null,
            fullDate: 0,
            date: 0,
            time: 0
        }
    },
    methods: {
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #eeeeee;

    &__icon-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-grow: 1;
        height: 100%;
    }

    &__launcher {
        height: 100%;
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
        margin: 0 4px;
    }

    &__date-time-display {
        margin: 0 4px;
        user-select: none;
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
