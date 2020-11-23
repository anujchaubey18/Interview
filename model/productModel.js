const db = require("../dbConnection/userConnection")

module.exports = {
    addproductData: async (data) => {
        let keys = Object.keys(data).join(',');
        let values = Object.values(data).join("','");
        var insertquery = `INSERT INTO tbl_products(` + keys + `) VALUES('` + values + `')`;
        let dataadminbackto = await dbQuery(insertquery);
        return dataadminbackto;
    },
    editProductData: async (editdata) => {
        var updatequery = `UPDATE tbl_products SET product_description='` + editdata.product_description + `' , product_name='` + editdata.product_name + `', product_quantity='` + editdata.product_quantity + `', seller_contactno='` + editdata.seller_contactno + `', seller_emailid='` + editdata.seller_emailid + `',product_id='` + editdata.product_id + `' WHERE ID=` + editdata.ID;
        let result=await dbQuery(updatequery);
        return result;
    },
    deleteProductByid:async(id)=>{
        var deletequery=`DELETE FROM tbl_products WHERE ID=`+id;
        let result=await dbQuery(deletequery);
        return result;
    },
    getalldata:async()=>{
        var query=`SELECT * FROM  tbl_products`;
        let result=await dbQuery(query);
        return result;
    }
}
async function dbQuery(query) {
    return new Promise((resolve, reject) => {
        db.query(query, (err, success) => {
            if (err) reject(err);
            else if (success) resolve(success);
        });
    });
}