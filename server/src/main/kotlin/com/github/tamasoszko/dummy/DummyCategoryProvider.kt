package com.github.tamasoszko.dummy

import com.github.tamasoszko.category.Category
import com.github.tamasoszko.dataprovider.CategoryProvider
import com.github.tamasoszko.dataprovider.ProductProvider
import com.github.tamasoszko.products.Product
import com.github.tamasoszko.products.maxPrice
import com.github.tamasoszko.products.minPrice
import com.github.tamasoszko.products.totalQty
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class DummyCategoryProvider @Inject constructor(private val productProvider: ProductProvider) : CategoryProvider {
    private data class Info(val id: String, val title: String, val products: List<Product>)
    private val data = listOf(
        Info(id = DummyProductProvider.Id.phones, title = "Mobile phones", products = productProvider.getProducts(DummyProductProvider.Id.phones)),
        Info(id = DummyProductProvider.Id.tablets, title = "Tablets", products = productProvider.getProducts(DummyProductProvider.Id.tablets)),
        Info(id = DummyProductProvider.Id.accessories, title = "Mobile accessories", products = productProvider.getProducts(DummyProductProvider.Id.accessories)),
    )

    override fun getCategories() =
        data.map { it.toCategory() }

    override fun getCategory(id: String) =
        data.firstOrNull { it.id == id }?.toCategory()

    private fun Info.toCategory() =
        Category(
            id = id,
            title = title,
            description = DummyData.Text.short,
            numberOfProducts = products.size,
            totalQty = products.totalQty,
            minPrice = products.minPrice,
            maxPrice = products.maxPrice,
            currency = "EUR",
        )
}