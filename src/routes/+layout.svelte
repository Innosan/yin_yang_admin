<script>
    /*
    CSS
     */
    import '../app.css'
    import '../styles/global.css'
    import '../styles/font.css'

    /*
    Components
     */
    import PageContainer from "../components/PageContainer.svelte";
    import Header from "../components/Header/Header.svelte";
</script>

<main class="layout">
    <Header/>
    <PageContainer>
        <slot/>
    </PageContainer>
</main>
