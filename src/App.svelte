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
    .content
        width: 350px
        display: flex
        flex-direction: row
        flex-wrap: wrap
        align-items: center
        justify-content: space-around
    
    footer
        & p
            margin: 0

</style>
