import RecipeDetails from '@/components/RecipeDetails';
// import { useRouter } from 'next/router';
import React from 'react';

const ID = ({recipe}) => {
    // const router = useRouter()
    // if(router.isFallback)return <h1>Loading....</h1>
    return (
        <div>
            <RecipeDetails {...recipe}/>
        </div>
    );
};

export default ID;
export async function getStaticPaths() {
    return{
        paths:[
            // {params:{id:'1'}},
            // {params:{id:'4'}},
        ],
        fallback:"blocking"
    }
}
export async function  getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/recipes/${params.id}`)
    const data = await res.json()
    return{
        props:{
            recipe:data
        }
    }
    
}