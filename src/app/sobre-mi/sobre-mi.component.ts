import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private animateSVG(suffix: string) {
    const hexPath = document.querySelector(`path#hexagon-${suffix}`) as SVGPathElement;
    const izquierdaPath = document.querySelector(`path#izquierda-${suffix}`) as SVGPathElement;
    const centroPath = document.querySelector(`path#centro-${suffix}`) as SVGPathElement;
    const derechaPath = document.querySelector(`path#derecha-${suffix}`) as SVGPathElement;

    if (hexPath) {
      const pathLength = hexPath.getTotalLength();

      const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          gsap.set(hexPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
        }
      });

      gsap.set(hexPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      tl.to(hexPath, {
        duration: 3,
        strokeDashoffset: 0,
        ease: "power4.inOut"
      })
      .to(hexPath, {
        duration: 3,
        strokeDashoffset: -pathLength,
        ease: "power4.inOut"
      }, ">")
      .set(hexPath, {
        strokeDashoffset: pathLength
      });

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
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateSVG('mobile');
      this.animateSVG('desktop');
    }
  }

}
