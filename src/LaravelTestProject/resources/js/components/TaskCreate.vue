<script setup>
import LayoutBase from "@/components/LayoutBase.vue";

import { reactive, onMounted } from "vue";
import useTasks from "@/composable/tasks";
const { tasks, getTasks, storeTask, errors, destroyTask } = useTasks();
console.log("TaskCreate.vue file has been read");
onMounted(() => getTasks());

const form = reactive({
    name: "",
    slug: "",
});
</script>

<template>
    <LayoutBase title="Task Create">
        <form
            class="flex flex-col gap-6"
            @submit.prevent="storeTask(form), getTasks()"
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
            <div class="flex flex-col gap-2">
                <label for="slug">task slug</label>
                <input
                    autocomplete="off"
                    class="text-slate-700 rounded"
                    type="text"
                    id="slug"
                    v-model="form.slug"
                />
                <div v-if="errors.slug">
                    <span class="text-red-400">
                        {{ errors.slug[0] }}
                    </span>
                </div>
            </div>
            <button class="bg-slate-700 py-1 rounded" type="submit">
                submit
            </button>
        </form>
    </LayoutBase>
</template>
