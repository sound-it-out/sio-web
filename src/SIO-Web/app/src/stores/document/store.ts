import { Module } from 'vuex';
import { State } from '@/stores/document/state';
import { Actions } from '@/stores/document/actions';
import { Getters } from '@/stores/document/getters';
import { Mutations } from '@/stores/document/mutations';

export class DocumentStore implements Module<State, any> {
    public namespaced: boolean = true;
    public state: State = new State();
    public actions = new Actions();
    public getters: Getters = new Getters();
    public mutations = new Mutations();
}