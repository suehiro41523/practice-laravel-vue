<script setup>
import LayoutBase from "@components/LayoutBase.vue";
import useTasks from "@/composable/tasks";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const { task, getTask, updateTask, errors } = useTasks();

const props = defineProps({
    id: {
        required: false,
        type: String,
    },
});
const router = useRouter();
onMounted(() => getTask(props.id));
</script>

<template>
    <LayoutBase title="Edit Task">
        <RouterLink to="/tasks"> back to Tasks </RouterLink>
        <form
            class="flex flex-col gap-6"
            @submit.prevent="
                updateTask($route.params.id), router.push({ path: '/tasks' })
            "
        >
            <div class="flex flex-col gap-2">
                <label for="name">task name</label>
                <input
                    autocomplete="off"
                    class="text-slate-700 rounded"
                    type="text"
                    id="name"
                    v-model="task.name"
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
                    v-model="task.slug"
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
