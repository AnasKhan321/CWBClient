import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Laptop, User } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About CodeWithBat</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-secondaryColor text-white  group hover:bg-white cursor-pointer delay-200 transition-all ">
          <CardContent className="p-6">
            <BookOpen className="w-12 h-12 mb-4 text-fifthColor  group-hover:text-black transition-all delay-200 " />
            <h2 className="text-2xl font-semibold mb-2  group-hover:text-black transition-all delay-200">Our Mission</h2>
            <p className="text-white  group-hover:text-black transition-all delay-200">
              CodeWithBat is dedicated to providing high-quality coding tutorials and courses. 
              Our goal is to make learning programming accessible, engaging, and fun for everyone.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondaryColor  group  hover:bg-white cursor-pointer transition-all delay-200" >
          <CardContent className="p-6 ">
            <User className="w-12 h-12 mb-4 text-primary text-fifthColor  group-hover:text-black transition-all delay-200" />
            <h2 className="text-2xl font-semibold mb-2 text-white  group-hover:text-black transition-all delay-200 ">About the Creator</h2>
            <p className="text-white group-hover:text-black transition-all delay-200 ">
              Hi, I'm Anas Khan, the creator of CodeWithBat. With 2 years of experience in software development,
              I'm passionate about sharing my knowledge and helping others learn to code.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondaryColor group hover:bg-white cursor-pointer delay-200 transition-all " >
          <CardContent className="p-6">
            <Code className="w-12 h-12 mb-4 text-primary  text-fifthColor  group-hover:text-black transition-all delay-200" />
            <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-black transition-all delay-200">What We Offer</h2>
            <p className="text-white group-hover:text-black transition-all delay-200 ">
              Our platform offers a wide range of tutorials and courses covering various programming languages,
              frameworks, and technologies. From beginners to advanced developers, there's something for everyone.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Learning?</h2>
        <p className="text-xl text-muted-foreground mb-6">
          Dive into our courses and start your coding journey today!
        </p>
        <Button asChild size="lg"  className="bg-fourthColor">
          <Link href="/course">
            <Laptop className="mr-2 h-5 w-5" /> Explore Courses
          </Link>
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Quality Education: We strive to provide the best learning materials and resources.</li>
          <li>Community: We foster a supportive community of learners and developers.</li>
          <li>Accessibility: We believe in making coding education accessible to everyone.</li>
          <li>Innovation: We keep our content up-to-date with the latest industry trends and technologies.</li>
        </ul>
      </div>
    </div>
  )
}