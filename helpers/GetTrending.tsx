import { Product } from "@/constants/Types"
const url = 'https://674f24b2bb559617b26e3510.mockapi.io/api/v1/latest-products'

export const GetTrending = async (): Promise<Product[] | null> =>{
    console.log("fetching products..")
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        return data
    } catch(err){
        console.warn(err)
        return null
    }
}
