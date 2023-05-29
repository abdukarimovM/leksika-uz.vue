<template>
    <header class="bg-[#01756C]">
        <div class="container mx-auto">
            <nav class="h-[100px] flex justify-between items-center text-white">
                <NuxtLink to="/">
                    <img width="254px" height="60px" src="../public/Logo.png" alt="">
                </NuxtLink>
                <div class="flex gap-[80px] text-[18px]">
                    <h1>ENG <i class="bx bx-transfer-alt"></i> UZB</h1>
                    <h1>RUS <i class="bx bx-transfer-alt"></i> UZB</h1>
                    <h1><NuxtLink to="/articles">Articles</NuxtLink></h1>
                    <h1><NuxtLink to="/grammar">Grammar</NuxtLink></h1>
                    <h1><NuxtLink to="/about">About us</NuxtLink></h1>
                </div>
            </nav>
        </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
