(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(2),r=a.n(n),o=(a(13),a(3)),l=a(4),s=a(6),d=a(5),u=a(7);a(14);var m=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement("li",{className:e.notification.includes(" correctly")?"correct":"incorrect"},e.notification),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(15);var g=function(e){return c.a.createElement("header",null,c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(16);var f=function(e){return c.a.createElement("div",{role:"img","data-id":e.id,"aria-label":"click item",className:e.shake?"click-item shake":"click-item",style:{backgroundImage:"url(".concat(e.image,")")},onClick:e.onClick})},k=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:[{id:0,clicked:!1,image:"/img/goku.png"},{id:1,clicked:!1,image:"/img/bulma.png"},{id:2,clicked:!1,image:"/img/chiaotzu.png"},{id:3,clicked:!1,image:"/img/krillin.png"},{id:4,clicked:!1,image:"/img/mrpopo.png"},{id:5,clicked:!1,image:"/img/mutenroshi.png"},{id:6,clicked:!1,image:"/img/oolong.png"},{id:7,clicked:!1,image:"/img/piccolo.png"},{id:8,clicked:!1,image:"/img/pilaf.png"},{id:9,clicked:!1,image:"/img/tenshinhan.png"},{id:10,clicked:!1,image:"/img/yajirobe.png"},{id:11,clicked:!1,image:"/img/yamucha.png"}],score:0,topScore:0,notification:"Click an image to begin!",shake:!1},a.handleClick=function(e){var t=e.target.dataset.id;if(a.checkIfClicked(t)){console.log("lost");var i=a.resetArrToFalse(a.state.data);a.setState({data:a.shuffleArray(i),score:0,notification:"You guessed incorrectly!",shake:!0})}else{console.log(a.state.data);var c=a.setClickedTrue(t);a.state.score+1>a.state.topScore?a.setState({data:a.shuffleArray(c),score:a.state.score+1,notification:"You guessed correctly!",topScore:a.state.score+1,shake:!1}):a.setState({data:a.shuffleArray(c),score:a.state.score+1,notification:"You guessed correctly!",shake:!1})}},a.shuffleArray=function(e){for(var t=e.slice(),a=t.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),c=t[a];t[a]=t[i],t[i]=c}return t},a.checkIfClicked=function(e){for(var t=0;t<a.state.data.length;t++)if(a.state.data[t].id===parseInt(e))return a.state.data[t].clicked},a.setClickedTrue=function(e){for(var t=a.state.data.slice(),i=0;i<t.length;i++)if(t[i].id===parseInt(e))return t[i].clicked=!0,t},a.resetArrToFalse=function(e){var t=e.slice();return t.forEach((function(e){e.clicked=!1})),t},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleArray(this.state.data)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m,{score:this.state.score,topScore:this.state.topScore,notification:this.state.notification}),c.a.createElement(g,null),c.a.createElement("div",{className:"container"},this.state.data.map((function(t){return c.a.createElement(f,{key:t.id,id:t.id,image:t.image,shake:e.state.shake,onClick:e.handleClick})}))))}}]),t}(i.Component));var h=function(){return c.a.createElement(k,null)};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.6c39e3f4.chunk.js.map