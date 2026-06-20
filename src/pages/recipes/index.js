import RecipesComponent from '@/components/RecipesComponent';
import React from 'react';

const index = ({recipes}) => {
    return (
        <div>
            <RecipesComponent {...recipes}/>
        </div>
    );
};

export default index;
export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    return{
        props:{
            recipes:data
        }
    }
}