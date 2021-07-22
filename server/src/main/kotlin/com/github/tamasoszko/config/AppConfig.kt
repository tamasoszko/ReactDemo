package com.github.tamasoszko.config

import com.github.tamasoszko.services.user.User
import io.micronaut.context.annotation.ConfigurationProperties

@ConfigurationProperties("app")
class AppConfig {
    var dummyUsers: List<User>? = null
}