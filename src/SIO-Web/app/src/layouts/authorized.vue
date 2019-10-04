<template>
<div>
    <nav-bar />
    <div class="container-fluid">
        <div class="row">
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 position-relative">
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