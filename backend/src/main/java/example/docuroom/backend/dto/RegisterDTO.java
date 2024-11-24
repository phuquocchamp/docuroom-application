package example.docuroom.backend.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterDTO {
    @NotEmpty(message = "USERNAME MUST NOT BE NULL OR EMPTY")
    private String username;

    @NotEmpty(message = "PASSWORD MUST NOT BE NULL OR EMPTY")
    private String password;

    @NotEmpty(message= "SCHOOL MUST NOT BE NULL OR EMPTY")
    private String school;
}
