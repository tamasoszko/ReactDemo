package com.github.tamasoszko.category

import com.github.tamasoszko.dataprovider.CategoryProvider
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import javax.inject.Inject


@Controller("/categories/")
class CategoryController @Inject constructor(private val categoryProvider: CategoryProvider) {

    @Get("/")
    fun product() = categoryProvider.getCategories()

    @Get("/{id}")
    fun product(id: String) = categoryProvider.getCategory(id)
}


