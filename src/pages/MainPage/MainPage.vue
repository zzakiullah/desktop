<template>
    <div class="main-page">
        <div class="main-page__content-wrapper">
            <div class="main-page__content main-page__content--primary">
                <div class="grid">
                    <div class="grid__column grid__column--half">
                        <shortcut title="Home" iconName="user-circle" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="About" iconName="user-circle" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Education" iconName="graduation-cap" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Skills" iconName="wrench" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Experience" iconName="briefcase" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Projects" iconName="lightbulb" iconType="fas" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Contact" iconName="at" iconType="fas" />
                    </div>
                </div>
            </div>
            <div class="main-page__content main-page__content--secondary">
                <div class="grid">
                    <div class="grid__column">
                        <shortcut title="Trash" iconName="at" iconType="fas" />
                    </div>
                </div>
            </div>
            <window v-for="(windowId, index) in windowIds"
                    :key="windowId"
                    :id="windowId"
                    :title="windowInfo[index]['title']"
                    :zIndex="windowIds.indexOf(windowId)"
                    :maxWidth="maxWindowWidth"
                    :maxHeight="maxWindowHeight" />
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
        bus.$on("openWindow", (title, num) => {
            this.windowIds.push(title + num);
            this.windowInfo.push({ "title": title });
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
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
    }

    &__content {
        padding: 0;
        margin: 0;

        &--primary {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 200px;
        }

        &--secondary {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            width: 100px;
        }
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
