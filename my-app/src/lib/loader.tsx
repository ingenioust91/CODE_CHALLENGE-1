export async function productLoader(){
    try{
        const response = await fetch('/data/data.json')

        if(!response.ok){
            throw new Error("Gagal fetch data");
        }
        return response.json()
    }catch(e){
        return [];
    }
}