//Formatea el precio con coma y luego remplaza la , por el punto .
export function priceFormat(price) {
   return new Intl.NumberFormat('en-ES').format(price).replace(/,/g, '.');
}

