<template>
    <div class="main-page">
        <div class="main-page__content-wrapper">
            <div class="grid">
                <shortcut title="About" iconName="user-circle" iconType="fas" />
                <shortcut title="Education" iconName="graduation-cap" iconType="fas" />
                <shortcut title="Skills" iconName="wrench" iconType="fas" />
                <shortcut title="Experience" iconName="briefcase" iconType="fas" />
                <shortcut title="Projects" iconName="lightbulb" iconType="fas" />
                <shortcut title="Contact" iconName="at" iconType="fas" />
            </div>
            <window v-for="(windowId, index) in windowIds"
                    :key="windowId"
                    :id="windowId"
                    :title="windowInfo[index]['title']"
                    :iconName="windowInfo[index]['iconName']"
                    :iconType="windowInfo[index]['iconType']"
                    :zIndex="windowIds.indexOf(windowId)"
                    :maxWidth="maxWindowWidth"
                    :maxHeight="maxWindowHeight" />
            <!--<window id="SettingsWindow" title="Settings" iconName="cog" iconType="fas">
                <navigation :items="[{ title: 'Settings', url: '#' }]" />
            </window>-->
            <!--<window id="AboutWindow" title="About" iconName="user-circle" iconType="fas" :zIndex="windowIds.indexOf('AboutWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="AboutWindow" :items="[{ title: 'Home', url: '#' }, { title: 'About', url: '#' }]" />
            </window>
            <window id="EducationWindow" title="Education" iconName="graduation-cap" iconType="fas" :zIndex="windowIds.indexOf('EducationWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="EducationWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Education', url: '#' }]" />
            </window>
            <window id="SkillsWindow" title="Skills" iconName="wrench" iconType="fas" :zIndex="windowIds.indexOf('SkillsWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="SkillsWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Skills', url: '#' }]" />
            </window>
            <window id="ExperienceWindow" title="Experience" iconName="briefcase" iconType="fas" :zIndex="windowIds.indexOf('ExperienceWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="ExperienceWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Experience', url: '#' }]" />
            </window>
            <window id="ProjectsWindow" title="Projects" iconName="lightbulb" iconType="fas" :zIndex="windowIds.indexOf('ProjectsWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="ProjectsWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Projects', url: '#' }]" />
            </window>
            <window id="ContactWindow" title="Contact" iconName="at" iconType="fas" :zIndex="windowIds.indexOf('ContactWindow')"
                    :maxWidth="maxWindowWidth" :maxHeight="maxWindowHeight">
                <navigation windowId="ContactWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Contact', url: '#' }]" />
            </window>-->
        </div>
        <div class="main-page__taskbar-wrapper">
            <taskbar />
        </div>
    </div>
</template>

<script>
import { bus } from "../../main";

export default {
    name: "MainPage",
    data: function() {
        return {
            //windows: ["AboutWindow", "EducationWindow", "SkillsWindow", "ExperienceWindow", "ProjectsWindow", "ContactWindow"],
            windowIds: [],
            windowInfo: [],
            maxWindowWidth: 0,
            maxWindowHeight: 0
        }
    },
    methods: {
        updateWindowStack: function(windowId) {
            var i = this.windowIds.indexOf(windowId);
            this.windowIds.push(this.windowIds.splice(i, 1)[0]);
            this.windowInfo.push(this.windowInfo.splice(i, 1)[0]);
        },
        removeWindow: function(windowId) {
            var i = this.windowIds.indexOf(windowId);
            this.windowIds.splice(i, 1);
            this.windowInfo.splice(i, 1);
        }
    },
    created: function() {
        this.maxWindowWidth = window.innerWidth;
        this.maxWindowHeight = window.innerHeight - 40;
        bus.$on("bringToFront", (data) => {
            this.updateWindowStack(data);
        });
        bus.$on("openWindow", (title, num, iconName, iconType) => {
            this.windowIds.push(title + num);
            this.windowInfo.push({ "title": title, "iconName": iconName, "iconType": iconType });
            setTimeout(function() {
                bus.$emit("open" + title + num);
            }.bind(this), 10);
        });
        bus.$on("closeWindow", (data) => {
            this.removeWindow(data);
        });
    },
    props: {

    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";
@import "../../styles/_variables.scss";
@import "../../styles/_grid.scss";

.main-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__content-wrapper {
        flex-grow: 1;
    }

    &__taskbar-wrapper {
        
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
