package com.github.tamasoszko.products

import com.github.tamasoszko.dataprovider.ProductProvider
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import javax.inject.Inject


@Controller("/products/")
class ProductController @Inject constructor(private val productProvider: ProductProvider) {

    @Get("/{category}/{id}")
    fun product(category: String, id: String) =
        productProvider.getProduct(category, id)

    @Get("/{category}")
    fun productList(category: String): List<Product> =
        productProvider.getProducts(category)


//            @Get("/search?term={searchTerm}")
//            fun searchDadJokes(@QueryValue searchTerm: String): Single<DadJokePagedResults>

//            @Get(value = "/bob/{name}/params")
//            String getMyParam(String name, @QueryValue String surname) {
//        return name + surname;
//    }

}

