package example.docuroom.backend.controller;


import example.docuroom.backend.dto.LoginDTO;
import example.docuroom.backend.dto.RegisterDTO;
import example.docuroom.backend.dto.ResponseDTO;
import example.docuroom.backend.entity.Role;
import example.docuroom.backend.entity.UserAuth;
import example.docuroom.backend.exception.UsernameAlreadyExitsException;
import example.docuroom.backend.repository.RoleRepository;
import example.docuroom.backend.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/v1/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid RegisterDTO registerDTO){
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            throw new UsernameAlreadyExitsException("USERNAME ALREADY EXITS");
        }
        UserAuth userAuth = new UserAuth();
        userAuth.setUsername(registerDTO.getUsername());
        userAuth.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        userAuth.setSchool(registerDTO.getSchool());

        Role role = roleRepository.findByName("USER").get();
        userAuth.setRoles(Collections.singletonList(role));

        userRepository.save(userAuth);
        return new ResponseEntity<>("USER REGISTERED SUCCESS", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return new ResponseEntity<>("USER LOGIN SUCCESSFUL", HttpStatus.OK);
    }
}
