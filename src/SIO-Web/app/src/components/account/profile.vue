<template>
<div>
    <b-row>
        <b-col lg="6">
            <b-form>
                <b-form-group label="Firstname">
                    <b-form-input placeholder="Firstname"></b-form-input>
                </b-form-group>
                <b-form-group label="Lastname">
                    <b-form-input placeholder="Lastname"></b-form-input>
                </b-form-group>
                <b-form-group label="Email">
                    <b-form-input placeholder="Email"></b-form-input>
                </b-form-group>
            </b-form>
        </b-col>
        <b-col lg="6" class="text-center">
            <i class="fas fa-user-circle fa-10x text-primary"></i>
        </b-col>
    </b-row>
</div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorizedLayout from '@/layouts/authorized.vue';

@Component({
  components: {
    AuthorizedLayout,
  },
})
export default class Profile extends Vue {

}
</script>
