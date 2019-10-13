<template>
  <div class="container-nav">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link class="list" to="/res">我的美团</nuxt-link>
          <dl class="mine">
            <dd>我的订单</dd>
            <dd>我的收藏</dd>
            <dd>抵用券</dd>
            <dd>账户设置</dd>
          </dl>
        </li>
        <li>
          <nuxt-link class="list" to="/res">手机APP</nuxt-link>
        </li>
        <li>
          <span class="list">商家中心</span>
        </li>
        <li>
          <span class="list">美团规则</span>
        </li>
        <li>
          <span class="list">网站导航</span>
        </li>
      </ul> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import '~assets/css/main.scss';

  .container-nav {
    font-size: 12px;
    height: 100%;

    .nav {
      height: 100%;
    
      ul {
        display: flex;
        height: 100%;

        li {
          flex: 1;
          display: flex;
          height: 100%;

          &:hover .list {
            border-bottom: none;
            background: #fff;
            color: $them-hover;
          }

          .list {
            flex: 1;
            height: 100%;
            color: $them;
            display: flex;
            align-items: center;
            justify-content: center;

          }

          .mine {
              position: absolute;
              background: #fff;
              top: 100%;
          }

        }

      }
      
    }
  }
</style>