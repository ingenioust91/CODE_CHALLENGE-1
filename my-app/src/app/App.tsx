import { useState } from 'react'
import './App.css'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import Breadcrumb from './components/Breadcrumb'

type category = {
  id : string,
  name : string
}

type subCategory = {
  id : string,
  categoryId : string,
  name : string
}

type brand = {
  id : string,
  subCategoryId : string,
  name : string
}

type product  = {
  id : string,
  brandId : string,
  name : string
}

function App() {
  const allproducts = useLoaderData()
  const categories : category[] = allproducts.categories
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || '')
  
  const filteredSub : subCategory[] = allproducts.subCategories.filter((c : subCategory)=> c.categoryId == selectedCategory)
  const [subCategories, setSubCategories] = useState<subCategory[]>(filteredSub)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(searchParams.get('subcategory') || '')
  
  const filteredbrand : brand[] = allproducts.brands.filter((c : brand)=> c.subCategoryId == selectedSubCategory)
  const [brand, setBrand] = useState<brand[]>(filteredbrand)
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.get('brand') || '')

  const filteredProduct : product[] = allproducts.products.filter((c : product)=> c.brandId == selectedBrand)
  const [product, setProduct] = useState<product[]>(filteredProduct)
  const [selectedProduct, setSelectedProduct] = useState<string>(searchParams.get('product') || '')
  

  function changeCategory(e : any){
    setSelectedCategory(e)
    setSelectedSubCategory('')
    setSelectedBrand('')
    setSelectedProduct('')
    setSearchParams({category:e})
    const filteredSub : subCategory[] = allproducts.subCategories.filter((c : subCategory)=> c.categoryId == e)
    setSubCategories(filteredSub)
  }

  function changeSubCategory(e : any){
    setSelectedSubCategory(e)
    setSelectedBrand('')
    setSelectedProduct('')
    setSearchParams({category:selectedCategory, subcategory:e})
    const filteredbrand : brand[] = allproducts.brands.filter((c : brand)=> c.subCategoryId == e)
    setBrand(filteredbrand)
  }

  function changeBrand(e : any){
    setSelectedBrand(e)
    setSelectedProduct('')
    setSearchParams({category:selectedCategory, subcategory:selectedSubCategory, brand:e})
    const filteredProduct : product[] = allproducts.products.filter((c : product)=> c.brandId == e)
    setProduct(filteredProduct)
  }

  function changeProduct(e : any){
    setSelectedProduct(e)
    setSearchParams({category:selectedCategory, subcategory:selectedSubCategory, brand:selectedBrand, product:e})
  }

  function reset(){
    setSelectedCategory('')
    setSelectedSubCategory('')
    setSelectedBrand('')
    setSelectedProduct('')
    setSearchParams()
  }

  return (
  <main className="flex h-screen">
    <section className="bg-gray-100 w-[30%] h-full border-r-2 border-gray-200">
        <div className="flex gap-4 flex-col p-10">
          <div className="flex justify-center gap-2 items-center mb-5">
            <p className="font-bold text-lg">Code Challenge</p>
          </div>
          <p className="font-bold text-sm tracking-widest text-gray-400">PRODUCT FILTER</p>
          <form className="flex flex-col gap-4 w-full">
          {/*-------- CATEGORIES --------*/}
            <div className="w-full"> 
              <p className="text-gray-500 font-bold tracking-wider mb-2">CATEGORIES</p>
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-500 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <select value={selectedCategory}
                      onChange={(e)=>changeCategory(e.target.value)}
                       className="flex-1 text-gray-800 outline-none bg-transparent">
                <option value="" disabled hidden>Select Category</option>
                {categories && categories.map((c)=>
                  <option key={c.id} value={c.id} >{c.name}</option>)}
              </select>

            </div>
            </div>

          {/*-------- SUB CATEGORIES --------*/}
            <div className="w-full"> 
              <p className="text-gray-500 font-bold tracking-wider mb-2">SUB CATEGORIES</p>
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-500 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>

              <select value={selectedSubCategory}
                      onChange={(e)=>changeSubCategory(e.target.value)}
                       className="flex-1 text-gray-800 outline-none bg-transparent">
                <option value="" disabled hidden>Select Subcategory</option>
                {subCategories && subCategories.map((c)=>
                  <option key={c.id} value={c.id} >{c.name}</option>)}
              </select>

            </div>
            </div>    

          {/*-------- BRANDS --------*/}
            <div className="w-full"> 
              <p className="text-gray-500 font-bold tracking-wider mb-2">BRANDS</p>
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-500 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
              </svg>

              <select value={selectedBrand}
                      onChange={(e)=>changeBrand(e.target.value)}
                       className="flex-1 text-gray-800 outline-none bg-transparent">
                <option value="" disabled hidden>Select Brands</option>
                {brand && brand.map((c)=>
                  <option key={c.id} value={c.id} >{c.name}</option>)}
              </select>

            </div>
            </div>          
            
          {/*-------- PRODUCT --------*/}
            <div className="w-full"> 
              <p className="text-gray-500 font-bold tracking-wider mb-2">PRODUCTS</p>
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-500 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>


              <select value={selectedProduct}
                      onChange={(e)=>changeProduct(e.target.value)}
                       className="flex-1 text-gray-800 outline-none bg-transparent">
                <option value="" disabled hidden>Select Product</option>
                {product && product.map((c)=>
                  <option key={c.id} value={c.id} >{c.name}</option>)}
              </select>

            </div>
            </div>   

            <hr className="mt-5 border-1 border-gray-200"/>
            <button onClick={()=>reset()} className="mt-5 text-gray-500 font-bold tracking-wider py-3.5 rounded-xl border-1 border-blue-500">RESET</button>
          </form>
        </div>
    </section>

    <Breadcrumb/>
  </main>
  )
}

export default App
