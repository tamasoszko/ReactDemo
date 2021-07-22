package com.github.tamasoszko.services.user

import com.github.tamasoszko.dataprovider.UserProvider
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.security.annotation.Secured
import io.micronaut.security.rules.SecurityRule
import java.security.Principal
import javax.inject.Inject

@Secured(SecurityRule.IS_AUTHENTICATED)
@Controller("/users")
class UserController @Inject constructor(private val userProvider: UserProvider) {

    @Get("/me")
    fun me(principal: Principal): User? =
        userProvider.getByUsername(principal.name)?.toResponse()

    @Secured(User.ROLE_ADMIN)
    @Get("/all")
    fun all(): List<User> =
        userProvider.getAll().map { it.toResponse() }


    @Secured(SecurityRule.IS_ANONYMOUS)
    @Get("/anonymous")
    fun anonymous() = User.anonymous
}

