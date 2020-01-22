<template>
<div>
</div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { User } from '@/models/user';

const user = namespace('user');

@Component
export default class Profile extends Vue {
    @user.Getter('me') public me!: User | null;
}
</script>
