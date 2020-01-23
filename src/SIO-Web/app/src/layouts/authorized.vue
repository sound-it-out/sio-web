<template>
<div>
    <navbar />
    <div class="has-padding-4 columns">
        <div class="column is-one-quarter">
            <div class="box">
                <navsidebar/>
            </div>        
        </div>
        <div class="column">
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
        navsidebar
    },
})
export default class AuthorizedLayout extends Vue {}
</script>