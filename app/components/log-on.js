import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LogOnComponent extends Component {
  // @tracked isLarge = false;
  @tracked logOnUser = '';
  @tracked logOnRepository = '';
  @tracked repositories = false;
  @tracked status = {
                      loading: false,
                      error: ''
                    }

  // @action toggleSize() {
  //   this.isLarge = !this.isLarge;
  // }

  @action onUserChange(value) {
    if (this.logOnUser !== value) {
      this.logOnUser = value
    }
  }
}
