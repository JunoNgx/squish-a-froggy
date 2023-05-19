<script lang="ts">
    let count: number = 0
    const increment = () => {
      count += 1
    }
</script>

<section class="frog">
    <div class="frog__face">

        <!-- <div class="frog__face"> -->
        <div class="frog__cheek frog__cheek--right"/>
        <div class="frog__cheek frog__cheek--left"/>
        <!-- </div> -->

        <div class="frog__eyes">
            <div class="frog__eye frog__eye--left">
                <div class="frog__iris frog__iris--left"/>
            </div>
            <div class="frog__eye frog__eye--right">
                <div class="frog__iris frog__iris--left"/>
            </div>
        </div>

        <div class="frog__nose">
            <div class="frog__nostril frog__eye--left"/>
            <div class="frog__nostril frog__eye--right"/>
        </div>

        <div class="frog__mouth">
            <div class="frog__lips">
                <div class="frog__tongue">
            </div>
        </div>

    </div>
</section>

<style lang="sass">

    $bCol: LightCoral

    .frog
        position: relative
        border: black 1px solid
        width: 200px
        height: 200px
        display: flex
        // place-items: center center
        align-items: center
        justify-content: center

        &__face
            // position: absolute
            position: relative
            width: 160px
            height: 120px
            border-radius: 50%
            background-color: blue

        &__eyes
            position: relative

        &__eye
            position: absolute
            width: 40px
            height: 40px
            border-radius: 50%
            background-color: red

            &--left
                transform: translate(15px, -10px)
            &--right
                transform: translate(105px, -10px)

        &__iris
            position: absolute
            width: 21px
            height: 21px
            border-radius: 50%
            background-color: white
            transform: translate(9px, 9px)

        &

</style>