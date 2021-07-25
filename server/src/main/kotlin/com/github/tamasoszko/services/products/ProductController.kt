package com.github.tamasoszko.services.products

import com.github.tamasoszko.dataprovider.ProductProvider
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.security.annotation.Secured
import io.micronaut.security.rules.SecurityRule
import javax.inject.Inject


//@Secured(SecurityRule.IS_ANONYMOUS)
@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/products/")
class ProductController @Inject constructor(private val productProvider: ProductProvider) {

    @Get("/{category}/{id}")
    fun product(category: String, id: String) =
        productProvider.getProduct(category, id)

    @Get("/{category}")
    fun productList(category: String): List<Product> =
        productProvider.getProducts(category)
}

