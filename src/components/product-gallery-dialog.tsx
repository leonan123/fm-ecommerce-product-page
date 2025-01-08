import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, EffectFade, Navigation } from 'swiper/modules'
import type { PaginationOptions } from 'swiper/types'
import { product } from '../utils/data'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import { DialogClose } from '@radix-ui/react-dialog'
import { IoCloseSharp } from 'react-icons/io5'

export function ProductGalleryDialog() {
  const { activeIndex } = useSwiper()

  const pagination: PaginationOptions = {
    type: 'bullets',
    clickable: true,
    renderBullet: (index, className) => {
      const thumbnail = product.gallery[index].thumbnail

      return `
        <span class='group inline-block size-[88px] overflow-hidden rounded-2xl bg-white ${className}'>
          <img 
            class="size-full object-cover transition-opacity group-hover:opacity-70"
            src="${product.rootImagesPath}${thumbnail}" alt=""
          />
        </span>
      `
    },
  }

  return (
    <div>
      <Swiper
        modules={[Pagination, EffectFade, Navigation]}
        effect="fade"
        pagination={pagination}
        navigation={{
          nextEl: '#swiper_dialog_next-button',
          prevEl: '#swiper_dialog_prev-button',
        }}
        initialSlide={activeIndex}
        loop={true}
        className="relative overflow-visible outline-none [&_.swiper-pagination]:mt-8"
      >
        <DialogClose className="absolute -right-3 -top-16 z-30 size-12 text-light-grayish-blue outline-none transition-colors hover:text-orange-500">
          <span className="sr-only">Close</span>
          <IoCloseSharp className="size-full" />
        </DialogClose>

        <button
          id="swiper_dialog_prev-button"
          className="absolute -left-7 top-1/2 z-40 flex size-14 -translate-y-[calc(50%+50px)] items-center justify-center rounded-full bg-white transition-colors enabled:hover:text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <span className="sr-only">previous button</span>
          <BiSolidChevronLeft size={24} />
        </button>

        <button
          id="swiper_dialog_next-button"
          className="absolute -right-7 top-1/2 z-40 flex size-14 -translate-y-[calc(50%+50px)] items-center justify-center rounded-full bg-white transition-colors enabled:hover:text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <span className="sr-only">next button</span>
          <BiSolidChevronRight size={24} />
        </button>

        {product.gallery.map(({ image }) => (
          <SwiperSlide
            className="max-width-[445px] size-[445px] select-none overflow-hidden rounded-2xl"
            key={image}
          >
            <img
              src={`${product.rootImagesPath}${image}`}
              alt=""
              className="size-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
