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
        const response = await axios.get("tasks/" + id);
        task.value = response.data.data;
    };
    const storeTask = async (data) => {
        try {
            await axios.post("tasks/", data);
            // await router.push({ name: "TaskIndex" });
            return;
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                console.log("error detected");
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const updateTask = async (id) => {
        try {
            await axios.put("tasks/" + id, task.value);
            // await router.push({ name: "App" });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
    };
    const destroyTask = async (id) => {
        const getTaskById = (id) => {
            return tasks._value.find((task) => task.id === id);
        };

        if (
            !window.confirm(
                "do you really want to delete " + getTaskById(id).name + " ?"
            )
        ) {
            return;
        }
        await axios.delete("tasks/" + id);
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
