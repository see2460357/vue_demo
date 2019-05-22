<template lang='pug'>
.IndexSlider
  .mack
  .bgm
  .menu: router-link(to='/navbar')
    i.fas.fa-bars
  .headContent
    h1#logoBox
      div P
      div L
      div E
      div A
      div S
      div U
      div R
      div E
      div.type MESSAGE
    .text
      div Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      div Dolore possimus id qui nesciunt corporis deserunt
      div consectetur placeat tenetur obcaecati cumque libero temporibus!
</template>

<script>
import $ from 'jquery'
import { TweenMax, Expo, RoughEase } from 'gsap/TweenMax'
export default {
  methods: {
    logoMotion () {
      var _e = {}
      _e.logoEnBoxImgs = $('#logoBox div')
      _e.ease = Expo.easeInOut
      _e.neonTitles = $('.mack')
      function randomA () { return Math.floor(Math.random() * 800) - 400 }
      function randomB () { return (Math.floor(Math.random() * (12 - 6 + 1)) + 6) / 10 }
      function randomC () { return Math.floor(Math.random() * 1900) - 950 }
      function randomD () { return Math.random() * 4 }
      function xMotionFunc () {
        TweenMax.set(_e.logoEnBoxImgs, { x: 0, y: 0, scale: 1, rotation: 0 })
        TweenMax.to(_e.logoEnBoxImgs[0], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[1], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[2], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[3], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[4], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[5], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[6], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[7], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        TweenMax.to(_e.logoEnBoxImgs[8], randomB(), { x: randomA(), y: randomA(), scale: randomD(), rotation: randomC(), yoyo: false, repeat: 0, repeatDelay: 0, ease: _e.ease })
        // console.log(_e.logoEnBoxImgs, 'A: ' + randomA, 'B: ' + randomB, 'C: ' + randomC(), 'D: ' + randomD())
        TweenMax.staggerTo(_e.logoEnBoxImgs, 1.1, {
          x: 0, y: 0, scale: 1, rotation: 0, cycle: { delay: function () { return Math.random() * 2.2 + 2.9 } }, ease: Expo.easeOut
        }, 0)
      }
      setTimeout(xMotionFunc, 500)
      setInterval(xMotionFunc, 10000)
      TweenMax.to(_e.neonTitles, 6, { alpha: 0.3, yoyo: true, repeat: -1, ease: RoughEase.ease.config({ template: 0, strength: 1.5, points: 20, taper: 'none', randomize: true, clamp: false }) })
    }
  },
  mounted () {
    this.logoMotion()
  }
}
</script>

<style lang='sass' scoped>
$colorRed: red
@mixin size($w,$h:$w)
  width: $w
  height: $h
@mixin poa($t,$l:$t)
  top: $t
  left: $l
  position: absolute
  transform: translate(-50%,-50%)
.IndexSlider
  +size(100%, 100vh)
  background: url('https://www.arcsystemworks.jp/missing/assets/images/bg.jpg')
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  position: relative
  overflow: hidden
  .menu
    position: absolute
    top: 50%
    right: 50px
    transform: translateY(-50%)
    z-index: 9999
    a
      color: #eee
      transition: .3s all ease
    &:hover> a
      color: #000
  .mack
    +size(100%)
    background: #333
    opacity: 0.1
  .bgm
    +size(100%)
    +poa(60%, 50%)
    background: url('https://www.arcsystemworks.jp/missing/assets/images/bgxm.png')
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
  .headContent
    +poa(50%, 50%)
    color: #fff
    text-align: center
    h1
      font-size: 70px
      padding: 20px 0
      user-select: none
    h1 div
      display: inline-block
      letter-spacing: 15px
      font-weight: 900
    h1 .type
      display: block
      font-size: 14px
      font-weight: 900
      letter-spacing: 1.5px
      margin-top: 15px
    .text
      font-size: 12px
      font-weight: 900
      margin-top: 50px
      letter-spacing: 1.5px
      line-height: 1.8
</style>
