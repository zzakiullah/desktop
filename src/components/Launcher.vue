<template>
    <button class="launcher">
        
    </button>
</template>

<script>
export default {
    name: "Launcher",
    data: function() {
        return {

        }
    },
    methods: {

    },
    props: {
        windowId: String,
        name: String,
        iconName: String,
        iconType: String
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/_variables.scss';

.launcher {

}
</style>
