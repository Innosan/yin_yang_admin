<script>
export let iconPath, url, title
</script>

<a href="{url}">
	<img src="{iconPath}" alt="{title} icon">
</a>

<style lang="scss">
	a {
		display: inline-flex;
		border-radius: 10px;
		background: #E44857;
		padding: 10px;
		opacity: .8;
		transition: .3s;
		&:hover {
			opacity: 1;
		}
	}
</style>
