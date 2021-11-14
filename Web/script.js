const formElemnt = document.getElementById("SaveProduct");

formElemnt.addEventListener("submit", (event) => {
	event.preventDefault();
	let productDescription = document.getElementById("productDescription").value
	let productPrice = document.getElementById("productPrice").value
	let productCategory = document.getElementById("productCategory").value
	let productVendedor = document.getElementById("productVendedor").value
	let productName = document.getElementById("productName").value
	let productDispo = document.getElementById("productDispo").value
	let productos = { Nombre: productName, Descripcion: productDescription, Precio: productPrice, Categoria: productCategory, Vendedor: productVendedor, Cantidad_Disponible: productDispo};
	let producto = JSON.stringify(productos);
	
	console.log(producto);
	//mandar los datos al bakend
	fetch('http://localhost:3000/agregarProducto',{
		method: 'Post', 
		body: producto
	})
	.then(console.log);
})

	