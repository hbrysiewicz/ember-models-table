import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  fetchUsers: task(function* () {
    let users = yield this.get('store').query('user', {});

    this.set('data', users);
  }),

  didInsertElement() {
    this.get('fetchUsers').perform();
  },
});
