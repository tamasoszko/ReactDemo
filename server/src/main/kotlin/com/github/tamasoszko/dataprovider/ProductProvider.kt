package com.github.tamasoszko.dataprovider

import com.github.tamasoszko.products.Product

interface ProductProvider {
    fun getProducts(categoryName: String): List<Product>
    fun getProduct(categoryName: String, id: String): Product?
}