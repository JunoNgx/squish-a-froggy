<script>
    import { onMount } from "svelte"
    import Frog from "./lib/Frog.svelte"

    const loopSquishing = () => {
        const frogEls = document.getElementsByClassName("frog")
        // Looping index is so uncivilised :(
        for (let i = 0; i < frogEls.length; i++) {
            console.log(frogEls[i])
            setTimeout(() => {
                frogEls[i].classList.add("active");
            }, i * 300)

            setTimeout(() => {
                frogEls[i].classList.remove("active");
            }, i * 300 + 300)
        }

        setTimeout(loopSquishing, 2400)
    }

    onMount(loopSquishing);
</script>

<main>
    <div class="content">
        {#each Array(8) as frog}
            <Frog/>
        {/each}
    </div>
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

</style>
