package com.github.tamasoszko.dataprovider

import com.github.tamasoszko.services.category.Category

interface CategoryProvider {
    fun getCategories(): List<Category>
    fun getCategory(id: String): Category?
}