import ProductDetails from '@/components/ProductDetails';
import React from 'react';

const ID = ({product}) => {
    return (
        <div>
            <ProductDetails {...product}/>
        </div>
    );
};

export default ID;

//ProductPage

export async function getStaticPaths() {
    return{
        paths:[],
        fallback:"blocking"
    }
}
export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const data = await res.json()
    return{
        props:{
            product:data
        }
    }
}