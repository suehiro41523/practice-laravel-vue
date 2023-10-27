<script setup>
import useTasks from "../components/composable/task";
import { onMounted, reactive } from "vue";

const { storeTask } = useTasks();

const { tasks, getTasks } = useTasks();
const form = reactive({
    name: "",
    slug: "",
});
onMounted(() => getTasks());
</script>
<template>
    <div class="bg-slate-800 min-h-[100vh] text-white">
        <div class="">
            <div class="">
                <h2>Todo table</h2>
            </div>
            <div class="text-slate-700">
                <form @submit.prevent="storeTask(form)">
                    <div>
                        <label for="name">task name</label>
                        <input type="text" id="name" v-model="form.name" />
                    </div>
                    <div>
                        <label for="slug">task slug</label>
                        <input type="text" id="slug" v-model="form.slug" />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
            <div v-for="task in tasks" :key="task.id">
                <div class="row flex gap-8">
                    <p class="w-8">{{ task.name }}</p>
                    <p>{{ task.slug }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
