import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';
import type { AuthRecord } from 'pocketbase';
import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL ?? 'http://localhost:8090');

export const usePocketBase = () => pb;

const userKey = Symbol('user');

export function setUserContext(user: Writable<AuthRecord>) {
	setContext(userKey, user);
}

export function getUserContext() {
	return getContext<Writable<AuthRecord>>(userKey);
}
