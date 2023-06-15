import fs from 'fs';

const url = 'http://localhost:3000/categories';

async function resposta(response) {
    const { status } = response;
    if (status === 200) {
        const json = await response.json();
        console.log(`response status: ${status}`);
        console.log(json);
    } else if (status === 201) {
        const json = await response.json();
        console.log(`Categoria criada!!\nresponse status: ${status}`);
        console.log(json);
    } else {
        console.log(`response status: Erro ${status}!!`);
    }
}
class CategoryService {
    static async readJSON(path) {
        try {
            const encoding = 'utf-8';
            const texto = await fs.promises.readFile(path, encoding);
            const json = JSON.parse(texto);
            return json;
        } catch (error) {
            console.log('Erro na leitura');
            return undefined;
        }
    }

    static async findCategories() {
        const response = await fetch(url);
        await resposta(response);
    }

    static async findCategoryById(id) {
        const response = await fetch(`${url}/${id}`);
        await resposta(response);
    }

    static async createCategory(category) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });

        await resposta(response);
    }

    static async updateCategory(id, atualiza) {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(atualiza),
        });

        await resposta(response);
    }

    static async deleteCategory(id) {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        await resposta(response);
    }
}

export default CategoryService;
