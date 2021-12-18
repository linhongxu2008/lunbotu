	var bigwidth//外宽宽度（只填数字）
	var bigheight;
	var inbig=document.getElementById("inbiglunboturongqi")//内
	var big=document.getElementById('biglunboturongqi').style//外宽样式
big.width=bigwidth+"px";//外宽+px
big.margin="0";
big.padding="0";
big.overflow="hidden";
inbig.style.position="relative";
inbig.style.margin="0";
inbig.style.padding="0";
big.height=inbig.style.height;//设置外高为内高
	var inbiglenth=inbig.children.length;
	var inbigwidth=inbiglenth*bigwidth+"px";//设置内宽
inbig.style.width=inbigwidth;
	var neiyuansu =document.getElementsByClassName('nei');
if(neiyuansu){
	for(var cishu = 0; cishu < neiyuansu.length; ++cishu)
	{
	var nei = neiyuansu[cishu];
	nei.style.width = bigwidth+"px";
	nei.style.padding="0";
	nei.style.margin="0";
	nei.style.float="left";
	}
}/*重复给样式*/
self.setInterval("creshi()",2000);
var a=inbiglenth;
function creshi () {
	if (a==0) {
		a=inbiglenth;
		--a;
	} else{
		--a;
		inbig.style.left=-a*bigwidth+"px"
		}
	}

