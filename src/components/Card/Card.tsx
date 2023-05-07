import { Product } from "../../types/product"

export const Card = (data: Product) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg justify-self-center">
      <figure className="relative mb-2 w-full h-4/5" >
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {data.category.name}
        </span>
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 pb-1.5">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}