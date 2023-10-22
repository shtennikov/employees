<template>
    <div class="search">
        <span class="search__icon las la-search"></span>
        <input v-model="modelValueProxy" class="search__input" placeholder="Введи имя, тег, почту..." />
        <button class="search__icon las la-sort"></button>
    </div>
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
});

defineComponent({
    name: 'SearchBar'
});

const modelValueProxy = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    }
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
