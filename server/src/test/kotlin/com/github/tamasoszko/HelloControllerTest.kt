package com.github.tamasoszko
import com.github.tamasoszko.config.AppConfig
import io.micronaut.core.type.Argument
import io.micronaut.http.HttpRequest
import io.micronaut.http.HttpStatus
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.http.client.exceptions.HttpClientResponseException
import io.micronaut.security.authentication.UserDetails
import io.micronaut.security.authentication.UsernamePasswordCredentials
import io.micronaut.security.token.generator.RefreshTokenGenerator
import io.micronaut.security.token.jwt.endpoints.TokenRefreshRequest
import io.micronaut.security.token.jwt.render.BearerAccessRefreshToken
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Test
import java.util.*
import javax.inject.Inject

@MicronautTest
class HelloControllerTest {

    @Inject
    @field:Client("/")
    lateinit var client : HttpClient

    @Inject
    lateinit var appConfig: AppConfig

    @Test
    fun testHello() {
        val request: HttpRequest<Any> = HttpRequest.GET("/users/anonymous")
        val body = client.toBlocking().retrieve(request)
        assertNotNull(body)
    }

    @Test
    fun testConfig() {
        assertNotNull(appConfig)
    }

}
