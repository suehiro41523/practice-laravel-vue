<script setup>
import { reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";

import LayoutBase from "@/components/LayoutBase.vue";
import TaskIndex from "@/components/TaskIndex.vue";
import useTasks from "@/composable/tasks";
import router from "@/router/index.js";
import { tasksStore } from "@/store/store.js";

const { tasks, getTasks, storeTask, errors } = useTasks();
console.log("TaskCreate.vue file has been read");

onMounted(() => getTasks());

const createTask = async () => {
    await storeTask(form);
    await (tasksStore.tasks = tasks.value);
    router.push("/tasks");
};
const form = reactive({
    name: "",
    content: "no content",
});
</script>

<template>
    <div class="">
        <RouterLink
            to="/tasks"
            class="absolute w-screen h-screen bg-slate-800 opacity-50"
        ></RouterLink>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit mx-auto"
        >
            <LayoutBase title="Task Create">
                <RouterLink
                    to="/tasks"
                    class="px-4 py-1 w-fit rounded text-slate-800 bg-yellow-200"
                >
                    back
                </RouterLink>
                <form
                    class="flex flex-col gap-6"
                    @submit.prevent="createTask()"
                >
                    <div class="flex flex-col gap-2">
                        <label for="name">task name</label>
                        <input
                            autocomplete="off"
                            class="text-slate-700 rounded"
                            type="text"
                            id="name"
                            v-model="form.name"
                        />
                        <div v-if="errors.name">
                            <span class="text-red-400">
                                {{ errors.name[0] }}
                            </span>
                        </div>
                    </div>
                    <button class="bg-slate-700 py-1 rounded" type="submit">
                        submit
                    </button>
                </form>
            </LayoutBase>
        </div>
    </div>
    <TaskIndex />
</template>
