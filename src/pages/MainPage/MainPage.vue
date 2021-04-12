<template>
    <div class="main-page">
        <div class="main-page__content-wrapper">
            <div class="main-page__content main-page__content--primary">
                <div class="grid">
                    <div class="grid__column grid__column--half">
                        <shortcut title="System" iconPath="icons/onyx_hard_drive.png" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Home" iconPath="icons/home_folder.png" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="About" iconPath="icons/user_folder.png" />
                    </div>
                    <!--<div class="grid__column grid__column--half">
                        <shortcut title="Education" iconPath="icons/vectors_folder_badged.png" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Skills" iconPath="icons/utilities_folder_badged.png" />
                    </div>-->
                    <div class="grid__column grid__column--half">
                        <shortcut title="Experience" iconPath="icons/network_folder.png" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Projects" iconPath="icons/projects_folder_badged.png" />
                    </div>
                    <!--<div class="grid__column grid__column--half">
                        <shortcut title="Games" iconPath="icons/games_folder_badged.png" />
                    </div>-->
                    <div class="grid__column grid__column--half">
                        <shortcut title="Contact" iconPath="icons/chats_folder_badged.png" />
                    </div>
                    <div class="grid__column grid__column--half">
                        <shortcut title="Resume.pdf" iconPath="icons/pdf.png" href="Resume_2B.pdf" />
                    </div>
                </div>
            </div>
            <div class="main-page__content main-page__content--secondary">
                <div class="grid">
                    <div class="grid__column">
                        <shortcut title="Trash" iconPath="icons/trash_full.png" />
                    </div>
                </div>
            </div>
            <window v-for="(windowId, index) in windowIds"
                    :key="windowId"
                    :id="windowId"
                    :title="windowId.replace(/[0-9]/g, '')"
                    :iconSrc="windowIconSrcs[index]"
                    :zIndex="windowIds.indexOf(windowId)"
                    :maxWidth="maxWindowWidth"
                    :maxHeight="maxWindowHeight">
                <!--<component :is="windowId.replace(/[0-9]/g, '')" />-->
            </window>
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
            windowIconSrcs: [],
            maxWindowWidth: 0,
            maxWindowHeight: 0
        }
    },
    methods: {
        updateWindowStack: function(windowId, index) {
            this.windowIds.push(this.windowIds.splice(index, 1)[0]);
            this.windowIconSrcs.push(this.windowIconSrcs.splice(index, 1)[0]);
        },
        removeWindow: function(windowId, index) {
            this.windowIds.splice(index, 1);
            this.windowIconSrcs.splice(index, 1);
        }
    },
    created: function() {
        this.maxWindowWidth = window.innerWidth;
        this.maxWindowHeight = window.innerHeight - 40;
        bus.$on("bringToFront", (data) => {
            this.updateWindowStack(data[0], data[1]);
        });
        bus.$on("openWindow", (data) => {
            this.windowIds.push(data[0]);
            this.windowIconSrcs.push(data[1]);
            setTimeout(function() {
                bus.$emit("open" + data[0]);
            }.bind(this), 10);
        });
        bus.$on("closeWindow", (data) => {
            this.removeWindow(data[0], data[1]);
        });
        bus.$on("focusWindow", (data) => {
            this.updateWindowStack(data, this.windowIds.indexOf(data));
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
            width: 210px;
        }

        &--secondary {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            width: 105px;
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
