import React, { useEffect } from 'react';
import './Carrousel.scss';

const Carrousel = () => {

  useEffect(() => {
    const slides = document.querySelector(".slider").children;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const indicator = document.querySelector(".indicator");
    let index = 0;
    let time = 5000;

    prev.addEventListener("click", function () {
      prevSlide();
      updateCircleIndicator();
      resetTimer();
    })

    next.addEventListener("click", function () {
      nextSlide();
      updateCircleIndicator();
      resetTimer();
    })

    // create circle indicators
    const circleIndicator = () => {
      for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i;
        if (i == 0) {
          div.className = "active";
        }
        indicator.appendChild(div);
      }
    }
    circleIndicator();

    const indicateSlide = (element) => {
      index = element.id;
      changeSlide();
      updateCircleIndicator();
      resetTimer();
    }

    const updateCircleIndicator = () => {
      for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
      }
      indicator.children[index].classList.add("active");
    }

    const prevSlide = () => {
      if (index == 0) {
        index = slides.length - 1;
      }
      else {
        index--;
      }
      changeSlide();
    }

    const nextSlide = () => {
      if (index == slides.length - 1) {
        index = 0;
      }
      else {
        index++;
      }
      changeSlide();
    }

    const changeSlide = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      slides[index].classList.add("active");
    }

    const resetTimer = () => {
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      timer = setInterval(autoPlay, 4000);
    }


    const autoPlay = () => {
      nextSlide();
      updateCircleIndicator();
    }

    let timer = setInterval(autoPlay, time);

  }, []);

  return (
    <div className="carrousel">
      <section className="home">
        <div className="slider">
          <div className="slide active" style="background-image: url('../../assets/img/Carrousel/1.jpg')">
            <div className="container">
              <div className="caption">
                <h1>Image collection 1</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <a target="_blank" href="">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="slide" style="background-image: url('../../assets/img/Carrousel/2.jpg')">
            <div className="container">
              <div className="caption">
                <h1>Image collection 2</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <a target="_blank" href="">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="slide" style="background-image: url('../../assets/img/Carrousel/1.jpg')">
            <div className="container">
              <div className="caption">
                <h1>Image collection 5</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <a target="_blank" href="">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="slide" style="background-image: url('../../assets/img/Carrousel/3.jpg')">
            <div className="container">
              <div className="caption">
                <h1>Image collection 3</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <a target="_blank" href="">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="slide" style="background-image: url('../../assets/img/Carrousel/4.jpg')">
            <div className="container">
              <div className="caption">
                <h1>Image collection 4</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <a target="_blank" href="">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="prev">&lt;</div>
          <div className="next">&gt;</div>
        </div>
        <div className="indicator">
        </div>
      </section>
    </div>

  );
};

export default Carrousel;