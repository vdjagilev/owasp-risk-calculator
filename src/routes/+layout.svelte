<script>
	import '../app.postcss';
	import { setContext } from 'svelte';
	import { risks } from '$lib/risk/Store';
	import './style.scss';
	import { Footer, A } from 'flowbite-svelte';

	setContext('risks', risks);
	setContext('editRisk', null);
</script>

<div>
	<main>
		<slot />
	</main>

	<Footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
		<p class="text-base text-gray-900 dark:text-white leading-normal font-normal text-left whitespace-normal">
			Based on <A
				href="https://owasp.org/www-community/OWASP_Risk_Rating_Methodology"
				target="_blank"
				class="inline-flex items-center hover:underline text-primary-600 dark:text-primary-500"
				>OWASP Risk Rating Methodology
			</A>
		</p>
		<p class="text-base text-gray-900 dark:text-white leading-normal font-normal text-left whitespace-normal">
			Inspired by <A
				href="https://owasp-risk-rating.com/"
				target="_blank"
				class="inline-flex items-center hover:underline text-primary-600 dark:text-primary-500"
				>https://owasp-risk-rating.com/</A
			>
		</p>
	</Footer>
</div>
