import { useLoaderData } from "react-router-dom"
import type { brand, category, product, resultType, subCategory } from "../types/types"

function Result({categoryId, subCategoryId, brandId, productId} : resultType) {
  const allproducts = useLoaderData()
  const category : category = allproducts.categories.find((c : any)=> c.id == categoryId)
  const subCategory : subCategory = allproducts.subCategories.find((c : any)=> c.id == subCategoryId) 
  const brand : brand = allproducts.brands.find((c : any)=> c.id == brandId)
  const product : product = allproducts.products.find((c : any)=> c.id == productId)

  return (
    <section className="bg-gray-100 h-[90%] flex gap-6 flex-col w-full items-center justify-center">
        {category &&
        <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-blue-500 tracking-widest">CATEGORY</p>
            <p className='text-3xl font-bold min-h-10'>{category.name}</p>
            <p className="text-gray-200 text-3xl">↓</p>
        </div> }

        {subCategory &&
        <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-blue-500 tracking-widest">SUB CATEGORY</p>
            <p className='text-3xl font-bold min-h-10'>{subCategory.name}</p>
            <p className="text-gray-200 text-3xl">↓</p>
        </div> }

        {brand &&
        <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-blue-500 tracking-widest">BRAND</p>
            <p className='text-3xl font-bold min-h-10'>{brand.name}</p>
            <p className="text-gray-200 text-3xl">↓</p>
        </div> }

        {product &&
        <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-blue-500 tracking-widest">PRODUCT</p>
            <p className='text-3xl font-bold min-h-10'>{product.name}</p>
            <p className="text-gray-200 text-3xl">↓</p>

            <p className="text-xs text-blue-500 tracking-widest">PRICE</p>
            <p className='text-3xl font-bold min-h-10'>IDR {product.price}</p>
        </div> }
          
    </section>

  )
}

export default Result