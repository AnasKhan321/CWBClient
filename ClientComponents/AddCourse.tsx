'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { graphqlclient } from '@/client/api'
import { signedUrl } from '@/GraphqlQueries/mutation';
import { SignedUrlInterface } from '@/GraphqlQueries/interfaces'
import axios from "axios"
import { createCourse } from '@/ReactGraphHooks/mutations'
import {toast} from "react-hot-toast"


export default function AddCourseForm() {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageUrl , setimageUrl]  = useState("")

  const mutation = createCourse()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }


    if(file){
        getUrl(file.name , file.type  , file)
        
    }


  }

  const getUrl = async (imageName: string, imageType: string  , file : File) => {
    try {
        const data  : SignedUrlInterface = await graphqlclient.request(signedUrl, {
            payload: { // Ensure payload wraps the imageName and imageType
                imageName: file.name,
                imageType: file.type,
            },
        });
        if (data.getS3url) {

            await axios.put(data.getS3url , file , {
                headers: {
                    "Content-Type": file.type,
                  },
            })

            const url = new URL(data.getS3url);
            const myfilepath = `${url.origin}${url.pathname}`;
            setimageUrl(myfilepath);
        }

        return data.getS3url; // Return the response data for further use
    } catch (error) {
        console.error("Error fetching signed URL:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate({
        title, 
        status, 
        description, 
        imageUrl  
    })
    setTitle('')
    setStatus('')
    setDescription('')
    setImage(null)
    setImagePreview(null)
    toast.success("Uploaded successfully")
  }

  return (
    <div className="container mx-auto p-4 bg-black min-h-screen ">
      <Card className="w-full max-w-2xl mx-auto bg-stone-900 text-stone-100 shadow-xl border border-stone-800 mt-10 ">
        <CardHeader className="border-b border-stone-800 ">
          <CardTitle className="text-2xl font-bold text-stone-100">Add New Course</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-stone-300">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter course title"
                className="bg-black text-stone-100 border-stone-700 focus:border-stone-600 focus:ring-stone-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-stone-300">Status</Label>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger id="status" className="bg-black text-stone-100 border-stone-700 focus:border-stone-600 focus:ring-stone-600">
                  <SelectValue placeholder="Select course status" />
                </SelectTrigger>
                <SelectContent className="bg-black text-stone-100 border-stone-700">
                  <SelectItem value="Free" className="focus:bg-stone-800">Free </SelectItem>
                  <SelectItem value="Paid" className="focus:bg-stone-800">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-stone-300">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Enter course description"
                rows={4}
                className="bg-black text-stone-100 border-stone-700 focus:border-stone-600 focus:ring-stone-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-stone-300">Course Image</Label>
              <Input
                id="image"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="cursor-pointer bg-black text-stone-100 border-stone-700 file:bg-stone-800 file:text-stone-100 file:border-0 focus:border-stone-600 focus:ring-stone-600"
              />
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Course preview"
                    className="max-w-full h-auto rounded-md border border-stone-700"
                  />
                </div>
              )}
            </div>
            <Button type="submit" className="w-full bg-thirdColor  text-stone-100 hover:bg-stone-700">Add Course</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}