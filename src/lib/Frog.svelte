<script lang="ts">
    let count: number = 0
    const increment = () => {
      count += 1
    }
</script>

<section class="frog">
    <div class="frog__eyes">
        <div class="frog__eye frog__eye--left">
            <div class="frog__iris frog__iris--left"/>
        </div>
        <div class="frog__eye frog__eye--right">
            <div class="frog__iris frog__iris--left"/>
        </div>
    </div>

    <div class="frog__face">
        <div class="frog__cheek frog__cheek--right"/>
        <div class="frog__cheek frog__cheek--left"/>
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

</section>

<style lang="sass">

    $bCol: LightCoral

    .frog
        position: relative

        &__face

        &__eyes

        &__eye
            position: absolute
            width: 35px
            height: 35px
            border-radius: 50%
            background-color: $bCol



        &__iris
            position: absolute
            width: 23px
            height: 23px
            border-radius: 50%
            background-color: white


        &__face
            width: 180px
            height: 150px
            border-radius: 50%
            background-color: $bCol

</style>