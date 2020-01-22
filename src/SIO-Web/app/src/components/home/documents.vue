<template>
<div class="columns">
    <div class="column is-one-third">
        <div class="card">
            <header class="card-header has-background-primary">
                <p class="card-header-title has-text-white">
                filename.ext
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { UserDocument } from '@/models/user-document';
import { LOAD_DOCUMENTS } from '@/stores/document/actions';

const document = namespace('document');

@Component
export default class Documents extends Vue {
    @document.Getter('documents') public documents!: UserDocument | null;

    private async mounted(): Promise<void> {
        this.$loader.show();
        await this.$store.dispatch(LOAD_DOCUMENTS);
        this.$loader.hide();
    }
}
</script>