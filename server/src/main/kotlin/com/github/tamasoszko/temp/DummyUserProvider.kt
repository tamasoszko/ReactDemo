package com.github.tamasoszko.temp

import com.github.tamasoszko.dataprovider.UserProvider
import com.github.tamasoszko.config.AppConfig
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class DummyUserProvider @Inject constructor(private val appConfig: AppConfig) : UserProvider {
    override fun getByUsername(username: String) =
        appConfig.dummyUsers?.firstOrNull { it.username == username }

    override fun getById(id: String) =
        appConfig.dummyUsers?.firstOrNull { it.id == id }

    override fun getAll() =
        appConfig.dummyUsers ?: emptyList()

}