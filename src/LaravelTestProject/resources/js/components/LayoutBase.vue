<script setup>
defineProps(["title"]);
</script>

<template>
    <div class="py-6 mx-auto w-fit">
        <div class="w-[32rem] mx-auto bg-slate-900 p-8 rounded-lg text-white">
            <h2 class="text-lg font-bold mb-4">{{ title }}</h2>
            <div>
                <slot> </slot>
            </div>
        </div>
    </div>
</template>
