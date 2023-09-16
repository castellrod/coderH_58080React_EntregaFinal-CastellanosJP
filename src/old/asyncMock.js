const products =[
    {
        id: '1',
        nombre: 'DJI Mavic Pro 3',
        precio: 16000,
        categoria: 'Dron',
        marca:'DJI',
        img: '../src/assets/icons/djimavic3.jpg',
        stock: 5,
        descripcion:'Gama alta de Drones DJI, la mejor cámara en drones, los mejor sensores.'
    },
    {
        id: '2',
        nombre: 'DJI Air 2s',
        precio: 12000,
        categoria: 'Dron',
        marca:'DJI',
        img: '../src/assets/icons/djiair2s_retina_small.png',
        stock: 7,
        descripcion:'Gama media de Drones DJI, camara superior, sensores delanteros y traseros.'
    },
    {
        id: '3',
        nombre: 'DJI Air mini',
        precio: 7500,
        categoria: 'Dron',
        marca:'DJI',
        img: '../src/assets/icons/mavic-mini-2-drone.jpg',
        stock: 4,
        descripcion:'Gama baja de Drones DJI, muy buena cámara y fácil de usar.'
    },
    {
        id: '4',
        nombre: 'Parrot Anafi',
        precio: 11500,
        categoria: 'Dron',
        marca:'Parrot',
        img: '../src/assets/icons/parrot-anafi-work-uav_1900.jpeg',
        stock: 6,
        descripcion:'Gama media de Parrot, muy buena cámara y fácil de usar.'
    },
    {
        id: '5',
        nombre: 'DEERC D20',
        precio: 1200,
        categoria: 'Dron',
        marca:'DEERC',
        img: '../src/assets/icons/DEERCD20_1366_2000.jpg',
        stock: 4,
        descripcion:'Gama baja de Drones DEERC, econonico y divertido.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByMarca = (marcaId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.marca === marcaId))
        }, 500)
    })
}