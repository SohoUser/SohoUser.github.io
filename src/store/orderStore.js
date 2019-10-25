import { observable, computed, action } from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable user = getUser();

  @observable lastOrder = {};

  @observable allInputValide = this.allValide();

  @action setValue(i, val) {
    this.user[i].value = val;
  }

  @action resetUser = () => {
    this.user = getUser();
  }

  @action validate(i, val) {
    this.setValue(i, val);
    if (this.user[i].reg.test(this.user[i].value) && this.user[i].value.length > 0) {
      this.user[i].valide = true;
      this.user[i].valideClass = 'border border-success';
    } else {
      this.user[i].valide = false;
      this.user[i].valideClass = 'border border-danger';
    }
    this.allInputValide = this.allValide();
  }

  allValide() {
    return this.user.every(item => item.valide == true);
  }

  @action setLastInfo(){
    this.user.forEach(item => {
      this.lastOrder[item.name] = item.value;
    });
  }

}

function getUser() {
  return [
    {
      name: 'name',
      label: 'Enter your name',
      type: 'text',
      value: '',
      placeholder: 'Enter name...',
      valide: false,
      valideClass: '',
      reg: /^[a-zА-я0-9_-]{3,16}$/i
    },
    {
      name: 'email',
      label: 'Enter your email',
      type: 'email',
      value: '',
      placeholder: 'Enter email...',
      valide: false,
      valideClass: '',
      reg: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    },
    {
      name: 'phone',
      label: 'Enter your phone',
      type: 'tel',
      value: '',
      placeholder: 'Enter phone...',
      valide: false,
      valideClass: '',
      reg: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    }
  ];
}