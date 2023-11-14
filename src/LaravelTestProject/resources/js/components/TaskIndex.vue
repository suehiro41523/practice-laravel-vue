<script setup>
import { reactive, onMounted, KeepAlive } from "vue";
import useTasks from "@/composable/tasks";
import LayoutBase from "./LayoutBase.vue";
import { tasksStore } from "@/store/store.js";

console.log("TaskIndex.vue file has been read");

const { tasks, getTasks, storeTask, errors, destroyTask } = useTasks();

onMounted(() => {
    getTasks();
    tasksStore.tasks = tasks;
});
// watch(tasks, () => (tasks._value = tasks.value));
</script>

<script></script>

<template>
    <LayoutBase title="ToDo table">
        <RouterLink
            to="/tasks/create"
            class="px-4 py-1 bg-yellow-200 rounded text-slate-800 block w-fit mb-6"
        >
            create task
        </RouterLink>
        <div v-if="tasksStore.tasks.length == 0">現在タスクはありません</div>
        <div class="flex flex-col divide-y divide-slate-800">
            <div
                class="flex gap-2 items-center py-2"
                v-for="task in tasksStore.tasks"
                :key="task.id"
            >
                <div class="w-full">
                    {{ task.name }}
                    <div class="text-sm text-slate-300 ml-3">
                        {{ task.content }}
                    </div>
                </div>
                <div class="cursor-pointer">
                    <RouterLink
                        class="px-4 py-1 bg-yellow-200 rounded text-slate-800 block w-fit no-underline whitespace-nowrap"
                        :to="{
                            name: 'tasksId',
                            params: { id: task.id },
                        }"
                    >
                        編集
                    </RouterLink>
                </div>
            </div>
        </div>
    </LayoutBase>
</template>
