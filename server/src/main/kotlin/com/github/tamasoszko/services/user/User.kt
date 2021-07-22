package com.github.tamasoszko.services.user

data class User(
    val id: String,
    val username: String,
    val password: String,
    val roles: List<String>,
) {
    companion object {
        const val ROLE_USER = "ROLE_USER"
        const val ROLE_ADMIN = "ROLE_ADMIN"

        val anonymous: User
            get() = User("0", "anonymous", "", emptyList())
    }
}

fun User.verify(password: String): Boolean {
    return this.password == password
}

fun User.toResponse() =
    copy(
        password = ""
    )
