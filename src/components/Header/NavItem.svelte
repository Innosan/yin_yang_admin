<script lang="ts">
    import { page } from '$app/stores';
    export let navTitle, navLink, navIconPath;
</script>

<a href="{navLink}" class:active={$page.url.pathname === navLink}>
    <img src="{navIconPath}" alt="{navTitle} icon">
    <p>{navTitle}</p>
</a>

<style lang="scss">
    a {
        display: flex;
        gap: 14px;
        width: fit-content;

        align-items: center;
        text-decoration: none;
        color: black;

        padding: 10px 18px;

		border-radius: 10px;

		outline: 2px solid transparent;

		opacity: .7;
		transition: .3s;

		&:hover {
			opacity: 1;

			outline: 2px solid black;
		}
    }

    p {
        font-size: 24px;
        font-weight: 900;
    }

    .active {
        background-color: #E44857;
        color: white;
		opacity: 1;

		img {
			filter: invert(100%) sepia(100%) saturate(38%) hue-rotate(254deg) brightness(110%) contrast(110%);
		}
    }
</style>
