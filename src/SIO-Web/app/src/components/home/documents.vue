<template>
    <b-row v-if="documents != null && documents.length > 0">
        <b-col md="6" lg="4" class="mb-2 document" v-for="document in documents" :key="document.id">
            <b-card>
                <b-row>
                    <b-col class="text-left">
                        {{ document.filename }} 
                        <b-badge variant="info">Voice-1</b-badge>
                    </b-col>
                    <b-col cols="2" class="text-right"><i class="far fa-play-circle fa-2x cursor-pointer"></i></b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
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