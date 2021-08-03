export default class Carousel {
    constructor({transformAmount}) {
      this.currentSlide = 0;
      this.touchstartX = 0;
      this.touchendX = 0;
      this.transformAmount = transformAmount;

      this.handleLeftClick = this.handleLeftClick.bind(this);
      this.handleRightClick = this.handleRightClick.bind(this);
    }
  
    setupSlider() {
      //this.slider.style.transform = "scale(0.5)";
      //this.slider.current.style.overflow = "hidden";
      this.goToSlide(0);
  
      document.addEventListener("keydown", (e) => {
        e.key === "ArrowLeft" && this.prevSlide();
        e.key === "ArrowRight" && this.nextSlide();
      });
      this.slider.current.addEventListener("touchstart", (e) => {
        this.touchstartX = e.changedTouches[0].screenX;
      });
  
      this.slider.current.addEventListener("touchend", (e) => {
        this.touchendX = e.changedTouches[0].screenX;
        this.handleGesture();
      });
    }
  
    nextSlide() {
      if (this.currentSlide === this.maxSlide - 1) this.currentSlide = 0;
      else this.currentSlide++;
  
      this.goToSlide(this.currentSlide);
      //this.activateDot(this.currentSlide);
    }
  
    prevSlide() {
      if (this.currentSlide === 0) this.currentSlide = this.maxSlide - 1;
      else this.currentSlide--;
      this.goToSlide(this.currentSlide);
      //this.activateDot(this.currentSlide);
    }
  
    goToSlide(slide) {
      let i = 0;
      for (let child of this.slider.current.children) {
        child.style.transform = `translateX(${this.transformAmount * (i - slide)}%)`;
        i++;
      }
    }
  
    handleLeftClick() {
      this.prevSlide();
    }
  
    handleRightClick() {
      this.nextSlide();
    }
  }