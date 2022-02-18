import { Component } from 'preact';
import Swiper from 'swiper';

import 'swiper/css';

export default class About extends Component {
  images = [
    '/img/space/1.png',
    '/img/space/2.png',
    '/img/space/3.png',
    '/img/space/4.png',
    '/img/space/5.png'
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      swiper: {}
    };

    this.slideNext = () => {
      this.state.swiper.slideNext?.();
    };

    this.slidePrev = () => {
      this.state.swiper.slidePrev?.();
    };
  }

  componentDidMount() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
      spaceBetween: 24
    });

    swiper.on('realIndexChange', () => {
      this.setState({ activeIndex: swiper.realIndex + 1 });
    });

    this.setState({ swiper });
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    return (
      <div class="flex w-full justify-center bg-cream" id="about">
        <div class="flex w-full max-w-6xl justify-center py-20 lg:py-32">
          <div class="grid w-full grid-cols-1 gap-x-28 p-6 lg:grid-cols-2">
            <div class="flex flex-col">
              <div class="flex-grow">
                <h2 class="text-4xl text-dark-green lg:text-6xl">
                  Finally, premium coworking space in Middleburg
                </h2>

                <p class="my-4 text-lg text-dark-green">
                  Don't drive all the way to Leesburg or Ashburn just for a nice
                  coworking space. 1787's Middleburg coworking space includes
                  blazing fast internet, unlimited snacks and drinks, and many
                  membership options to fit your needs and budget.
                </p>
              </div>

              <div class="hidden items-center justify-between justify-self-end lg:flex">
                <span class="font-heading text-lg">
                  0{this.state.activeIndex}/05
                </span>
                <div>
                  <button
                    class="mr-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-white"
                    onClick={this.slidePrev}
                  >
                    <svg
                      width="27"
                      height="15"
                      viewBox="0 0 27 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="stroke-current"
                        d="M27 7.07959L2.1885 7.07959"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                      <path
                        class="stroke-current"
                        d="M0.506571 7.15967V7.15967C4.26605 7.15967 7.31372 10.2073 7.31372 13.9668L7.31372 14.6475"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                      <path
                        class="stroke-current"
                        d="M0.506571 7.15967V7.15967C4.26605 7.15967 7.31372 4.112 7.31372 0.352518V0.352518"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-white"
                    onClick={this.slideNext}
                  >
                    <svg
                      class="rotate-180"
                      width="27"
                      height="15"
                      viewBox="0 0 27 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="stroke-current"
                        d="M27 7.07959L2.1885 7.07959"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                      <path
                        class="stroke-current"
                        d="M0.506571 7.15967V7.15967C4.26605 7.15967 7.31372 10.2073 7.31372 13.9668L7.31372 14.6475"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                      <path
                        class="stroke-current"
                        d="M0.506571 7.15967V7.15967C4.26605 7.15967 7.31372 4.112 7.31372 0.352518V0.352518"
                        stroke="#AA7A4E"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div class="swiper w-full xl:w-[500px] 2xl:w-[700px]">
                <div class="swiper-wrapper">
                  {this.images.map((image) => (
                    <div class="swiper-slide !h-72 !w-72 xl:!h-[525px] xl:!w-[525px]">
                      <img class="h-full w-full object-cover" src={image} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
