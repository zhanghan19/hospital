/*
生成弹性小球碰撞工具
I am kmh0228
QQ:1150123276
2017-06-20
*/
/*
使用方法说明
	1.此插件纯原生js编写，使用时引入此collision.js即可。
	2.生成容器，假设现有一个id为container的盒子做容器。
		var oB=new BallBox(‘container’);
			注：容器必须是有宽高的定位元素。尽量不要有边线。
	3.生成小球
		var ball=new Ball();
	4.把小球放入容器
		oB.addBall(ball);
	5.调用容器的ballRun方法，让小球开始运动。注意：此运动是完全弹性碰撞，不会损失能量。
		oB.ballRun();
	over
	
	参数说明
		容器参数  new BallBox(‘container’，opts);
			opts:{width:num,height:num}//没有边线和padding的时候可不写。有的情况下需要把容器真实宽高填进去。
		小球参数 new Ball(opts);
			opts:{
				e:小球DOM元素/原生对象，可填入页面DOM，不写则生成新DIV DOM,
				b:小球半径 默认30;包含边
				c:小球背景颜色/图片， 默认'pink'
				borderWidth:边线宽度 默认0
				borderColor:边线颜色 默认#000
				x:小球中心点的横坐标 默认为半径
				y:小球中心点的纵坐标 默认为半径
				sx:小球在x轴方向速度每30ms，默认3
				sy:小球在y轴方向速度每30ms，默认3
				m:小球的质量，默认b/30;
				html:小球内部的内容，不填则不会改变DOM本身的内容。
				fontSize:字体大小，默认12;
				opa:小球透明度，默认1；
				callBack:function  碰撞时的回掉函数，参数为碰撞的总次数，方法中this指向此球对象
			}
		小球方法：
				setB(num)//重新设置小球半径
				setC(str);//重新设置小球背景颜色/图片
				setBorderWidth(n);//重新设置小球边线宽度
				setBorderColor(str);//重新设置边线颜色
				setM(n);//重设小球质量,如果不给参数，则按照半径重新默认质量
				setHTML(str);//重设小球内容
				setOpa(n);//重设小球透明度

 
 */


function extend(a, b) {
	var a = a || {};
	for (var c in b) {
		if (typeof a[c] == 'undefined') a[c] = b[c]
	}
	return a
}
function CollBox(a, b) {
	var c = this.container = document.getElementById(a);
	var b = this.opts = b || {};
	this.width = b.width || c.offsetWidth;
	this.height = b.height || c.offsetHeight;
	this.child = []
}
CollBox.prototype.addBall = function(a) {
	this.child.push(a);
	if (a.opts.e.parentNode != this.container) {
		this.container.appendChild(a.opts.e)
	}
};
CollBox.prototype.ballRun = function() {
	clearInterval(this.ballRunTimer);
	var g = this;
	var w = this.width;
	var h = this.height;
	var k = this.isColl;
	var l = this.coll;
	this.ballRunTimer = setInterval(function() {
		var a = g.child;
		var c = a.length;
		for (var i = 0; i < c; i++) {
			a[i].foot()
		}
		for (var i = 0; i < c; i++) {
			var d = a[i].opts;
			var b = d.b;
			if (d.x < b) {
				d.x = b;
				d.sx *= -1
			}
			if (d.y < b) {
				d.y = b;
				d.sy *= -1
			}
			var e = w - b;
			if (d.x > e) {
				d.x = e;
				d.sx *= -1
			}
			var f = h - b;
			if (d.y > f) {
				d.y = f;
				d.sy *= -1
			}
		}
		for (var i = 0; i < c; i++) {
			for (var j = i + 1; j < c; j++) {
				if (k(a[i], a[j])) {
					l(a[i], a[j], function() {
						a[i].collNum++;
						a[i].opts.callBack.call(a[i], a[i].collNum);
						a[j].collNum++;
						a[j].opts.callBack.call(a[j], a[j].collNum)
					})
				}
			}
		}
	}, 30)
};
CollBox.prototype.ballStop = function() {
	clearInterval(this.ballRunTimer)
};
CollBox.prototype.coll = function(p, q, r) {
	var s = q.opts.x - p.opts.x;
	var t = q.opts.y - p.opts.y;
	var u = q.opts.sx - p.opts.sx;
	var v = q.opts.sy - p.opts.sy;
	var w = Math.atan2(v, u);
	var x = Math.atan2(-t, -s);
	var y = Math.abs(x - w);
	var D = Math.PI / 2;
	if (y <= 3 * D && y >= D) return;
	r && r();
	(function coll(a, b) {
		var c = Math.atan2(b.y - a.y, b.x - a.x);
		var D = Math.PI / 2;
		if (c > D * 2) c -= D * 2;
		var d = Math.cos(c);
		var e = Math.sin(c);
		var f = a.sx * d + a.sy * e;
		var g = a.sx * Math.cos(c + D) + a.sy * d;
		var h = b.sx * d + b.sy * e;
		var i = b.sx * Math.cos(c + D) + b.sy * d;
		var j = a.m,
			m2 = b.m;
		var k = j + m2;
		var l = ((j - m2) * f + 2 * m2 * h) / k;
		var m = ((m2 - j) * h + 2 * j * f) / k;
		var n = Math.cos(-c);
		var o = Math.sin(-c);
		a.sx = l * n + g * o;
		a.sy = l * Math.cos(D - c) + g * n;
		b.sx = m * n + i * o;
		b.sy = m * Math.cos(D - c) + i * n
	})(p.opts, q.opts)
};
CollBox.prototype.isColl = function(a, b) {
	if (a.stopfoot || b.stopfoot) return false;
	var d = Math.pow(a.opts.x - b.opts.x, 2) + Math.pow(a.opts.y - b.opts.y, 2);
	var c = Math.pow(a.opts.b + b.opts.b, 2);
	return d < c
};

function Obj(a) {
	if (a == 'extend') return;
	this.opts = extend(a || {}, {
		width: 60,
		height: 60,
		borderWidth: 0,
		borderColor: '#000',
		backGround: 'pink',
		fontSize: 12,
		opa: 1,
		x: 30,
		y: 30,
		sx: 3,
		sy: 3,
		m: 1,
		e: document.createElement('div'),
		callBack: function() {}
	});
	this.collNum = 0;
	this.initStyle();
	this.addEvent()
}
Obj.prototype.initStyle = function() {
	var a = this.opts.width;
	var b = this.opts.height;
	var c = this.opts.borderWidth;
	var s = this.opts.e.style;
	s.position = 'absolute';
	s.top = s.left = 0;
	s.width = a - c * 2 + 'px';
	var d = s.height = b - c * 2 + 'px';
	s.background = this.opts.c;
	s.backgroundSize = 'cover';
	s.border = c + 'px solid ' + this.opts.borderColor;
	s.opacity = this.opts.opa;
	if (this.opts.html) {
		this.opts.e.innerHTML = this.opts.html;
		s.textAlign = 'center';
		s.lineHeight = d;
		s.fontSize = this.opts.fontSize + 'px'
	}
	this.setPos()
};
Obj.prototype.addEvent = function() {
	var a = this;
	this.opts.e.onmouseenter = function() {
		a.stopFoot()
	};
	this.opts.e.onmouseout = function() {
		a.startFoot()
	}
};
Obj.prototype.foot = function(n) {
	if (this.stopfoot) return;
	var n = n || 1;
	this.opts.x += this.opts.sx * n;
	this.opts.y += this.opts.sy * n;
	this.setPos()
};
Obj.prototype.startFoot = function() {
	this.stopfoot = false;
	this.opts.e.style.zIndex = 1
};
Obj.prototype.stopFoot = function() {
	this.stopfoot = true;
	this.opts.e.style.zIndex = 999
};
Obj.prototype.setPos = function() {
	var a = this.opts.width / 2;
	var b = this.opts.height / 2;
	var x = parseInt(this.opts.x - a);
	var y = parseInt(this.opts.y - b);
	this.opts.e.style.transform = 'translate(' + x + 'px,' + y + 'px)';
	this.opts.e.style.webkitTransform = 'translate(' + x + 'px,' + y + 'px)'
};
Obj.prototype.setC = function(a) {
	var c = this.opts.c = a;
	this.opts.e.style.background = c;
	this.opts.e.style.backgroundSize = 'cover'
};
Obj.prototype.setBorderWidth = function(n) {
	var n = this.opts.borderWidth = n;
	var a = n * 2;
	var s = this.opts.e.style;
	s.width = parseInt(this.opts.width - a) + 'px';
	var b = s.height = parseInt(this.opts.height - a) + 'px';
	s.lineHeight = b;
	s.border = n + 'px solid ' + this.opts.borderColor
};
Obj.prototype.setBorderColor = function(a) {
	var a = this.opts.borderColor = a;
	this.opts.e.style.border = this.opts.borderWidth + 'px solid ' + a
};
Obj.prototype.setM = function(n) {
	this.opts.m = n || (this.opts.width * this.opts.height) / 3600
};
Obj.prototype.setHTML = function(a) {
	var b = this.opts.html = a;
	var s = this.opts.e.style;
	this.opts.e.innerHTML = b;
	s.textAlign = 'center';
	s.lineHeight = this.opts.height - this.opts.borderWidth * 2 + 'px';
	s.fontSize = this.opts.fontSize + 'px'
};
Obj.prototype.setOpa = function(n) {
	var a = this.opts.opa = n;
	this.opts.e.style.opacity = n
};

function Ball(a) {
	var a = this.opts = extend(a || {}, {
		type: 'ball',
		b: 30,
	});
	a.width = a.height = a.b * 2;
	Obj.call(this, a)
}
Ball.prototype = new Obj('extend');
Ball.prototype.constructor = Ball;
var initStyle = Ball.prototype.initStyle;
Ball.prototype.initStyle = function() {
	initStyle.call(this);
	this.opts.e.style.borderRadius = '50%'
}
Ball.prototype.setB = function(n) {
	var b = this.opts.b = n;
	var s = this.opts.e.style;
	this.opts.width = this.opts.height = b * 2;
	s.width = s.height = (b - this.opts.borderWidth) * 2 + 'px';
	s.lineHeight = (b - this.opts.borderWidth) * 2 + 'px';
	this.setPos()
};