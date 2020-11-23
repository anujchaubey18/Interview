const db = require("../dbConnection/userConnection")
const productmodel = require("../model/productModel");
module.exports = {
    addProduct: async (req, res) => {
        try {
            let data = req.body;
            var chars = '0123456789';
            var token = '';
            for (var i = 0; i < 3; i++) {
                token += chars[Math.floor(Math.random() * chars.length)];
            }
            let pid = 'PR' + token;
            Object.assign(data, { 'product_id': pid })
            let resultinsert = await productmodel.addproductData(data);
            if (resultinsert.affectedRows == 1) {
                return res.send({ responseCode: "200", responseMessage: "Product Added Successfully" });
            } else {
                return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }
    },
    editProductDetails: async (req, res) => {
        try {
            let editdata = req.body;
            let result = await productmodel.editProductData(editdata);
            if (result.affectedRows == 1) {
                return res.send({ responseCode: "200", responseMessage: "Product Updated Successfully" });
            } else {
                return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });

        }
    },
    deleteProduct: async (req, res) => {
        try {
            var id = req.body.id;
            let result = await productmodel.deleteProductByid(id);
            if (result.affectedRows == 1) {
                return res.send({ responseCode: "200", responseMessage: "Product Deleted Successfully" });
            } else {
                return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }

    },
    getAllProduct: async (req, res) => {
        try {
            let productdata = await productmodel.getalldata();
            if (productdata) {
                return res.send({ responseCode: "200", response: productdata });
            } else {
                return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }

    }
}