import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { Pagination, EffectFade, Navigation } from 'swiper/modules'
import type { PaginationOptions } from 'swiper/types'
import { product } from '../utils/data'

import * as Dialog from '@radix-ui/react-dialog'
import { ProductGalleryDialog } from './product-gallery-dialog'
import { useEffect, useState } from 'react'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'

export function ProductGallery() {
  const pagination: PaginationOptions = {
    type: 'bullets',
    clickable: true,
    renderBullet: (index, className) => {
      const thumbnail = product.gallery[index].thumbnail

      return `
        <span class='group inline-block size-[88px] overflow-hidden rounded-2xl ${className} hidden lg:block'>
          <img 
            class="size-full object-cover transition-opacity group-hover:opacity-50"
            src="${product.rootImagesPath}${thumbnail}" alt=""
          />
        </span>
      `
    },
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 670) {
        setIsMobile(true)
        return
      }

      setIsMobile(false)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Swiper
      modules={[Pagination, Navigation, EffectFade]}
      effect="fade"
      pagination={pagination}
      navigation={{
        prevEl: '#swiper_prev-button',
        nextEl: '#swiper_next-button',
      }}
      className="[&_.swiper-pagination]:mt-8"
    >
      <button
        id="swiper_prev-button"
        className="absolute left-4 top-1/2 z-40 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors enabled:hover:text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
      >
        <span className="sr-only">previous button</span>
        <BiSolidChevronLeft size={24} />
      </button>

      <button
        id="swiper_next-button"
        className="absolute right-4 top-1/2 z-40 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors enabled:hover:text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300 lg:hidden"
      >
        <span className="sr-only">next button</span>
        <BiSolidChevronRight size={24} />
      </button>

      {product.gallery.map(({ image }) => (
        <SwiperSlide className="overflow-hidden sm:rounded-2xl" key={image}>
          <Dialog.Root>
            <Dialog.Trigger className="outline-none" disabled={isMobile}>
              <img
                src={`${product.rootImagesPath}${image}`}
                alt=""
                className="size-full object-cover"
              />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-10 bg-black/50 data-[state=closed]:animate-overlay-hide data-[state=open]:animate-overlay-show" />

              <Dialog.Content className="fixed left-1/2 top-1/2 z-20 max-w-[550px] -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=closed]:animate-hide-dialog data-[state=open]:animate-show-dialog">
                <Dialog.Title className="sr-only">product gallery</Dialog.Title>
                <ProductGalleryDialog />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
