import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent implements AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  private animateSVG(suffix: string) {
    const hexPath = document.querySelector(`path#hexagon-${suffix}`) as SVGPathElement;
    const izquierdaPath = document.querySelector(`path#izquierda-${suffix}`) as SVGPathElement;
    const centroPath = document.querySelector(`path#centro-${suffix}`) as SVGPathElement;
    const derechaPath = document.querySelector(`path#derecha-${suffix}`) as SVGPathElement;

    if (hexPath) {
      const pathLength = hexPath.getTotalLength();
      const hexTl = gsap.timeline({ repeat: -1 });

      gsap.set(hexPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      hexTl
        .to(hexPath, {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power4.inOut"
        })
        .to(hexPath, {
          strokeDashoffset: pathLength,
          duration: 3,
          ease: "power4.inOut"
        });
    }

    const symbolsPaths = [izquierdaPath, centroPath, derechaPath];

    symbolsPaths.forEach(path => {
      if (path) {
        const pathLength = path.getTotalLength();
        const symbolTl = gsap.timeline({ repeat: -1 });

        gsap.set(path, {
          fill: 'none',
          stroke: `url(#gradient-0-${suffix})`,
          strokeWidth: 8,
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        symbolTl
          .to(path, {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power4.inOut"
          })
          .to(path, {
            strokeDashoffset: pathLength,
            fill: 'none',
            duration: 3,
            ease: "power4.inOut"
          });
      }
    });
  }

  private initializeTextAnimation1(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const defaultColor = "#0F172B";
    const divHighlight = "#ffffff";

    setTimeout(() => {
      const quoteElements = document.querySelectorAll(".quote1 p");
      if (!quoteElements || quoteElements.length === 0) return;

      quoteElements.forEach((element) => {
        const existingSpans = Array.from(element.querySelectorAll('span'));
        const words = element.textContent?.split(/\s+/).filter(word => word.length > 0) || [];

        element.innerHTML = '';

        words.forEach(word => {
          const span = document.createElement('span');
          const matchingExistingSpan = existingSpans.find(s => s.textContent?.includes(word));

          if (matchingExistingSpan) {
            span.className = 'font-semibold';
          }

          if (word.toLowerCase() === 'turunku') {
            span.style.color = '#0F172B';
            span.style.transition = 'none';
          } else {
            span.style.color = defaultColor;
          }

          span.textContent = word + ' ';
          element.appendChild(span);
        });

        const allSpans = element.querySelectorAll('span');
        const tl = gsap.timeline();

        const animateWord = (word: HTMLElement) => {
          if (word.textContent?.toLowerCase().trim() === 'turunku') return;

          if (st.direction === 1) {
            gsap.to(word, { color: divHighlight, duration: 0.2 });
          } else {
            gsap.to(word, { color: defaultColor, duration: 0.2 });
          }
        };

        Array.from(allSpans).forEach((word, index) => {
          tl.call(animateWord, [word], index * 0.03);
        });

        const st = ScrollTrigger.create({
          trigger: ".quote1",
          start: "top 80%",
          end: "bottom 90%",
          scrub: 3,
          animation: tl,
          toggleActions: "play none none reverse"
        });
      });
    }, 100);
  }

  private initializeTextAnimation2(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const defaultColor = "#0F172B";
    const divHighlight = "#eee";

    const quoteElements = document.querySelectorAll(".quote2 p");
    if (!quoteElements.length) return;

    quoteElements.forEach((element) => {
      const coloredSpans = Array.from(element.querySelectorAll('span[class*="text-"]'));
      const originalColors = new Map(
        coloredSpans.map(span => [span, getComputedColor(span.classList)])
      );

      coloredSpans.forEach(span => {
        gsap.set(span, { color: defaultColor });
      });

      const textNodes = Array.from(element.childNodes).filter(
        node => node.nodeType === Node.TEXT_NODE
      );

      textNodes.forEach(node => {
        const words = node.textContent?.split(/\s+/).filter(word => word.length > 0) || [];
        const spans = words.map(word => {
          const span = document.createElement('span');
          if (word.toLowerCase() === 'turunku') {
            span.style.color = '#0F172B';
            span.style.transition = 'none';
          } else {
            span.style.color = defaultColor;
          }
          span.textContent = word + ' ';
          return span;
        });

        node.parentNode?.replaceChild(
          spans.reduce((fragment, span) => {
            fragment.appendChild(span);
            return fragment;
          }, document.createDocumentFragment()),
          node
        );
      });

      const allSpans = element.querySelectorAll('span');
      const tl = gsap.timeline();

      const animateWord = (word: HTMLElement) => {
        if (word.textContent?.toLowerCase().trim() === 'turunku') return;

        if (st.direction === 1) {
          if (word.classList.contains('text-blue-300')) {
            gsap.to(word, { color: '#93C5FD', duration: 0.2 });
          } else if (word.classList.contains('text-blue-400')) {
            gsap.to(word, { color: '#60A5FA', duration: 0.2 });
          } else if (word.classList.contains('text-green-300')) {
            gsap.to(word, { color: '#86EFAC', duration: 0.2 });
          } else if (word.classList.contains('text-yellow-300')) {
            gsap.to(word, { color: '#FDE047', duration: 0.2 });
          } else {
            gsap.to(word, { color: divHighlight, duration: 0.2 });
          }
        } else {
          gsap.to(word, { color: defaultColor, duration: 0.2 });
        }
      };

      Array.from(allSpans).forEach((word, index) => {
        tl.call(animateWord, [word], index * 0.03);
      });

      const st = ScrollTrigger.create({
        trigger: ".quote2",
        start: "top 80%",
        end: "bottom 90%",
        scrub: 0.5,
        animation: tl,
        toggleActions: "play none none reverse"
      });
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.animateSVG('mobile');
        this.animateSVG('desktop');
        this.initializeTextAnimation1();
        this.initializeTextAnimation2();
      }, 300);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().forEach(st => st.kill());
    }
  }

}

function getComputedColor(classList: DOMTokenList): string {
  if (classList.contains('text-blue-300')) return '#93C5FD';
  if (classList.contains('text-blue-400')) return '#60A5FA';
  if (classList.contains('text-green-300')) return '#86EFAC';
  if (classList.contains('text-yellow-300')) return '#FDE047';
  return '#eee';
}
