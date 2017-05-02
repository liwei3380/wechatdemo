<template>
  <div class="home home-ani">
    <img class="liuxing1 liuxing-ani1" src="http://pre.ih5.cn/files/1720334/17263/f5d8ff_138_108.png">
    <img class="liuxing liuxing-ani" src="http://pre.ih5.cn/files/1720334/17263/ead5c5_274_214.png">
    <img class="liuxing1 liuxing-ani1" src="http://pre.ih5.cn/files/1720334/17263/f5d8ff_138_108.png">
    <div @click="next" class="next">next</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    next(){
      this.$router.push('/hello')
    }
  },
  mounted () {
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	height: 100%;
	background: url("http://pre.ih5.cn/files/1720334/17261/6ebb9f_640_1040.jpg");
	background-size: cover;
}
.next{
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translateX(-50%);
	color: white;
	border:1px solid white;
	padding:5px 10px;
	border-radius: 5px;
	box-shadow: 0px 0px 5px #fff;
}
.home-bg{
	width:100%;
}
.liuxing1{
	width:1.38rem;
}
.liuxing{
	width:2.74rem;
}
.liuxing-ani1{
	animation: liuxing-ani 1.5s infinite linear;
}
.liuxing-ani{
	animation: liuxing-ani 1s infinite linear;
}
@keyframes liuxing-ani{
	0%{
		transform: translate(0,0);
	}
	100%{
		transform: translate(-2rem,1.75rem);
	}
}
.home-ani{
	animation-name: home-ani,home-anitwo;
	animation-duration: 0.4s,0.6s;
	animation-timing-function: ease,linear;
	animation-delay: 0.1s,1s;
	animation-iteration-count: 1,1;
	animation-fill-mode:none,none;
}
@keyframes home-ani{
	0%{
		transform: rotate(2deg);
	}
	25%{
		transform: rotate(-2deg);
	}
	50%{
		transform: rotate(2deg);
	}
	75%{
		transform: rotate(-2deg);
	}
	100%{
		transform: rotate(2deg);
	}
}
.home-anitwo{
	animation: home-anitwo 0.7s 1s linear;
}
@keyframes home-anitwo{
	0%{
		transform: translate(2px,2px);
	}
	5%{
		transform: translate(-2px,2px);
	}
	10%{
		transform: translate(-2px,-2px);
	}
	15%{
		transform: translate(2px,-2px);
	}
	20%{
		transform: translate(2px,2px);
	}
	25%{
		transform: translate(-2px,2px);
	}
	30%{
		transform: translate(-2px,-2px);
	}
	35%{
		transform: translate(2px,-2px);
	}
	40%{
		transform: translate(2px,2px);
	}
	45%{
		transform: translate(-2px,2px);
	}
	50%{
		transform: translate(-2px,-2px);
	}
	55%{
		transform: translate(2px,-2px);
	}
	60%{
		transform: translate(2px,2px);
	}
	65%{
		transform: translate(-2px,2px);
	}
	70%{
		transform: translate(-2px,-2px);
	}
	75%{
		transform: translate(2px,-2px);
	}
	80%{
		transform: translate(2px,2px);
	}
	85%{
		transform: translate(-2px,2px);
	}
	90%{
		transform: translate(-2px,-2px);
	}
	95%{
		transform: translate(2px,-2px);
	}
	100%{
		transform: translate(0,0);
	}
}
</style>
