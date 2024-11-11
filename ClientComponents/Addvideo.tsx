'use client'

import { CreateVideoCourse } from '@/ReactGraphHooks/mutations'
import { CourseForVideo, useCourseForVideo } from '@/ReactGraphHooks/queries'
import { useState, FormEvent } from 'react'  ; 
import {toast }  from "react-hot-toast"
import {MoonLoader}  from "react-spinners"
export default function AddVideoCourse() {
  const [title, setTitle] = useState('')
  const [descriptions, setDescriptions] = useState<string[]>([''])
  const [codeSnippets, setCodeSnippets] = useState<string[]>([''])
  const [videoUrl, setVideoUrl] = useState('')
  const [selectedUser, setSelectedUser] = useState('')

  const handleAddDescription = () => {
    setDescriptions([...descriptions, ''])
  }

  const { data, isLoading, isError }  : {data :CourseForVideo | undefined   , isLoading : boolean 
    , isError : boolean 
  }= useCourseForVideo()

  const mutations = CreateVideoCourse()

  if(isLoading){
    return <div className="w-full h-screen flex items-center justify-center"> 
<MoonLoader
  color="#ffffff"
  loading
  size={100}
/>
</div>
  }

  const handleAddCodeSnippet = () => {
    setCodeSnippets([...codeSnippets, ''])
  }

  const handleDescriptionChange = (index: number, text: string) => {
    const newDescriptions = [...descriptions]
    newDescriptions[index] = text
    setDescriptions(newDescriptions)
  }

  const handleCodeSnippetChange = (index: number, code: string) => {
    const newCodeSnippets = [...codeSnippets]
    newCodeSnippets[index] = code
    setCodeSnippets(newCodeSnippets)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutations.mutate({
        Code: codeSnippets,
        CourseId: selectedUser,
        description: descriptions,
        title: title,
        videourl: videoUrl
    })
    toast.success("Created Successfully !")
  }

  return (
    <div className="min-h-screen bg-black text-stone-100 p-4">
      <div className="max-w-2xl mx-auto bg-stone-900 p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Advanced Course Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-stone-300">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-stone-800 border-stone-700 text-stone-100 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">Descriptions</label>
            {descriptions.map((desc, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={desc}
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  className="w-full rounded-md bg-stone-800 border-stone-700 text-stone-100 p-2"
                  rows={3}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddDescription}
              className="mt-2 px-4 py-2 bg-stone-700 text-stone-100 rounded-md hover:bg-stone-600"
            >
              Add Description
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">Code Snippets</label>
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="mb-2">
                <textarea
                  value={snippet}
                  onChange={(e) => handleCodeSnippetChange(index, e.target.value)}
                  className="w-full rounded-md bg-stone-800 border-stone-700 text-stone-100 font-mono p-2"
                  rows={5}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddCodeSnippet}
              className="mt-2 px-4 py-2 bg-stone-700 text-stone-100 rounded-md hover:bg-stone-600"
            >
              Add Code Snippet
            </button>
          </div>

          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-stone-300">Video URL</label>
            <input
              type="url"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-1 block w-full rounded-md bg-stone-800 border-stone-700 text-stone-100 p-2"
            />
          </div>

          <div>
            <label htmlFor="user" className="block text-sm font-medium text-stone-300">Select User</label>
            <select
              id="user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-stone-800 border-stone-700 text-stone-100 p-2"
            >
              <option value="">Select a Course</option>

              {data?.getCourses.map((item)=>(
                
                    <option key={item.id} value={item.id}>{item.title}</option>

               

              ))}
              
            
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-700 hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
          >
            Submit Course
          </button>
        </form>
      </div>
    </div>
  )
}