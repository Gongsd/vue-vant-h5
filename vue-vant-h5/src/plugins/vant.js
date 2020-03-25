// 按需全局引入 vant组件
import Vue from 'vue'
import {Button, List, Cell, Tabbar, TabbarItem} from 'vant'

import { NavBar } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { PullRefresh } from 'vant';
import { Card } from 'vant';
import { Search } from 'vant';
import { Sticky } from 'vant';
import { Image } from 'vant';
import { Uploader } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Uploader);
Vue.use(Image);
Vue.use(Sticky);
Vue.use(Search);
Vue.use(Card);
Vue.use(PullRefresh);
Vue.use(Field);
Vue.use(Form);
Vue.use(NavBar);
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
