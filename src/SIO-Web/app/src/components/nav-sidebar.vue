<template>
    <nav class="sidebar is-fullheight">
        <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Info"></b-menu-item>
            </b-menu-list>
        </b-menu> 
    </nav> 
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

@Component
export default class NavSideBar extends Vue {}
</script>