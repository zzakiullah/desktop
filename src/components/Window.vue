<template>
    <div class="window">
        <div class="title-bar">
            {{ title }}
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Window",
    props: {
        title: String,
        isMaximized: Boolean
    }
}
</script>

<style lang="scss" scoped>
.window {
    
}
.title-bar {

}
.minimize-btn {

}
.maximize-btn {

}
.restore-btn {

}
.close-btn {

}
</style>
