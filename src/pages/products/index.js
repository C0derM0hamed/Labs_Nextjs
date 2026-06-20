import ProductsComponent from '@/components/ProductsComponent';
import React from 'react';

const index = ({products}) => {
    return (
        <div>
            <ProductsComponent products={products}/>
        </div>
    );
};

export default index;
export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=0")
    const data = await res.json()
    return{
        props:{
            products:data.products
        }
    }
}