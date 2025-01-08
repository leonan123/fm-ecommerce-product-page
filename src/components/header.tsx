import Logo from '../assets/images/logo.svg'
import ImageAvatar from '../assets/images/image-avatar.png'

import { BiMenu } from 'react-icons/bi'
import * as Dialog from '@radix-ui/react-dialog'
import { IoCloseSharp } from 'react-icons/io5'
import { Navigation } from './navigation'
import { CartPopover } from './cart-popover'

export function Header() {

  return (
    <header className="container mx-auto flex h-[50px] items-center justify-between px-6">
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-4">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="block text-dark-grayish-blue lg:hidden">
                <span className="sr-only">Open Menu</span>
                <BiMenu size={24} />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-10 bg-black/50 data-[state=closed]:animate-overlay-hide data-[state=open]:animate-overlay-show" />

              <Dialog.Content className="fixed inset-0 z-20 max-w-[250px] bg-light-grayish-blue p-6 focus:outline-none data-[state=closed]:animate-hide-menu-dialog data-[state=open]:animate-show-menu-dialog">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>

                <Dialog.Close className="z-30 size-6 text-dark-grayish-blue outline-none transition-colors hover:text-orange-500">
                  <span className="sr-only">Close Menu</span>
                  <IoCloseSharp className="size-full" />
                </Dialog.Close>

                <Navigation direction="vertical" />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <a href="/">
            <img src={Logo} alt="logo sneakers" className="object-cover" />
          </a>
        </div>

        <Navigation />
      </div>

      <div className="flex h-full items-center gap-5 sm:gap-11">
        <CartPopover />

        <button className="h-full">
          <img src={ImageAvatar} alt="Your avatar" className="size-full" />
        </button>
      </div>
    </header>
  )
}
