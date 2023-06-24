import React from 'react';
import './CartItem.css';
import Ciudades from '../../data/Ciudades';
import Carousel from '../Carrusel/Carrusel';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import CheckoutForm from '../../CheckoutForm/CheckoutForm';
import { createOrderWithStockUpdate } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';



const CartItem = ({ id, nombre, pais, imagen, precioPasaje, quantity, moneda, idioma }) => {

  const precio = parseFloat(precioPasaje);
  const cantidad = parseInt(quantity);
  const subtotal = isNaN(precio) || isNaN(cantidad) ? 0 : precio * cantidad;

  const formattedPrecioPasaje = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(precio);



return (
    <div className="CartItem">
<h4>Destino: {nombre}</h4>
      <img src={imagen} className="Miniatura" alt="Miniatura" />
<p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>País:</span> {pais}</p>
<br />
<p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Moneda:</span> {moneda}</p>
<br />
<br />
<p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Precio:</span> {formattedPrecioPasaje}</p>
<br />
<p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Cantidad:</span> {quantity}</p>
<p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Subtotal:</span> {subtotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</p>
    </div>
);
}
export default CartItem;