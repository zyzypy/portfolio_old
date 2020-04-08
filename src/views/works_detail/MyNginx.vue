<template>
    <div class="markdown-body">
        <Post></Post>
    </div>
</template>

<script>
    import Post from '@/info_maintain/my_nginx.md'

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