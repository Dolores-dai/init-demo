import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../types/user.type';
import { SearchResult } from '../../../types/search-result.type';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';
import { SearchService } from '../../../services/search.service';
import { isEmptyObject } from '../../../utils/tools';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SearchPanelComponent } from '../search-panel/search-panel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  opportunity = { id: 1 };
  menu = [{
    label: '首页',
    path: '/home'
  }, {
    label: '详情',
    path: '/opportunity/2'
  }];
  user: User;
  searchResult: SearchResult;
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;
  private overlayRef: OverlayRef;
  @ViewChild('search', { static: false }) private defaultRef: ElementRef;

  constructor(private authSever: AuthService,
              private searchSever: SearchService,
              private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
  ) {
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.onChanges();
  }

  private onChanges() {
    fromEvent(this.inputElement.nativeElement, 'input')
      .pipe(debounceTime(300), distinctUntilChanged(), pluck('target', 'value'))
      .subscribe((value: string) => {
        this.searchSever.search(value).subscribe((result: SearchResult) => {
          this.searchResult = result;
          this.onFocus();
        });
      });
  }

  onFocus() {
    if (this.searchResult && !isEmptyObject(this.searchResult)) {
      this.showOverlayPanel();
    }
  }

  private showOverlayPanel() {
    this.hideOverlayPanel();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.defaultRef)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }]).withLockedPosition(true);
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    const panelPortal = new ComponentPortal(SearchPanelComponent, this.viewContainerRef);
    const panelRef = this.overlayRef.attach(panelPortal);
    panelRef.instance.searchResult = this.searchResult;
    this.overlayRef.backdropClick().subscribe(() => {
      this.hideOverlayPanel();
    });
  }

  private hideOverlayPanel() {
    if (this.overlayRef && this.overlayRef.hasAttached) {
      this.overlayRef.dispose();
    }
  }

  onBlur() {
    this.hideOverlayPanel();
  }
}
