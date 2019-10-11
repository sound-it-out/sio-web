import Vue from 'Vue';
import { RenderTest } from '../render-test';

export class ComponentTest<T extends Vue> extends RenderTest<T> {}
