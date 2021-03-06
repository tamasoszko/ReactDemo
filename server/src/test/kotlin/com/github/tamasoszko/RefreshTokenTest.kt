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
class RefreshTokenTest {

    @Inject
    @field:Client("/")
    lateinit var client : HttpClient

    @Inject
    lateinit var appConfig: AppConfig

    @Inject
    lateinit var refreshTokenGenerator: RefreshTokenGenerator


    @Test
    fun verifyBothAccessAndRefreshTokenIssued() {
        assertNotNull(appConfig)
        val user = appConfig.dummyUsers?.firstOrNull()
        assertNotNull(user)
        val cred = UsernamePasswordCredentials(user!!.username, user!!.password )
        val request: HttpRequest<Any> = HttpRequest.POST("/login", cred)
        val resp = client.toBlocking().retrieve(request, BearerAccessRefreshToken::class.java)
        assertNotNull(resp.refreshToken)
    }

   //  @Test
    fun accessingSecuredURLWithoutAuthenticatingReturnsUnauthorized() {
        val user = UserDetails("sherlock", emptyList())
        val refreshToken = refreshTokenGenerator!!.createKey(user)
        val refreshTokenOptional = refreshTokenGenerator!!.generate(user, refreshToken)
        Assertions.assertTrue(refreshTokenOptional.isPresent)

        val signedRefreshToken = refreshTokenOptional.get() // <1>
        val bodyArgument = Argument.of(BearerAccessRefreshToken::class.java)
        val errorArgument = Argument.of(MutableMap::class.java)
        val req: HttpRequest<Any> = HttpRequest.POST("/oauth/access_token", TokenRefreshRequest(signedRefreshToken))
        val e = Assertions.assertThrows(HttpClientResponseException::class.java) {
            client!!.toBlocking().exchange(req, bodyArgument, errorArgument)
        }
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, e.status)

        val mapOptional: Optional<Map<*, *>> = e.response.getBody(Map::class.java)
        Assertions.assertTrue(mapOptional.isPresent)

        val m = mapOptional.get()
        Assertions.assertEquals("invalid_grant", m["error"])
        Assertions.assertEquals("refresh token not found", m["error_description"])
    }
}
