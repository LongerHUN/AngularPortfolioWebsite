import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-page-progress',
    template: `
    <div class="fixed-top bg-dark"><div class="page-progress-bar bg-info" style="height: 10px;" [style.width]="scrolled + '%'"></div></div>
  `
})
export class PageProgressComponent implements OnInit {
    scrolled: number = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.pageLoadBar();
    }

    ngOnInit() {
        this.pageLoadBar();
    }

    pageLoadBar() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        this.scrolled = (winScroll / height) * 100;
    }
}