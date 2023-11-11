<script setup>
import useTasks from "@/composable/tasks";
import { reactive, onMounted, ref } from "vue";
import LayoutBase from "./LayoutBase.vue";
import TaskCreate from "@/components/TaskCreate.vue";

console.log("TaskIndex.vue file has been read");

const { tasks, getTasks, storeTask, errors, destroyTask } = useTasks();
onMounted(() => getTasks());

console.log(createIsOpen.isOpen);
</script>

<script>
export const createIsOpen = reactive({
    isOpen: false,
});
const reverseOpen = () => (createIsOpen.isOpen = !createIsOpen.isOpen);
</script>

<template>
    <LayoutBase title="ToDo table">
        <div
            class="px-4 py-1 bg-yellow-200 rounded text-slate-800 block w-fit mb-6"
            @click="reverseOpen"
        >
            create task
        </div>

        <table
            class="w-full border-spacing-x-4 border-spacing-y-2 border-separate"
        >
            <thead>
                <tr>
                    <th class="text-left w-1/2">タスク</th>
                    <th class="text-left w-1/2">slug</th>
                    <th class="text-left whitespace-nowrap">編集</th>
                    <th class="text-left whitespace-nowrap">削除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td class="">{{ task.name }}</td>
                    <td>{{ task.slug }}</td>
                    <td class="cursor-pointer underline">
                        <RouterLink
                            class="px-4 py-1 bg-yellow-200 rounded text-slate-800 block w-fit no-underline whitespace-nowrap"
                            :to="{
                                name: 'tasksId',
                                params: { id: task.id },
                            }"
                        >
                            編集
                        </RouterLink>
                    </td>
                    <td class="cursor-pointer underline">
                        <div
                            class="px-4 py-1 bg-red-300 rounded text-slate-800 block w-fit whitespace-nowrap"
                            @click="destroyTask(task.id)"
                        >
                            削除
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </LayoutBase>

    <div v-if="createIsOpen.isOpen">
        <div class="w-screen h-screen absolute bg-slate-700/[.4] top-0">
            <TaskCreate />
        </div>
    </div>
</template>
