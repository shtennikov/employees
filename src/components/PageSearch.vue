<template>
    <BaseLayout>
        <template #header>
            <UiHeader />
        </template>

        <template v-if="employees">
            <UiPersonCard v-for="employee in employees" :key="employee.id" :person-data="employee" />
        </template>

        <template #footer>
            <!-- footer -->
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref, defineComponent } from 'vue';
import type { PersonData } from '@/types/interfaces';
import BaseLayout from './BaseLayout.vue';
import UiPersonCard from './UiPersonCard.vue';
import UiHeader from './UiHeader.vue';

const employees: Ref<PersonData[] | null> = ref(null);

onMounted(() => {
    fetch('https://6505af3bef808d3c66f05196.mockapi.io/employees/')
        .then((res) => res.json())
        .then((resData) => {
            employees.value = resData;
        })
        .catch((err) => console.error(err));
});

defineComponent({
    name: 'PageSearch'
});
</script>

<style lang="scss" scoped></style>
