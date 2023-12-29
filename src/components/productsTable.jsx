export const ProductsTable = (props)=>{
    const category = props.category;
    const products = props.products

    console.log(products);
    return(
         <div>
            <h3>{category}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products)=>{
                        return(
                            <tr>
                                <td>{products.name}</td>
                                <td>{products.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
    );
}