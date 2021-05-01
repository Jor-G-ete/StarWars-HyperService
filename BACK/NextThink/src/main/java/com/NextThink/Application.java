package com.NextThink;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.info.*;

@OpenAPIDefinition(
    info = @Info(
            title = "NextThink",
            version = "1.0",
            description = "Microservice for apply to full-satck developper in NextThink",
            contact = @Contact(url = "", name = "Jorge", email = "jlomar2005@hotmail.com")
    )
)
public class Application {

    public static void main(String[] args) {
        Micronaut.run(Application.class, args);
    }
}
