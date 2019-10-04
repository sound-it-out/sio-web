<template>
    <transition :name="animation">
        <div class="loading-overlay show" :class="{ 'is-fullscreen': isFullscreen }" v-if="active">
            <div class="loading-background" />
            <div class="loading-icon" />
            <div class="loading-content">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
    @Prop({ type: Boolean, default: true })
    public active!: boolean;

    public show(): void {
        this.active = true;
    }

    public hide(): void {
        this.active = false;
    }
}
</script>