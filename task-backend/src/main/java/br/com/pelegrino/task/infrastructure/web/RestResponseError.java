package br.com.pelegrino.task.infrastructure.web;

import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

public class RestResponseError {
	
	private String error;

	public RestResponseError() {
	}
	
	public String getError() {
		return error;
	}
	
	public static RestResponseError fromValidationErrors(Errors errors) {
		RestResponseError resp = new RestResponseError();
		StringBuilder sb = new StringBuilder();
		
		for(ObjectError error : errors.getAllErrors()) {
			sb.append(error.getDefaultMessage()).append(". ");
			
		}
		
		resp.error = sb.toString();
		return resp;
	}
	
	public static RestResponseError fromMessage(String message) {
		RestResponseError resp = new RestResponseError();
		resp.error = message;
		return resp;
	}

}
