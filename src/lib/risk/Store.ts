import { writable } from 'svelte/store';
import type Risk from './Risk';

export const risks = writable<Risk[]>([]);
export const editRisk = writable<Risk | null>(null);