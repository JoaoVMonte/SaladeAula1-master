import React, { useState, useEffect } from 'react';

function Menu({ restaurantId }) {
  const [menu, setMenu] = useState({ pratos: [], bebidas: [] });

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/gustavoclay/food/pratos?restaurante_id=${restaurantId}`)
      .then(response => response.json())
      .then(data => {
        const pratos = data;
        fetch(`https://my-json-server.typicode.com/gustavoclay/food/bebidas?restaurante_id=${restaurantId}`)
          .then(response => response.json())
          .then(data => {
            const bebidas = data;
            setMenu({ pratos, bebidas });
          });
      });
  }, [restaurantId]);

  return (
    <div>
      <h2>Cardápio</h2>
      <div>
        <h3>Pratos</h3>
        <ul>
          {menu.pratos.map(prato => (
            <li key={prato.id}>{prato.nome}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Bebidas</h3>
        <ul>
          {menu.bebidas.map(bebida => (
            <li key={bebida.id}>{bebida.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;