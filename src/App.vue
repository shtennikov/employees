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
import { ref, onMounted, type Ref } from 'vue';
import type { PersonData } from './types/interfaces';
import BaseLayout from './components/BaseLayout.vue';
import UiPersonCard from './components/UiPersonCard.vue';
import UiHeader from './components/UiHeader.vue';

const employees: Ref<PersonData[] | null> = ref(null);

onMounted(() => {
    fetch('https://6505af3bef808d3c66f05196.mockapi.io/employees/')
        .then((res) => res.json())
        .then((resData) => {
            employees.value = resData;
        })
        .catch((err) => console.error(err));
});
</script>

<style scoped></style>
