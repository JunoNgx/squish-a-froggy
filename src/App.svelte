<script lang="ts">
    import Frog from "./lib/Frog.svelte"
</script>

<main>
    <div class="content">
        {#each Array(8) as frog}
            <Frog/>
        {/each}
    </div>

    <footer>
        <p>Made by Juno Nguyen</p>
    </footer>
</main>

<style lang="sass">
    main
        display: flex
        flex-direction: column
        align-items: center

    .content
        width: 350px
        display: flex
        flex-direction: row
        flex-wrap: wrap
        align-items: center
        justify-content: space-around
    
    footer
        color: #000
        font-family: monospace

        & p
            margin: 0

</style>
