import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesComponent = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      <h1>Recipes</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((r) => {
            return (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td><Image src={r.image} width={80} height={80}/></td>
                <td><Link href={`/recipes/${r.id}`} className="btn btn-dark">See More..</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecipesComponent;
