import { data } from "@/app/page"
import Image from "next/image"

export default function page({params}) {

    const star = data.find(pro => pro.id === params.slug)

  return (
    <section>
    <h1 className=" flex items-center justify-center mt-10 text-xl font-bold">{star.name}</h1>
    <Image src={star.image} alt={star.name} width={300} height={400} className="rounded-md mt-10 m-auto"/>
    <div className="w-[60%] m-auto font-bold">
      <h2 className="">Nationality: {star.nationality}</h2>
      <p>Profession: {star.profession}</p>
      <p>Date of Birth: {star.date_of_birth}</p>
      <p>Net worth: {star.net_worth}</p>
      <p>Description: {star.description}</p>
    </div>
    </section>
  )
}
