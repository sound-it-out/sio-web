<template>
<div>
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