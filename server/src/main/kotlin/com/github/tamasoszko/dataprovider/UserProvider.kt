package com.github.tamasoszko.dataprovider

import com.github.tamasoszko.services.user.User

interface UserProvider {
    fun getByUsername(username: String): User?
    fun getById(id: String): User?
    fun getAll(): List<User>
}