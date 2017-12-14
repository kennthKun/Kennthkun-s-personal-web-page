<template>
	<div>
		<h1>文章</h1>
		<div class="aaa">
			<div class="tu"></div>
			<img src="../images/sucai.jpg" width="266" height="266">
			<div class="zi">钟爱</div>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'articles',
}
</script>

<style>
	* {
		margin: 0 auto;
		padding: 0;
	}
	
	body {
		background-color: #CCC;
	}
	
	.aaa {
		width: 286px;
		height: 286px;
	}
	
	.tu {
		margin: 0 auto;
		margin-top: 120px;
		position: absolute;
		width: 266px;
		height: 266px;
		border-width: 10px;
		border-style: solid;
		border-bottom-color: #FCF;
		border-right-color: #fcf;
		border-top-color: #FFF;
		border-left-color: #fff;
		border-radius: 143px;
		overflow: hidden;
		transition: ease 0.5s;
	}
	
	img {
		position: relative;
		top: 10px;
		left: 10px;
		margin-top: 120px;
		border-radius: 133px;
		transition: ease 0.3s;
	}
	
	.zi {
		width: 266px;
		height: 266px;
		border-radius: 133px;
		position: relative;
		left: 100px;
		top: -90px;
		font-size: 60px;
		visibility: hidden;
		color: #FCC;
		transition: ease 0.4s;
	}
	
	.aaa:hover .tu {
		transform: rotate(360deg);
	}
	
	img:hover {
		opacity: 0.3;
	}
	
	.aaa:hover .zi {
		visibility: visible;
		color: #F6F;
	}
</style>