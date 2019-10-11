<template>
<div>
    <navbar />
    <div class="container-fluid">
        <div class="row">
            <main role="main" class="pt-4 px-4 w-100">
                <slot />
            </main>
        </div>
    </div>
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