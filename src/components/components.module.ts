import { NgModule } from '@angular/core';
import { HackerAvatarComponent } from './hacker-avatar/hacker-avatar';
import { TimerComponent } from './timer/timer';
import { CountdownComponent } from './countdown/countdown';
@NgModule({
	declarations: [HackerAvatarComponent,
    TimerComponent,
    TimerComponent,
    CountdownComponent],
	imports: [],
	exports: [HackerAvatarComponent,
    TimerComponent,
    TimerComponent,
    CountdownComponent]
})
export class ComponentsModule {}
