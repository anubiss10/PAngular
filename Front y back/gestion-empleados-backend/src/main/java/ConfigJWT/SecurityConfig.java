package ConfigJWT;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors().and()  // Habilitar CORS
            .authorizeRequests()
                .antMatchers("/user", "/hello").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin().disable()
            .httpBasic().disable()
            .csrf().disable();
    }

    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*");  // Permitir cualquier origen
        configuration.addAllowedMethod("*");  // Permitir cualquier método (GET, POST, etc.)
        configuration.addAllowedHeader("*");  // Permitir cualquier encabezado
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}