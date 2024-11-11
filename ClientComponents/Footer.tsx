import Link from 'next/link'
import { Facebook, Twitter, Youtube, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondaryColor   text-gray-300 py-6   b-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-3 ">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white  text-center md:text-start">CodeWithBat</h2>
            <p className="text-sm">Learn coding with free tutorials and courses</p>
          </div>
          <div className="border-gray-700 text-center text-sm">
          <p>&copy; 2024 CodeWithBat. All rights reserved.</p>
        </div>
          

          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://x.com/ANASKHA96399553" target="_blank" className="hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-white transition-colors">
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://github.com/AnasKhan321?tab=repositories" target="_blank" className="hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}