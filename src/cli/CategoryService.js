const url = "http://localhost:3000/categories";

async function resposta(response){
    const status = response.status;
        if (status === 200){
         const json = await response.json();
         console.log(`response status: ${status}`)
         console.log(json);   
        } else {
            console.log(`response status: Erro ${status}!!`);
        } 
}
class CategoryService {

    static async findCategories(){
        const response = await fetch(url);
        await resposta(response);
    }

    static async findCategoryById(id){
        const response = await fetch(`${url}/${id}`);
        await resposta(response);
    }    
}

export default CategoryService;