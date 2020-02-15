<template>
    <!-- 公共头部 -->
    <!-- https://bulma.io/documentation/layout/hero/ -->
    <div id="header">
        <!-- 两个色值渐变gradient -->
        <section class="hero is-primary is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <b-navbar>
                    <template slot="brand">
                        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                            <img
                                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                                    alt="Lightweight UI components for Vue.js based on Bulma"
                            >
                        </b-navbar-item>
                    </template>
                    <template slot="start">
                        <b-navbar-item href="#/about">
                            <!-- https://buefy.org/documentation/icon -->
                            <b-icon
                                    pack="mdi"
                                    icon="account"
                                    size="is-small"
                            >
                            </b-icon>
                            <span>关于我</span>
                        </b-navbar-item>
                        <b-navbar-item href="#/apps">
                            <b-icon
                                    icon="apps"
                                    size="is-small"
                            >
                            </b-icon>
                            <span>作品&demo</span>
                        </b-navbar-item>
                    </template>

                    <template slot="end">
                        <b-navbar-item tag="div">
                            <div class="buttons">
                                <a class="button is-primary" href="#/signup">
                                    <span><strong>注册</strong></span>
                                </a>
                                <a class="button is-light" href="#/signin">
                                    <span>登录</span>
                                </a>
                            </div>
                        </b-navbar-item>
                    </template>
                </b-navbar>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Title
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container">
                        <ul>
                            <li class="is-active"><a>Overview</a></li>
                            <li><a>Modifiers</a></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }

</script>

<style scoped>

</style>