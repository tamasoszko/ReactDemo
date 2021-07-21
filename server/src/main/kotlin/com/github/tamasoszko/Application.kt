package com.github.tamasoszko

import io.micronaut.runtime.Micronaut.*
fun main(args: Array<String>) {
	build()
	    .args(*args)
		.packages("com.github.tamasoszko")
		.start()
}

