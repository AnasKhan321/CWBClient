import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Testnomials() {
  const testimonials = [
    {
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
      role: "Software developer",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      quote:  "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
      author: "Ram Ray",
      role: "Chairman at Response India Private Limited",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      quote: "Programming is the art of telling another human being what one wants the computer to do",
      author: "Donald Ervin Knuth",
      role: "American computer scientist and mathematician",
      image: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    <section className="py-16 bg-primaryColor mb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Programming Quotes 
          </h2>

        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden transition-all hover:shadow-lg ",
                "before:absolute before:inset-0 bg-secondaryColor  before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              )}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-white mb-4" />
                <blockquote className="text-lg mb-6 relative  text-white ">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-white-100 text-white">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <cite className="font-semibold text-white  not-italic">
                      {testimonial.author}
                    </cite>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}