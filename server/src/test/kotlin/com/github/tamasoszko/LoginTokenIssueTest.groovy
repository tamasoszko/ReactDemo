package com.github.tamasoszko

import com.nimbusds.jwt.JWTParser
import com.nimbusds.jwt.SignedJWT
import io.micronaut.http.HttpRequest
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.security.authentication.UsernamePasswordCredentials
import io.micronaut.security.token.jwt.render.BearerAccessRefreshToken
import io.micronaut.test.extensions.spock.annotation.MicronautTest
import spock.lang.Specification
import javax.inject.Inject

@MicronautTest
class LoginTokenIssueTest extends Specification {
    @Inject
    @Client("/")
    HttpClient client

    void "upon successful authentication, the user gets an access token and a refresh token"() {
        when: 'Login endpoint is called with valid credentials'
        UsernamePasswordCredentials creds = new UsernamePasswordCredentials("sherlock", "password")
        HttpRequest request = HttpRequest.POST('/login', creds)
        BearerAccessRefreshToken rsp = client.toBlocking().retrieve(request, BearerAccessRefreshToken)

        then:
        rsp.username == 'sherlock'
        rsp.accessToken
        rsp.refreshToken

        and: 'access token is a JWT'
        JWTParser.parse(rsp.accessToken) instanceof SignedJWT
    }
}
