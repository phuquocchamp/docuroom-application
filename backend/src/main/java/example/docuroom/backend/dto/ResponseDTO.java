package example.docuroom.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ResponseDTO {
    private String statusCode;
    private String statusMessage;
}
