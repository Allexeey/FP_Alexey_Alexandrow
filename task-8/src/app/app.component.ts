import { Component, OnInit } from '@angular/core';

const map: Map<string, any> = new Map<string, any>();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Inject('mapKey1')
  private mapKey1?: IMyClass;

  @Inject('mapKey2')
  private mapKey2?: IMyClass;

  @Inject('mapKey3')
  private mapKey3?: IMyClass;

  ngOnInit() {

    new Class1();
    new Class2();
    new Class3();

    console.log('map', map);
    console.log('');

    const searchKey = 'mapKey3';

    const mcT = map.get(searchKey)
    console.log(searchKey, mcT);

    (new mcT() as IMyClass).say();

    this.mapKey1?.say();
    this.mapKey2?.say();
    this.mapKey3?.say();
  }
}

function Injectable(args: any) {
  return function (target: any) {
    map.set(args.key, target)
  };
}
export interface IMyClass {
  say(): void;
}
@Injectable({ key: 'mapKey1' })
export class Class1 implements IMyClass {
  say(): void {
    console.log('This is Class1');
    console.log('');
  }
}
@Injectable({ key: 'mapKey2' })
export class Class2 implements IMyClass {
  say(): void {
    console.log('This is Class2');
    console.log('');
  }
}
@Injectable({ key: 'mapKey3' })
export class Class3 implements IMyClass {
  say(): void {
    console.log('This is Class3');
    console.log('');
  }
}

function Inject(key: string) {
  return function (target: any, propertyKey: string) {

    let saved: IMyClass | null = null;

    const getter = () => {
      if (saved) return saved;
      const mcT: any = map.get(key);
      saved = typeof mcT == 'function' ? (new mcT() as IMyClass) : null;
      return saved;
    };
    const setter = (newValue: any) => {
      saved = newValue
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  };
}
