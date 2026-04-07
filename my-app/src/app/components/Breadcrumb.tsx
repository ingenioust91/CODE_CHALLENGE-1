import { useLoaderData } from "react-router-dom";
import type { brand, category, product, resultType, subCategory } from "../types/types";

function Breadcrumb({categoryId, subCategoryId, brandId, productId} : resultType) {
  const allproducts = useLoaderData()
  const category : category = allproducts.categories.find((c : any)=> c.id == categoryId)
  const subCategory : subCategory = allproducts.subCategories.find((c : any)=> c.id == subCategoryId)
  const brand : brand = allproducts.brands.find((c : any)=> c.id == brandId)
  const product : product = allproducts.products.find((c : any)=> c.id == productId)
  return (
    <>
    <section className="h-[10%] flex text-sm text-blue-500 gap-3 border-b-2 border-gray-200 p-5">
      <p className="font-bold">Filter Products</p>
      { category && <p>{category.name} ❯</p>}

      { subCategory && <p>{subCategory.name} ❯</p>}

      { brand && <p>{brand.name} ❯</p>}

      { product && <p>{product.name}</p>}

    </section>
    </>
  )
}

export default Breadcrumb
