package br.com.pelegrino.task.infrastructure.web;

import org.springframework.data.rest.core.RepositoryConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.pelegrino.task.domain.task.DuplicatedTaskException;

@RestControllerAdvice
public class WebRequestExceptionHandler {
	
	@ExceptionHandler
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public RestResponseError handleException(RepositoryConstraintViolationException e) {
		return RestResponseError.fromValidationErrors(e.getErrors());
	}
	
	@ExceptionHandler
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public RestResponseError handleException(DuplicatedTaskException e) {
		return RestResponseError.fromMessage(e.getMessage());
	}


}
