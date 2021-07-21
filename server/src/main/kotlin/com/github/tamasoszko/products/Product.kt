package com.github.tamasoszko.products

import io.micronaut.core.annotation.Introspected
import java.util.*

@Introspected
data class Product(
        val id: String,
        val name: String,
        val description: String,
        val imageUrl: String?,
        val price: Double,
        val currency: String,
        val qty: Int,
        val tags: List<String>,
)

val List<Product>.totalQty: Int
    get() {
        return fold(0) { sum, product -> sum + product.qty }
    }

val List<Product>.minPrice: Double
    get() {
        return this.minOf { it.price }
    }

val List<Product>.maxPrice: Double
    get() {
        return this.maxOf { it.price }
    }