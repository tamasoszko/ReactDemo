package com.github.tamasoszko.services.category

import com.github.tamasoszko.dataprovider.CategoryProvider
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.security.annotation.Secured
import io.micronaut.security.rules.SecurityRule
import javax.inject.Inject


//@Secured(SecurityRule.IS_ANONYMOUS)
@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/categories/")
class CategoryController @Inject constructor(private val categoryProvider: CategoryProvider) {

    @Get("/")
    fun product() = categoryProvider.getCategories()

    @Get("/{id}")
    fun product(id: String) = categoryProvider.getCategory(id)
}


