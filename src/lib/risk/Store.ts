import { writable } from 'svelte/store';
import type Risk from './Risk.svelte';

export const risks = writable<Risk[]>([]);
export const editRisk = writable<Risk | null>(null);
export const deleteRisk = writable<Risk | null>(null);
