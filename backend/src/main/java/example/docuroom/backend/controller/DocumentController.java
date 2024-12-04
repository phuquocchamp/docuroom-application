package example.docuroom.backend.controller;

import example.docuroom.backend.dto.DocumentDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("v1/api/document")
public class DocumentController {
    @GetMapping()
    public String welcome(){
        return "Welcome to Document API";
    }

    @PostMapping("/upload")
    public ResponseEntity<List<DocumentDto>> uploadDocuments(){
        return null;
    }

}
