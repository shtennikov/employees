<template>
    <BaseLayout>
        <div class="header__container">
            <h2 class="header__title">Поиск</h2>
            <UiSearchBar v-model="searchInput" class="header__search-bar" />
        </div>

        <template v-if="employees">
            <UiTabs class="tabs" v-model="currentTab" :options="tabsOptions" />
            <UiPersonCard v-for="employee in filteredEmployees" :key="employee.id" :person-data="employee" />
        </template>

        <template #footer>
            <!-- footer -->
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref, defineComponent, computed } from 'vue';
import type { PersonData, TabsProp } from '@/types/interfaces';
import BaseLayout from './BaseLayout.vue';
import UiPersonCard from './UiPersonCard.vue';
import UiSearchBar from './UiSearchBar.vue';
import UiTabs from './UiTabs.vue';

const currentTab = ref('all');
const searchInput = ref('');

const tabsOptions: TabsProp[] = [
    { text: 'Все', value: 'all' },
    { text: 'HR', value: 'hr' },
    { text: 'Designers', value: 'design' },
    { text: 'Analysts', value: 'analytics' },
    { text: 'Managers', value: 'management' },
    { text: 'IOS', value: 'ios' },
    { text: 'Android', value: 'android' },
    { text: 'Frontend', value: 'frontend' },
    { text: 'Backend', value: 'backend' }
];

const employees: Ref<PersonData[]> = ref([]);

const filteredEmployees = computed(() => {
    const searchQuery = searchInput.value.toLowerCase();

    return employees.value.filter((employee) =>
        (employee.firstName + employee.lastName + employee.department + employee.position + employee.userTag)
            .toLowerCase()
            .includes(searchQuery)
    );
});

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

<style scoped>
.tabs {
    margin-top: 8px;
    margin-bottom: 16px;
}
</style>
