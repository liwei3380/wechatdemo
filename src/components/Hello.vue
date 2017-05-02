<template>
  <div class="hello">
    <img v-show=show v-bind:class="windowimg" @click="windowscale" src="http://pre.ih5.cn/files/1720334/17261/9a3160_640_1040.jpg">
    <div ref="bg" class="bgbox">
      <img class="bgimg" ref="bgimg" src="../assets/bg.jpg">
      <div class="bgtext bgtext1">blabla</div>
      <transition name="faderight">
        <img v-show=show2 @click="show2 = !show2" class="bgtext bgtext2" src="http://pre.ih5.cn/files/1720334/17262/3c1f83_490_133.png">
      </transition>
      <transition name="faderight">
        <img v-show=show3 class="bgtext bgtext3" src="http://pre.ih5.cn/files/1720334/17262/3c1f83_490_133.png">
      </transition>
    </div>
  </div>
</template>

<script>
import {Indicator} from 'mint-ui'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      show2: false,
      show3: false,
      windowimg: 'window-img'
    }
  },
  methods:{
    windowscale () {
      this.windowimg = 'window-img window-img-scale';
      (function(_this){
        setTimeout(function(){
          _this.show = false
        },2000)
      })(this)
    }
  },
  mounted () {
    var bg = this.$refs.bg
    var bgimg = this.$refs.bgimg
    var mc = new Hammer(bg)
    var left;
    var devicewidth = document.documentElement.clientWidth
    var newImg = new Image()
    Indicator.open({
      text:'加载中...',
      spinnerType: 'snake'
    });
    var _this = this;
    newImg.src = bgimg.src 
    newImg.onload = () => {
      Indicator.close()
        mc.on('panstart panmove panend',function(e){
          if (e.type == 'panstart') {
            left = bg.style.left=='' ? 0 : bg.style.left.substring(0,bg.style.left.length-2);
          } else if (e.type == 'panmove') {
            var endleft = parseInt(left) + e.deltaX;
            if (endleft>0) {
              endleft = 0;
            } else if (endleft < devicewidth - bgimg.offsetWidth){
              endleft = devicewidth - bgimg.offsetWidth
            }
            if (endleft < (devicewidth - bgimg.offsetWidth)/3) {
              _this.show2 = true
            }
            if (endleft < (devicewidth - bgimg.offsetWidth)*2/3) {
              _this.show3 = true
            }
            bg.style.left = endleft + 'px'
          }
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.window-img{
  width: 100%;
  transition: all 2s;
  transform-origin:52% 28%;
}
.window-img-scale{
  transform: scale(2.4);
}
.bgbox{
  position: relative;
  overflow-x: auto;
}
.bgtext{
  position: absolute;
  top: 50%;
  left: 0;
  color:white;
  overflow-x: hidden;
  text-align: left;
  width:5rem;
  height:1.5rem;
}
.bgtext1{
  left:1.3rem;
}
.bgtext2{
  left:4.3rem;
}
.bgtext3{
  left:9.3rem;
}
.hello,.bgbox,.bgimg{
  height: 100%;
  box-sizing: border-box;
}
.bgimg,.bgbox{
  width:16.61rem;
}
.bgimg{
  position:absolute;
  left:0px;
  top:0px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.faderight-enter-active{
  animation: bounce-in 1s;
}
.faderight-leave-active{
  animation: bounce-out 1s;
}
@keyframes bounce-in{
  0%{
    width:0rem;
    height:1.5rem;
  }
  45% {
    width:5.2rem;
    height:1.5rem;
  }
  60% {
    width:4.95rem;
    height:1.5rem;
  }
  75% {
    width:5.05rem;
    height:1.5rem;
  }
  90% {
    width:4.95rem;
    height:1.5rem;
  }
  100% {
    width:5rem;
    height:1.5rem;
  }
}
@keyframes bounce-out{
  0%{
    width:5rem;
    height:1.5rem;
  }
  45% {
    width:5.5rem;
    height:1.5rem;
  }
  100% {
    width:0rem;
    height:1.5rem;
  }
}
</style>
