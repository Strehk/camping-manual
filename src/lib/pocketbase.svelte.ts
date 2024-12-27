import PocketBase from 'pocketbase';
import type { AuthRecord } from 'pocketbase';
import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';
import { browser } from '$app/environment';
import { configPublic } from '../config/public';

export const createInstance = () =>
	new PocketBase(configPublic.PUBLIC_POCKETBASE_URL ?? 'http://localhost:8090');

const pb = $state(createInstance());

export const usePocketBase = () => {
	if (browser) {
		pb.authStore.loadFromCookie(document.cookie);
	}
	return pb;
};

const userKey = Symbol('user');

export function setUserContext(user: Writable<AuthRecord>) {
	setContext(userKey, user);
}

export function getUserContext() {
	return getContext<Writable<AuthRecord>>(userKey);
}
