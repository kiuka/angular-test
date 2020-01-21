import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectMessage } from '../store/selectors/test.selectors';
import { IAppState } from '../store/state/app.state';
import { SetTest } from '../store/actions/test.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  message$ = this.store.pipe(select(selectMessage))

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    console.log('init test component')
  }

  setMessage() {
    console.log('set message')

    this.store.dispatch(new SetTest('new message'))
  }
}
