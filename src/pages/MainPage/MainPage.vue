<template>
    <div class="main-page">
        <div class="main-page__content-wrapper">
            <!--<window id="SettingsWindow" title="Settings" iconName="cog" iconType="fas">
                <navigation :items="[{ title: 'Settings', url: '#' }]" />
            </window>-->
            <window id="AboutWindow" title="About" iconName="user-circle" iconType="fas">
                <navigation windowId="AboutWindow" :items="[{ title: 'Home', url: '#' }, { title: 'About', url: '#' }]" />
            </window>
            <window id="EducationWindow" title="Education" iconName="graduation-cap" iconType="fas">
                <navigation windowId="EducationWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Education', url: '#' }]" />
            </window>
            <window id="SkillsWindow" title="Skills" iconName="wrench" iconType="fas">
                <navigation windowId="SkillsWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Skills', url: '#' }]" />
            </window>
            <window id="ExperienceWindow" title="Experience" iconName="briefcase" iconType="fas">
                <navigation windowId="ExperienceWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Experience', url: '#' }]" />
            </window>
            <window id="ProjectsWindow" title="Projects" iconName="lightbulb" iconType="fas">
                <navigation windowId="ProjectsWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Projects', url: '#' }]" />
            </window>
            <window id="ContactWindow" title="Contact" iconName="comment-alt" iconType="fas">
                <navigation windowId="ContactWindow" :items="[{ title: 'Home', url: '#' }, { title: 'Contact', url: '#' }]" />
            </window>
        </div>
        <div class="main-page__taskbar-wrapper">
            <taskbar />
        </div>
    </div>
</template>

<script>
export default {
    name: "MainPage",
    data: function() {
        return {
            windows: []
        }
    },
    methods: {
        updateWindows: function() {

        }
    },
    props: {

    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";
@import "../../styles/_variables.scss";

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
