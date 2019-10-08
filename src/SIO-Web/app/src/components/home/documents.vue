<template>
    <b-row v-if="documents != null && documents.length > 0">
        <b-col md="6" lg="4" class="mb-3 document" v-for="document in documents" :key="document.id">
            <b-card no-body>
                <b-list-group flush>
                    <b-list-group-item>
                        <b-col class="text-center"><i class="far fa-play-circle fa-4x cursor-pointer text-primary"></i></b-col>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col>
                                {{ document.filename }}
                            </b-col>
                            <b-col class="text-right">
                                <b-button class="mr-2" variant="primary"><i class="fas fa-file-download"></i></b-button>
                                <b-button variant="primary"><i class="fas fa-file-audio"></i></b-button>
                            </b-col>
                        </b-row>
                    </b-list-group-item>
                </b-list-group>
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