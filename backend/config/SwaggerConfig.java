package ch.bbw.m321.backend.config;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi productApi() {
        return GroupedOpenApi.builder()
                .group("product-api")
                .packagesToScan("ch.bbw.m321.backend.produktkatalog.controller")
                .build();
    }
}
