# 轮播图插件
### 本插件优势：
+  1：大小优势
+  本插件只有1KB
+ 2： 使用方便快捷，只需两步
## 接下来是使用方法
### 第一步
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>轮播图插件</title>
		<link rel="stylesheet" type="text/css" href="./index.css"/>
		<script type="text/javascript" src="index.js"></script>
	</head>
		<script>
			/*设置轮播图容器大小（不用填单位）*/
			bigwidth='100'
			/* 时间设置*/
			times="1000"
			/* 宽度单位*/
			widthunit="vw"
	  </script>
	<body>
			<!--创建容器（必须有）-->
		<div id="bignestification">
			<!--创建轮播容器（必须有）-->
			<div id="nestification">
				<!--数量可以随便加（元素可嵌套）-->
						<!--1-->
				<div class="divIn" id="divInst">
					<center>
						<h2 class="h2Indiv">
							1
						</h2>
					</center>
				</div>
						<!--2-->
				<div class="divIn" id="divInth">
					<center>
						<h2 class="h2Indiv">
							4
						</h2>
					</center>
				</div>
						<!--3-->
				<div class="divIn" id="divInrd">
					<center>
						<h2 class="h2Indiv">
							3
						</h2>
					</center>
				</div>
						<!--4-->
				<div class="divIn" id="divInnd">
					<center>
						<h2 class="h2Indiv">
							2
						</h2>
					</center>
				</div>
			</div>
		</div>
	</body>
						<!--在最后加载插件-->
				<script src="./轮播图插件.js"></script>
			</html>																				
```
### css代码：
```
#bignestification{
	position: absolute;
	top: 0;
	left: 0;
}

#bignestification{
	position: fixed;
	z-index: -1;
	top: 0;
	transform:scale(1.1);
}

#bignestification:hover{
		-webkit-filter:blur(3px);
		filter:blur(3px);
		opacity:.9;
}

#title:hover{
	display: block;
}

#bignestification:hover~#title{
		display: block;
}


#divInst{
	background: rgba(43, 220, 255, 0.5);
}

#divInnd{
	background: rgba(43, 220, 255, 0.65);
}

#divInrd{
	background: rgba(43, 220, 255, 0.8);
}

#divInth{
	background: rgba(43, 220, 255, 0.95);
}

#title{
	display: none;
	text-align: center;
}

.left{
	position: absolute;
	left: 10px;
}

.right{
	position: absolute;
	right: 10px;
}

.top{
	position: absolute;
	top: 10px;
}

.bottom{
	position: absolute;
	bottom: 10px;
}

.divIn{
	height: 100vh;
}

.h2Indiv{
	margin-top: 48vh;
}

```


### 第二步
完成了，坐享其成~~~
## 我提供外链js插件
https://linhongxu.rth1.me/link/s.js


