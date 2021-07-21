package com.github.tamasoszko

import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces
import java.awt.PageAttributes

@Controller("/hello")
class HelloController {
    @Get("/")
    @Produces(MediaType.TEXT_PLAIN)
    fun index(): String = "Hello World!"
}