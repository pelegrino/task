package br.com.pelegrino.task.infrastructure.web.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.pelegrino.task.domain.user.AppUser;
import br.com.pelegrino.task.domain.user.AppUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private AppUserRepository appUserRepository;
	
	public UserDetailsServiceImpl(AppUserRepository appUserRepository) {
		this.appUserRepository = appUserRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		AppUser appUser = appUserRepository.findByUsername(username);
		
		if(appUser == null) {
			throw new UsernameNotFoundException(username);
		}
		
		return new UserDetailsImpl(appUser);
	}

}
