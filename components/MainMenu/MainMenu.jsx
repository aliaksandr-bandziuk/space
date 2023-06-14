// import { ButtonLink } from 'components/ButtonLink'
import Image from 'next/image'
import Link from 'next/link'

export const MainMenu = ({ items, logo, icons }) => {
  console.log("MAIN MENU: ", items)
  return (
    <div className='bg-[#9fc783] fixed top-0 left-0 right-0 z-10'>
      <div className="max-w-[1220px] mx-auto text-white px-[10px] h-[64px] flex">
        <Link href="/" className="py-2 flex">
          <Image
            alt="Logo"
            src={logo}
            width={50}
            height={50}
            className='object-contain'
          />
        </Link>
        <nav className='flex flex-1 justify-end'>
          {(items || []).map((item) => (
            <div key={item.id} className='hover:bg-[#799962] cursor-pointer relative group transition-all'>
              <div>
                <Link href={item.destination} className='p-5 block'>
                  {item.label}
                </Link>
              </div>
              {!!item.subMenuItems?.length && <div className='group-hover:block hidden bg-[#9fc783] text-right absolute right-0 top-full -mt-1'>
                {item.subMenuItems.map((subMenuItem) => (
                  <Link key={subMenuItem.id} href={subMenuItem.destination} className='block whitespace-nowrap p-5 hover:bg-[#799962]'>
                    {subMenuItem.label}
                  </Link>
              ))}
              </div>}
            </div>
          ))}
        <div className='ml-3 my-auto flex gap-3'>
          {(icons || []).map((icon) => (
            <Link key={icon.id} href={icon.destination}>
              <Image
                src={icon.imageLabel}
                alt="Logo"
                width={25}
                height={25}
                className='object-contain'
              />
            </Link>
          ))}
        </div>
      </nav>
    </div>
    </div>
  )
}