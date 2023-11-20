package ua.lpnu.lemoncat.iwnil.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.model.Save;
import ua.lpnu.lemoncat.iwnil.services.SaveService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"}, maxAge = 3600)
public class SaveController {

    private final SaveService service;

    @PostMapping("/save")
    public ResponseEntity<Save> save(@RequestBody Game game) {
        Save response = service.create(game);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/all-saves")
    public ResponseEntity<List<Save>> allSaves() {
        List<Save> response = service.findAll();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
