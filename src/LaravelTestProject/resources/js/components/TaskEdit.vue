<script setup>
import { reactive, ref, onMounted, computed, nextTick, onUpdated } from "vue";
import { useRouter } from "vue-router";
import { Marked } from "marked";
import * as DOMPurify from "dompurify";
import LayoutBase from "@/components/LayoutBase.vue";
import useTasks from "@/composable/tasks";
import { tasksStore } from "@/store/store.js";

const { tasks, getTasks, task, getTask, updateTask, errors, destroyTask } =
    useTasks();
const marked = new Marked();

marked.setOptions({
    breaks: true,
});
onMounted(() => {
    getTask(props.id);
});

const parsedMarkdown = computed(() => {
    return marked(markdown.value);
});

const parsedTask = () => {
    try {
        console.log(task);
        return marked.parse(task.value.content);
    } catch (error) {
        setTimeout(() => {
            console.log(task);
            return marked.parse(task);
        }, 500);
    }
};
console.log(parsedTask());

const props = defineProps({
    id: {
        required: false,
        type: String,
    },
});

const router = useRouter();

const deleteTask = async (id) => {
    await destroyTask(id);
    await (tasksStore.tasks = tasks.value);
    await router.push("/tasks");
};
</script>

<template>
    <LayoutBase title="Edit Task">
        <RouterLink
            class="text-yellow-200 mb-4 block w-fit px-2 text-sm font-bold"
            to="/tasks"
        >
            タスク一覧に戻る
        </RouterLink>
        <form
            class="flex flex-col gap-6"
            @submit.prevent="
                updateTask($route.params.id), router.push({ path: '/tasks' })
            "
        >
            <div class="flex flex-col gap-2">
                <label class="text-sm font-bold" for="name">タスク名</label>
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
                <label class="text-sm font-bold" for="content">詳細</label>
                <textarea
                    class="text-slate-700 rounded resize-y h-28"
                    type="text"
                    id="content"
                    v-model="task.content"
                />
                <div v-if="errors.content">
                    <span class="text-red-400">
                        {{ errors.content[0] }}
                    </span>
                </div>
            </div>
            <div class="compiled-markdown">
                <span class="text-sm">プレビュー</span>
                <div class="" v-html="parsedTask()"></div>
            </div>
            <button class="bg-slate-700 py-1 rounded" type="submit">
                送信
            </button>
            <div class="cursor-pointer">
                <div
                    class="ml-auto px-4 py-1 text-red-400 text-sm font-bold rounded w-fit"
                    @click="() => deleteTask($route.params.id)"
                >
                    タスクの削除
                </div>
            </div>
        </form>
    </LayoutBase>
</template>
