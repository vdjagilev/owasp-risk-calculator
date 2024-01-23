<script>
	import '../app.postcss';
	import { setContext } from 'svelte';
	import { risks } from '$lib/risk/Store';
	import './style.scss';
	import { Footer, A, P } from 'flowbite-svelte';

	setContext('risks', risks);
	setContext('editRisk', null);
</script>

<div>
	<main>
		<slot />
	</main>

	<Footer>
		<P
			>Based on <A
				href="https://owasp.org/www-community/OWASP_Risk_Rating_Methodology"
				target="_blank"
				>OWASP Risk Rating Methodology
			</A></P
		>
		<P
			>Inspired by <A href="https://owasp-risk-rating.com/" target="_blank"
				>https://owasp-risk-rating.com/</A
			></P
		>
	</Footer>
</div>
