<script>
	// @ts-nocheck
	import Mailjs from '../mailjs';
	import { onMount } from 'svelte';
	import MailCard from '../libs/MailCard.svelte';

	const mailjs = new Mailjs();

	let username = '';
	let userpass = '';

	const createRandom = () => {
		mailjs.createOneAccount().then((account) => {
			username = account.data.username;
			userpass = account.data.password;
			console.log(username + ' ' + userpass);
		});
	};

	// onMount(async () => {
	// 	await mailjs.login('4efdj@karenkey.com', 'dv4wq2lf');
	// });
	let messages;
	let showMsg = false;

	const getMessages = async () => {
		await mailjs.me().then(console.log);
		await mailjs.getMessages().then((data) => {
			messages = data.data;
			showMsg = true;
			console.log(data);
		});
	};
</script>

<main>
	<div
		class="flex bg-fav-dark flex-wrap flex-col gap-12 w-screen h-screen justify-center items-center"
	>
		<div>
			<h1 class="text-8xl font-patrick">Temp Mail</h1>
		</div>
		<div>
			{#if username == ''}
				<p>Create a account first !</p>
			{:else}
				<p>Welcome {username}</p>
			{/if}
		</div>
		<div class="flex flex-row gap-10">
			<button class="btn font-source px-9" on:click={createRandom}>Create</button>
			<button class="btn font-source px-9" on:click={getMessages}>messages</button>
		</div>
		{#if showMsg}
			<MailCard {messages} />
		{/if}
	</div>
</main>
