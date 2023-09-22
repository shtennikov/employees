<template>
    <div class="wrapper">
        <header class="header">
            <slot name="header"></slot>
        </header>

        <main>
            <slot name="default"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
    max-width: 1280px;
    margin: auto;
}

.header {
    margin-bottom: 8px;
}
</style>
