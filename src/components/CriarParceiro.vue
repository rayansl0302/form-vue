<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6 text-center">Criar Parceiro</h1>
        <form @submit.prevent="submitForm"
            class="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="md:pr-2">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-semibold mb-2">Nome</label>
                            <input type="text" id="name" v-model="formData.name" required
                                class="form-control border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div class="mb-4">
                            <label for="description" class="block text-gray-700 font-semibold mb-2">Descrição</label>
                            <textarea id="description" v-model="formData.description" required
                                class="form-control border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="4"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="repositoryGit" class="block text-gray-700 font-semibold mb-2">Git
                                Repository</label>
                            <input type="text" id="repositoryGit" v-model="formData.repositoryGit" required
                                class="form-control border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div class="mb-4">
                            <label for="urlDoc" class="block text-gray-700 font-semibold mb-2">URL do Documento</label>
                            <input type="url" id="urlDoc" v-model="formData.urlDoc" required
                                class="form-control border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="md:pl-2">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-semibold mb-2">Clientes</label>
                            <div v-for="(client, index) in formData.clients" :key="index" class="flex mb-2">
                                <input type="text" v-model="formData.clients[index]"
                                    class="form-control border border-gray-300 rounded-lg p-2 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Cliente" />
                                <div class="d-flex justify-content-between mt-2">
                                    <button type="button" @click="addClient" class="btn btn-primary">
                                        Adicionar Cliente
                                    </button>
                                    <button type="button" @click="removeClient(index)" class="btn btn-danger">
                                        Remover
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-semibold mb-2">Projetos</label>
                            <div v-for="(project, index) in formData.projects" :key="index" class="flex mb-2">
                                <input type="text" v-model="formData.projects[index]"
                                    class="form-control border border-gray-300 rounded-lg p-2 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Projeto" />
                                 <div class="d-flex justify-content-between mt-2">
                                    <button type="button" @click="addProject" class="btn btn-primary">
                                        Adicionar Projeto
                                    </button>
                                <button type="button" @click="removeProject(index)" class="btn btn-danger">
                                    Remover
                                </button>
                                 </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>



            <div class="col-span-2">
                <button type="submit" class="btn btn-success w-full">
                    Criar Parceiro
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const formData = ref({
            name: '',
            description: '',
            repositoryGit: '',
            urlDoc: '',
            clients: [''], // Campo inicial para clientes
            projects: [''], // Campo inicial para projetos
        });

        const addClient = () => {
            formData.value.clients.push(''); // Adiciona um novo campo de cliente
        };

        const removeClient = (index) => {
            formData.value.clients.splice(index, 1); // Remove o campo de cliente no índice especificado
        };

        const addProject = () => {
            formData.value.projects.push(''); // Adiciona um novo campo de projeto
        };

        const removeProject = (index) => {
            formData.value.projects.splice(index, 1); // Remove o campo de projeto no índice especificado
        };

        const submitForm = () => {
            console.log('Dados do parceiro:', formData.value);
            // Aqui você pode fazer a chamada para a API para criar o parceiro
        };

        return {
            formData,
            addClient,
            removeClient,
            addProject,
            removeProject,
            submitForm,
        };
    },
};
</script>

<style scoped>
/* Adicione estilos adicionais aqui se necessário */
</style>