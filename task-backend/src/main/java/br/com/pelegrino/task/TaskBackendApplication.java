package br.com.pelegrino.task;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.pelegrino.task.domain.task.Task;

@SpringBootApplication
public class TaskBackendApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(TaskBackendApplication.class, args);
	}
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		config.exposeIdsFor(Task.class);
	}

}