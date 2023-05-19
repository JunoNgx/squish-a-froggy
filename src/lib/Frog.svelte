<script lang="ts">
    let count: number = 0
    const increment = () => {
      count += 1
    }
</script>

<section class="frog">
    <div class="frog__eyes">
        <div class="frog__eye frog__eye--left"/>
        <div class="frog__eye frog__eye--right"/>
    </div>
    <div class="frog__face"/>
    <div class="frog__nose">
        <div class="frog__nostril frog__eye--left"/>
        <div class="frog__nostril frog__eye--right"/>
    </div>

    <div class="frog__mouth">
        <div class="frog__lips">
            <div class="frog__tongue">
        </div>
    </div>

</section>

<style lang="sass">
    .frog
        position: relative

        &__eyes



        &__face
            width: 180px
            height: 150px
            border-radius: 50%
            background-color: red

</style>