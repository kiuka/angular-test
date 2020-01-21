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
  message$ = this._store.pipe(select(selectMessage))

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    console.log('init test component')
  }

  setMessage() {
    console.log('set message')

    this._store.dispatch(new SetTest('new message'))
  }
}
