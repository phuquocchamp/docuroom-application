package example.docuroom.backend.exception;

import example.docuroom.backend.dto.response.ErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request
    ) {
        Map<String, String> validationErrors = new HashMap<>();
        List<ObjectError> validationErrorList = ex.getBindingResult().getAllErrors();

        validationErrorList.forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String validationMessage = error.getDefaultMessage();

            validationErrors.put(fieldName, validationMessage);
        });

        return new ResponseEntity<>(validationErrors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(
            Exception exception,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(
                webRequest.getDescription(false),
                HttpStatus.INTERNAL_SERVER_ERROR,
                exception.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(
            ResourceNotFoundException resourceNotFoundException,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(
                webRequest.getDescription(false),
                HttpStatus.NOT_FOUND,
                resourceNotFoundException.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TagAlreadyExitsException.class)
    public ResponseEntity<ErrorResponse> handleTagAlreadyExitsException(
           TagAlreadyExitsException tagAlreadyExitsException,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(
                webRequest.getDescription(false),
                HttpStatus.NOT_FOUND,
                tagAlreadyExitsException.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

//    @ExceptionHandler(UsernameNotFoundException.class)
//    public ResponseEntity<ErrorResponseDTO> handleUsernameNotFoundException(
//            UsernameNotFoundException usernameNotFoundException,
//            WebRequest webRequest
//    ){
//        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO(
//                webRequest.getDescription(false),
//                HttpStatus.NOT_FOUND,
//                usernameNotFoundException.getMessage(),
//                LocalDateTime.now()
//        );
//        return new ResponseEntity<>(errorResponseDTO, HttpStatus.BAD_REQUEST);
//    }

    @ExceptionHandler(EmailAlreadyExitsException.class)
    public ResponseEntity<ErrorResponse> handleEmailAlreadyExitsException(
            EmailAlreadyExitsException emailAlreadyExitsException,
            WebRequest webRequest
    ){
        ErrorResponse errorResponse = new ErrorResponse(
                webRequest.getDescription(false),
                HttpStatus.NOT_FOUND,
                emailAlreadyExitsException.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}