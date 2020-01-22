<template>
<div>
    <navbar />
    <main role="main" class="has-padding-top-4 has-padding-left-4 w-100">
        <slot />
    </main>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import navbar from '@/components/nav-bar.vue';
@Component({
    components: {
        navbar,
    },
})
export default class AuthorizedLayout extends Vue {}
</script>