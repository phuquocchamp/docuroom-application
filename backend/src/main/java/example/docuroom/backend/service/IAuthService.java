package example.docuroom.backend.service;

import example.docuroom.backend.dto.request.RegisterRequest;
import example.docuroom.backend.dto.response.RegisterResponse;

public interface IAuthService {
    RegisterResponse registerUser(RegisterRequest registerRequest);
}
