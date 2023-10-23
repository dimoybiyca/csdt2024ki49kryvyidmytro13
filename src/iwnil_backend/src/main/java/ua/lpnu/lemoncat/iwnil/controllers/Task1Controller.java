package ua.lpnu.lemoncat.iwnil.controllers;

import jssc.SerialPortException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lpnu.lemoncat.iwnil.services.Task1Service;

@RestController()
@RequestMapping("/message")
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"}, maxAge = 3600)
public class Task1Controller {

    private final Task1Service service;

    @PostMapping()
    public ResponseEntity<MessageResponse> task1(@RequestBody String message) throws SerialPortException, InterruptedException {
        String response = service.sendMessage(message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new MessageResponse(response));
    }

}
