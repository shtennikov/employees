<template>
    <div class="card">
        <div class="card__image" :style="{ 'background-image': `url(${personData.avatarUrl})` }"></div>
        <div class="card__data">
            <span class="card__name">
                <span class="card__name_first">{{ `${personData.firstName} ${personData.lastName}` }}</span>
                <span class="card__tag">{{ personData.userTag }}</span>
            </span>
            <span class="card__position">{{ personData.position }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { PersonData } from '@/types/interfaces';

defineProps({
    personData: {
        type: Object as PropType<PersonData>,
        required: true
    }
});

defineComponent({
    name: 'UiPersonCard'
});
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    min-height: 80px;
    cursor: pointer;

    &:hover {
        background-color: var(--light-bg-secondary);
    }
}

.card__data {
    margin-left: 16px;
}

.card__image {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
}

.card__name {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    line-height: 20px;
    color: var(--light-text-primary);
}

.card__tag {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--light-text-tetriary);
}

.card__position {
    font-size: 13px;
    text-transform: capitalize;
    line-height: 16px;
    color: var(--light-text-secondary);
}
</style>
