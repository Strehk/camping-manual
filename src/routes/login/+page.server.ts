import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { message } from 'sveltekit-superforms';
import { z } from 'zod';
import { type Actions } from '@sveltejs/kit';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return message(form, 'Formular nicht gültig', { status: 400 });
		}

		try {
			await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
			return message(form, 'Login erfolgreich');
		} catch (err) {
			return message(form, 'Falsche Email oder Passwort', { status: 403 });
		}
	}
};
