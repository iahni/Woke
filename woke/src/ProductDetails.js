import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';


 const ProductDetails = () =>
 { const { id } = useParams(); 
 const [product,
     setProduct] = useState(null);
  useEffect(() =>
   { fetch(`https://fakestoreapi.com/products/${id}`)
   .then((response) => response.json())
    .then((data) => setProduct(data))
     .catch((error) =>
      { console.error('Error fetching product details:', error);
     });
     },
      [id]);
       if (!product)
        { 
            return <div>
                Loading
            </div>;
        }

        return ( 
            <div>
                <h1>ProductDetails</h1>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        );
 };
 export default ProductDetails;