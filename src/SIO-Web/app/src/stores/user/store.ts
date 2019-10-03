import { Module } from 'vuex';
import { State } from '@/stores/user/state';
import { Actions } from '@/stores/user/actions';
import { Getters } from '@/stores/user/getters';
import { Mutations } from '@/stores/user/mutations';

export class UserStore implements Module<State, any> {
    public namespaced: boolean = true;
    public state: State = new State();
    public actions = new Actions();
    public getters: Getters = new Getters();
    public mutations = new Mutations();
}
