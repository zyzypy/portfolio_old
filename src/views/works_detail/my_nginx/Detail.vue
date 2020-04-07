<template>
    <div class="markdown-body">
        <Post></Post>
    </div>
</template>

<script>
    import Post from './introduction.md'

    export default {
        name: "WorkDetailMyNginx",
        components: {
           Post
        }
    }
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';
</style>