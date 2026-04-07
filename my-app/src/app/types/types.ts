export type resultType = {
    categoryId : string,
    subCategoryId : string,
    brandId : string,
    productId : string
}

export type category = {
  id : string,
  name : string
}

export type subCategory = {
  id : string,
  categoryId : string,
  name : string
}

export type brand = {
  id : string,
  subCategoryId : string,
  name : string
}

export type product  = {
  id : string,
  brandId : string,
  name : string
  price : number
}