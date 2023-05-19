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
    .logo
        height: 6em
        padding: 0.3rem
        will-change: filter
        transition: filter 300ms
    
    .logo:hover
        filter: drop-shadow(0 0 2em #646cffaa)

    .logo.svelte:hover
        filter: drop-shadow(0 0 2em #ff3e00aa)

    .read-the-docs
        color: #888

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
