<script setup>
import useTasks from "@/composable/tasks";
import { onMounted } from "vue";
import { tasksStore } from "@/store/store.js";

const { tasks, getTasks } = useTasks();
window.onload = getTasks();
tasksStore.tasks = tasks;
</script>

<template>
    <router-view></router-view>
</template>
