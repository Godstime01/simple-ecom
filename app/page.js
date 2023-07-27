import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


async function getData(){
  const res = await fetch('https://dummyjson.com/products?limit=15')
  return res.json()
}

export default async function Home() {
  const data = await getData()
  // console.log("reeach")
  
  console.log(data)
  return (
    <main className="dark:bg-slate-900">
      <div className='container grid md:grid-cols-3 gap-4 p-5'>
        {
          data.products.map(product => {
            return <Card key={product.id} className="shadow-md dark:bg-slate-950">
              <Image src={product.thumbnail} className="aspect-square" width={500} height={500} />
              <div className="p-3">
                <h3 className="text-xl flex gap-2 justify-between">{product.title}
                <span className="font-bold">${product.price}</span>
                </h3>
                <Button className="mt-3 mr-3">Add to cart</Button>
                <Button asChild className="mt-3">
                  <Link href={`/product/${product.id}`} >View product</Link>
                </Button>
              </div>
            </Card>
          })
        }
      </div>
    </main>
  )
}
