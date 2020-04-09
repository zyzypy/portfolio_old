<template>
    <!-- work Header -->
    <section class="hero is-primary">
        <div class="hero-head">
            <b-navbar type="is-primary" class="is-primary">
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/works' }">
                        <b-icon pack="mdi" icon="arrow-left"></b-icon>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>

        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <!--Works Introduce-->
                    <slot name="title"></slot>
                </h1>
                <h2 class="subtitle">
                    <!--work_name-->
                    <slot name="subtitle"></slot>
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HeaderSimple"
    }
</script>

<style scoped>

</style>