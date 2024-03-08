import Image from "next/image"
import Link from "next/link"
import styles from '../style.module.css'

export default function Stars({star}) {

        const topstars = star.map(pro => (
            <aside key={pro.id}>
                <Link href={`/stars/${pro.id}`}>
                <Image src={pro.image} alt={pro.name} width={300} height={300} className={`${styles.image} rounded`}/>
                <h1 className="font-bold text-xs text-center">{pro.name}</h1>
                </Link>
            </aside>
        ))
    
    return (
        <section className="grid grid-cols-4 gap-2 w-4/5 m-auto mt-10 mb-10">
            {topstars}
        </section>
  )
}
