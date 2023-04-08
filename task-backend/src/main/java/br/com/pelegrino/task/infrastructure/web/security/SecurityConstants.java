package br.com.pelegrino.task.infrastructure.web.security;

public class SecurityConstants {
	
	public static final String SECRET_KEY = "tHeSeCrEtKeY!";
	public static final long EXPIRATION_TIME = 86400000; //1 dia em milisegundos
	public static final String AUTHORIZATION_HEADER = "Authorization";
	public static final String TOKEN_PREFIX = "Bearer ";

}
