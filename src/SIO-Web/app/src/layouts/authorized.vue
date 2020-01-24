<template>
<div>
    <navbar />
    <div class="columns">
        <div class="column is-one-fifth">
            <div class="box">
                <navsidebar/>
            </div>        
        </div>
        <div class="column has-padding-4">
            <div class="box">
                <main role="main">
                    <slot />           
                </main>
            </div>
        </div>        
    </div>    
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import navbar from '@/components/nav-bar.vue';
import navsidebar from '@/components/nav-sidebar.vue';
@Component({
    components: {
        navbar,
        navsidebar,
    },
})
export default class AuthorizedLayout extends Vue {}
</script>