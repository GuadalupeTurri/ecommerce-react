const products = [
    {
        id: "Gua1231",
        name: "Gorra violeta",
        description: "Materiales: 100% poliéster. Somos una marca comprometida con el medio ambiente con muchos de nuestros productos hechos con material sustentables.",
        price: 8500,
        stock: 5,
        category: "lisas",
        image: "https://static.wixstatic.com/media/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_cc15a32b3f864d90a28c2147ea6ce220~mv2_d_2000_1500_s_2.jpg" // /image/foto.jpg
    },

    {
        id: "Guaf1231",
        name: "Gorra gris",
        description: "Materiales: 100% poliéster. Somos una marca comprometida con el medio ambiente con muchos de nuestros productos hechos con material sustentables.",
        price: 7000,
        stock: 3,
        category: "lisas",
        image: "https://static.wixstatic.com/media/baac51_765ee8d8af0242ef9a28d7f15b982643~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_765ee8d8af0242ef9a28d7f15b982643~mv2_d_2000_1500_s_2.jpg" // /image/foto.jpg
    },

    {
        id: "Guaf7231",
        name: "Gorra verde",
        description: "Materiales: 100% poliéster. Somos una marca comprometida con el medio ambiente con muchos de nuestros productos hechos con material sustentables.",
        price: 7500,
        stock: 3,
        category: "lisas",
        image: "https://static.wixstatic.com/media/baac51_08eb214d899d45e6a204850dbe5d0e6b~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_08eb214d899d45e6a204850dbe5d0e6b~mv2_d_2000_1500_s_2.jpg" // /image/foto.jpg
    },
    {
        id: "Guah1231",
        name: "Gorra full",
        description: "Materiales: 100% poliéster",
        price: 10000,
        stock: 5,
        category: "estampadas",
        image: "https://static.wixstatic.com/media/baac51_34821e1460024305a72be06274bd65d6~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_34821e1460024305a72be06274bd65d6~mv2_d_2000_1500_s_2.jpg" 
    },
    {
        id: "Guah12j31",
        name: "Gorra azul",
        description: "Materiales: 100% poliéster. Somos una marca comprometida con el medio ambiente con muchos de nuestros productos hechos con material sustentables. ",
        price: 9500,
        stock: 10,
        category: "estampadas",
        image: "https://static.wixstatic.com/media/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_e0ebe39677864d7f934e2544bbf9ae19~mv2_d_2000_1500_s_2.jpg" 
    },

     {
        id: "Guah12q31",
        name: "Gorra gris",
        description: "Materiales: 100% poliéster",
        price: 10000,
        stock: 7,
        category: "estampadas",
        image: "https://static.wixstatic.com/media/baac51_444fa6e3add545a6b3757f46a11ee9de~mv2_d_2000_1500_s_2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_444fa6e3add545a6b3757f46a11ee9de~mv2_d_2000_1500_s_2.jpg" 
    },

]
//obtener productos
const getProducts=() => {
    return new Promise( (resolve, reject)=> {
        //simulamos un restraso de red
        setTimeout(()=>{
            resolve(products)
        },2000);
} );
};

export default getProducts