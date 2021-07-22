package com.github.tamasoszko
import com.github.tamasoszko.config.AppConfig
import io.micronaut.http.HttpRequest
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Test
import javax.inject.Inject

@MicronautTest
class HelloControllerTest {

    @Inject
    @field:Client("/")
    lateinit var client : HttpClient

    @Inject
    lateinit var users: AppConfig

    @Test
    fun testHello() {
        System.setProperty("TEST_USER_PASSWD", "a")
        val request: HttpRequest<Any> = HttpRequest.GET("/users/anonymous")
        val body = client.toBlocking().retrieve(request)
        assertNotNull(body)
    }

    @Test
    fun testConfig() {
        assertNotNull(users)
    }
}
