package com.github.tamasoszko.home

import com.github.tamasoszko.dummy.DummyData
import io.micronaut.core.annotation.Introspected
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

@Introspected
data class HomeModel(
        val title: String,
        val subtitle: String,
        val body: String,
)

@Controller("/home")
class HomeController {
    @Get("/")
    fun home(): HomeModel =
            HomeModel(title = "Welcome!",
                    subtitle = DummyData.Text.short,
                    body = DummyData.Text.full,
            )
}

