import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(), //import.meta.env.BASE_URL
    routes: [
        { path: "/", redirect: "/tasks" },
        {
            path: "/home",
            name: "home",
            component: () => import("../components/App.vue"),
        },
        {
            path: "/create",
            name: "taskCreate",
            component: () => import("../components/TaskCreate.vue"),
        },
        {
            path: "/tasks",
            name: "tasks",
            component: () => import("../components/TaskIndex.vue"),
        },
        {
            path: "/tasks/:id",
            name: "tasksId",
            component: () => import("../components/TaskEdit.vue"),
            props: true,
        },
    ],
});

export default router;
