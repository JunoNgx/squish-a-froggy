<script lang="ts">
    // let count: number = 0
    // const increment = () => {
    //   count += 1
    // }

    const availableColors = ["red", "green", "blue", "yellow", "purple"];
    const pickedColor = availableColors[Math.ceil(Math.random() * availableColors.length)];


</script>

<section
    class="frog"
>
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
</section>

<style lang="sass">

    $trans-time: 0.3s
    $trans-func: ease-in-out
    $bCol: LightCoral

    .frog
        position: relative
        // border: black 1px solid
        width: 150px
        height: 150px
        display: flex
        align-items: center
        justify-content: center

        &__face
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
            gap: 40px
            margin-top: -15px
            transition: gap $trans-time $trans-func, margin-top $trans-time $trans-func

        &__eye
            width: 40px
            height: 40px
            border-radius: 50%
            background-color: red
            background-color: $bCol
            display: flex
            align-items: center
            justify-content: center

        &__sclera
            width: 30px
            height: 30px
            border-radius: 50%
            background-color: white
            display: flex
            align-items: center
            justify-content: center

        &__iris
            width: 15px
            height: 15px
            border-radius: 7px
            background-color: black
            transition: width $trans-time $trans-func, height $trans-time $trans-func, border-radius $trans-time $trans-func

        &__nose
            position: relative
            margin-top: -10px
            display: flex
            justify-content: center
            gap: 8px

        &__nostril
            width: 7px
            height: 7px
            border-radius: 50%
            background-color: black
            transition: width $trans-time $trans-func, height $trans-time $trans-func, border-radius $trans-time $trans-func

        &__mouth
            position: relative
            overflow: hidden
            height: 40px
            margin-top: 15px
            display: flex
            justify-content: center

        &__lips
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
            transform: translate(-10px, -5px)
            transition: transform $trans-time $trans-func

        &__cheek-container
            position: relative
            margin-top: -50px
            background-color:green
            display: flex
            justify-content: center
            gap: 90px
            transition: gap $trans-time $trans-func, margin-top $trans-time $trans-func

        &__cheek
            width: 15px
            height: 15px
            border-radius: 50%
            background-color: cyan
            background-color: $bCol
            transition: width $trans-time $trans-func, height $trans-time $trans-func

    .frog__face:hover
        cursor: crosshair
        width: 180px
        height: 80px
        transform: translateY(20px)

        .frog__eyes
            margin-top: -5px
            gap: 50px

        .frog__iris
            width: 25px
            height: 6px
            border-radius: 3px

        .frog__nostril
            width: 10px
            height: 10px

        .frog__lips
            width: 10px
            margin-top: 5px

        .frog__tongue
            transform: translate(0, -30px)

        .frog__cheek-container
            margin-top: -80px
            gap: 120px

        .frog__cheek
            width: 50px
            height: 50px

</style>