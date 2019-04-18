## 清除浮动的几种方法
   - 在父容器的底部加上一行代码
      <div style="clear: left"></div>
   - 再父元素的css中加上css样式：float：left
   -  使用css中的伪类 after，before是不行的（before在标签开始之前，after在标签闭合之前）：              .clearFix::after{
      content: "";
      clear: both;
      display: block;
      } 
   - bfc 块级格式化上下文，让我们这一块的内容文档流保持正常.
     利用bfc 简称 块级格式化上下文 的效果来弥补父容器的高度塌陷
     div.content{ overflow: hidden; auto; scroll;} 这三个值都可以触发bfc 的效果
   - 尼古拉斯大师 方法：把父容器的display 设置为 table，可以创建一个匿名表格单元。直接出发bfc 效果。
     .content{ display: table;}
     最简便，但是最不推荐使用（会造成页面奇形怪状，很多潜在的问题）


> 双飞翼布局 和 圣杯布局的区别 ：
  双飞翼 是main 占了屏幕的100% ，之后再添加对main添加一个盒子类名为：main-ct 设置：maigin：0 200px
也就是相当于自己左右缩小200px; 这时我们只需要对 left 设置：margin-left：-100% 就位于main 的左边所
缩小的地方了。对于right： 设置：margin-left：-200px(自身盒子的宽度)。right 就位于main-ct设置的地方了（即main缩小的地方）
   圣杯  是对 cotent就设置了 padding：0 200px; 这时，main 的内容就不占屏幕的百分百了。而我们要实现效果就只需要在双飞翼布局的基础上 使用 position:relative;进行相对定位，移动自身盒子的宽度即可！