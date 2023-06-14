class CategoryService{

    static async findCategories(){
        const response = await fetch("http://localhost:3000/categories");
        const status = response.status;
        if (status === 200){
         const json = await response.json();
        console.log(`response status: ${status}`)
         console.log(json);   
        } else {
            console.log(`response status: Erro ${status}!!`);
        } 
    }

    static async findCategoryById(id){
        const response = await fetch(`http://localhost:3000/categories/${id}`);
        const status = response.status;
        if (status === 200){
         const json = await response.json();
        console.log(`response status: ${status}`)
         console.log(json);   
        } else {
            console.log(`response status: Erro ${status}!!`);
        } 
    }

}

export default CategoryService;