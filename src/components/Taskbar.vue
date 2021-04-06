<template>
    <nav class="taskbar" aria-label="taskbar">
        <span class="taskbar__icon-bar">
            <button class="taskbar__launcher" title="Start">
                <font-awesome-icon :icon="['fas', 'rocket']" />
            </button>
            <span class="taskbar__search-wrapper">
                <font-awesome-icon :icon="['fas', 'search']"
                                   class="taskbar__search-icon" />
                <input class="taskbar__search-bar"
                       type="text"
                       placeholder="Type here to search">
            </span>
            <!--<shortcut title="Settings" windowId="SettingsWindow" iconName="cog" iconType="fas" />-->
            <shortcut title="About" windowId="AboutWindow" iconName="user-circle" iconType="fas" />
            <shortcut title="Education" windowId="EducationWindow" iconName="graduation-cap" iconType="fas" />
            <shortcut title="Skills" windowId="SkillsWindow" iconName="wrench" iconType="fas" />
            <shortcut title="Experience" windowId="ExperienceWindow" iconName="briefcase" iconType="fas" />
            <shortcut title="Projects" windowId="ProjectsWindow" iconName="lightbulb" iconType="fas" />
            <shortcut title="Contact" windowId="ContactWindow" iconName="comment-alt" iconType="fas" />
        </span>
        <span class="taskbar__system-tray">

        </span>
    </nav>
</template>

<script>
export default {
    name: "Taskbar",
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
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.taskbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;

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
