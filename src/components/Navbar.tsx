import Link from "next/link"

const Navbar = () => {
    return (
      <nav className="border-b border-gray-100/50 text-secondary">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex gap-6 font-medium">
            <Link href="/" className="">
              About
            </Link>
            <Link href="/blog" >
              Blog
            </Link>
            <Link
              href="/contact"
              className=""
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;