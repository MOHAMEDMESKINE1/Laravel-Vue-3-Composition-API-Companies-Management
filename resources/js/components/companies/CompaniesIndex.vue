<template>
     <!-- create route -->
        <div class="flex mb-4 place-content-end">
            <div>
                <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">
                  <span class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25"> Create company</span>
                </router-link>
            </div>
         </div>
        <!-- create route -->
    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <div class="container flex md:flex-row ">
            <table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-100 p-2 text-black">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-100 p-2 text-black">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Email</span>
                </th>
                <th class="px-6 py-3 bg-gray-100 p-2 text-black">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Address</span>
                </th>
                <th class="px-6 py-3 bg-gray-100 p-2 text-black">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Website</span>
                </th>
                <th class="px-6 py-3 bg-gray-100 p-2 text-black">
                    <span
                        class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">Action</span>
                </th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">

            <template v-for="company in companies" :key="company.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ company.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ company.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ company.adress }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ company.website }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                      
                        <!-- delete button -->
                        <button class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25"
                        @click="deleteCompany(company.id)">Delete</button> 

                        <!-- edit button -->
                       <router-link class="inline-flex items-center px-4 py-2 mt-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25"
                        :to="{name:'companies.edit',params:{id:company.id}}">Edit</router-link>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>

        </div>
    </div> 

</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useCompanies from '../../composables/companies'

export default {

    setup(){


        const {companies,getCompanies,destroyCompany} = useCompanies();
       
        // show companies
        onMounted(getCompanies)

        // delete a company 
        const deleteCompany =async(id)=>{
            if( !confirm('Are you Sure !'))
            {
                return
            }
            await destroyCompany(id)
            getCompanies()
        }

       
     
        return {companies,deleteCompany}
    },


}
</script>
		