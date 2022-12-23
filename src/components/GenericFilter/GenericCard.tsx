/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import React, { useState } from 'react'
import { dataProps } from './GenericFilter'

export function GenericCard({ title, subtitle }: dataProps) {
  return (
    <div className="bg-red-00 m-1 p-5">
      <span className="font-[450] text-sm">
        {title},<span className="pl-[2px] font-[400] text-sm">{subtitle}</span>
      </span>
    </div>
  )
}

interface UserDataProps {
  id?: string
  firstName?: string
  lastName?: string
  email?: string
  gender?: string
  createdDate?: string
  updatedDate?: string
  role?: string
  lastVisited?: string
  speciality?: string
  phoneNumber?: string
  image?: any
}

const socials: string[] = [
  'https://icon666.com/r/_thumb/8gd/8gdo2betl3ei_64.png',
  'https://icon666.com/r/_thumb/9qr/9qru6wmqrou0_64.png',
  'https://icon666.com/r/_thumb/a4k/a4k45p3gi9cj_64.png',
]

export function GeneriUserCard({
  firstName,
  lastName,
  role,
  image,
  email,
  phoneNumber,
  createdDate,
}: UserDataProps) {
  return (
    <div className="border p-5">
      <img
        src={image}
        alt="asdf"
        className="w-[100px] h-[100px] rounded-full"
      />
      <h1 className="text-xl pt-5 capitalize font-bold">
        {firstName} {lastName}
      </h1>
      <p className="text-gray-400">{role}</p>
      <p className="text-gray-500">{email}</p>
      <p className="py-4">
        <ReadMore>
          GeeksforGeeks: A Computer Science portal for geeks. It contains well
          written, well thought and well explained computer science, programming
          articles and quizzes. It provides a variety of services for you to
          learn, so thrive and also have fun! Free Tutorials, Millions of
          Articles, Live, Online and Classroom Courses ,Frequent Coding
          Competitions, Webinars by Industry Experts, Internship opportunities,
          and Job Opportunities. Knowledge is power!
        </ReadMore>
      </p>
      <div>
        <p className="text-gray-800">{phoneNumber}</p>
        <p className="text-gray-800">{createdDate}</p>
      </div>

      <div className="flex items-center pt-4">
        {socials.map((l, index) => {
          return <img src={l} key={index} alt="images" className="w-6 h-6 mr-1" />
        })}
      </div>
    </div>
  )
}

const ReadMore = ({ children }: any) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState<boolean>(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 143) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <button className="text-blue-500 text-sm">...read more</button>
        ) : (
          <button className="text-blue-500 text-sm">...show less</button>
        )}
      </span>
    </p>
  )
}
