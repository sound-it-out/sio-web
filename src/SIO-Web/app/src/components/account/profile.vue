<template>
<div>
    <b-row v-if="me != null">
        <b-col lg="8" class="mb-4">
            <b-card class="shadow-sm">
                <b-form id="profile-info">
                    <b-form-group label="Firstname">
                        <b-form-input placeholder="Firstname" :value="me.firstName"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Lastname">
                        <b-form-input placeholder="Lastname" :value="me.lastName"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Email">
                        <b-form-input placeholder="Email" :value="me.email"></b-form-input>
                    </b-form-group>
                </b-form>
            </b-card>
        </b-col>
        <b-col lg="4" class="text-center mb-4">
            <b-card class="shadow-sm" id="profile-picture">
                <i class="fas fa-user-circle fa-10x text-primary"></i>
            </b-card>
        </b-col>
    </b-row>
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
