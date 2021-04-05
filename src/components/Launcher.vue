<template>
    <button class="launcher"
            :title="title"
            @click="openWindow()">
        <span class="launcher__icon">

        </span>
        <span class="launcher__title" v-if="showTitle">
            {{ title }}
        </span>
    </button>
</template>

<script>
import { bus } from "../main";

export default {
    name: "Launcher",
    data: function() {
        return {

        }
    },
    methods: {
        openWindow: function() {
            bus.$emit("open" + this.windowId);
        }
    },
    props: {
        windowId: String,
        title: String,
        iconName: String,
        iconType: String,
        showTitle: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.launcher {
    display: flex;
}
</style>
