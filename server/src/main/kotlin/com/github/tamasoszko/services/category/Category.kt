package com.github.tamasoszko.services.category

import io.micronaut.core.annotation.Introspected

@Introspected
data class Category (
    val id: String,
    val title: String,
    val description: String,
    val numberOfProducts: Int,
    val totalQty: Int,
    val minPrice: Double,
    val maxPrice: Double,
    val currency: String,
)