import { useLoaderData } from "react-router-dom"
import type { brand, category, product, resultType, subCategory } from "../types/types"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"


function Result({categoryId, subCategoryId, brandId, productId} : resultType) {
  const allproducts = useLoaderData()
  const [showResult, setShowResult] = useState<product[]>(allproducts.products)

  useEffect(()=>{
    let result: product[] = allproducts.products

    if(categoryId){
      const category : category[] = allproducts.categories.filter((c : category)=> c.id == categoryId)
      const subCategory : subCategory[] = allproducts.subCategories.filter((sc : subCategory)=> category.some((c:category)=>c.id == sc.categoryId)) 
      const brand : brand[] = allproducts.brands.filter((b:brand)=>subCategory.some((sb:subCategory)=>sb.id == b.subCategoryId))
      const product : product[] = allproducts.products.filter((p : product)=> brand.some((b:brand)=>b.id == p.brandId))
      result = product
    }

    if(subCategoryId){
      const subCategory : subCategory[] = allproducts.subCategories.filter((sc : subCategory)=> sc.id == subCategoryId) 
      const brand : brand[] = allproducts.brands.filter((b:brand)=>subCategory.some((sb:subCategory)=>sb.id == b.subCategoryId))
      const product : product[] = allproducts.products.filter((p : product)=> brand.some((b:brand)=>b.id == p.brandId))
      result = product  
    }

    if(brandId){
      const brand : brand[] = allproducts.brands.filter((b:brand)=>b.id == brandId)
      const product : product[] = allproducts.products.filter((p : product)=> brand.some((b:brand)=>b.id == p.brandId))
      result = product 
    }

    if(productId){
      const product : product[] = allproducts.products.filter((p : product)=> p.id == productId)
      result = product 
    }
    setShowResult(result)
  },[categoryId, subCategoryId, brandId, productId])
  

  return (
    <section className="bg-gray-100 h-[90%] p-5 w-full items-center justify-center">
        <div className="flex flex-wrap gap-2">
           
        {showResult.length > 0 && showResult.map((x: any) => (
            <ProductCard key={x.id} name={x.name} price={x.price} />
            ))}

           
        </div>
    </section>

  )
}

export default Result