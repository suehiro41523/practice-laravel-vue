import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost/api/v1/";

export default function useTasks() {
    const tasks = ref([]);
    const task = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getTasks = async () => {
        const response = await axios.get("tasks");
        tasks.value = response.data.data;
    };
    const getTask = async (id) => {
        const response = await axios.get("tasks" + id);
        task.value = response.data.data;
    };
    const storeTask = async (data) => {
        try {
            await axios.post("tasks", data);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const updateTask = async (id) => {
        try {
            await axios.post("tasks" + id, task.value);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyTask = async (id) => {
        if (!window.confirm("are you sure")) {
            return;
        }
        await axios.delete("tasks/" + id);
        await getTasks();
    };
    return {
        task,
        tasks,
        getTask,
        getTasks,
        storeTask,
        updateTask,
        destroyTask,
        errors,
    };
}
