
type ProductCardType = {
    name : string,
    price : number
}

function ProductCard({name, price}: ProductCardType) {
  return (
    <div className="border border-gray-500 bg-white rounded-lg w-[30%] p-3">
        <p>{name}</p>
        <p className="font-bold text-xl">{price.toLocaleString('id-ID',  { style: 'currency', currency: 'IDR' })}</p>
    </div>
  )
}

export default ProductCard