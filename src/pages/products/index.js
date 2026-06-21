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
    const dns = require('dns');
    dns.setDefaultResultOrder('ipv4first');
    let products = [];
    try {
        const res = await fetch("https://dummyjson.com/products?limit=0", { timeout: 5000 });
        if (res.ok) {
            const data = await res.json();
            products = data.products || [];
        }
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
    
    return {
        props: {
            products
        }
    }
}