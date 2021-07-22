package com.github.tamasoszko

import com.github.tamasoszko.dataprovider.CategoryProvider
import com.github.tamasoszko.dataprovider.ProductProvider
import com.github.tamasoszko.dataprovider.UserProvider
import com.github.tamasoszko.config.AppConfig
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import javax.inject.Inject

@MicronautTest
class UserProviderTest {
    @Inject
    @field:Client("/")
    lateinit var client : HttpClient

    @Inject
    lateinit var productProvider: ProductProvider

    @Inject
    lateinit var categoryProvider: CategoryProvider

    @Inject
    lateinit var userProvider: UserProvider

    @Inject
    lateinit var appConfig: AppConfig

    @Test
    fun checkInjectionWorking() {
        assertNotNull(productProvider)
        assertNotNull(categoryProvider)
        assertNotNull(userProvider)
    }

    @Test
    fun testGetUserByUsername() {
        assertNull(userProvider.getByUsername("nosuch"))
        val user = userProvider.getByUsername("admin1@test")
        val password = appConfig.dummyUsers?.first()?.password
        assertNotNull(user)
        assertEquals(user!!.username, "admin1@test")
        assertEquals(password, user.password)
    }
}