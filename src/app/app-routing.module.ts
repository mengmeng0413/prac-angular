import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { AnimationComponent} from './animation/animation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      desc: '首页',
      icon: 'card_membership'
    }
  },
  {
    path: 'test',
    component: TestComponent,
    data:{
      desc: '特性',
      icon: 'card_travel'
    }
  },
  {
    path: 'map',
    component: MapComponent,
    data:{
      desc: '地图',
      icon: 'public'
    }
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    data:{
      desc: '表单',
      icon: 'eco'
    }
  },
  {
    path: 'routeTest',
    component: RouteTestComponent,
    data:{
      desc:'练习',
      icon: 'loyalty'
    }
  },
  {
    path: 'animation',
    component: AnimationComponent,
    data:{
      desc:'动画',
      icon: 'gesture'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
