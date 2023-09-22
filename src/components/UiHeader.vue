<template>
    <div class="header__container">
        <h2 class="header__title">Поиск</h2>
        <UiSearchBar class="header__search-bar" />
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import UiSearchBar from './UiSearchBar.vue';

defineComponent({
    name: 'UiHeader'
});
</script>

<style scoped>
.header__title {
    margin: 16px 0 12px 24px;
}
.header__search-bar {
    margin: 6px 16px;
}
</style>
