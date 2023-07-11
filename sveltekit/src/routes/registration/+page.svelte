<div id="promo">
	<h1>Registrace</h1>
	<form method="POST" action="?/register" autocomplete="off">
		<label for="name">Jméno:</label>
		<input name="name" type="text" placeholder="Jan Novák" />
		<br />
		<label for="email">E-mail:</label>
		<input name="email" type="email" placeholder="jannovak@fakemail.cz" />
		<br />
		<button type="submit">Odebírat</button>
	</form>
</div>

<style>
	#promo {
		width: 30%;
		text-align: center;
		padding: 20px 20px 50px 20px;
		border-radius: 16px;
		margin: 16% auto 8% auto;
		background-color: #202327;
	}

	#promo h1 {
		margin-bottom: 5%;
		margin-top: 3%;
	}

	#promo form {
		margin-top: 1%;
	}

	#promo input {
		width: 70%;
		height: 22px;
		margin-top: 8px;
		font-size: 16px;
		border-radius: 5px;
		border: 1px solid var(--on-tertiary);
		padding: 2px 6px 2px 6px;
	}

	#promo input:focus {
		border: 1px solid var(--secondary);
	}

	#promo button {
		margin-top: 14px;
		width: 40%;
		font-size: 16px;
		border-radius: 5px;
		border: 3px solid var(--on-tertiary);
		background-color: var(--on-tertiary);
		color: var(--tertiary);
		cursor: pointer;
		transition: 0.15s;
	}

	#promo button:hover {
		border: 3px solid var(--secondary);
	}

	#promo label {
		color: var(--on-tertiary);
		margin-right: 10px;
	}

	@media (max-width: 1280px) {
		#promo {
			width: 50%;
			margin-top: 20%;
		}
	}

	@media (max-width: 800px) {
		#promo {
			width: 80%;
			margin-top: 55%;
		}
	}
</style>
