<template>
        <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Info"></b-menu-item>
            </b-menu-list>
        </b-menu>  
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";

@Component
export default class NavSideBar extends Vue {}
</script>