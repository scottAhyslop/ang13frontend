import { AfterViewInit, Component, ComponentFactoryResolver, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges example');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy example');
  }
  ngDoCheck(): void {
    console.log('DoCheck example');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit example');
  }

  ngOnInit(): void {
    console.log('At OnInit');
  }

}
