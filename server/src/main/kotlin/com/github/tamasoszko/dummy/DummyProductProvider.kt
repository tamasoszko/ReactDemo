package com.github.tamasoszko.dummy

import com.github.tamasoszko.dataprovider.ProductProvider
import com.github.tamasoszko.products.Product
import org.apache.commons.lang3.RandomStringUtils
import javax.inject.Inject
import javax.inject.Singleton
import kotlin.random.Random


@Singleton
class DummyProductProvider : ProductProvider {
    object Id {
        const val phones = "phones"
        const val tablets = "tablets"
        const val accessories = "accessories"
    }

    private val catalog = mapOf<String, List<Product>>(
        Id.phones to listOf(
            makeProduct("iPhone XS", 899.99, listOf(Id.phones, "Apple")),
            makeProduct("iPhone XS Pro", 999.99, listOf(Id.phones, "Apple")),
            makeProduct("iPhone 8", 699.99, listOf(Id.phones, "Apple")),
            makeProduct("iPhone 8 plus", 799.99, listOf(Id.phones, "Apple")),
            makeProduct("iPhone SE", 599.99, listOf(Id.phones, "Apple")),
            makeProduct("Samsung Galaxy S10", 499.99, listOf(Id.phones, "Samsung")),
            makeProduct("Samsung Galaxy S20", 599.99, listOf(Id.phones, "Samsung")),
            makeProduct("Samsung Galaxy S20+", 699.99, listOf(Id.phones, "Samsung")),
            makeProduct("Samsung Galaxy Fold", 1099.99, listOf(Id.phones, "Samsung")),
        ),
        Id.tablets to listOf(
            makeProduct("Apple iPad", 899.99, listOf(Id.tablets, "Apple")),
            makeProduct("Apple iPad Pro", 1299.99, listOf(Id.tablets, "Apple")),
            makeProduct("Apple iPad Air", 699.99, listOf(Id.tablets, "Apple")),
            makeProduct("Samsung Galaxy Tab X", 849.99, listOf(Id.tablets, "Samsung")),
        ),
        Id.accessories to listOf(
            makeProduct("Apple AirPod", 149.99, listOf(Id.accessories, "Apple")),
            makeProduct("Apple Charger", 39.99, listOf(Id.accessories, "Apple")),
            makeProduct("Apple iPhone case", 89.99, listOf(Id.accessories, "Apple")),
            makeProduct("Samsung Charger", 37.99, listOf(Id.accessories, "Samsung")),
            makeProduct("Android universal charger", 29.99, listOf(Id.accessories, "Other")),
        )
    )

    private fun makeProduct(name: String, price: Double, tags: List<String>) =
        Product(
            id = RandomStringUtils.randomAlphanumeric(8),
            name = name,
            description = DummyData.Text.medium,
            imageUrl = null,
            price = price,
            currency = "EUR",
            qty = Random.nextInt(1, 100),
            tags = listOf(name) + tags
        )

    override fun getProducts(categoryName: String): List<Product> =
        catalog[categoryName] ?: emptyList()

    override fun getProduct(categoryName: String, id: String) =
        getProducts(categoryName).firstOrNull { it.id == id }
}