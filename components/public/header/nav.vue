<template>
  <div class="container-nav">
    <div class="nav">
      <ul>

        <li>
          <span class="list" to="/res">
            <a href="">我的美团</a>
          </span>
          <dl class="mine">
            <dd><nuxt-link to="/">我的订单</nuxt-link></dd>
            <dd><nuxt-link to="/">我的收藏</nuxt-link></dd>
            <dd><nuxt-link to="/">抵用券</nuxt-link></dd>
            <dd><nuxt-link to="/">账户设置</nuxt-link></dd>
          </dl>
        </li>

        <li class="exclude">
          <span class="list" to="/res">
            <a href="">手机APP</a>
          </span>
        </li>

        <li class="business">
          <span class="list">
            商家中心
          </span>
          <dl class="mine">
            <dd><nuxt-link to="/">登录中心单</nuxt-link></dd>
            <dd><nuxt-link to="/">美团智能收银</nuxt-link></dd>
            <dd><nuxt-link to="/">我想合作</nuxt-link></dd>
            <dd><nuxt-link to="/">手机免费开店</nuxt-link></dd>
            <dd><nuxt-link to="/">餐饮代理招募</nuxt-link></dd>
            <dd><nuxt-link to="/">商检申请开票</nuxt-link></dd>
            <dd><nuxt-link to="/">免费合作美团排队</nuxt-link></dd>
          </dl>
        </li>

        <li>
          <span class="list">
            美团规则
          </span>
          <dl class="mine">
            <dd><nuxt-link to="/">规则中心</nuxt-link></dd>
            <dd><nuxt-link to="/">规则目录</nuxt-link></dd>
            <dd><nuxt-link to="/">规则评议院</nuxt-link></dd>
          </dl>
        </li>

        <li class="rule">
          <span class="list">
            网站导航
          </span>
          <dl class="mine">
            <el-row type="flex">
              <el-col :span="6">
                <dl>
                  <dt>
                    酒店旅游
                  </dt>
                  <dd>
                    <a href="">国际机票</a>
                    <a href="">火车票</a>
                    <a href="">榛果民宿</a>
                    <a href="">经济型酒店</a>
                    <a href="">主题酒店</a>
                    <a href="">豪华酒店</a>
                    <a href="">商务酒店</a>
                    <a href="">公寓</a>
                    <a href="">客栈</a>
                    <a href="">青年旅社</a>
                    <a href="">度假酒店</a>
                    <a href="">别墅</a>
                    <a href="">农家院</a>
                  </dd>
                </dl>
              </el-col>
              
              <el-col :span="4">
                <dl>
                  <dt>
                    看电影
                  </dt>
                  <dd class="food">
                    <a href="">国际机票</a>
                    <a href="">火车票</a>
                    <a href="">榛果民宿</a>
                    <a href="">经济型酒店</a>
                    <a href="">主题酒店</a>
                    <a href="">豪华酒店</a>
                    <a href="">商务酒店</a>
                    <a href="">公寓</a>
                    <a href="">客栈</a>
                    <a href="">青年旅社</a>
                    <a href="">度假酒店</a>
                    <a href="">别墅</a>
                    <a href="">农家院</a>
                  </dd>
                </dl>
              </el-col>
              
              <el-col :span="3">
                <dl>
                  <dt>
                    吃美食
                  </dt>
                  <dd class="moves">
                    <a href="">国际机票</a>
                    <a href="">火车票</a>
                    <a href="">榛果民宿</a>
                    <a href="">经济型酒店</a>
                    <a href="">主题酒店</a>
                    <a href="">豪华酒店</a>
                  </dd>
                </dl>
              </el-col>
              
              <el-col :span="11">
                <dl>
                  <dt>
                    手机应用
                  </dt>
                  <dd class="picture">
                    <a href="">
                      <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="">
                    </a>
                    <a href="">
                      <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="">
                    </a>
                    <a href="">
                      <img src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt="">
                    </a>
                    <a href="">
                      <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="">
                    </a>
                    <a href="">
                      <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="">
                    </a>
                  </dd>
                </dl>
              </el-col>

            </el-row>
          </dl>
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
          height: 100%;
          position: relative;

          &:hover .list {
            background: #fff;
            box-shadow: 0 0.3px 0.3px 0.3px #999999;
            color: $them-hover;

            &:after {
              content: "";
              display: block;
              height: 3px;
              width: 100%;
              position: absolute;
              background: #fff;
              top: 95%;
              z-index: 999;
            }

          }

          &:hover .mine {
              display: block;
              box-shadow: 0 0.3px 0.3px 0.3px #999999;
            }

          .list {
            height: 100%;
            color: $them;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mine {
            width: 100%;
            background: #fff;
            text-align: center;
            position: absolute;
            top: 100%;
            display: none;
            z-index: 99;

            dd {
              margin-bottom: 10px;
            }

          }

          //手机APP
          &.exclude {

            &:hover .list,.mine{
              box-shadow: none;
            }

            &:hover .list {
              background-color: #F8F8F8;

              &:after {
                display: none;
              }

            }

          }

          //商家中心
          &.business {
            .mine {
              width: 140%;
              right: 0;

              dd {
                margin-top: 7px;
                margin-bottom: 17px;
              }

            }
          }

          //网站导航
          &.rule {

            .mine {              
              width: 1200px;
              right: 0;
              min-width: 960px;
              
              dl {
                margin: 40px 0 30px 0;

                dt {
                  margin-bottom: 20px;
                  color: black;
                  font-size: 14px;
                }

                dd {
                  padding: 0 15px;
                  color: $them;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;

                  &:after {
                    content: "";
                    width: 30%;
                  }
                  
                  a {
                    width: 30%;
                    margin-top: 12px;

                  }

                  &.food {
                    a {
                      width: 40%;
                    }
                  }

                  &.moves {
                    a {
                      width: 100%;
                    }
                  }

                  &.picture {
                    justify-content: space-around;
                    padding: 0 80px;
                    a {
                      width: 17%;
                      img {
                        display: block;
                        width:100%;
                      }
                    }

                    &:after {
                      display: none;
                    }
                  }

                }

              }

            }

          }

        }

      }
      
    }
  }
</style>