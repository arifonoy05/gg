package io.ottapi.ottapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class OttPlatformApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OttPlatformApiApplication.class, args);
	}

	@Configuration
	public class WebConfig {

		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**").allowedOrigins("*")
							.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
							.allowedHeaders("*", "Access-Control-Allow-Headers", "origin", "Content-type", "accept", "x-requested-with", "x-requested-by");
				}
			};
		}

//		@Bean
//		public WebMvcConfigurer corsConfigurer() {
//			return new WebMvcConfigurerAdapter() {
//				@Override
//				public void addCorsMappings(CorsRegistry registry) {
//					registry.addMapping("/**")
//							.allowedOrigins("*")
//							.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
//							.allowedHeaders("*", "Access-Control-Allow-Headers", "origin", "Content-type", "accept", "x-requested-with", "x-requested-by") //What is this for?
//							.allowCredentials(true);
//				}
//			};
//		}
	}

}
