//2021年制作
/*声明：请勿抄袭我谢谢您*/
var times var bigwidth;var bigheight;var inbig=document.getElementById("inbiglunboturongqi");var big=document.getElementById('biglunboturongqi').style;big.width=bigwidth+"px";big.margin="0";big.padding="0";big.overflow="hidden";inbig.style.position="relative";inbig.style.margin="0";inbig.style.padding="0";big.height=inbig.style.height;var inbiglenth=inbig.children.length;var inbigwidth=inbiglenth*bigwidth+"px";inbig.style.width=inbigwidth;var neiyuansu =document.getElementsByClassName('nei');if(neiyuansu){for(var cishu = 0; cishu < neiyuansu.length; ++cishu){var nei = neiyuansu[cishu];nei.style.width = bigwidth+"px";nei.style.padding="0";nei.style.margin="0";nei.style.float="left";}}/*重复给样式*/self.setInterval("creshi()",2000);var a=inbiglenth;function creshi () {if (a==0) {a=inbiglenth;} else{--a;inbig.style.left=-a*bigwidth+"px";}}
