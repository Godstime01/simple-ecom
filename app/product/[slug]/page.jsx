import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

async function getData(slug){
  const res = await fetch(`https://dummyjson.com/products/${slug}`)
  return res.json()
}

const ProductDetail = async ( { params }) => {

  const data = await getData(params.slug)

  console.log(data)

  return (
    <div className="container p-5">
      <Button asChild className="p-3 !bg-red-500 hover:!bg-red-400">
        <Link href="/" className="my-5 p-4">Back</Link>
      </Button>
      <div className="p-3 grid md:grid-cols-2 gap-4">
      <Image src={data.thumbnail} className="w-full" width={500} height={500} />
      <div>
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p>{data.description}</p>
        <span className="font-bold text-3xl flex items-center gap-3">${data.price} <span className="bg-red-500 text-sm p-2 rounded-full">{data.discountPercentage}</span></span>

        <ul className="w-full list-disc my-4 mx-5">
          <li>{data.category}</li>
          <li>{data.brand}</li>
        </ul>

        <Button className="w-full p-3 !bg-red-500">Add to cart</Button>
      </div>

     
    </div>
    </div>
    
  )
}

export default ProductDetail