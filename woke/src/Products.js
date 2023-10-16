import React, { useEffect, useState } from 'react';
 import { Link, useHistory } from 'react-router-dom';

 const Products = () =>
  { const [products, setProducts]
     = useState([]); const history =
      useHistory(); useEffect(() =>
       { fetch('https://fakestoreapi.com/products') 
       .then((response) => response.json())
        .then((data) => setProducts(data)) 
        .catch((error) => { console.error('Error fetching products:', error);
     }); },
      []); 
      const handleDelete = (id) => 
      { fetch(`https://fakestoreapi.com/products/${id}`,
       { method: 'DELETE', }) .then((response) => response.json()) 
       .then(() => { 
        // Remove the deleted product from the state
         setProducts(products.filter((product) => product.id !== id)); })
          .catch((error) => { console.error('Error deleting product:', error); });
         }; const handlePost = () => { const newProduct = 
            { title: 'New Product', price: 9.99, description: 'This is a new product.', category: 'electronics', image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', };
             fetch('https://fakestoreapi.com/products', { method: 'POST', headers: { 'Content-Type': 'application/json', },
              body: JSON.stringify(newProduct), }) .then((response) => response.json()) .then((data) =>
               { // Add the new product to the state
                 setProducts([...products, data]);
                  // Navigate to the product details page
                   history.push(`/products/${data.id}`); }) .catch((error) =>
                    { console.error('Error creating product:', error); }); };
                     return ( <div>
                        <h1>Products</h1>
                        <button onClick={handlePost}> AddProducts</button>
                        <ul> {products.map((product) =>  ( <li
                            key={product.id}>
                            <Link to={'/products/${product.id}'}></Link>
                            <button onClick={()=>handleDelete(product.id)}>Delete</button>
                        </li>
                        ))}
                        </ul>
                     </div>
                     )
                        };

                        export default Products;