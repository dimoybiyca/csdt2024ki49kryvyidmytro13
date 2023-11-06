package ua.lpnu.lemoncat.iwnil.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.services.GameService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"}, maxAge = 3600)
public class GameController {

    private final GameService service;

    @GetMapping("/new-game")
    public ResponseEntity<Game> newGame1() {
        Game response = service.newGame();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/move")
    public ResponseEntity<Game> move(@RequestBody Game game) {
        Game response = service.move(game);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
