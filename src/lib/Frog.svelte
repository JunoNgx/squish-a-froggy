<script lang="ts">
    let count: number = 0
    const increment = () => {
      count += 1
    }
</script>

<section class="frog">
    <!-- <div class="frog__container"> -->
        <div class="frog__face">
            <div class="frog__eyes">
                <div class="frog__eye frog__eye--left">
                    <div class="frog__sclera frog__sclera--left">
                        <div class="frog__iris frog__iris--left"/>
                    </div>
                </div>
                <div class="frog__eye frog__eye--right">
                    <div class="frog__sclera frog__sclera--left">
                        <div class="frog__iris frog__iris--left"/>
                    </div>
                </div>
            </div>

            <div class="frog__nose">
                <div class="frog__nostril frog__nostril--left"/>
                <div class="frog__nostril frog__nostril--right"/>
            </div>

            <div class="frog__mouth">
                <div class="frog__tongue"/>
                <div class="frog__lips"/>
            </div>

            <div class="frog__cheek-container">
                <div class="frog__cheek frog__cheek--right"/>
                <div class="frog__cheek frog__cheek--left"/>
            </div>

        </div>
    <!-- </div> -->
</section>

<style lang="sass">

    $trans-time: 0.3s
    $trans-func: ease-in-out
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
            // position: relative
            width: 160px
            height: 100px
            border-radius: 50%
            background-color: blue
            background-color: $bCol
            transition: transform $trans-time $trans-func, height $trans-time $trans-func, width $trans-time $trans-func

        &__eyes
            position: relative
            display: flex
            justify-content: center
            gap: 50px
            margin-top: -15px
            transition: gap $trans-time $trans-func

        &__eye
            // position: absolute
            width: 40px
            height: 40px
            border-radius: 50%
            background-color: red
            background-color: $bCol
            display: flex
            align-items: center
            justify-content: center

            // &--left
            //     transform: translate(15px, -15px)
            // &--right
            //     transform: translate(105px, -15px)

        &__sclera
            // position: absolute
            width: 30px
            height: 30px
            border-radius: 50%
            background-color: white
            display: flex
            align-items: center
            justify-content: center
            // transform: translate(9px, 9px)

        &__iris
            width: 15px
            height: 15px
            border-radius: 7px
            background-color: black
            // display: flex
            // justify-content: center
            // transform: translate(6px, 6px)
            transition: width $trans-time $trans-func, width $trans-time $trans-func,  border-radius $trans-time $trans-func

        &__nose
            position: relative
            // margin-top: 15px
            // margin-left: 66px
            // background-color: purple
            margin-top: -10px
            display: flex
            justify-content: center
            gap: 8px

        &__nostril
            // position: absolute
            width: 10px
            height: 10px
            border-radius: 50%
            background-color: black

            // &--left
            //     transform: translate(-10px, 0)
            // &--right
            //     transform: translate(10px, 0)

        &__mouth
            position: relative
            overflow: hidden
            height: 40px
            margin-top: 15px
            display: flex
            // align-items: center
            justify-content: center
            // background: pink

        &__lips
            // position: relative
            position: absolute
            width: 85px
            height: 8px
            border-radius: 4px
            margin-top: 0
            background-color: orange
            background-color: black
            transition: width $trans-time $trans-func, width $trans-time $trans-func, border-radius $trans-time $trans-func, margin $trans-time $trans-func

        &__tongue
            position: absolute
            width: 10px
            height: 30px
            border-radius: 5px
            background-color: pink
            transform: translate(-15px, -5px)
            transition: transform $trans-time/2 $trans-func

        &__cheek-container
            position: relative
            margin-top: -50px
            // width: 10px
            background-color:green
            display: flex
            justify-content: center
            gap: 90px
            transition: gap $trans-time $trans-func, margin-top $trans-time $trans-func

        &__cheek
            // position: absolute
            width: 15px
            height: 15px
            border-radius: 50%
            background-color: cyan
            background-color: $bCol
            transition: width $trans-time $trans-func, height $trans-time $trans-func

            // &--left
            //     transform: translate(0, -70px)
            // &--right
            //     transform: translate(130px, -70px)

    .frog__face:hover
        cursor: crosshair
        // background-color: yellow
        // transform:  $trans-time $trans-func
        width: 180px
        height: 80px
        transform: translateY(20px)

        .frog__eyes
            gap: 50px

        .frog__iris
            width: 25px
            height: 10px
            border-radius: 5px

        .frog__lips
            width: 10px
            margin-top: 5px

        .frog__tongue
            transform: translate(0, -30px)

        .frog__cheek-container
            margin-top: -70px
            gap: 120px

        .frog__cheek
            width: 50px
            height: 50px

</style>