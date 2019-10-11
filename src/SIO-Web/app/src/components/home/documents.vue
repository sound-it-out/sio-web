<template>
<div>
    <b-row>
        <b-col>
            <b-card class="mb-4">
                <b-form id="document-search">
                    <b-form-input placeholder="Search..."></b-form-input>
                </b-form>  
            </b-card>
        </b-col>
    </b-row>
    <b-row>
        <b-col md="4" lg="3">
            <b-card id="document-actions" class="mb-4">
                <b-row class="mb-2">
                    <b-col>
                        <b-button block variant="danger">Delete</b-button>
                    </b-col>
                </b-row>       
                <b-row>
                    <b-col>
                        <b-button block variant="primary">Upload</b-button>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
        <b-col>
            <b-row v-if="documents != null && documents.length > 0">
                <b-col lg="6" class="mb-4 document" v-for="document in documents" :key="document.id">
                    <b-card no-body class="shadow-sm">
                        <b-list-group flush>
                            <b-list-group-item class="bg-primary">
                                <b-col class="text-center"><i class="far fa-play-circle fa-4x cursor-pointer text-white"></i></b-col>
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
        </b-col>
    </b-row>
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