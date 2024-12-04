
import * as React from "react"
import { Menu, X } from 'lucide-react'


export function NavHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black p-6">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="logo" width={100} height={100}/>
        </div>
        <button
          
          className="ml-auto h-8 w-8 rounded-md md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isOpen ? (
            <X className="h-8 w-8 text-white" />
          ) : (
            <Menu className="h-7 w-7 font-bold text-white" />
          )}
        </button>
        <nav
          className={`absolute left-0 right-0 top-16 bg-black px-4 pb-6 pt-2 md:static md:ml-auto md:flex md:items-center md:bg-transparent md:p-0 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0 gap-4 text-end px-2 pt-6">
            {[
              "HOME",
              "SERVICES",
              "ABOUT US",
              "TASK LIST",
              "TESTIMONIALS",
              "CONTACT US",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[16px] font-[600] text-white transition-colors "
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

