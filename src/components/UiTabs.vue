<template>
    <div class="tabs-group">
        <div v-for="option in options" :key="option.value" class="tabs-group__item">
            <input
                :id="`tabs-group__item_${name}_${option.value}`"
                :checked="option.value === modelValue"
                :name="name"
                @input="$emit('update:modelValue', option.value)"
                class="tabs-group__input"
                type="radio"
            />
            <label :for="`tabs-group__item_${name}_${option.value}`" class="tabs-group__label">
                {{ option.text }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type PropType, defineComponent } from 'vue';
import type { TabsProp } from '@/types/interfaces';

defineProps({
    options: {
        type: Object as PropType<TabsProp[]>,
        required: true
    },
    modelValue: {
        type: String
    },
    name: {
        type: String,
        default: () => 'tabs-group'
    }
});

defineEmits(['update:modelValue']);

defineComponent({
    name: 'UiTabs'
});
</script>

<style scoped>
.tabs-group {
    display: flex;
    align-items: center;
    height: 36px;
}
.tabs-group__input {
    display: none;
}

.tabs-group__label {
    padding: 8px 12px;
    font-size: 15px;
    font-weight: 500;
    color: var(--light-text-tetriary, #97979b);
    cursor: pointer;
}
.tabs-group__input:checked ~ .tabs-group__label {
    border-bottom: 3px solid var(--light-active-primary);
    text-shadow: 0.6px 0 0;
    color: var(--light-text-primary, #050510);
}
</style>
