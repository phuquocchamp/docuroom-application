package example.docuroom.backend.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@AllArgsConstructor
public class LoginDTO {

    @NotEmpty(message = "USERNAME MUST NOT BE NULL OR EMPTY")
    private String username;

    @NotEmpty(message = "PASSWORD MUST NOT BE NULL OR EMPTY")
    private String password;
}
