import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(), //import.meta.env.BASE_URL
    routes: [
        { path: "/", redirect: "/tasks" },
        {
            path: "/home",
            name: "home",
            component: () => import("../components/App.vue"),
            meta: {
                title: "ToDo - home",
                desc: "このページではタスク管理ができます。",
            },
        },
        {
            path: "/tasks/create",
            name: "taskCreate",
            component: () => import("../components/TaskCreate.vue"),
            meta: {
                title: "ToDo - home",
                desc: "このページではタスク管理ができます。",
            },
        },
        {
            path: "/tasks",
            name: "tasks",
            component: () => import("../components/TaskIndex.vue"),
            meta: {
                title: "ToDo - home",
                desc: "このページではタスク管理ができます。",
            },
        },
        {
            path: "/tasks/:id",
            name: "tasksId",
            component: () => import("../components/TaskEdit.vue"),
            meta: {
                title: "ToDo - home",
                desc: "このページではタスク管理ができます。",
            },
            props: true,
        },
    ],
});

export default router;
