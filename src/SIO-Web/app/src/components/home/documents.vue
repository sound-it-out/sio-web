<template>
<div class="columns is-multiline">
    <div class="column is-one-third" v-for="(document, index) in documents" :key="index">
        <div class="card">
            <header class="card-header has-background-primary">
                <p class="card-header-title has-text-white">
                    {{ document.filename }}
                </p>
            </header>
            <footer class="card-footer">
                <a href="#" class="card-footer-item"><i class="fas fa-file-download"></i></a>
                <a href="#" class="card-footer-item has-text-danger"><i class="fas fa-trash-alt"></i></a>
            </footer>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { UserDocument } from '@/models/user-document';
import { DocumentApi } from '@/api/__mocks__/document';

const document = namespace('document');
const documentApi = new DocumentApi();

@Component
export default class Documents extends Vue {
    public documents: UserDocument[] | null = [];

    private async mounted(): Promise<void> {
        this.$loader.show();
        const result = await documentApi.getDocumentsAsync(1, 25);
        if (result.isError) {
            // Note(Matt): What do we do here? Do we log the user out? Do we just assume they have no documents?
        } else {
            this.documents = result.value;
        }
        this.$loader.hide();
    }
}
</script>