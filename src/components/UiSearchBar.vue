<template>
    <div class="search">
        <span class="search__icon las la-search"></span>
        <input v-model="inputedValue" class="search__input" placeholder="Введи имя, тег, почту..." />
        <button class="search__icon las la-sort"></button>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const inputedValue = ref('');

defineComponent({
    name: 'SearchBar'
});
</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 12px;
    border-radius: 16px;
    background: var(--light-bg-secondary);
}

.search__input {
    flex-grow: 1;
    color: var(--light-text-primary);
}

.search__icon {
    font-size: 1.5em;
    color: var(--light-content-default-secondary);
}
</style>
