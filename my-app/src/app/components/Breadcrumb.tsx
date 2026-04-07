import { useLoaderData, useSearchParams } from "react-router-dom";

type category = {
  id : string,
  name : string
}

function Breadcrumb() {
  const [searchParams] = useSearchParams();
  const allproducts = useLoaderData()
  const categoryId = searchParams.get('category')
  const category : category = allproducts.categories.filter((c : any)=> c.id == categoryId)
    console.log('CAT',category)
  return (
    <>
    <section className="flex flex-col w-[70%] h-screen">
        {/* ----BREADCRUMB---- */}
        <section className="h-[10%] flex text-sm text-blue-500 gap-5 border-b-2 border-gray-200 p-5">
            <p>Filter Products</p>
        
            <p>cat {category.name}</p>

        </section>
    </section>
    </>
  )
}

export default Breadcrumb
