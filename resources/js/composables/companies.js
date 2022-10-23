import axios from "axios";
import { ref } from "vue";
import {useRouter} from "vue-router";

export default function useCompanies(){

    const errors = ref('');
    const companies = ref([]);
    const company = ref('');
    const router = useRouter();

    
    // getCompanies
    const getCompanies = async ()=>{

        await  axios.get('/api/companies')
        .then(response=> companies.value = response.data.data)
        .catch(err=>console.log(err));

    }
    
    // getCompany
    const getCompany = async (id)=>{

        await  axios.get('/api/companies/'+id)
        .then(response=> company.value = response.data.data)
        .catch(err=>console.log(err));

    }
    // storeCompany
    const storeCompany = async (data) =>{
        try {
            errors.value = ''
            await axios.post('/api/companies',data);
            // redirect to home page 
            await router.push({ name :'companies.index'});

        } catch (e) {
           if(e.response.status===422){
                for( const key in e.response.data.errors){
                    errors.value=e.response.data.errors;
                }
           }
        }
    }
    // updateCompany
    const updateCompany = async(id)=> {
       
        try {
            // clear errors 
            errors.value='';
            await axios.put('/api/companies/'+id,company.value)
            router.push({name:'companies.index'})
          

        } catch (e) {
            if(e.response.status === 422){
              for(const key in e.response.data.errors){
                errors.value = e.response.data.errors;
              }
            }
        }

        
    }
    // destroyCompany
    const destroyCompany = async(id)=>{

        await axios.delete(`/api/companies/${id}`);
      
    }
    // returning values 
    return {
        companies,
        company,
        errors,
        getCompanies,
        getCompany,
        updateCompany,
        destroyCompany,
        storeCompany
    }
}